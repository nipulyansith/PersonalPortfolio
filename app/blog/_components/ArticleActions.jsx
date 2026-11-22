"use client";

import { useEffect, useState } from "react";
import { TbBookmark, TbBookmarkFilled, TbCheck, TbLink } from "react-icons/tb";

export default function ArticleActions({ postId }) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");
  const storageKey = `portfolio:blog:bookmark:${postId}`;

  useEffect(() => {
    try {
      setSaved(localStorage.getItem(storageKey) === "saved");
    } catch {
      /* Reading remains available without storage. */
    }
  }, [storageKey]);

  const toggleSaved = () => {
    const next = !saved;
    setSaved(next);
    try {
      if (next) localStorage.setItem(storageKey, "saved");
      else localStorage.removeItem(storageKey);
      setMessage(
        next
          ? "Saved on this device for later."
          : "Removed from saved articles.",
      );
    } catch {
      setMessage(
        next
          ? "Saved for this visit. Browser storage is unavailable."
          : "Removed from saved articles.",
      );
    }
  };

  const copyLink = async () => {
    const url = window.location.href.split("#")[0];
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setFallbackUrl("");
      setMessage("Article link copied.");
    } catch {
      setFallbackUrl(url);
      setMessage("Select and copy the link below.");
    }
  };

  return (
    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={toggleSaved}
          aria-pressed={saved}
          className="blog-action"
        >
          {saved ? (
            <TbBookmarkFilled aria-hidden="true" className="h-4 w-4" />
          ) : (
            <TbBookmark aria-hidden="true" className="h-4 w-4" />
          )}
          {saved ? "Saved" : "Save for later"}
        </button>
        <button type="button" onClick={copyLink} className="blog-action">
          {copied ? (
            <TbCheck aria-hidden="true" className="h-4 w-4" />
          ) : (
            <TbLink aria-hidden="true" className="h-4 w-4" />
          )}
          {copied ? "Link copied" : "Copy link"}
        </button>
      </div>
      <p
        aria-live="polite"
        className={message ? "mt-2 text-sm text-neutral-500" : "sr-only"}
      >
        {message}
      </p>
      {fallbackUrl && (
        <input
          aria-label="Article link to copy"
          readOnly
          value={fallbackUrl}
          onFocus={(event) => event.target.select()}
          className="mt-2 w-full rounded-lg border border-neutral-300 bg-neutral-200/40 p-3 text-base text-neutral-900"
        />
      )}
    </div>
  );
}
