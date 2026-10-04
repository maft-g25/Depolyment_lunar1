import React, { useRef,useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
// import HCaptcha from "@hcaptcha/react-hcaptcha";
import styles from './style.module.css'

/* ---------- tiny toast hook + UI ---------- */
function useToast() {
  const [toasts, setToasts] = useState([]);
  const add = (message, opts = {}) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, message, ...opts }]);
    if (!opts.persistent) {
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), opts.duration ?? 4000);
    }
    return id;
  };
  const remove = (id) => setToasts((t) => t.filter((x) => x.id !== id));
  return { toasts, add, remove };
}
function Toasts({ toasts, remove }) {
  return (
    <div className="fixed right-4 top-4 z-[9999] flex flex-col items-end gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className="w-min min-w-[200px] max-w-xs bg-black/90 text-white px-4 py-2 rounded-lg shadow-lg flex items-center justify-between gap-3"
        >
          <div className="text-sm">{t.message}</div>
          <button
            onClick={() => remove(t.id)}
            className="text-white/90 hover:text-white focus:outline-none"
            aria-label="Dismiss toast"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

/* ---------- validation schema ---------- */
// const schema = z.object({
//   name: z.string().min(2, "Name is required"),
//   email: z.string().email("Invalid email"),
//   message: z.string().min(5, "Message too short"),
//   website: z.string().optional(), // honeypot
//   attachment: z.any().optional()
// });
const schema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  // .trim() converts "   " to "", which fails .min(5)
  // message: z.string().trim().min(5, "Message too short"), 
  // OR
  message: z.string()
  .refine(val => /\S/.test(val), "Message cannot contain only whitespace")
  .min(5, "Message too short"),
  website: z.string().optional(), 
  attachment: z.any().optional()
});
/* ---------- Contact component ---------- */
export default function Contact({ onSuccess } = {}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const fileRef = useRef(null);
  const { toasts, add, remove } = useToast();

  // Load Web3Forms client script once
  // useEffect(() => {
  //   if (!import.meta.env.VITE_HCAPTCHA_SITEKEY) {
  //     console.warn("VITE_HCAPTCHA_SITEKEY not set");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (typeof window === "undefined") return;
  //   if (document.querySelector('script[src="https://web3forms.com/client/script.js"]')) return;
  //   const s = document.createElement("script");
  //   s.src = "https://web3forms.com/client/script.js";
  //   s.async = true;
  //   s.defer = true;
  //   document.body.appendChild(s);
  //   return () => {
  //     // keep script for other pages — do not remove on unmount to avoid reloading issues
  //   };
  // }, []);

  const onSubmit = async (data) => {
    // honeypot check
    if (data.website) {
      add("Spam detected — submission ignored.", { duration: 3500 });
      return;  // ignore bots
    }
  
    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_W3F_KEY);
    formData.append("subject", "New contact from website");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const file = fileRef.current?.files?.[0];
    if (file) formData.append("attachment", file);

    // Debug: log formData entries (optional)
    // for (const [k, v] of formData.entries()) console.log(k, v);

    try {
      const res = await axios.post("https://api.web3forms.com/submit", formData);
      if (res?.data?.success) {
        reset();
        add("Message sent — thank you!", { duration: 5000 });
        console.log('added')
        if (typeof onSuccess === "function") onSuccess();
      } else {
        add(res?.data?.message || "Submission failed", { duration: 5000 });
        console.log('added')
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Web3Forms error:", error.response.status, error.response.data);
        add(error.response.data?.message || `Error ${error.response.status}`, { duration: 6000 });
      } else {
        console.error(error);
        add("Network error. Please try again later.", { duration: 6000 });
        console.log('added')
      }
    }
  };

  return (
    <div className={styles.form_container}>
      <h2 className={styles.form_title}>Welcome</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label className={styles.form_label}>Username:</label>
          <input className={styles.form_input} type="text" {...register("name")} />
          {errors.name && <span className={styles.error_message}>{errors.name.message}</span>}
        </div>

        <div>
          <label className={styles.form_label}>Email:</label>
          <input className={styles.form_input} type="email" {...register("email")} />
          {errors.email && <span className={styles.error_message}>{errors.email.message}</span>}
        </div>

        <div className="flex flex-col gap-y-1.5">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="Leave a message."
            className={styles.form_label}
            {...register("message")}
          />
          {errors.message && <span className={styles.error_message}>{errors.message.message}</span>}
          <p className="block text-sm text-[--color-text-muted]">We usually respond within 1-2 business days.</p>
        </div>

        {/* honeypot */}
        <div style={{ display: "none" }}>
          <label>Website</label>
          <input type="text" {...register("website")} autoComplete="off" />
        </div>

        <div>
          <label>Attachment (optional)</label>
          <input type="file" ref={fileRef} {...register("attachment")} />
        </div>

        {/* <div style={{ marginTop: 12 }}>
          <HCaptcha
            sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
            ref={captchaRef}
            onVerify={handleVerify}
            onExpire={() => setHToken(null)}
            onLoad={() => setCaptchaReady(true)}
          />
        </div> */}
        {/* Web3Forms hCaptcha widget — Web3Forms script will render and attach token */}
        <div className="h-captcha" data-captcha="true" style={{ marginTop: 12 }} />

        <button className={styles.submit_button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send"}
        </button>
      </form>

      <Toasts toasts={toasts} remove={remove} />
    </div>
  );
}
