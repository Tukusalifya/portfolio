import { motion, useReducedMotion } from "framer-motion";
import { education } from "../data/education.ts";
export function Education() {
  const reduce = useReducedMotion();
  return (
    <div className="ml-0.5 border-l border-[#f7a06d] pl-5.5">
      {education.map((item, index) => (
        <motion.article
          initial={reduce ? false : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 }}
          className="relative pb-6.75 last:pb-8.5"
          key={item.id}
        >
          <i className="absolute -left-[27px] top-0.75 size-2.25 rounded-full bg-brush-orange" />
          <p className="mb-2 font-mono text-[10px] font-bold text-signal-teal">
            {item.period}
          </p>
          <h3 className="mb-1 text-[15px] font-bold">{item.institution}</h3>
          <span className="text-xs text-zinc-500">{item.description}</span>
        </motion.article>
      ))}
    </div>
  );
}
