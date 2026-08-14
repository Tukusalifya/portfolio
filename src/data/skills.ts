export type Skill = {
  label: string;
  colorToken: "brush-orange" | "signal-teal" | "tag-crimson";
};
const colors = ["brush-orange", "signal-teal", "tag-crimson"] as const;
const make = (labels: string[]): Skill[] =>
  labels.map((label, index) => ({
    label,
    colorToken: colors[index % colors.length],
  }));
export const skills = {
  expertise: make([
    "Full-Stack Development",
    "Mobile Development",
    "Web Scraping",
    "Automation",
    "Database Management",
    "Graphic Design",
  ]),
  languages: make([
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Dart",
    "SQL",
    "HTML",
    "CSS",
  ]),
  frameworks: make(["React", "Django", "Flutter", "Tailwind CSS", "Bootstrap", "Next.js"]),
  tools: make(["Git", "GitHub", "SQLite", "MySQL", "REST APIs", "WebSockets"]),
};
