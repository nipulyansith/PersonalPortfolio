import FunSection from "../components/FunSection";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
export const metadata = {
  title: "Beyond Code | Nipul Yansith",
  description: "Music, performances, and moments beyond software engineering.",
};
export default function FunPage() {
  return (
    <main id="top" className="beyond-code-page">
      <Navbar />
      <FunSection />
      <Footer />
    </main>
  );
}
