import { useState, useRef, useEffect } from "react";
import {motion} from "framer-motion";
const projects = [
  {
    period: "2026",
    name: "AI-BASED RESUME ANALYZER",
    role: "FULL STACK DEVELOPMENT",
    description:
      " Developed an AI-based resume analyzer that evaluates resumes, generates real-time feedback, and presents ratings and insights through a responsive dashboard .technologies used: React, Tailwind CSS, React Router, Puter.js and Docker .",
    active: true,
  },
  {
    period: "2026",
    name: "Cosmic Watch – Asteroid Monitoring Platform",
    role: "FRONTEND DEVELOPMENT",
    description:
      "Developed a real-time asteroid monitoring platform using space-agency APIs, featuring an interactive dashboard, risk analysis, and data visualizations to track asteroid movement and potential threats.",
    active: false,
  },
  {
    period: "2024|SIH-2024",
    name: "Railway Traffic Management System",
    role: "FRONTEND DEVELOPMENT",

    description:
      "Built an interactive disaster prediction platform with live weather integration, flood-risk heatmaps, and cross-platform accessibility to forecast and visualize natural calamities.",
    active: false,
  },
];

const TRACK_H = 320;
const THUMB_H = 60;

export default function WorkHistory() {
  const scrollRef = useRef(null);
  const [scrollPct, setScrollPct] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      setScrollPct(max > 0 ? el.scrollTop / max : 0);
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const thumbTop = scrollPct * (TRACK_H - THUMB_H);

  const onThumbDown = (e) => {
    e.preventDefault();
    setDragging(true);
    dragStartY.current = e.clientY;
    dragStartScroll.current = scrollRef.current?.scrollTop || 0;
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      const el = scrollRef.current;
      if (!el) return;
      const delta = e.clientY - dragStartY.current;
      const ratio = delta / (TRACK_H - THUMB_H);
      const max = el.scrollHeight - el.clientHeight;
      el.scrollTop = Math.max(
        0,
        Math.min(max, dragStartScroll.current + ratio * max),
      );
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging]);

  return (
    <div className="min-h-screen p-5  md:p-20 py-5 font-sans  bg-[#885e5ecd] -top-50  md:top-0 relative border-t-1 border-b-1 border-[#4a0505] " id="projects">
      {/* 
    Title */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16  ">
        <motion.div className="select-none"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}>
          <h1 className="text-center text-3xl md:text-7xl font-black tracking-widest uppercase text-white mb-10 underline underline-offset-8 decoration-4 decoration-[#4a0505]">
            MY<span className="text-[#4a0505]">PROJECTS</span>
          </h1>

          {/* Layout: timeline + scrollbar */}
          <div className="flex items-start gap-2 max-w-5xl mx-auto">
            {/* Scrollable area — hide native scrollbar */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-scroll"
              style={{
                maxHeight: `${TRACK_H}px`,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="relative flex gap-0">
                {/* Dashed vertical line */}
                <div className="absolute left-[7px] top-3 bottom-3 border-l-2 border-dashed border-[#3a4f66]" />

                {/* Entries */}
                <div className="flex-1 pl-7 flex flex-col gap-6 pb-20">
                  {projects.map((pro, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      {/* Dot + period */}
                      <div className="flex items-center gap-3 -ml-7">
                        <div className="w-3.5 h-3.5 rounded-full flex-shrink-0 z-20 bg-amber-950 " />
                        <span className="text-[#4a0505] text-xs font-bold italic tracking-widest uppercase">
                          {pro.period}
                        </span>
                      </div>

                      {/* Card */}
                      <div className="bg-[#e3cdcd] rounded-xl border border-[#253345] px-5 py-5">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                          <span className="text-[#7F6269] text-base font-black tracking-wide uppercase">
                            {pro.name}
                          </span>
                          <span className="bg-[#4a0505] text-white text-[11px] font-bold tracking-wide uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                            {pro.role}
                          </span>
                        </div>
                        <p className="text-[#7a8fa8] text-sm leading-relaxed m-0">
                          {pro.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom scrollbar */}
            <div
              className="w-1.5 rounded-full bg-[#d0bbbf] flex-shrink-0 relative"
              style={{ height: `${TRACK_H}px` }}
            >
              <div
                className={`absolute left-0 w-1.5 bg-[#4a0505] rounded-full ${
                  dragging ? "cursor-grabbing" : "cursor-grab"
                }`}
                style={{
                  height: `${THUMB_H}px`,
                  top: `${thumbTop}px`,
                  transition: "top 0.05s",
                }}
                onMouseDown={onThumbDown}
              />
            </div>
          </div>
        </motion.div>
        <motion.div className="w-full  lg:w-[580px] relative group cursor-crosshair -top-5    p-3  "
           initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.50] pointer-events-none select-none z-0 h-67 md:h-130 w-auto md:pt-10  ">
            <img
              src="/grd.jpg"
              alt=""
              cover
              className="w-full h-full object-cover rounded-full "
            />
          </div>
          <div className="z-10 relative inset-10  ">
            <img
              src="/imag2.jpg"
              alt=""
              cover
              className="w-full h-auto object-cover"
            />
            <a href="/cv.pdf" download>
            <button className="bg-[#4a0505] border-2 border-white font-mono shadow-2xl shadow-amber-950 text-white text-md md:text-2xl px-4 py-2 z-30 rounded-full hover:bg-[#750909] transition-colors z-30 w-50 h-10 md:w-90 md:h-20 -top-30 -translate-y-[95%]">
              Download Resume
            </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
