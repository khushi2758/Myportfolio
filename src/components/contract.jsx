import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const Contact = () => {
  const languages = [
     {
       name: "English",
      level: "Fluent Communication",
      filled: 5,
    },
    {
      
       name: "Hindi",
 level:"Fluent Communication",
      filled: 7,
    },
    {
      name: "Bengali",
      level: "Native Proficiency",
      filled: 7,
    },
     
  
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#684040] px-4 sm:px-6 lg:px-10 py-16 -top-50 md:top-0 relative  "
    >
      {/* Heading */}
      <div className="text-center mb-20">
      <h1 className="text-6xl md:text-5xl lg:text-[8rem] font-black uppercase leading-none">
  <span className="text-gray-300 drop-shadow-[2px_1px_0px_rgba(0,0,0,0.25)]">
    GET IN
  </span>{" "}
  <span
    className="text-[#460d0d] 
    [-webkit-text-stroke:2px_white]
    drop-shadow-[2px_1px_0px_rgba(229,75,75,0.5)]"
  >
    TOUCH
  </span>
</h1>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 ">
        {/* Reach Out Card */}
       
       <motion.div className="relative"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
                    <div className="relative inset-0 z-30 top-0 left-65 translate-y-[-80%] md:translate-y-[-60%]  md:left-60  ">
                    <img
                      src="/pin.png"
                      alt=""
                      className="h-21 w-auto md:h-27 "
                    />
                  </div>
        <div className="rounded-[30px] border-4 border-[#471010] bg-[#d6baba] backdrop-blur-md p-6 sm:p-8 md:p-10  shadow-[8px_8px_0px_0px_#471010]  md:rotate-6 hover:rotate-0 transition-all duration-300 relative z-10 -top-30 ">

          <h2 className="text-[#742222] text-3xl sm:text-4xl md:text-5xl font-bold italic mb-10">
            Reach Out
          </h2>

          <div className="space-y-8">
            {/* Email */}
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Kbera5631@gmail.com" target="_blank" rel="noreferrer"
              className="flex flex-col-2  items-center gap-5 md:gap-4   group"
            >
              <div className="md:w-14 md:h-14 w-10 h-10 rounded-md md:rounded-xl bg-[#742222] flex items-center justify-center">
                <FaEnvelope className="text-white text-2xl" />
              </div>

              <span className="text-gray-600 text-base sm:text-lg md:text-xl break-all group-hover:text-[#a11d1d] transition-all">
                Kbera5631@gmail.com
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/khushi2758"
              target="_blank"
              rel="noreferrer"
               className="flex flex-col-2  items-center gap-5 md:gap-4   group"
            >
              <div className="md:w-14 md:h-14 w-10 h-10 rounded-md md:rounded-xl bg-[#742222] flex items-center justify-center">
                <FaGithub className="text-white text-2xl" />
              </div>

              <span className="text-gray-600 text-base sm:text-lg md:text-xl break-all group-hover:text-[#a11d1d] transition-all">
                github.com/khushi2758
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/khushi-bera-49baa6282/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col-2  items-center gap-5 md:gap-4   group"
            >
              <div className="md:w-14 md:h-14 w-15 h-10 rounded-md md:rounded-xl bg-[#742222] flex items-center justify-center">
                <FaLinkedin className="text-white text-2xl" />
              </div>

              <span className="text-gray-600 text-base sm:text-lg md:text-xl break-all group-hover:text-[#a11d1d] transition-all">
                linkedin.com/in/khushi-bera-49baa6282
              </span>
            </a>
          </div>
        </div>
 </motion.div>
    <motion.div className="relative"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
                    <div className="relative inset-0 z-30 top-0 left-65 translate-y-[-80%] md:translate-y-[-60%]  md:left-50   ">
                    <img
                      src="/pin.png"
                      alt=""
                      className="h-20 w-auto md:h-25  "
                    />
                  </div>
        <div className="rounded-[30px] border-4  border-[#471010] bg-[#d6baba] backdrop-blur-md p-6 sm:p-8 md:p-10  shadow-[8px_8px_0px_0px_#471010] md:-rotate-6 hover:rotate-0 transition-all duration-300 relative z-10 -top-30">
          <h2 className="text-[#742222] text-3xl sm:text-4xl md:text-5xl font-bold italic mb-10">
            Languages
          </h2>

          <div className="space-y-10">
            {languages.map((lang, index) => (
              <div key={index}>
                <h3 className="text-gray-600 text-xl sm:text-2xl font-semibold mb-3">
                  {lang.name}
                </h3>

                <div className="flex gap-2 mb-3">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-3 sm:h-4 rounded-full ${
                        i < lang.filled
                          ? "bg-[#692828]"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-sm sm:text-base">
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Contact;