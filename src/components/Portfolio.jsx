import { useState } from "react";
import {Projects} from "./Projects.js";
import myPhoto from "../assets/photo.jpg";

export default function Portfolio({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");


  return (
    <div className={`min-h-screen transition-colors duration-200 ${ theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>

      {/* NAVBAR */}
      <nav className={`w-full py-4 shadow backdrop-blur fixed top-0 left-0 z-50 transition-colors duration-300 ${theme === "dark" ? "bg-gray-800/70" : "bg-white/70"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">MyPortfolio</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-medium">
            <a href="#home" className="hover:text-blue-500 dark:hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
            <a href="#resume" className="hover:text-blue-500 dark:hover:text-blue-400">Resume</a>
            <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a>

            {/* Dark Mode Button */}
            <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-xl ${theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-300 text-gray-900 hover:bg-gray-200"}`}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl font-bold"
            >
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden px-6 py-4 space-y-4 text-lg transition-colors duration-200 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
          <a href="#home" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500 dark:hover:text-blue-400">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500 dark:hover:text-blue-400">About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500 dark:hover:text-blue-400">Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
            <a href="#resume" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500 dark:hover:text-blue-400">Resume</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500 dark:hover:text-blue-400">Contact</a>

            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-xl ${theme === "dark" ? "bg-gray-900 text-white hover:bg-gray-700" : "bg-gray-300 text-gray-900 hover:bg-gray-200"}`}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
  id="home"
  className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-4 pt-20"
>
  {/* LEFT SIDE — TEXT */}
  <div className="text-center md:text-left max-w-xl">
    <h2 className="text-5xl font-bold mb-4">
      Hi, I'm <span className="text-blue-500">Eden</span>
    </h2>
    <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
      A Frontend Developer building clean and modern web experiences.
    </p>

    <a
      href="#projects"
      className="inline-block mt-6 px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
    >
      View My Work
    </a>
  </div>

  {/* RIGHT SIDE — IMAGE */}
  <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
    <img
      src={myPhoto}
      alt="My Profile"
      className="w-full h-full object-cover"
    />
  </div>
</section>


      {/* ABOUT */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl leading-relaxed">I am a passionate developer who loves creating beautiful and functional user interfaces using React and Tailwind CSS.</p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {['HTML','CSS','JavaScript','React','TailwindCSS'].map(skill => (
              <div key={skill} className={`p-4 rounded-xl shadow ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"} text-center font-semibold`}>{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Projects.map(p => (
              <div key={p.id} className={`items-center  justify-center p-6 rounded-2xl shadow ${theme === "dark" ? "bg-gray-800 text-white shadow-gray-950" : "bg-gray-200 text-gray-900 shadow-gray-400"}`}>
                <div className={`h-40 flex rounded-xl ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} mb-4 items-center justify-center`}>
                  <a href={p.link} target="blank"><img className="h-38 w-auto rounded items-center object-fill justify-center cursor-pointer" src = {p.img}/></a>
                  </div>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className={`text-md ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Resume</h2>
          <p className="text-lg mb-6">View my full resume below.</p>
            <a href="/Resume.pdf" target="blank" className={`px-6 py-3  rounded-xl text-lg ${theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}>View Resume</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="mb-8 text-lg">Feel free to reach out for collaborations or any questions!</p>
          <a href="mailto:eduedensahle@gmail.com" className="px-6 py-3 rounded-xl text-lg text-blue-600">eduedensahle@gmail.com</a>
          <a 
                href="https://t.me/@ed_en_123" 
                target="_blank">
                    <img className="inline-block w-5 h-5 m-2.5" 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" 
                    alt="Telegram" />
                </a>
                <a 
                    href="https://www.instagram.com/eden_sahlie" 
                    target="_blank">
                        <img className="inline-block w-5 h-5 m-2.5"
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                        alt="Instagram"/>
                    </a>
                <a 
                    href="https://github.com/Eden1916" 
                    target="_blank">
                        <img className={`inline-block w-5 h-5 m-2.5 ${theme === "dark" ? "filter invert" : ""}`}
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                        alt="GitHub" />
                </a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm">
        © 2025 MyPortfolio — All Rights Reserved.
      </footer>
    </div>
  );
}
