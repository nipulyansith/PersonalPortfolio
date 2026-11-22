import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer-top">
          <Link href="/" className="footer-name">
            Nipul Yansith<span>Software engineer. Curious human.</span>
          </Link>
          <nav aria-label="Footer">
            {[
              ["About", "/#about"],
              ["Portfolio", "/#projects"],
              ["Research", "/#research"],
              ["Blog", "/blog"],
              ["Beyond Code", "/fun"],
              ["Contact", "/#contact"],
            ].map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <a href="#top" className="text-link">
            Back to top
          </a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nipul Yansith</p>
          <p>Built with care. Made to keep evolving.</p>
          <span>Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
