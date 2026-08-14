import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../data/skills.ts";
import { TagPill } from "../components/TagPill.tsx";
import { SectionEyebrow } from "../components/SectionEyebrow.tsx";
const label: Record<keyof typeof skills, string> = {
  expertise: "<Expertise />",
  languages: "<Languages />",
  frameworks: "<Frameworks & Libraries />",
  tools: "<Tools & Technologies />",
};
const tags = (items: typeof skills.expertise) => (
  <div className="flex flex-wrap gap-1.5">
    {items.map((skill) => (
      <TagPill key={skill.label} label={skill.label} color={skill.colorToken} />
    ))}
  </div>
);
export function Skills() {
  const reduce = useReducedMotion();
  return (
    <section id="skills" className="border-y border-[#eee8df] bg-bg-cream">
      <motion.div
        className="mx-auto max-w-[1100px] px-6 py-24 lg:px-0"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionEyebrow text="cd skills" />
        <h2 className="mt-7 text-[clamp(3.5rem,5.7vw,5.5rem)] leading-[.95] font-extrabold tracking-[-.04em]">
          Technologies{" "}
          <em className="block not-italic text-brush-orange">I use.</em>
        </h2>
        <div className="mt-14 grid grid-cols-2 gap-x-20 gap-y-10 max-md:grid-cols-1">
          <div className="col-span-2 max-md:col-span-1">
            <h3 className="mb-5 font-mono text-[13px] font-bold text-tag-crimson">
              {label.expertise}
            </h3>
            {tags(skills.expertise)}
          </div>
          {(["languages", "frameworks", "tools"] as const).map((group) => (
            <div key={group}>
              <h3 className="mb-5 font-mono text-[13px] font-bold text-tag-crimson">
                {label[group]}
              </h3>
              {tags(skills[group])}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
