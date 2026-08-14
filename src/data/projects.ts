export type Project = {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  visibility: "private" | "demo" | "github" | "demo+github";
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  icon: "heart" | "smartphone" | "layout" | "bell" | "terminal";
};
export const projects: Project[] = [
  {
    id: "hims",
    name: "hims.py",
    title: "HIMS",
    subtitle: "Health Information Management System",
    description:
      "A clinic management system for patient information, nurse registration, doctor assignments, and day-to-day healthcare...",
    tags: ["Django", "Python", "SQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    visibility: "private",
    icon: "heart",
  },
  {
    id: "vlc",
    name: "vlc_remote.dart",
    title: "VLC Remote",
    subtitle: "Remote control for VLC media player",
    description:
      " Flutter mobile app that remotely controls VLC Media Player through VLC's HTTP Web Interface.",
    tags: ["Flutter", "Dart", "Hive"],
    visibility: "github",
    githubUrl: "https://github.com/Tukusalifya/vlc_remote",
    icon: "smartphone",
  },
  {
    id: "portfolio",
    name: "portfolio.tsx",
    title: "Personal Portfolio Website",
    subtitle: "A React portfolio deployed on Vercel",
    description:
      "A React portfolio deployed on Vercel.",
    tags: ["Typescript", "React", "Tailwind CSS", "Vercel"],
    visibility: "demo+github",
    demoUrl: "https://tukusalifya-portfolio.vercel.app/",
    githubUrl: "https://github.com/Tukusalifya/portfolio",
    featured: true,
    icon: "layout",
  },
  {
    id: "job",
    name: "job_notifier.py",
    title: "Job Notifier",
    subtitle: "Automated job aggregator and notifier",
    description:
      "A modular, automated Python job aggregation and alerting system that scrapes Zambian job listings, filters and normalizes them, and emails the fresh matching listings directly to you.",
    tags: ["Python", "Automation", "APIs"],
    visibility: "github",
    githubUrl: "https://github.com/Tukusalifya/jobNotifier",
    icon: "bell",
  },
  {
    id: "temp-del",
    name: "temp_file_deleter.py",
    title: "Temporary File Deleter",
    subtitle: "Script to cleanup of temporary files",
    description:
      "A Windows-focused Python utility that scans the system temporary-files location and removes unnecessary temporary files to reclaim disk space.",
    tags: ["Python", "Automation"],
    visibility: "github",
    githubUrl: "https://github.com/Tukusalifya/tempFileDeleter",
    icon: "terminal",
  },
];
