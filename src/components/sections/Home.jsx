import { RevealOnScroll } from "../RevealOnScroll";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background via-black/60 to-background/90"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-6 max-w-4xl">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-fade-up">
            Hi, I'm Akhil V
          </h1>

          {/* Role */}
          <p className="text-primary font-semibold text-xl md:text-2xl mb-4">
            Front-End React.js Developer
          </p>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            I'm a passionate front-end developer with a strong foundation in React.js, Tailwind CSS, and modern JavaScript. I love creating fast, responsive, and clean web applications with pixel-perfect UI and seamless UX.
          </p>

          {/* Social / Contact */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm sm:text-base">
            <a
              href="mailto:akhiljithu1999@gmail.com"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
            >
              <Mail className="w-5 h-5" /> akhiljithu1999@gmail.com
            </a>
            <a
              href="tel:+971562476897"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition"
            >
              <Phone className="w-5 h-5" /> +971562476897
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-v-33a226190/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="https://github.com/Akhil535"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-green-500/40"
            >
              🚀 View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500 text-blue-400 py-3 px-6 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-blue-500/30"
            >
              ✉️ Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
