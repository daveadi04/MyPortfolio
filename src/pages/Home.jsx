import { NavBar } from "../Components/NavBar";
import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "@/Components/StarBackgroung";
// import {NavBar} from "@/Components/NavBar";

export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    
    {/* Theme Toggle */}
<ThemeToggle /> 
    {/* Background Effects */}
<StarBackground/>
     {/* Nav Bar */}
{/* <NavBar /> */}
      {/* Main COntent */}

       {/* Footer */}
     </div>;

};


export default Home;