import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dev Consultancy Website",
    description:
      "A modern investment and financial consultancy website built with TypeScript + React (TSX). Designed for business clients to explore services, investment opportunities, and financial consultation (on-going).",
    image: "../public/images/dev-consultancy.png",
    tags: ["TypeScript", "React", "Business Website"],
    demoUrl: "https://dev-consultancy.vercel.app/",
    githubUrl: "https://github.com/daveadi04/Dev-consultancy/tree/production",
  },
  {
    id: 2,
    title: "Sugar Cubed Creation",
    description:
      "Capstone project for Sheridan College (Winter–Fall 2025). A full-stack cookie storefront with admin portal, product & inventory management, square payments, and email notifications. Built with Next.js, Prisma, Supabase, Square, Resend, and Vercel.",
    image: "../public/images/sugar-cubbed-creation.png",
    tags: ["Next.js", "TypeScript", "Supabase", "Prisma", "Stripe", "Full Stack"],

    githubUrl: "https://github.com/Yagna3903/sugar-cubed-creation",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my academic and personal projects that showcase my skills in
          software development, UI/UX design, and cloud computing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover max-w-lg w-full"
            >
              <div className="h-48 overflow-hidden bg-secondary/20 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/daveadi04"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};