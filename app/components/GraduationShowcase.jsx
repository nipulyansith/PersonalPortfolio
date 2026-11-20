"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import { XMarkIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";

export default function GraduationShowcase({ mainPhoto, galleryPhotos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const dialogRef = useRef(null);
  const photos = mainPhoto ? [mainPhoto, ...galleryPhotos] : galleryPhotos;
  const selectedIndex = photos.indexOf(selectedPhoto);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedPhoto && !dialog.open) dialog.showModal();
    if (!selectedPhoto && dialog.open) dialog.close();
  }, [selectedPhoto]);

  const changePhoto = (direction) => {
    setSelectedPhoto(photos[(selectedIndex + direction + photos.length) % photos.length]);
  };

  return (
    <section id="graduation" aria-labelledby="graduation-heading" className="relative px-4 py-12 text-white sm:py-20 xl:px-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-amber-400/[0.07] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-amber-200/20 bg-gradient-to-br from-[#272031] via-[#1b1724] to-[#17151b] shadow-[0_24px_100px_-35px_rgba(180,130,60,0.18)]">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/70 to-transparent" />

        <div className="grid items-center gap-8 p-5 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:p-14">
          <div>
            <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-200/90">
              <span aria-hidden="true" className="h-px w-8 bg-amber-200/60" />
              Graduation · 2026
            </p>
            <h2 id="graduation-heading" className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              A chapter<br />
              <span className="italic text-amber-100">to remember.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
              Celebrating my graduation from the University of Colombo School of Computing, and the learning, friendships, and memories along the way.
            </p>

            <div className="mt-8 flex items-start gap-4 border-y border-amber-100/15 py-6">
              <div className="shrink-0 rounded-2xl border border-amber-200/20 bg-amber-200/[0.06] p-3">
                <FaGraduationCap aria-hidden="true" className="h-7 w-7 text-amber-200" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-100 sm:text-2xl">First Class Honours</h3>
                <p className="mt-2 text-base leading-relaxed text-white/85">B.Sc. (Hons) in Information Systems</p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">University of Colombo School of Computing</p>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-white/55">GPA</dt>
                <dd className="mt-2 font-serif text-2xl text-amber-100 sm:text-3xl">3.70 <span className="font-sans text-base text-white/45">/ 4.00</span></dd>
              </div>
              <div className="border-l border-amber-100/15 pl-5">
                <dt className="text-sm text-white/55">Director’s List</dt>
                <dd className="mt-2 font-serif text-2xl text-amber-100 sm:text-3xl">4 <span className="font-sans text-base text-white/45">semesters</span></dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div aria-hidden="true" className="absolute -inset-2 rotate-2 rounded-[1.6rem] border border-amber-200/20 sm:-inset-3" />
            {mainPhoto ? (
              <button
                type="button"
                onClick={() => setSelectedPhoto(mainPhoto)}
                aria-label="View main graduation photograph at full size"
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] bg-[#312735] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
              >
                <Image src={mainPhoto} alt="Nipul Yansith celebrating his graduation" fill sizes="(min-width: 1024px) 430px, (min-width: 640px) 448px, 85vw" className="object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-[1.03]" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div aria-hidden="true" className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur-md transition group-hover:bg-black/60">
                  <ArrowsPointingOutIcon className="h-5 w-5" />
                </div>
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-serif text-2xl text-white sm:text-3xl">Nipul Yansith</p>
                  <p className="mt-2 text-sm tracking-wide text-white/70">University of Colombo · Class of 2026</p>
                </div>
              </button>
            ) : (
              <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-[1.25rem] border border-amber-100/10 bg-gradient-to-br from-[#3e3046] via-[#292130] to-[#211b27] text-center">
                <div aria-hidden="true" className="absolute h-64 w-64 rounded-full border border-amber-200/10" />
                <div aria-hidden="true" className="absolute h-52 w-52 rounded-full border border-amber-200/10" />
                <FaGraduationCap aria-hidden="true" className="relative mb-5 h-14 w-14 text-amber-200/70" />
                <p className="relative text-sm uppercase tracking-[0.25em] text-amber-100/70">Class of</p>
                <p className="relative mt-2 font-serif text-7xl text-amber-100 sm:text-8xl">2026</p>
                <p className="absolute inset-x-4 bottom-8 text-sm text-white/55">University of Colombo</p>
              </div>
            )}
          </div>
        </div>

        {galleryPhotos.length > 0 && (
          <div className="border-t border-amber-100/10 bg-black/10 p-5 sm:p-10 lg:px-14">
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-2xl text-amber-50">Moments from the day</h3>
              <p className="text-sm text-white/50">A few memories worth keeping.</p>
            </div>
            <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${galleryPhotos.length === 5 ? "sm:grid-cols-3 lg:grid-cols-5" : "sm:grid-cols-4"}`}>
              {galleryPhotos.map((photo, index) => (
                <button
                  key={photo}
                  type="button"
                  onClick={() => setSelectedPhoto(photo)}
                  aria-label={`View graduation photograph ${index + 1} at full size`}
                  className={`group relative aspect-[4/3] overflow-hidden ${galleryPhotos.length === 5 ? "last:col-span-2 last:aspect-[2/1] sm:last:col-span-1 sm:last:aspect-[4/3]" : ""} rounded-xl border border-white/10 bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200`}
                >
                  <Image src={photo} alt={`Graduation day memory ${index + 1}`} fill sizes="(min-width: 1024px) 240px, (min-width: 640px) 25vw, 45vw" className="object-cover transition duration-500 motion-safe:group-hover:scale-105" />
                  <span aria-hidden="true" className="absolute inset-0 bg-black/10 transition group-hover:bg-transparent" />
                  <span aria-hidden="true" className="absolute bottom-2 right-2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm">
                    <ArrowsPointingOutIcon className="h-4 w-4" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Graduation photo viewer"
        onClose={() => setSelectedPhoto(null)}
        onCancel={() => setSelectedPhoto(null)}
        onClick={(event) => { if (event.target === event.currentTarget) setSelectedPhoto(null); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); changePhoto(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); changePhoto(-1); }
        }}
        className="fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%_-_2rem)] max-w-6xl overflow-hidden border-0 bg-transparent p-0 text-white backdrop:bg-black/90 backdrop:backdrop-blur-md"
      >
        {selectedPhoto && (
          <div className="flex max-h-[90dvh] flex-col rounded-2xl border border-white/15 bg-[#17131d] p-3 shadow-2xl sm:p-4">
            <div className="mb-3 flex shrink-0 items-center justify-between gap-4 px-1">
              <p className="text-sm text-white/70">Graduation · {selectedIndex + 1} of {photos.length}</p>
              <button type="button" autoFocus onClick={() => setSelectedPhoto(null)} aria-label="Close graduation photo viewer" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full p-2 text-white/80 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-amber-200">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="relative h-[60dvh] min-h-0 sm:h-[68dvh]">
              <Image src={selectedPhoto} alt={selectedPhoto === mainPhoto ? "Nipul Yansith celebrating his graduation" : `Graduation day memory ${galleryPhotos.indexOf(selectedPhoto) + 1}`} fill sizes="(min-width: 1280px) 1152px, 95vw" className="object-contain" />
            </div>
            {photos.length > 1 && (
              <div className="mt-3 flex shrink-0 justify-between gap-4">
                <button type="button" onClick={() => changePhoto(-1)} className="min-h-11 rounded-lg border border-white/15 px-3 py-2 text-sm transition hover:bg-white/10 focus-visible:outline focus-visible:outline-amber-200">Previous photo</button>
                <button type="button" onClick={() => changePhoto(1)} className="min-h-11 rounded-lg border border-white/15 px-3 py-2 text-sm transition hover:bg-white/10 focus-visible:outline focus-visible:outline-amber-200">Next photo</button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}
