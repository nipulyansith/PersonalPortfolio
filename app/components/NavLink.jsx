import Link from "next/link";

export default function NavLink({ href, title, active }) {
  return (
    <li>
      <Link href={href} aria-current={active ? "page" : undefined} className={`inline-flex min-h-11 items-center rounded-xl px-3 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300 xl:text-base ${active ? "bg-purple-500/10 text-purple-300" : "text-[#ADB7BE] hover:bg-white/5 hover:text-white"}`}>
        {title}
      </Link>
    </li>
  );
}
