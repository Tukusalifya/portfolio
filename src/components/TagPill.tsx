import { motion, useReducedMotion } from "framer-motion";
import type { Skill } from "../data/skills";
const colorClasses: Record<Skill["colorToken"], string> = {
  "brush-orange": "border-brush-orange text-brush-orange",
  "signal-teal": "border-signal-teal text-signal-teal",
  "tag-crimson": "border-tag-crimson text-tag-crimson",
};
export function TagPill({
  label,
  color,
}: {
  label: string;
  color: Skill["colorToken"];
}) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      initial={reduce ? false : { opacity: 0, scale: 0.9 }}
      whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`inline-block min-w-25 border px-2.5 py-1 font-mono text-[10px] leading-[1.1] font-bold ${colorClasses[color]}`}
    >
      {label}
    </motion.span>
  );
}
