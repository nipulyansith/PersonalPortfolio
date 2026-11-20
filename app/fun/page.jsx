import FunSection from "@/app/components/FunSection";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";

export const metadata = {
  title: "Beyond Code | Nipul Yansith",
  description: "Music, performances, and moments beyond software engineering.",
};

export default function FunPage() {
  return (
    <main className="flex min-h-[100svh] flex-col bg-[#121212] text-white">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl flex-1 pt-20 sm:pt-24"><FunSection /></div>
      <Footer />
    </main>
  );
}
