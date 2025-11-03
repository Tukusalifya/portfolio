import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import Headings from "../components/headings";
import Project_Tile from "../components/project_tile";

const Projects = () => {
  const portfolio_langueges_framework = ["React", "Tailwind CSS"];
  const hims_langueges_framework = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Django",
    "SQL",
    "Bootstrap",
  ];
  const hims_description =
    "A web-based system designed to digitize patient record-keeping for local clinics. The system replaces manual health records with a secure digital solution. Key features include patient registration, appointment scheduling, medical history tracking, and offline accessibility via a local server setup. The project focuses on improving efficiency, reducing data loss, and streamlining healthcare workflows.";
  const portfolio_description =
    "A responsive portfolio website built to showcase projects, skills, and experiences. The site emphasizes clean UI design, fast performance, and mobile-first responsiveness. It demonstrates proficiency in modern frontend development while reflecting personal branding and design style.";
  const remote_description =
    "A cross-platform mobile app built to remotely control VLC Media Player via its HTTP interface. The app enables users to play, pause, skip, adjust volume, and manage playback directly from their phone. This project demonstrates skills in mobile development, API integration, and practical problem-solving, turning a laptop into a remotely controllable media hub.";
  const remote_langueges_framework = ["Flutter"];
  const Projects = [];
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      id="projects"
      className="h-full lg:px-[100px] px-5 pb-15 pt-[80px] bg-[var(--background-color)]"
    >
      <Headings header="Projects" />
      <div className="pt-10 flex flex-col  gap-10 flex-wrap items-center">
        <Project_Tile
          icon_name="dashicons:portfolio"
          project_title="Portfolio Website"
          project_description={portfolio_description}
          langueges_framework={portfolio_langueges_framework}
          view_code="true"
          icon_color="var(--secondary-color)"
        />
        <Project_Tile
          icon_name="solar:health-broken"
          project_title="Health Information Management System (HIMS)"
          project_description={hims_description}
          langueges_framework={hims_langueges_framework}
          view_code="true"
          icon_color="var(--accent-color)"
        />
        <Project_Tile
          icon_name="mdi:vlc"
          project_title="VLC Remote Control App"
          project_description={remote_description}
          langueges_framework={remote_langueges_framework}
          view_code="true"
          icon_color="var(--primary-color)"
        />
      </div>
    </motion.section>
  );
};

export default Projects;
