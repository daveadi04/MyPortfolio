import { AboutSection } from "../Components/AboutSection";
import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "@/Components/StarBackgroung";
import { NavBar } from "../Components/NavBar";
import { HeroSection } from "../Components/HeroSection";
import { Skills } from "../Components/Skills";
import { Projects } from "../Components/Projects";
import { ContactSection } from "../Components/ContactSection";


export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    
    {/* Theme Toggle */}
<ThemeToggle /> 
    {/* Background Effects */}
<StarBackground/>
     
     <NavBar />
      {/* Main COntent */}

      <main>
    <HeroSection />
    <AboutSection />
<Skills />
<Projects />
<ContactSection />
      </main>

       {/* Footer */}
     </div>;

};


export default Home;