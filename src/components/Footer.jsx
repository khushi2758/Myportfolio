import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#291717] py-20 border-t border-white/10 relative -top-50 h-screen ">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
        
        {/* Navigation */}
        <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
          <a
            href="#About"
            className="text-[#e1b8b8] text-xl md:text-3xl font-extrabold uppercase"
          >
            Home
          </a>

          <span className="text-[#cc6868] text-3xl">•</span>

          <a
            href="#projects"
            className="text-[#e1b8b8] text-xl md:text-3xl font-extrabold uppercase"
          >
            Projects
          </a>

          <span className="text-[#d86767] text-3xl">•</span>

          <a
            href="#contact"
            className="text-[#e1b8b8] text-xl md:text-3xl font-extrabold uppercase"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-8 mt-16">
          <a href="https://github.com/khushi2758" target="_blank" rel="noreferrer">
            <FaGithub className="text-4xl text-gray-300 hover:text-white transition-all" />
          </a>

          <a href="https://www.linkedin.com/in/khushi-bera-49baa6282/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-4xl text-gray-300 hover:text-white transition-all" />
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Kbera5631@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope className="text-4xl text-gray-300 hover:text-white transition-all" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mt-16"></div>

        {/* Copyright */}
        <p className="mt-8 text-gray-400 text-xs md:text-sm font-semibold tracking-widest uppercase">
          © 2026 Khushi Bera. All Rights Reserved.
        </p>
        <div className="p-4 md:p-6 mt-10 bg-[#a46969] rounded-full border-2 border-[#605454] shadow-[8px_8px_0px_0px_#471010] text-sm md:text-md font-extrabold font-mono text-[#650909] md:capitalize rotate-4">
          <p>Designed & Developed  <br/> by Khushi Bera</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;