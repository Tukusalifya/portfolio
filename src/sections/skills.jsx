import Headings from "../components/headings";
import Skill_Container from "../components/skill_container";
import Skill_Pill from "../components/skill_pill";
import { motion } from "framer-motion";

const Skills = () => {
  const programming_language_skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Python",
    "Java",
    "Dart",
    "SQL",
    "PHP",
  ];
  const frameworks_skills = [
    "Flutter",
    "Django",
    "React",
    "Tailwind",
    "Bootstrap",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      id="skills"
      className="h-full w-full pb-20 pt-20 bg-[var(--background-color)] overflow-x-hidden lg:px-[100px] px-5"
    >
      <Headings header="Skills" />
      <div className="pt-10">
        <div className="grid lg:grid-cols-[1fr_1fr] items-center justify-center gap-10 lg:gap-10 md:grid-cols-2">
          <Skill_Pill
            title="Programming Languages"
            skill_names={programming_language_skills}
            is_secondary_color={false}
          />
          <Skill_Pill
            title="Frameworks & Libraries"
            skill_names={frameworks_skills}
            is_secondary_color={true}
          />
        </div>

        <div className="grid lg:grid-cols-3 grid-rows-2 md:grid-cols-2 lg:gap-25 gap-10 items-center justify-center lg:pt-25 pt-10 ">
          <Skill_Container
            icon_name="ph:stack-light"
            title="Full Stack Development"
            color="var(--primary-color)"
            description="Proficient in building and maintaining both frontend and backend systems using modern tools and frameworks."
          />
          <Skill_Container
            icon_name="circum:mobile-1"
            title="Mobile Application Development"
            color="var(--accent-color)"
            description="Skilled in building mobile apps using Flutter, focusing on UI/UX and functionality."
          />
          <Skill_Container
            icon_name="lineicons:gears-3"
            title=" Automation and Web Scraping "
            color="var(--secondary-color)"
            description="Applied Python to automate data extraction and repetitive tasks in projects."
          />
          <Skill_Container
            icon_name="material-symbols-light:database-outline"
            title="Database Management"
            color="var(--primary-color)"
            description="Experienced with designing, querying, and maintaining databases using SQL."
          />
          <Skill_Container
            icon_name="streamline-cyber:design-mug"
            title="Graphics Design"
            color="var(--accent-color)"
            description="Experienced in crafting modern, engaging visuals that communicate ideas effectively."
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
