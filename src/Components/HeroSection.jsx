import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="flex justify-center items-center mb-6">
            <img
              src="/images/GIT-PROFILE.jpg"
              alt="Aditya Dave"
              className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-purple-500 border-4"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm
            <span className="text-primary ml-2"> Aditya </span>
            <span className="text-gradient ml-2"> Dave </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm an Information Systems Engineering student,
            <strong>web development</strong>, <strong>cloud computing</strong>, and{" "}
            <strong>AI/ML</strong> to craft smart, interactive solutions. From building
            dynamic interfaces in Angular and Java to deploying AI-powered projects on
            AWS, I thrive at turning complex challenges into seamless user experiences.
            Recent achievements include <strong>AWS AI Practitioner</strong> and{" "}
            <strong>Google Analytics</strong> certifications, reflecting my commitment to
            innovation and continuous learning.
          </p>

          <div className="pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};