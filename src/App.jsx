import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";
import { Icon } from "@iconify/react";
import Projects from "./components/Projects";
import Contract from "./components/contract";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
function App() {
  return (
    <div className="bg-[#B18B8B] text-white min-h-screen pt-10 border-t border-white/5  font-mono relative overflow-hidden ">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none uppercase select-none z-0 top-0">
        <h1 className="text-[30vw] font-black text-white leading-none tracking-tighter">
          KHUSHI
        </h1>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-6 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8  ">
          <About />
          {}
          <div className="text-right space-y-2 border-l border-white/10 pl-8 hidden md:block">
            <p className="text-[10px] text-yellow/50 tracking-widest">
              STATUS: <span className="text-pink-400">ONLINE</span>
            </p>
            <p className="text-[10px] text-yellow/50 tracking-widest">
              ROLE: FRONTEND DEV
            </p>
            <p className="text-[10px] text-amber-500 tracking-widest">
              ABOUT
            </p>
          </div>
        </div>
        {}
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-24 "
         >
          <motion.div className="w-full  lg:w-[480px] relative group cursor-crosshair "
            initial={{ x: -100, opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}>
            <div className="z-10 relative inset-10 ">
              <img
                className="w-full h-auto object-cover      "
                src="/imag.png"
                alt=""
              />

              {}
              <div className="absolute   translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[1.5s] pointer-events-none "></div>
            </div>
            <div className="z-10 absolute inset-10 top-[85%] translate-y-[130%]  ">
              <div className=" bg-[#7F6269]/50 backdrop-blur-3xl  flex h-20 w-130  justify-content items-center border-4 border-[#f2ecec] md:rounded-bl-4xl md:rounded-tl-4xl md:p-10 p-6 sm:text-md text-[#faf5f5] font-bold lg:text-2xl rounded-bl-2xl  rounded-tl-2xl ">
                FRONTEND DEVELOPER
              </div>
            </div>
          </motion.div>
          {}
          <motion.div className="flex-1 space-y-12 pt-10"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div>
                  {" "}
                  <div className="relative inset-0 z-20 top-0 left-55 translate-y-[-98%] lg:translate-y-[-90%]  md:left-70  ">
                    <img
                      src="/pin.png"
                      alt=""
                      className="h-18 w-auto lg:h-20"
                    />
                  </div>
                  <h2 className="md:text-2xl text-xl  font-extrabold tracking-widest bg-amber-50/70 backdrop-blur-3xl px-4 py-2  border border-[#672323] relative inset-0 z-10 -top-30 translate-y-[10%] shadow-xl text-[#672322]">
                    
                      // Hello,<span className="text-[#6a6b73]">
                      <br/> My name is Khushi Bera   
                    </span>
                  </h2>
                  
                </div>
              </div>

              <div className="relative inset-0 z-10 md:top-0 top-5  translate-y-[-50%] lg:translate-y-[-90%]   ">
                <div className="absolute   bg-transparent backdrop-invert-25   p-2 h-7  w-30 inset-10 z-20 shadow-2xl top-0 left-[-1%] translate-y-[-10%]  translate-x-[-12%] md:translate-y-[-55%] rotate-[-30deg]  "></div>
                <p className="text-[#6a6b73] border-[#672323] border-2  text-sm leading-relaxed tracking-wider normal-case font-sans    pl-6  bg-[#F4E1E0]/80 py-4 shadow-2xl">
                  "I create immersive frontend experiences where modern development meets aesthetic design. Passionate about React, Next.js, and interactive UI engineering, I craft sleek digital products while exploring modern technologies and impactful user-centered experiences."
                </p>
                <div className="absolute bg-transparent backdrop-invert-25   p-2 h-7  w-30 inset-10 z-20  shadow-2xl left-[67%]  top-50 rotate-[-30deg] translate-y-[-25%] md:translate-y-[-20%] md:top-20 lg:left-[88%]"></div>
              </div>
            </div>
            {}
            <div className="relative inset-0 z-10 top-15 translate-y-[-35%] md:translate-y-[-70%]  ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-8 pt-2 border-t border-white/5 bg- ">
                <div>
                  <div className="relative inset-0 z-20 top-40 md:top-47  translate-y-[-70%] left-[-1%]   translate-x-[-9%] rotate-[35deg]  ">
                    <img
                      src="/pin2.jpg"
                      alt=""
                      className="h-23 w-auto lg:h-25"
                    />
                  </div>
                  <div className="border border-[#672323] p-6 hover:border-white/20 transition-colors bg-amber-50/70 backdrop-blur-lg shadow-2xl  rotate-2 ">
                    <p className="text-[20px] text-[#672323] mb-5 tracking-widest font-bold underline decoration-[#672323] decoration-2 ">
                      Tech Stack
                    </p>

                    <div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {[
                        {
                          name: "logos:react",
                          bg: "from-cyan-400 to-blue-500",
                        },
                        {
                          name: "logos:nextjs-icon",
                          bg: "from-zinc-800 to-black",
                        },
                        {
                          name: "logos:tailwindcss-icon",
                          bg: "from-cyan-300 to-cyan-500",
                        },
                        {
                          name: "logos:javascript",
                          bg: "from-yellow-400 to-yellow-100",
                        },
                        {
                          name: "logos:nodejs-icon",
                          bg: "from-green-400 to-green-600",
                        },
                        {
                          name: "logos:typescript-icon",
                          bg: "from-blue-400 to-blue-700",
                        },
                        {
                          name: "logos:java",
                          bg: "from-orange-400 to-red-500",
                        },
                        {
                          name: "logos:c",
                          bg: "from-blue-500 to-blue-700",
                        },
                        {
                          name: "logos:c-plusplus",
                          bg: "from-blue-400 to-indigo-700",
                        },
                        {
                          name: "logos:bootstrap",
                          bg: "from-purple-500 to-violet-700",
                        },
                        {
                          name: "logos:mongodb-icon",
                          bg: "from-green-500 to-emerald-700",
                        },
                      ].map((tech, index) => (
                        <div
                          key={index}
                          className={`
      w-10 h-10
      sm:w-10 sm:h-10
      md:w-12 md:h-12

      rounded-2xl
      bg-gradient-to-br ${tech.bg}

      flex items-center justify-center
      mx-auto

      shadow-md
      hover:scale-110
      transition-all duration-300
      cursor-pointer
      `}
                        >
                          <Icon
                            icon={tech.name}
                            className="
        w-7 h-7
        sm:w-7 sm:h-7
        md:w-10 md:h-10
        "
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                      <div>
                  <div className="relative inset-0 z-20 top-40 md:top-45  translate-y-[-70%] left-[-1%]   translate-x-[67%] rotate-[30deg] ">
                    <img
                      src="/pin2.jpg"
                      alt=""
                      className="h-23 w-auto lg:h-25"
                    />
                  </div>
                <div className="border border-[#672323] p-6 hover:border-white/20 transition-colors bg-amber-50/70 backdrop-blur-lg shadow-2xl  rotate-[-2deg] z-20 text-[#634646] border-1 border-[#672323] top-[-10%] ">
                  <p className="text-[20px] text-[#672323] mb-5 tracking-widest font-bold underline decoration-[#672323] decoration-2 ">
                    Education
                  </p>

                  {/* Content */}
                  <div className="flex items-start gap-6">
                    {/* Year */}
                    <div className="text-center">
                      <p className="text-xl md:text-3xl font-semibold text-[#6a6b73]">
                        2023
                      </p>

                      <h2 className="text-2xl md:text-5xl font-bold leading-none">
                        2027
                      </h2>
                    </div>

                    {/* Vertical Line */}
                    <div className="w-[2px] h-28 text-[#6a6b73]"></div>

                    {/* Details */}
                    <div>
                      <h2 className="text-md md:text-xl font-bold leading-tight">
                        Computer Science <br />
                        Engineering
                      </h2>

                      <p className="text-[#6a6b73] text-xl mt-4  font-bold ">
                        Techno India University
                      </p>
                    </div>
                  </div>
                </div>
               </div> 
              </div>
            </div>
          </motion.div>
        </div>

        {}
        
      </div>
      <Projects />
      <Contract />
      <Footer/>
    </div>
  );
}

export default App;
