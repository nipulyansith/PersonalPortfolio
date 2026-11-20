import Link from "next/link";

export default function MenuOverlay({ links, setNavbarOpen, pathname }) {
  return (
    <ul id="mobile-navigation" className="mx-auto grid max-w-2xl grid-cols-2 gap-2 p-4 sm:p-6">
      {links.map(({ href, title }) => (
        <li key={href}>
          <Link href={href} onClick={() => setNavbarOpen(false)} aria-current={(pathname === href || (!href.includes("#") && pathname.startsWith(`${href}/`))) ? "page" : undefined} className={`flex min-h-12 items-center rounded-xl border px-4 py-3 text-base transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300 ${(pathname === href || (!href.includes("#") && pathname.startsWith(`${href}/`))) ? "border-purple-400/25 bg-purple-400/10 text-purple-200" : "border-white/5 bg-white/[0.025] text-white/80 hover:bg-white/10"}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
