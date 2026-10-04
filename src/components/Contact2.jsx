import React from 'react';
import { useForm } from 'react-hook-form';
// import './Form.css';
import styles from './style.module.css'
// import styles from './style.module.css'

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        console.log('Form submitted successfully!', data);
    };

    return (
        <div className={styles.form_container}>
            <h2 className={styles.form_title}>Form Validation</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Username Field */}
                <div>
                    <label className="form-label">Username:</label>
                    <input
                        className={styles.form_input}
                        type="text"
                        name="username"
                        {...register('username', {
                            required: 'Username is required',
                            minLength: {
                                value: 4,
                                message: 'Username must be at least 4 characters long'
                            }
                        })}
                    />
                    {errors.username && (
                        <span className={styles.error_message}>
                            {errors.username.message}
                        </span>
                    )}
                </div>

                {/* Email Field */}
                <div>
                    <label className={styles.form_label}>Email:</label>
                    <input
                        className={styles.form_input}
                        type="email"
                        name="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Email is invalid'
                            }
                        })}
                    />
                    {errors.email && (
                        <span className={styles.error_message}>
                            {errors.email.message}
                        </span>
                    )}
                </div>                

                {/* Phone Number Field with Custom Validation */}
                <div className="form-group">
                    <label className={styles.form_label}>Phone Number:</label>
                    <input
                        className={styles.form_input}
                        type="text"
                        {...register("phone", {
                        required: "Phone number is required", // Required validation
                        pattern: {
                            value: /^[0-9]{10}$/, // Ensure 10 digits
                            message: "Phone number must be 10 digits",
                        },
                    })}
                    />
                    {errors.phone && (
                        <span className={styles.error_message}>{errors.phone.message}</span>
                    )}
                </div>
                {/* Message Field */}
                <div className="flex flex-col gap-y-1.5">
                    <label
                    className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default]"
                    htmlFor="message"                        
                    >
                        Message
                    </label>
                    <textarea
                    className="resize-y appearance-none rounded-md border-0 px-3 py-2 text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                    id="message"
                    name="message"
                        className={styles.form_label}
                        type="text"
                        {...register("message", {
                            required: "Message is required",
                            minLength: { value: 1, message: "Message cannot be empty" },
                            maxLength: { value: 500, message: "Message must be under 500 characters" },
                            pattern: {
                                value: /\S/, // at least one non-whitespace character
                                message: "Message cannot be only whitespace"
                            }
                        })}
                    />
                        {errors.message && 
                           <span className={styles.error_message}>
                               {errors.message.message}
                           </span>}
                    <p className="block text-sm text-[--color-text-muted]">
                    We usually respond within 1-2 business days.
                    </p>
                </div>    

                <button className={styles.submit_button} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;