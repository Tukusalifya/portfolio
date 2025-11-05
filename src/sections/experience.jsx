import Experience_Tile from "../components/experience_tile";
import Headings from "../components/headings";
import { motion } from "framer-motion";

const Experience = () => {
  const work_description = [
    "Worked in the IT department supporting development and deployment of internal systems.",
    "Helped implement a real-time file sharing and chat application using Java, HTML, CSS, and JavaScript.",
  ];
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      id="experience"
      className="h-full lg:px-[100px] px-5 pb-15 pt-[80px]"
    >
      <Headings header={"Experience"} />
      <div className="pt-10 ">
        <div className="bg-[var(--card-background)] rounded-xl p-6 border border-gray-100 hover:border-[var(--secondary-color)]">
          <Experience_Tile
            position={"Software Developer Intern"}
            workplace={"Lusaka City Council."}
            date={"August - September 2024 & January - February 2025"}
            work_description={work_description}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
