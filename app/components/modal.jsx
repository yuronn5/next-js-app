"use client";
import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import './Modal.css'; // Import the CSS file

export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="overlay" // Apply the overlay class
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="wrapper" // Apply the wrapper class
      >
        {children}
      </div>
    </div>
  );
}
