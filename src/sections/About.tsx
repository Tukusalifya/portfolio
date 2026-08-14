import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data/profile.ts";
import { Education } from "./Education.tsx";
import { SectionEyebrow } from "../components/SectionEyebrow.tsx";
export function About() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="border-b border-[#eee8df] bg-bg-paper">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-14 px-6 py-20 sm:py-24 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-24 lg:px-0 lg:py-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionEyebrow text="cd about" color="tag-crimson" />
          <h2 className="mt-7 mb-9 text-[clamp(3.25rem,5.25vw,5rem)] leading-[.95] font-extrabold tracking-[-.04em]">
            Learn all{" "}
            <em className="block not-italic text-brush-orange">about me.</em>
          </h2>
          {profile.summary.map((paragraph) => (
            <p
              className="mb-7 max-w-[430px] text-[15px] leading-8 text-zinc-500"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
        <motion.div
          className="min-w-0 pt-1 lg:pt-0"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Education />
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-7 border-t border-[#e9e6e1] pt-7 sm:grid-cols-2">
            {Object.entries(profile.personalInfo).map(([label, value]) => (
              <div
                key={label}
                className={label === "certifications" ? "sm:col-span-2" : ""}
              >
                <small className="mb-2 block font-mono text-[10px] font-bold uppercase text-signal-teal">
                  {label.replace(/([A-Z])/g, " $1")}
                </small>
                <strong className="text-xs text-zinc-500 leading-6 font-light">{value}</strong>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
