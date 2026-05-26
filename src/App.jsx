import { useState, useEffect } from "react";

export default function App() {

  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Open Source Learner",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[index];

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const erase = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 2000);

      return () => clearTimeout(erase);
    }
  }, [charIndex, index]);

  return (
    <div className="bg-[#050414] text-white min-h-screen overflow-x-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">

        <h1 className="text-3xl font-bold text-cyan-400">
          Ujala
        </h1>

        <div className="flex gap-4 md:gap-6 text-sm md:text-base">

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 leading-tight">

          Hi, I'm{" "}

          <span className="text-cyan-400 drop-shadow-[0_0_20px_cyan]">
            Ujala Saroj
          </span>

        </h1>

        {/* Typing Animation */}
        <h2 className="text-2xl md:text-4xl text-cyan-300 mb-8 h-12">
          {text} |
        </h2>

        <p className="max-w-3xl text-gray-300 text-lg leading-relaxed mb-10">

          Final year B.Tech student passionate about
          Artificial Intelligence, Machine Learning,
          scalable backend systems and modern responsive web applications.

        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5 justify-center">

          <a
            href="/resumenew.pdf"
            download="Ujala_Saroj_Resume.pdf"
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold transition hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/ujala9968"
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-400 hover:text-black transition"
          >
            GitHub
          </a>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 md:px-10 py-24"
      >

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          About Me
        </h2>

        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg border border-white/10 p-10 rounded-3xl hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-500">

          <p className="text-lg text-gray-300 leading-relaxed">

            I enjoy building AI-powered systems,
            scalable APIs and modern frontend experiences.
            My interests include Machine Learning,
            FastAPI, React.js and software engineering.

          </p>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 md:px-10 py-24"
      >

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">

          {/* Project 1 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-3 hover:shadow-green-500/30 hover:shadow-2xl transition duration-500 flex flex-col justify-between">

            <div>

              <h3 className="text-2xl font-bold mb-4 text-cyan-300">
                Waste Management App
              </h3>

              <p className="text-gray-300 mb-5">
                Smart waste management platform with modern UI,
                responsive design and efficient waste tracking system.
              </p>

            </div>

            <a
              href="https://v0-waste-management-app-fawn.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline mt-auto"
            >
              Live Demo →
            </a>

          </div>

          {/* Project 2 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-3 hover:shadow-cyan-500/30 hover:shadow-2xl transition duration-500 flex flex-col justify-between">

            <div>

              <h3 className="text-2xl font-bold mb-4 text-cyan-300">
                EduMentor AI
              </h3>

              <p className="text-gray-300 mb-5">
                AI-powered intelligent learning assistant
                built using Python and FastAPI.
              </p>

            </div>

            <a
              href="https://github.com/ujala9968/EduMentor-AI"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline mt-auto"
            >
              View Project →
            </a>

          </div>

          {/* Project 3 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-3 hover:shadow-purple-500/30 hover:shadow-2xl transition duration-500 flex flex-col justify-between">

            <div>

              <h3 className="text-2xl font-bold mb-4 text-cyan-300">
                Fraud Detection System
              </h3>

              <p className="text-gray-300 mb-5">
                Machine learning fraud detection model
                trained on 280K+ transactions.
              </p>

            </div>

            <a
              href="https://github.com/ujala9968/CreditCardDetection"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline mt-auto"
            >
              View Project →
            </a>

          </div>

          {/* Project 4 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-3 hover:shadow-pink-500/30 hover:shadow-2xl transition duration-500 flex flex-col justify-between">

            <div>

              <h3 className="text-2xl font-bold mb-4 text-cyan-300">
                Zentra Platform
              </h3>

              <p className="text-gray-300 mb-5">
                Modern React-based student community platform.
              </p>

            </div>

            <a
              href="https://github.com/ujala9968"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline mt-auto"
            >
              View Project →
            </a>

          </div>

        </div>

      </section>

      {/* Skills */}
      <section
        id="skills"
        className="px-6 md:px-10 py-24"
      >

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-5">

          {[
            "Python",
            "React",
            "FastAPI",
            "Machine Learning",
            "Flask",
            "Tailwind CSS",
            "SQL",
            "GitHub",
            "JavaScript",
            "REST APIs",
          ].map((skill, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-400 hover:text-black transition duration-300 hover:scale-110"
            >
              {skill}
            </div>
          ))}

        </div>

      </section>
      {/* Education */}
<section
  id="education"
  className="px-6 md:px-10 py-24"
>
  <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
    Education
  </h2>

  <div className="max-w-4xl mx-auto space-y-6">

    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:shadow-cyan-500/20 hover:shadow-2xl transition">
      <h3 className="text-2xl font-bold text-cyan-300">
        B.Tech (Computer Science) speacilizing in AI/ML
      </h3>
      <p className="text-gray-300 mt-2">
        UJALA SAROJ
      </p>
      <p className="text-gray-400 mt-1">
        2023 - 2027 
      </p>
      <p className="text-gray-400 mt-1">
        CGPA: 8.1 
      </p>
    </div>

  </div>
</section>
          {/* Certificates */}
{/* Certificates */}
<section
  id="certificates"
  className="px-6 md:px-10 py-24"
>
  <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
    Certificates
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

    {[
      {
        name: "Programming Fundamentals",
        img: "/certificates/c1.jpg"
      },
      {
        name: "Web Development",
        img: "/certificates/c2.jpg"
      },
      {
        name: "Machine Learning Basics",
        img: "/certificates/c3.jpg"
      },
      {
        name: "React JS Certificate",
        img: "/certificates/c4.jpg"
      }
    ].map((cert, i) => (
      <div
        key={i}
        onClick={() => setSelectedCert(cert.img)}
        className="cursor-pointer bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:-translate-y-2 hover:shadow-cyan-500/30 transition"
      >
        <h3 className="text-xl font-semibold text-cyan-300">
          {cert.name}
        </h3>

        <p className="text-gray-400 mt-2">
          Click to preview certificate
        </p>
      </div>
    ))}

  </div>
</section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 md:px-10 py-24 text-center"
      >

        <h2 className="text-5xl font-bold text-cyan-400 mb-16">
          Contact
        </h2>

        <div className="flex flex-col items-center gap-5 text-xl">

          <a
            href="mailto:ujalasaroj9968@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            📧 Email Me
          </a>

          <a
            href="https://github.com/ujala9968"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ujala-saroj-9968s/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            🔗 LinkedIn
          </a>

        </div>

      </section>
      {/* Certificates */}
<section
  id="certificates"
  className="px-6 md:px-10 py-24"
>
  <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
    Certificates
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

    {[
      "Python Programming Certificate",
      "Web Development Certificate",
      "Machine Learning Basics",
      "React.js Certification"
    ].map((cert, i) => (
      <div
        key={i}
        className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:-translate-y-2 hover:shadow-purple-500/30 transition"
      >
        <h3 className="text-xl font-semibold text-cyan-300">
          {cert}
        </h3>
        <p className="text-gray-400 mt-2">
          Issued by: Add Platform (Coursera / Udemy / College etc.)
        </p>
      </div>
    ))}

  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-white/10 text-center py-8 text-gray-400">

        © 2026 Ujala Saroj • AI/ML Portfolio

      </footer>

    </div>
  );
}