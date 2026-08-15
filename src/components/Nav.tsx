import { useEffect, useState } from "react";

const links = ["about", "skills", "experience", "projects", "contact"];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [away, setAway] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = links.map((id) => document.getElementById(id)).filter((section): section is HTMLElement => section !== null);
    const onScroll = () => {
      setAway(window.scrollY > 32);
      const marker = window.innerHeight * 0.38;
      const current = sections.find((section) => { const rect = section.getBoundingClientRect(); return rect.top <= marker && rect.bottom > marker; });
      setActive(current?.id ?? null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  const navigate = (section: string) => { setActive(section); document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  const goHome = () => { setActive(null); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return <header className={`sticky top-0 z-20 h-[76px] bg-bg-cream transition-colors ${away ? "border-b border-[#e6e2dc]" : "border-b border-transparent"}`}><div className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-6 lg:px-0"><a className="text-[17px] font-extrabold tracking-[-.04em]" href="/" onClick={(event) => { event.preventDefault(); goHome(); }}>T<span className="text-brush-orange">S.</span></a><button className="hidden border-0 bg-transparent text-2xl text-ink max-md:block" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>☰</button><nav className={`${open ? "max-md:flex" : "max-md:hidden"} flex gap-7 font-mono text-[11px] font-medium text-zinc-500 max-md:absolute max-md:top-[76px] max-md:right-0 max-md:left-0 max-md:flex-col max-md:gap-4 max-md:border-b max-md:border-[#e6e2dc] max-md:bg-bg-paper max-md:px-[7vw] max-md:py-5`}>{links.map((link) => <a className={`transition-colors hover:text-signal-teal ${active === link ? "text-signal-teal" : ""}`} onClick={(event) => { event.preventDefault(); navigate(link); }} key={link} href="/">/{link}</a>)}</nav></div></header>;
}
