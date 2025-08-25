import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-black text-gray-200">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-purple-500">Me</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-200">
              Information Systems Engineering Co-op Student & Tech Enthusiast
            </h3>

            <p className="text-gray-300">
              I'm Aditya Dave from Mississauga, ON. As an Information Systems 
              Engineering Co-op student and machine learning enthusiast, I bring 
              strong programming, communication, and adaptability skills to solve 
              complex problems with precision and creativity.
            </p>

            <p className="text-gray-300">
              My professional experience spans technical support, network system 
              administration, and student engagement. I thrive in collaborative 
              environments, delivering solutions using tools and technologies like 
              AWS, Azure, Jira, Cisco systems, Java, Python, and Angular.
            </p>

            <p className="text-gray-300">
              Fun fact: I love exploring new trails and I'm always up for new adventures!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-300"
              >
                Get In Touch
              </a>

              <a
                href="../../public/Aditya_Dave_Resume.docx" download
                className="px-6 py-2 rounded-full border border-purple-500 text-purple-500 hover:bg-purple-500/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-purple-500" />,
                title: "Web Development",
                desc: "HTML, CSS, JavaScript, Angular, PHP, SQL; creating responsive and modern web applications.",
              },
              {
                icon: <User className="h-6 w-6 text-purple-500" />,
                title: "UX/UI Design",
                desc: "Designing intuitive user interfaces with Figma and Adobe XD for seamless user experiences.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-purple-500" />,
                title: "Cloud & Networking",
                desc: "AWS, Azure, Cisco systems, and networking tools; implementing efficient cloud and network solutions.",
              },
            ].map((skill, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-purple-500 hover:shadow-lg transition-shadow duration-300 bg-black/30 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-purple-500/10">{skill.icon}</div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-blue-200">{skill.title}</h4>
                    <p className="text-gray-300">{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
