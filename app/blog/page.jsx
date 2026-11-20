import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { posts } from "./posts";

export const metadata = {
  title: "Blog | Nipul Yansith",
  description: "Personal notes on software engineering, working with production systems, and learning the craft. By Nipul Yansith.",
};

export default function BlogPage() {
  return (
    <main className="blog-page flex min-h-[100svh] flex-col bg-[#121212] text-white">
      <Navbar />
      <div className="mx-auto w-full max-w-5xl flex-1 px-5 pb-20 pt-28 sm:px-8 sm:pt-36">
        <header className="mb-12 max-w-2xl sm:mb-20">
          <p className="blog-kicker">Nipul Yansith / Journal</p>
          <h1 className="mt-5 font-serif text-5xl font-normal leading-tight tracking-tight text-[#eeeae5] sm:text-7xl">Writing.</h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">Personal notes on building software and learning the craft.</p>
        </header>
        <section aria-labelledby="blog-list-heading">
          <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-4">
            <h2 id="blog-list-heading" className="text-sm font-medium text-white/70">Essays & reflections</h2>
            <span className="text-sm text-white/40">{posts.length} {posts.length === 1 ? "article" : "articles"}</span>
          </div>
          <ul className="divide-y divide-white/15">
            {posts.map((post) => (
              <li key={post.id}>
                <article>
                  <Link href={`/blog/${post.id}`} aria-labelledby={`post-title-${post.id}`} className="group grid gap-5 rounded-sm py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white/60 sm:gap-8 sm:py-12 md:grid-cols-[8rem_minmax(0,1fr)]">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/40 md:block">
                      <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
                      <p className="md:mt-2">{post.readMinutes} min read</p>
                    </div>
                    <div className="min-w-0">
                      <p className="mb-3 text-sm text-white/45">{post.tags.join(" · ")}</p>
                      <h3 id={`post-title-${post.id}`} className="max-w-[30ch] font-serif text-3xl font-normal leading-[1.2] tracking-tight text-[#eeeae5] transition-colors group-hover:text-white sm:text-4xl">{post.title}</h3>
                      <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">{post.excerpt}</p>
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm">
                        <span className="inline-flex items-center gap-2.5 text-white/55"><Image src="/images/final.jpg" alt="" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />{post.author}</span>
                        <span className="inline-flex min-h-11 items-center border-b border-white/30 text-white/75 transition group-hover:border-white/70 group-hover:text-white">Read the essay</span>
                      </div>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </main>
  );
}
