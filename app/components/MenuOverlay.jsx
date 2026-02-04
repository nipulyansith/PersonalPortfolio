import Link from "next/link";

const MenuOverlay = ({ links, setNavbarOpen }) => {
  return (
    <div className="md:hidden w-full bg-[#121212] border-t border-[#33353F]">
      <ul className="flex flex-col py-4 items-center gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={`#${link.href}`}
              onClick={() => setNavbarOpen(false)}
              className="text-white text-lg font-medium hover:text-purple-400 transition"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
