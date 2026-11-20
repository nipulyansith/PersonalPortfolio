import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#121212] px-4 py-8 text-gray-300 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 lg:flex-row">
        <Link href="/" className="inline-flex min-h-11 items-center font-semibold text-purple-300">Nipul Yansith</Link>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm">
          {[["About", "/#about"], ["Projects", "/#projects"], ["Research", "/#research"], ["Contact", "/#contact"], ["Blog", "/blog"]].map(([label, href]) => <Link key={href} href={href} className="inline-flex min-h-11 items-center hover:text-white">{label}</Link>)}
          <a href="/Nipul_Yansith_CV.pdf" download className="inline-flex min-h-11 items-center hover:text-white">Download CV</a>
        </nav>
        <div className="flex gap-5 text-sm">
          <a href="https://www.linkedin.com/in/nipul-yansith-183b8a156/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 hover:text-white"><SiLinkedin aria-hidden="true" className="h-4 w-4" />LinkedIn</a>
          <a href="https://github.com/nipulyansith" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 hover:text-white"><SiGithub aria-hidden="true" className="h-4 w-4" />GitHub</a>
        </div>
      </div>
      <p className="mt-6 text-center text-sm leading-relaxed text-slate-400">&copy; {new Date().getFullYear()} Nipul Yansith. All rights reserved.</p>
    </footer>
  );
}
