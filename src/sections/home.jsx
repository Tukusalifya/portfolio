import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
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
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full lg:h-screen h-full lg:px-20 md:px-10 px-5 bg-[var(--background-color)] gap-10 lg:gap-4">
      <div className="lg:w-1/2 w-full md:px-10 gap-5 lg:gap-0 flex flex-col justify-center mt-20 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          id='home'
          className="text-gray-900 font-bold text-3xl lg:mb-5"
        >
          <span className="text-[var(--primary-color)]">Hello</span>, I'm
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-900 font-bold text-left text-6xl lg:mb-10"
        >
          Tukusalifya{" "}
          <span className="text-[var(--primary-color)]">Sichali,</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 text-left font-semibold text-[18px] mb-6"
        >
          A passionate Computer Science student driven by technology,
          problem-solving, and creativity. I love building impactful projects,
          exploring new tools, and turning ideas into real-world solutions.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3 mb-20"
        >
          <span className="px-4 py-2 bg-[#219FBD] text-white rounded-full text-sm font-medium flex gap-[10px]">
            <Pencil size={20} color="white" /> Graphics Designer
          </span>
          <span className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-full text-sm font-medium flex gap-[10px]">
            <Cog size={20} color="white" />
            Automation Expert
          </span>
          <span className="px-4 py-2 bg-[#F4F4F4] text-gray-700 rounded-full text-sm font-medium flex gap-[10px]">
            <Code2 size={20} color="black" />
            Full Stack Developer
          </span>
          <span className="px-4 py-2 bg-[#BF4544] text-white rounded-full text-sm font-medium flex gap-[10px]">
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
            <Button
              variant="outlined"
              href="#contained-buttons"
              sx={{
                borderColor: "var(--secondary-color)",
                backgroundColor: "white",
              }}
            >
              <div className="flex items-center gap-2">
                <Handshake size={20} color="var(--secondary-color)" />
                Hire Me
              </div>
            </Button>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{
                backgroundColor: "var(--primary-color) ",
                "&:hover": {
                  backgroundColor: "var(--primary-color-hover) ",
                },
              }}
            >
              <div className="flex items-center gap-2">
                <Download size={20} color="white" />
                Download CV
              </div>
            </Button>
          </Stack>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex lg:justify-end justify-center"
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
