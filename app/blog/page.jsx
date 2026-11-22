import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { posts } from "./posts";
export const metadata = {
  title: "Journal | Nipul Yansith",
  description:
    "Personal notes on software engineering, working with production systems, and learning the craft.",
};
export default function BlogPage() {
  return (
    <main className="blog-page" id="top">
      <Navbar />
      <header className="inner-page-heading section-shell">
        <p className="eyebrow">The journal</p>
        <h1>
          Thinking.
          <br />
          <span className="muted">Out loud.</span>
        </h1>
        <div className="inner-page-intro">
          <p>
            Notes on building software
            <br />
            and learning the craft.
          </p>
          <p>
            Experiences from production, things I’ve figured out, and questions
            I’m still asking.
          </p>
        </div>
      </header>
      <section
        className="section-shell journal-list"
        aria-labelledby="blog-list-heading"
      >
        <header>
          <h2 id="blog-list-heading">Essays & reflections</h2>
          <span>
            {posts.length} {posts.length === 1 ? "article" : "articles"}
          </span>
        </header>
        {posts.map((post) => (
          <article key={post.id} className="journal-list-item">
            <Link href={`/blog/${post.id}`} className="journal-list-image">
              <Image
                src="/images/blog/production-full-stack-cover-teal.png"
                alt="An illustration of connected software application layers"
                fill
                sizes="(max-width: 760px) 90vw, 45vw"
              />
            </Link>
            <div>
              <p className="tiny-label">
                {post.tags.join(" · ")} · {post.readMinutes} min read
              </p>
              <Link href={`/blog/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>{post.excerpt}</p>
              <div className="journal-list-author">
                <span>
                  <Image
                    src="/images/final.jpg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  {post.author}
                </span>
                <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
              </div>
              <Link className="text-link" href={`/blog/${post.id}`}>
                Read the essay
              </Link>
            </div>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
