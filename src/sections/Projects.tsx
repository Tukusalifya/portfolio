import {
  Bell,
  HeartPulse,
  LayoutPanelTop,
  Smartphone,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects.ts";
import { SectionEyebrow } from "../components/SectionEyebrow.tsx";
import { BrandIcon } from "../components/BrandIcon.tsx";
const icons = {
  heart: HeartPulse,
  smartphone: Smartphone,
  layout: LayoutPanelTop,
  bell: Bell,
  terminal: Code2,
};
export function Projects() {
  const reduce = useReducedMotion();
  return (
    <section id="projects" className="bg-bg-cream">
      <motion.div
        className="mx-auto max-w-[1100px] px-6 py-18 sm:py-22 lg:px-0 lg:py-24"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_.85fr] lg:items-end lg:gap-20">
          <div>
            <SectionEyebrow text="cd projects" />
            <h2 className="mt-7 text-[clamp(3.25rem,5.7vw,5.5rem)] leading-[.95] font-extrabold tracking-[-.04em]">
              Selected{" "}
              <em className="block not-italic text-brush-orange">projects.</em>
            </h2>
          </div>
          <p className="max-w-90 text-[15px] leading-6 text-zinc-500 lg:mb-3">
            Small systems, meaningful constraints, and a bias toward making the
            next version clearer.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const Icon = icons[project.icon];
            return (
              <motion.article
                whileHover={
                  reduce
                    ? {}
                    : { y: -3, boxShadow: "10px 11px 0 rgba(26,26,31,.10)" }
                }
                className="flex min-h-[380px] flex-col border border-[#dcd8d3] bg-bg-paper p-6"
                key={project.id}
              >
                <div className="flex justify-between">
                  <code className="font-mono text-xs text-zinc-500">
                    {project.name}
                  </code>
                  <span className="flex gap-1.5">
                    <i className="size-2.5 rounded-full bg-brush-orange" />
                    <i className="size-2.5 rounded-full bg-signal-teal" />
                    <i className="size-2.5 rounded-full bg-tag-crimson" />
                  </span>
                </div>
                <div className="mt-6 flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center border border-brush-orange text-brush-orange">
                    <Icon size={21} />
                  </span>
                  <div>
                    <h3 className="text-[19px] leading-tight font-bold tracking-[-.04em]">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] text-signal-teal">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                <p className="mt-7 text-[15px] leading-6 text-zinc-500">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] text-tag-crimson">
                  {project.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
                <div className="mt-auto border-t border-[#e1ded9] pt-5 font-mono text-[11px] flex items-center gap-2">
                  <span className="mr-5 text-zinc-400">LINKS</span>
                  {project.visibility === "private" ? (
                    <span className="text-tag-crimson">● private code</span>
                  ) : (
                    <>
                      <div className="mr-4 text-ink flex cursor-pointer" onClick={() => window.open(project.githubUrl, "_blank")}>
                        <span className="mr-4 text-ink">view code</span> 
                        <BrandIcon brand="github" size={14} />
                      </div>
                      {project.visibility === "demo+github" && (
                        <a className="text-signal-teal" href={project.demoUrl} target="_blank">
                          live demo ↗
                        </a>
                      )}
                    </>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
