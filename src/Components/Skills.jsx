import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "C / C++", level: 90, category: "programming" },
  { name: "Java", level: 85, category: "programming" },
  { name: "C#", level: 80, category: "programming" },
  { name: "Python", level: 85, category: "programming" },
  { name: "Swift", level: 70, category: "programming" },

  // Web Development
  { name: "HTML / CSS / JavaScript", level: 90, category: "web" },
  { name: "Angular", level: 80, category: "web" },
  { name: "PHP & SQL", level: 75, category: "web" },

  // Machine Learning & AI
  { name: "AWS (AI/ML, EC2, S3)", level: 80, category: "ml" },
  { name: "YOLOv8 / OpenCV", level: 75, category: "ml" },
  { name: "TensorFlow / Scikit-Learn", level: 70, category: "ml" },

  // Cloud & Networking
  { name: "Azure", level: 75, category: "cloud" },
  { name: "Cisco (Routing & Switching)", level: 80, category: "cloud" },
  { name: "Linux / Windows Server", level: 85, category: "cloud" },

  // Tools
  { name: "Git / Docker / Jenkins", level: 80, category: "tools" },
  { name: "Figma / Adobe XD", level: 90, category: "tools" },
  { name: "Power BI / Excel", level: 90, category: "tools" },
  { name: "Jira / Agile", level: 95, category: "tools" },
];

const categories = ["all", "programming", "web", "ml", "cloud", "tools"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
