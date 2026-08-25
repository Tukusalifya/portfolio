import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
// import { useState } from "react";
import { profile } from "../data/profile.ts";
import { BrandIcon } from "../components/BrandIcon.tsx";
import { SectionEyebrow } from "../components/SectionEyebrow.tsx";

export function Contact() {
  const reduce = useReducedMotion();
  // const [copied, setCopied] = useState(false);
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}`;
  // const copyPhone = async () => {
  //   await navigator.clipboard.writeText(profile.contact.phone);
  //   setCopied(true);
  //   window.setTimeout(() => setCopied(false), 1500);
  // };
  const rows = [
    {
      label: "$ EMAIL",
      value: profile.contact.email,
      brand: "gmail" as const,
      href: gmail,
      name: "Compose in Gmail",
    },
    {
      label: "$ GITHUB",
      value: profile.contact.githubLabel,
      brand: "github" as const,
      href: profile.socialLinks.github,
      name: "Open GitHub",
    },
    {
      label: "$ LINKEDIN",
      value: profile.contact.linkedinLabel,
      brand: "linkedin" as const,
      href: profile.socialLinks.linkedin,
      name: "Open LinkedIn",
    },
  ];
  return (
    <section
      id="contact"
      className="border-t border-[#383838] bg-ink text-white"
    >
      <motion.div
        className="mx-auto grid min-h-[555px] max-w-[1200px] grid-cols-[1fr_1fr] items-center gap-20 px-6 py-20 max-md:grid-cols-1 lg:px-0"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <SectionEyebrow text="cd contact" />
          <h2 className="mt-12 text-[clamp(3.25rem,5.2vw,5rem)] leading-[.95] font-extrabold tracking-[-.04em]">
            Feel free,
            <em className="block not-italic text-brush-orange">contact me.</em>
          </h2>
          <p className="mt-10 max-w-110 text-[17px] leading-7 text-zinc-400">
            Have a project, opportunity, or idea you’d like to discuss?
            <br />
            I’d love to hear from you.
          </p>
          <a
            className="mt-12 inline-flex bg-brush-orange px-7 py-5 font-mono text-xs font-bold text-ink transition-colors hover:bg-bg-paper"
            href={gmail}
            target="_blank"
            rel="noreferrer"
          >
            Email me ↗
          </a>
        </div>
        <div className="rounded-[20px] border border-[#464646] bg-[#222222] px-8 py-4 shadow-[8px_10px_0_#101016]">
          {/* <div className="flex items-center gap-5 border-b border-[#3e3e3e] py-5">
            <span className="grid size-12 place-items-center border border-[#494949] text-zinc-300">
              <Phone size={20} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="mb-1 font-mono text-[11px] font-bold tracking-[.13em] text-zinc-400">
                $ PHONE
              </p>
              <p className="text-[15px] font-bold">{profile.contact.phone}</p>
            </div>
            <button
              onClick={copyPhone}
              aria-label="Copy phone number"
              className="grid size-10 place-items-center text-zinc-400 transition-colors hover:text-white"
            >
              {copied ? (
                <Check size={20} className="animate-bounce text-signal-teal" />
              ) : (
                <Copy size={19} />
              )}
            </button>
          </div> */}
          {rows.map((row) => (
            <div
              className="flex items-center gap-5 border-b border-[#3e3e3e] py-5 last:border-0"
              key={row.label}
            >
              <span className="grid size-12 place-items-center border border-[#494949] text-zinc-300">
                <BrandIcon brand={row.brand} size={20} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="mb-1 font-mono text-[11px] font-bold tracking-[.13em] text-zinc-400">
                  {row.label}
                </p>
                <p className="truncate text-[15px] font-bold">{row.value}</p>
              </div>
              <a
                className="grid size-10 place-items-center text-zinc-400 transition-colors hover:text-white"
                href={row.href}
                target="_blank"
                rel="noreferrer"
                aria-label={row.name}
              >
                <ExternalLink size={19} />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
