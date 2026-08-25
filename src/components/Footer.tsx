import { profile } from "../data/profile";
import { BrandIcon } from "./BrandIcon";
export function Footer() {
  return (
    <footer className="bg-[#222222] text-zinc-300">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_1fr_1fr] px-6 py-18 font-mono text-xs lg:px-0">
        <div>
          <p className="mb-5 text-[11px] tracking-[.22em] text-signal-teal">
            NAVIGATION
          </p>
          {["home", "about", "projects", "contact"].map((link) => {
            const currentLink = link === "home" ? "top" : link;
            return (
            <a
              className="mb-3 block hover:text-white"
              href="/"
              key={link}
              onClick={(event) => {
                event.preventDefault();
                const element = document.getElementById(currentLink);
                if (currentLink === "top") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {link}
            </a>
          )

          })}
        </div>
        <div>
          <p className="mb-5 text-[11px] tracking-[.22em] text-brush-orange">
            CONNECT
          </p>
          <a className="mb-3 flex gap-3" href={profile.socialLinks.github} target="_blank" rel="noreferrer">
            <BrandIcon brand="github" size={17} />
            GitHub
          </a>
          <a className="mb-3 flex gap-3" href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer">
            <BrandIcon brand="linkedin" size={17} />
            LinkedIn
          </a>
          <a className="flex gap-3" href={profile.socialLinks.email} target="_blank" rel="noreferrer">
            <BrandIcon brand="gmail" size={17} />
            Email
          </a>
        </div>
        <div className="text-right">
          <p className="text-3xl font-extrabold tracking-[-.1em] text-bg-cream">
            TS<span className="text-brush-orange">.</span>
          </p>
          <p className="mt-4 text-[11px] leading-5 text-zinc-500">
            all rights reserved · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
