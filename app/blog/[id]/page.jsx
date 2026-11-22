import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { posts, getPost } from "../posts";
import ArticleActions from "../_components/ArticleActions";
import ArticleNavigation from "../_components/ArticleNavigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }) {
  const post = getPost((await params).id);
  if (!post) return { title: "Article not found | Nipul Yansith" };
  return {
    title: `${post.title} | ${post.author}`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      authors: [post.author],
      publishedTime: post.publishedAt,
    },
  };
}

function ArticleBlocks({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === "list" || block.type === "ordered-list") {
      const Tag = block.type === "list" ? "ul" : "ol";
      return (
        <Tag key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Tag>
      );
    }
    if (block.type === "quote")
      return (
        <blockquote key={index}>
          <p>{block.text}</p>
        </blockquote>
      );
    if (block.type === "subheading") return <h3 key={index}>{block.text}</h3>;
    if (block.type === "note")
      return (
        <p key={index} className="blog-editor-note">
          {block.text}
        </p>
      );
    if (block.type === "image")
      return (
        <figure key={index} className="blog-photo">
          <Image
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            sizes="(min-width: 768px) 672px, 100vw"
            className="h-auto w-full rounded-sm"
          />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    return <p key={index}>{block.text}</p>;
  });
}

export default async function ArticlePage({ params }) {
  const post = getPost((await params).id);
  if (!post) notFound();
  const sections = post.sections.map(({ id, label }) => ({ id, label }));

  return (
    <main
      id="top"
      className="blog-page min-h-screen bg-[#fafaf6] text-neutral-900"
    >
      <Navbar />
      <article className="mx-auto max-w-6xl px-5 pb-16 pt-24 sm:px-8 sm:pt-28">
        <header
          id="article-top"
          className="mx-auto max-w-[48rem] xl:ml-[15rem] xl:mr-0"
        >
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-3 text-sm text-neutral-500 sm:mb-10"
          >
            <Link
              href="/blog"
              className="inline-flex min-h-11 items-center rounded text-neutral-600 transition hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-600"
            >
              Journal
            </Link>
            <span aria-hidden="true">/</span>
            <span>{post.category}</span>
          </nav>
          <p className="blog-kicker">From internship to production</p>
          <h1 className="mt-5 max-w-[26ch] font-sans text-[clamp(2.15rem,4.6vw,3.65rem)] font-normal leading-[1.12] tracking-tight text-[#164f42]">
            {post.title}
          </h1>
          <p className="mt-6 max-w-[40rem] text-lg leading-relaxed text-neutral-600 sm:text-xl">
            {post.excerpt}
          </p>
          <div className="mt-8 flex flex-col justify-between gap-4 border-b border-neutral-300 pb-6 lg:flex-row lg:items-center">
            <div className="flex min-w-0 items-center gap-3">
              <Image
                src="/images/final.jpg"
                alt="Nipul Yansith"
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 rounded-full object-cover"
              />
              <div>
                <Link
                  href="/#about"
                  className="text-base font-medium text-neutral-800 hover:text-neutral-900"
                >
                  {post.author}
                </Link>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500">
                  <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readMinutes} min read</span>
                </p>
              </div>
            </div>
            <ArticleActions postId={post.id} />
          </div>
        </header>

        <figure className="article-cover">
          <Image
            src="/images/blog/production-full-stack-cover-teal.png"
            alt="A browser interface, API node, and database connected in teal and frosted glass"
            width={1536}
            height={1024}
            sizes="(max-width: 760px) 90vw, 1000px"
            priority
          />
        </figure>

        <div className="mt-8 grid min-w-0 gap-8 sm:mt-12 xl:grid-cols-[12rem_minmax(0,1fr)] xl:gap-12">
          <ArticleNavigation sections={sections} />
          <div
            id="article-body"
            className="mx-auto w-full min-w-0 max-w-[42rem] xl:mx-0"
          >
            <div className="blog-prose">
              <div className="blog-introduction">
                <ArticleBlocks blocks={post.intro} />
              </div>
              {post.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="blog-article-section"
                  aria-labelledby={`${section.id}-heading`}
                >
                  <h2 id={`${section.id}-heading`}>{section.title}</h2>
                  <ArticleBlocks blocks={section.blocks} />
                </section>
              ))}
            </div>
            <div className="mt-12 border-y border-neutral-300 py-7">
              <div className="flex items-start gap-4">
                <Image
                  src="/images/final.jpg"
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-neutral-500">Written by</p>
                  <h2 className="mt-1 font-sans text-2xl font-normal text-[#164f42]">
                    {post.author}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-neutral-600">
                    Software Engineer. Still learning, still building.
                  </p>
                  <Link
                    href="/#about"
                    className="mt-2 inline-flex min-h-11 items-center border-b border-neutral-300 text-sm text-neutral-700 hover:border-neutral-700 hover:text-neutral-900"
                  >
                    More about me
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <Link href="/blog" className="blog-action">
                All articles
              </Link>
              <a
                href="#article-top"
                className="inline-flex min-h-11 items-center rounded px-3 text-sm text-neutral-500 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-600"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
