import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { easeInOut, motion } from "framer-motion";
import { scroller } from "react-scroll";

import {
  AppWindow,
  Code2,
  Cog,
  Download,
  Handshake,
  Menu,
  Pencil,
  X,
} from "lucide-react";

const Home = () => {
  const downloadCV = () => {
    const filePath = "files/Tukusalifya_Sichali_CV.pdf";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Tukusalifya_Sichali_CV.pdf";
    link.click();
  };

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 600,
      delay: 0,
      offset: -25,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center w-full lg:h-screen h-full lg:px-20 md:px-10 px-5 bg-[var(--background-color)] gap-10 lg:gap-4 pb-10">
      <div className="lg:w-1/2 w-full md:px-10 gap-5 lg:gap-0 flex flex-col justify-center md:mt-5 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          id="home"
          className="text-gray-900 font-bold text-4xl text-center md:text-left md:text-3xl lg:mb-5"
        >
          <span className="text-[var(--primary-color)]">Hello</span>, I'm
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-900 font-bold text-center md:text-left text-4xl md:text-6xl mb-8 md:mb-0 lg:mb-10"
        >
          Tukusalifya{" "}
          <span className="text-[var(--primary-color)]">Sichali,</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 text-center md:text-left font-semibold text-[18px] mb-6"
        >
          A passionate Computer Science student driven by technology,
          problem-solving, and creativity. I love building impactful projects,
          exploring new tools, and turning ideas into real-world solutions.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3 md:mb-10 mb-15"
        >
          <span className="px-4 py-2 bg-[#219FBD] text-white rounded-full md:text-sm text-[12px] font-medium flex gap-[10px]">
            <Pencil size={20} color="white" /> Graphics Designer
          </span>
          <span className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-full md:text-sm text-[12px] font-medium flex gap-[10px]">
            <Cog size={20} color="white" />
            Automation Expert
          </span>
          <span className="px-4 py-2 bg-[#F4F4F4] text-gray-700 rounded-full  md:text-sm text-[12px] font-medium flex gap-[10px]">
            <Code2 size={20} color="black" />
            Full Stack Developer
          </span>
          <span className="px-4 py-2 bg-[#BF4544] text-white rounded-full  md:text-sm text-[12px] font-medium flex gap-[10px]">
            <AppWindow size={20} color="white" />
            Mobile Developer
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Stack direction="row" spacing={2}>
            <button
              id="hire"
              onClick={scrollToContact}
              className="w-fit px-4 py-2 flex items-center justify-center border border-[var(--secondary-color)] bg-white rounded-[5px] cursor-pointer transition-transform duration-300 transform hover:scale-105 active:scale-95"
            >
              <div className="flex items-center gap-2">
                <Handshake size={20} color="var(--secondary-color)" />
                <p className="text-[var(--secondary-color)]">Hire Me</p>
              </div>
            </button>

            <button
              onClick={downloadCV}
              className="w-fit px-4 py-2 flex items-center justify-center border border-[var(--primary-color)] bg-[var(--primary-color)] rounded-[5px] hover:bg-[var(--primary-color-hover)] cursor-pointer transition-transform duration-300 transform hover:scale-105 active:scale-95"
            >
              <div className="flex items-center gap-2">
                <Download size={20} color="white" />
                <p className="text-white">Download CV</p>
              </div>
            </button>
          </Stack>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex lg:justify-end justify-center pt-20"
      >
        <img
          className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover rounded-full ml-auto"
          src="/images/Artboard 1.png"
          alt="profile-image"
        />
      </motion.div>
    </section>
  );
};

export default Home;
