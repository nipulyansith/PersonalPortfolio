"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import { ArrowsPointingOutIcon, ArrowUpRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const photos = [
  { src: "/images/nb1.jpg", width: 3768, height: 2906, alt: "The PitchIQ team holding their Merit Award certificates at NBQSA 2026" },
  { src: "/images/nb2.jpg", width: 4032, height: 3024, alt: "The PitchIQ team celebrating with a supporter at the National ICT Awards" },
  { src: "/images/nb3.jpg", width: 3224, height: 4237, alt: "A group photograph celebrating PitchIQ’s NBQSA 2026 recognition" },
];

export default function NBQSAAward() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dialogRef = useRef(null);
  const selectedPhoto = selectedIndex === null ? null : photos[selectedIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedIndex !== null && !dialog.open) dialog.showModal();
    if (selectedIndex === null && dialog.open) dialog.close();
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selectedIndex]);

  const changePhoto = (direction) => setSelectedIndex((index) => (index + direction + photos.length) % photos.length);

  const photoButton = (photo, index, sizes) => (
    <button
      key={photo.src}
      type="button"
      onClick={() => setSelectedIndex(index)}
      aria-label={`Enlarge NBQSA photograph ${index + 1}: ${photo.alt}`}
      className="group relative block w-full self-start overflow-hidden rounded-lg bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
    >
      <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={sizes} className="h-auto w-full transition duration-500 motion-safe:group-hover:scale-[1.02]" />
      <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/60 p-2 text-white backdrop-blur-sm">
        <ArrowsPointingOutIcon className="h-4 w-4" />
      </span>
    </button>
  );

  return (
    <article id="nbqsa" aria-labelledby="nbqsa-heading" className="mt-10 scroll-mt-24 overflow-hidden rounded-2xl border border-amber-200/20 bg-[#1b1916] sm:mt-12">
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b border-amber-200/15 px-5 py-4 sm:px-8">
        <p className="text-sm leading-relaxed text-amber-100/80">28th National ICT Awards · NBQSA 2026</p>
        <span className="flex items-center gap-2 text-sm text-amber-200"><FaAward aria-hidden="true" /> Merit Award Winner</span>
      </div>

      <div className="grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="min-w-0">
          <p className="text-sm uppercase tracking-[0.18em] text-amber-200/65">A milestone worth celebrating</p>
          <h3 id="nbqsa-heading" className="mt-4 font-serif text-4xl leading-[1.12] tracking-tight text-[#f4eee2] sm:text-5xl">A proud moment<br />for <span className="italic text-amber-200">PitchIQ.</span></h3>
          <p className="mt-6 text-base leading-relaxed text-white/75">Our PitchIQ team received a Merit Award at the 28th National ICT Awards – NBQSA 2026. Seeing our work recognised at a national level made this a particularly special milestone.</p>
          <p className="mt-4 text-base leading-relaxed text-white/65">PitchIQ explores cricket fast-bowling biomechanics through a single side-on phone video. This recognition reflects the research, dedication, and many small improvements that went into bringing it to life.</p>

          <div className="mt-6 border-l-2 border-amber-200/40 pl-4">
            <p className="font-serif text-xl leading-relaxed text-amber-50/90">The most rewarding part was getting here together.</p>
          </div>

          <p className="mt-6 text-base leading-relaxed text-white/65">My heartfelt thanks to our supervisor, <a href="https://www.linkedin.com/in/damitha-sandaruwan/" target="_blank" rel="noopener noreferrer" className="text-amber-100 underline decoration-amber-200/30 underline-offset-4 hover:decoration-amber-200 focus-visible:outline focus-visible:outline-amber-200">Dr. Damitha Sandaruwan</a>, for his guidance, encouragement, and support, and to my teammates <a href="https://www.linkedin.com/in/vidhara-ranujee/" target="_blank" rel="noopener noreferrer" className="text-amber-100 underline decoration-amber-200/30 underline-offset-4 hover:decoration-amber-200 focus-visible:outline focus-visible:outline-amber-200">Vidhara Ranujee</a> and <a href="https://www.linkedin.com/in/tharushimaduhansi/" target="_blank" rel="noopener noreferrer" className="text-amber-100 underline decoration-amber-200/30 underline-offset-4 hover:decoration-amber-200 focus-visible:outline focus-visible:outline-amber-200">Tharushi Maduhansi</a> for their commitment and hard work.</p>
          <p className="mt-4 text-base leading-relaxed text-white/65">Proud of what we’ve accomplished together, and excited for what comes next.</p>
          <a href="#research" className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-amber-200/40 py-2 text-sm font-medium text-amber-100 transition hover:border-amber-200 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-amber-200">Explore the PitchIQ research <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" /></a>
        </div>

        <figure className="min-w-0">
          {photoButton(photos[0], 0, "(min-width: 1024px) 500px, (min-width: 640px) 80vw, 90vw")}
          <div className="mt-3 grid grid-cols-[1.75fr_1fr] items-start gap-3">
            {photoButton(photos[1], 1, "(min-width: 1024px) 310px, 55vw")}
            {photoButton(photos[2], 2, "(min-width: 1024px) 180px, 30vw")}
          </div>
          <figcaption className="mt-3 text-sm leading-relaxed text-white/50">From the awards night. A few memories with the people behind the work. Select a photo to take a closer look.</figcaption>
        </figure>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="NBQSA awards photo gallery"
        onClose={() => setSelectedIndex(null)}
        onCancel={() => setSelectedIndex(null)}
        onClick={(event) => { if (event.target === event.currentTarget) setSelectedIndex(null); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); changePhoto(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); changePhoto(-1); }
        }}
        className="fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%_-_2rem)] max-w-5xl overflow-auto rounded-xl border border-white/15 bg-[#181714] p-3 text-white shadow-2xl backdrop:bg-black/90 sm:p-4"
      >
        {selectedPhoto && <>
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm text-amber-100/80">NBQSA 2026 · {selectedIndex + 1} of {photos.length}</p>
            <button type="button" autoFocus onClick={() => setSelectedIndex(null)} aria-label="Close awards photo gallery" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-white/10 focus-visible:outline focus-visible:outline-amber-200"><XMarkIcon className="h-6 w-6" /></button>
          </div>
          <div className="relative h-[60dvh] sm:h-[68dvh]">
            <Image src={selectedPhoto.src} alt={selectedPhoto.alt} fill sizes="(min-width: 1024px) 1000px, 95vw" className="object-contain" />
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <button type="button" onClick={() => changePhoto(-1)} className="min-h-11 rounded-lg border border-white/20 px-3 text-sm hover:bg-white/10 focus-visible:outline focus-visible:outline-amber-200">Previous photo</button>
            <button type="button" onClick={() => changePhoto(1)} className="min-h-11 rounded-lg border border-white/20 px-3 text-sm hover:bg-white/10 focus-visible:outline focus-visible:outline-amber-200">Next photo</button>
          </div>
        </>}
      </dialog>
    </article>
  );
}
