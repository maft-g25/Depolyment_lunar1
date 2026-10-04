import {useEffect} from "react";

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
      const body = document.body;
      if (open) {
        body.classList.add("body-modal-open");
      } else {
        body.classList.remove("body-modal-open");
      }
      return () => body.classList.remove("body-modal-open");
    }, [open]);

  if (!open) return null;  // old one
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-white rounded-lg max-w-xl w-full p-6 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-600"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}