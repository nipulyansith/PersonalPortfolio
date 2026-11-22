"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TbMaximize, TbX } from "react-icons/tb";
export default function PhotoGallery({
  photos,
  label,
  className = "",
  captions = false,
}) {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  useEffect(() => {
    const el = dialog.current;
    if (selected !== null) {
      if (!el.open) el.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    if (el.open) el.close();
  }, [selected]);
  const change = (by) =>
    setSelected((index) => (index + by + photos.length) % photos.length);
  return (
    <>
      <div className={`photo-gallery ${className}`}>
        {photos.map((photo, index) => (
          <figure key={photo.src}>
            <button
              type="button"
              className="photo-button"
              onClick={() => setSelected(index)}
              aria-label={`Enlarge ${label} photograph ${index + 1}: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 42vw"
              />
              <span className="photo-expand" aria-hidden="true">
                <TbMaximize />
              </span>
            </button>
            {captions && <figcaption>{photo.caption || photo.alt}</figcaption>}
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-label={`${label} photo viewer`}
        onClose={() => setSelected(null)}
        onCancel={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            change(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            change(-1);
          }
        }}
      >
        {selected !== null && (
          <div className="photo-dialog-content">
            <header>
              <p>
                {label} · {selected + 1} / {photos.length}
              </p>
              <button
                autoFocus
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close photo viewer"
              >
                <TbX size={24} />
              </button>
            </header>
            <div className="photo-dialog-image">
              <Image
                key={photos[selected].src}
                src={photos[selected].src}
                alt={photos[selected].alt}
                fill
                sizes="95vw"
              />
            </div>
            <footer>
              <button type="button" onClick={() => change(-1)}>
                Previous photo
              </button>
              <p>{photos[selected].alt}</p>
              <button type="button" onClick={() => change(1)}>
                Next photo
              </button>
            </footer>
          </div>
        )}
      </dialog>
    </>
  );
}
