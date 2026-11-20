import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/footer";
import AchievementsSection from "./components/Achiements";
import ResearchSection from "./components/ResearchSection";
import ExperienceSection from "./components/ExperienceSection";
import GraduationSection from "./components/GraduationSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl pt-20 sm:pt-24">
        <HeroSection/>  
        <AboutSection/>
        <GraduationSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <ResearchSection/>
        <AchievementsSection/>
        <EmailSection/>
        </div>
        <Footer/>

        
    </main>
  );
}
