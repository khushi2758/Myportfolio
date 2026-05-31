import React from 'react'
import {motion} from "framer-motion";
const About = () => {
  return (
    <div className="relative" ID="About" 
 >
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.10] pointer-events-none select-none z-0 h-100 w-200 ">
        <img src="/grid.png" alt="" cover />
      </div>
      <motion.div className="w-full lg:w-[480px] relative group cursor-crosshair "
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div className="absolute -top-3 md:-left-5  w-10 h-10 border-t-6 border-l-6 text-[#857f7f]  left-[-4%]"></div>
        <div className="flex items-center gap-3 m">
          <span className="w-3 h-3 bg-[#672323] animate-pulse rounded-full"></span>
          <p className="text-[#672323] text-sm font-bold tracking-[0.5em] sm:text-xsm">
            // WELCOME TO MY
          </p>
        </div>
        <h1 className="text-5xl md:text-9xl sm:text-2xl font-extrabold tracking-tighter leading-none text-[#601212]">
          PORT
          <span
            className="text-[#857f7f] "
            style={{
              WebkitTextStroke: "2px #854D27",
            }}
          >
            FOLIO
          </span>
        </h1>

        <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-6 border-r-6 text-[#561515] md:-right-60 md:top-25"></div>
      </motion.div>
    </div>
  )
}

export default About