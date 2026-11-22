import Link from "next/link";
import Image from "next/image";
import { posts } from "../blog/posts";
export default function JournalSection() {
  const post = posts[0];
  return (
    <section className="section-block journal-section">
      <div className="section-shell">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Notes from the journey</p>
            <h2 className="section-title">
              Still learning.
              <br />
              Writing it down.
            </h2>
          </div>
          <Link href="/blog" className="text-link">
            Visit the journal
          </Link>
        </header>
        <div className="journal-feature">
          <Link href={`/blog/${post.id}`} className="journal-cover">
            <Image
              src="/images/blog/production-full-stack-cover-teal.png"
              alt="An illustration of an application’s connected frontend, API, and data layers"
              fill
              sizes="(max-width: 760px) 90vw, 45vw"
            />
          </Link>
          <div className="journal-feature-copy">
            <p className="tiny-label">
              {post.category} · {post.readMinutes} min read
            </p>
            <Link href={`/blog/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-link">
              Read the essay
            </Link>
          </div>
        </div>
        <Link href="/fun" className="beyond-teaser">
          <div>
            <p className="eyebrow">Beyond the keyboard</p>
            <h3>
              There’s music
              <br />
              in the mix, too.
            </h3>
            <span className="text-link">Step beyond code</span>
          </div>
          <div className="beyond-teaser-photo">
            <Image
              src="/images/fun/g3.jpg"
              alt="A live music performance with Nipul’s band"
              fill
              sizes="(max-width: 760px) 90vw, 55vw"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
