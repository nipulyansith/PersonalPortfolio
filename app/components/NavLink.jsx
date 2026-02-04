import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <li>
      <Link
        href={href}
        className="rounded-xl px-4 py-2 text-[#ADB7BE] transition hover:bg-white/5 hover:text-white"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
