import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import CountUp from "../reactbits/Countup";

// Skill Icons
import htmlIcon from "../../assets/skills/html.png";
import jsIcon from "../../assets/skills/javascript.png";
import reactIcon from "../../assets/skills/react.png";
import angularIcon from "../../assets/skills/angular.png";
import tsIcon from "../../assets/skills/typescript.png";
import tailwindIcon from "../../assets/skills/tailwind.png";
import bootstrapIcon from "../../assets/skills/bootstrap.png";
import nodeIcon from "../../assets/skills/node.png";
import mysqlIcon from "../../assets/skills/mysql.png";
import mongoIcon from "../../assets/skills/mongo.png";
import gitIcon from "../../assets/skills/git.png";
import vscodeIcon from "../../assets/skills/vscode.png";
import dockerIcon from "../../assets/skills/docker.png";
import figmaIcon from "../../assets/skills/figma.png";

// Skills data
const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend", details: "Expert in HTML and CSS.", icon: htmlIcon },
  { name: "JavaScript", level: 90, category: "frontend", details: "Proficient in ES6+.", icon: jsIcon },
  { name: "React", level: 95, category: "frontend", details: "Advanced in React hooks.", icon: reactIcon },
  { name: "Angular", level: 80, category: "frontend", details: "SPA development using Angular.", icon: angularIcon },
  { name: "TypeScript", level: 70, category: "frontend", details: "Typed JS with TypeScript.", icon: tsIcon },
  { name: "Tailwind CSS", level: 90, category: "frontend", details: "Utility-first CSS framework.", icon: tailwindIcon },
  { name: "Bootstrap", level: 75, category: "frontend", details: "Quick UI prototyping.", icon: bootstrapIcon },
  { name: "Node", level: 80, category: "backend", details: "Backend APIs using Node.js.", icon: nodeIcon },
  { name: "MySQL", level: 80, category: "backend", details: "Relational DB expert.", icon: mysqlIcon },
  { name: "MongoDB", level: 85, category: "backend", details: "NoSQL database knowledge.", icon: mongoIcon },
  { name: "Git/GitHub", level: 95, category: "tools", details: "Version control.", icon: gitIcon },
  { name: "VS Code", level: 95, category: "tools", details: "Coding environment.", icon: vscodeIcon },
  { name: "Docker", level: 60, category: "tools", details: "Containerization basics.", icon: dockerIcon },
  { name: "Figma", level: 85, category: "tools", details: "UI/UX prototyping.", icon: figmaIcon },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 px-4 relative bg-background/60 backdrop-blur-md">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl mb-12 text-center font-bold bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full capitalize border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-background border-primary shadow-md"
                  : "bg-transparent text-foreground border-border hover:bg-border/20 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const isActive = hoveredSkill === skill;
            return (
              <RevealOnScroll key={idx}>
                <div
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`relative rounded-lg border p-4 flex flex-col items-center justify-center text-center cursor-pointer
                    bg-white/30 backdrop-blur-md border-white/30 shadow-md
                    dark:bg-gray-900 dark:border-gray-700
                    transform transition duration-300 hover:shadow-xl
                    ${isActive ? "scale-105 bg-primary/80 text-white" : "text-foreground dark:text-gray-300"}`}
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                  <h3 className="font-semibold text-lg mb-1 select-none">{skill.name}</h3>

                  {/* Progress bar */}
                  <div className="w-full h-3 rounded-full bg-secondary/40 overflow-hidden mb-2">
                    <div
                      className={`h-3 rounded-full transition-[width] duration-700 ease-out ${
                        isActive ? "bg-blue-500" : "bg-primary"
                      }`}
                      style={{ width: isActive ? `${skill.level}%` : "0%" }}
                    ></div>
                  </div>

                  {/* CountUp percentage */}
                  <div className="text-sm font-medium">
                    <CountUp to={skill.level} duration={1.5} />
                    %
                  </div>

                  <p
                    className={`mt-2 text-xs leading-snug transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    {isActive ? skill.details : "Hover to see details"}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
