// src/Components/HeroSection.jsx
import { ArrowDown, Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto z-10 px-4 sm:px-6 lg:px-8">
        {/* Glass card */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md shadow-2xl p-6 sm:p-8 md:p-10">
          {/* soft gradient glow */}
          <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/20 via-fuchsia-400/10 to-transparent blur-xl -z-10" />

          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl -z-10" />
              <img
                src="/images/GIT-PROFILE.jpg"
                alt="Aditya Dave"
                className="w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover shadow-xl ring-4 ring-primary/70"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-center text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Hi, I’m <span className="text-primary">Aditya</span>{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Dave
            </span>
          </h1>

          {/* Subcopy */}
          <p className="mt-4 text-center text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Information Systems Engineering student crafting{" "}
            <strong>web</strong> & <strong>cloud</strong> solutions with clean
            UI and smart automation. Recent work spans Angular/React, AWS
            deployments, and streamlining ops with Jira/Intune—turning complex
            ideas into reliable, user-friendly experiences.
          </p>

          {/* Skill chips */}
          <div className="mt-5 flex flex-wrap gap-2 justify-center">
            {[
              "React / Angular",
              "AWS & Azure",
              "Node • PostgreSQL",
              "Automation: Jira / Intune",
              "AI/ML (foundations)",
            ].map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 px-3 py-1 text-xs opacity-90"
              >
                {c}
              </span>
            ))}
          </div>

          {/* CTAs + socials */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground bg-primary shadow hover:opacity-90 transition"
            >
              View My Work
            </a>
           <a href="/Aditya_Dave_Resume.docx" download>Download Resume</a>
            <a
              href="https://www.linkedin.com/in/adityadave04"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-card transition"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/daveadi04"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-card transition"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
