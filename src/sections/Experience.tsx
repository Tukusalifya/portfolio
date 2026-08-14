import { motion, useReducedMotion } from "framer-motion";
import { experience } from "../data/experience.ts";
import { SectionEyebrow } from "../components/SectionEyebrow.tsx";
export function Experience() {
  const reduce = useReducedMotion();
  return (
    <section id="experience" className="border-b border-[#e6e2dc] bg-bg-paper">
      <motion.div
        className="mx-auto max-w-[1100px] px-6 py-20 sm:py-24 lg:min-h-[685px] lg:px-0 lg:py-30"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionEyebrow text="cd experience" />
        <h2 className="mt-7 mb-12 text-[clamp(3.25rem,5.7vw,5.5rem)] leading-[.95] font-extrabold tracking-[-.04em] sm:mb-14">
          Professional{" "}
          <em className="block not-italic text-brush-orange">experience.</em>
        </h2>
        {experience.map((entry) => (
          <article
            className="border-l-2 border-signal-teal pl-5 sm:pl-7"
            key={entry.id}
          >
            <div className="mb-7">
              <p className="mb-5 font-mono text-xs font-bold text-signal-teal">
                $ nano {entry.company.toLowerCase().replaceAll(" ", "-")}
              </p>
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="mb-2 font-mono text-[10px] font-bold tracking-[.16em] text-tag-crimson">
                    COMPANY · {entry.company}
                  </p>
                  <h3 className="text-[clamp(1.3rem,1.8vw,1.7rem)] leading-tight font-bold tracking-[-.04em]">
                    {entry.role}
                  </h3>
                </div>
                <p className="font-mono text-xs text-tag-crimson lg:pb-1">
                  {entry.period}
                </p>
              </div>
            </div>
            <ul className="space-y-4 text-[15px] leading-7 text-zinc-500">
              {entry.bullets.map((bullet) => (
                <li className="flex gap-4" key={bullet}>
                  <span className="font-mono text-brush-orange">&gt;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
