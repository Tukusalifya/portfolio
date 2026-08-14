import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data/profile.ts";
import { BrandIcon } from "../components/BrandIcon.tsx";
import { TagPill } from "../components/TagPill.tsx";
import { TypingText } from "../components/TypingText.tsx";
const heroItem = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};
const button =
  "inline-flex h-11 items-center justify-center border px-5 font-mono text-[11px] font-bold transition-colors duration-200";
export function Hero() {
  const reduce = useReducedMotion();
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}`;
  return (
    <section id="top" className="border-b border-[#eee8df] bg-bg-cream">
      <div className="mx-auto grid min-h-[660px] max-w-[1100px] grid-cols-[1fr_.82fr] items-center gap-14 px-6 py-12 max-md:grid-cols-1 max-md:gap-5 max-md:py-10 lg:px-0">
        <div>
          <motion.div
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            initial={reduce ? false : "initial"}
            animate="animate"
          >
            <motion.p
              variants={heroItem}
              className="mb-4 font-mono text-[11px] font-bold text-signal-teal"
            >
              ~/ $ whoami
            </motion.p>
            <motion.h1
              variants={heroItem}
              className="mb-6 text-[clamp(3.4rem,5.75vw,5.5rem)] leading-[.95] font-extrabold tracking-[-.04em]"
            >
              {profile.name.first}
              <span className="block text-brush-orange">
                {profile.name.last}
              </span>
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="max-w-130 text-[15px] leading-8 text-zinc-500"
            >
              Software Engineer &amp; Problem Solver. I enjoy turning ideas into
              software, figuring out how things work, and solving problems
              through code.
            </motion.p>
            <motion.div
              variants={heroItem}
              className="mt-5 flex max-w-135 flex-wrap gap-2"
            >
              {profile.roleTags.map((tag) => (
                <TagPill
                  key={tag.label}
                  label={tag.label}
                  color={tag.colorToken}
                />
              ))}
            </motion.div>
            <motion.div
              variants={heroItem}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a
                className={`${button} border-ink bg-ink text-white hover:border-bg-paper hover:bg-bg-paper hover:text-ink`}
                href={profile.cvPath}
                download="Tukusalifya Sichali CV.pdf"
              >
                $ download_cv.pdf
              </a>
              <a
                className={`${button} border-signal-teal bg-signal-teal text-white hover:bg-bg-paper hover:text-signal-teal`}
                href="/projects"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                view projects ↗
              </a>
              <a
                className={`${button} border-tag-crimson text-tag-crimson hover:bg-tag-crimson hover:text-white`}
                href="/contact"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                get in touch ↗
              </a>
            </motion.div>
            <motion.p
              variants={heroItem}
              className="my-4 font-mono text-[11px] font-bold"
            >
              <TypingText text={profile.tagline} />
            </motion.p>
            <motion.div
              variants={heroItem}
              className="flex items-center gap-4 text-zinc-500"
            >
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <BrandIcon brand="github" size={19} />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BrandIcon brand="linkedin" size={19} />
              </a>
              <a
                href={gmail}
                target="_blank"
                rel="noreferrer"
                aria-label="Compose in Gmail"
              >
                <BrandIcon brand="gmail" size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="relative self-center max-md:order-first"
        >
          <img
            className="mx-auto block w-full max-w-[430px]"
            src="/images/Artboard%201.png"
            alt="Tukusalifya Sichali"
          />
          <p className="mt-1 text-right font-mono text-[10px] font-bold text-tag-crimson -rotate-4 max-md:text-center">
            {profile.availability}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
