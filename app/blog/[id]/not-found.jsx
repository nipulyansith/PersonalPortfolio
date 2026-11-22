import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

export default function ArticleNotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col bg-[#fafaf6] text-neutral-900">
      <Navbar />
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-4 pb-20 pt-32 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[#167765]">
          Blog
        </p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          This article isn’t here.
        </h1>
        <Link href="/blog" className="blog-action mt-8">
          Browse all articles
        </Link>
      </div>
      <Footer />
    </main>
  );
}
