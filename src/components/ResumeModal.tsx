import { useEffect, useId, useRef } from "react";

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
};

export function ResumeModal({ open, onClose, imageSrc, imageAlt }: ResumeModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="resume-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="resume-modal__panel"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="resume-modal__header">
          <h2 id={titleId} className="resume-modal__title">
            Resume
          </h2>
          <button
            ref={closeRef}
            type="button"
            className="resume-modal__close"
            onClick={onClose}
          >
            Close
          </button>
        </header>
        <div className="resume-modal__body">
          <img src={imageSrc} alt={imageAlt} className="resume-modal__img" />
        </div>
      </div>
    </div>
  );
}
