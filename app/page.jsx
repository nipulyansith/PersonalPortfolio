import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ResearchSection from "./components/ResearchSection";
import AchievementsSection from "./components/Achiements";
import GraduationSection from "./components/GraduationSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResearchSection />
      <AchievementsSection />
      <GraduationSection />
      <EmailSection />
      <Footer />
    </main>
  );
}
