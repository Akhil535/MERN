import { RevealOnScroll } from "../RevealOnScroll";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import SplitText from "../../components/reactbits/SplitText";
import RotatingText from "../../components/reactbits/RotatingText";
import ProfileCard from "../reactbits/ProfileCard";
import ProfilePic from "../../assets/profile/Akhil.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background via-black/60 to-background/90 overflow-x-hidden"
    >
      <RevealOnScroll>
        <div
          className="w-full max-w-6xl px-4 sm:px-6 md:px-8 mx-auto"
          style={{
            marginTop: "77px",
            marginBottom: "77px",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
            {/* Left Side - Content */}
            <div className="flex-1 text-center md:text-left min-w-0">
              {/* Title */}
              <div className="flex flex-row flex-wrap items-center justify-center md:justify-start mb-8">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold px-2 py-1 text-white">
                  Hi,
                </span>
                <RotatingText
                  texts={["Developers", "I'm Akhil"]}
                  mainClassName="text-2xl sm:text-3xl md:text-4xl font-bold px-2 py-1 bg-white-300 text-white rounded-lg"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.045}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={4000}
                />
              </div>

              {/* Role */}
              <p className="text-primary font-semibold text-xl md:text-2xl mb-4">
                Front-End React.js Developer
              </p>

              {/* Description */}
              <SplitText
                text="I'm a passionate front-end developer with a strong foundation in React.js, Tailwind CSS, and modern JavaScript. I love creating fast, responsive, and clean web applications with pixel-perfect UI and seamless UX."
                className="text-gray-400 text-left text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-0"
                delay={200}
                duration={0.6}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
              />

              {/* Social Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8 text-sm sm:text-base">
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
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#projects"
                  className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-green-500/40"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="border border-blue-500 text-blue-400 py-3 px-6 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-blue-500/30"
                >
                   Contact Me
                </a>
              </div>
            </div>

            {/* Right Side - Profile Card */}
            <div className="flex-1 flex justify-center md:justify-end w-full md:max-w-[400px] min-w-0 px-6 md:px-0">
              <ProfileCard
                name="Akhil V"
                title="React Developer"
                handle="@akhil535"
                status="Online"
                contactText="Contact Me"
                avatarUrl={ProfilePic}
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
