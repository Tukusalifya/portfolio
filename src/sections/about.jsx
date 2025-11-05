import { Icon } from "@iconify/react";
import Headings from "../components/headings";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      id="about"
      className="h-full bg-[var(--compliment-bg-color)] pb-20 pt-20 "
    >
      <Headings header="About Me" />

      <div className="flex flex-col lg:flex-row lg:gap-12 gap-5 lg:px-[100px] px-6 pt-10">
        {/* Left Column - Summary */}
        <div className="w-full lg:w-3/5">
          <div className="bg-[var(--card-background)] rounded-xl shadow-lg p-6 border border-gray-100 h-fit">
            <div className="flex gap-4">
              <div className="flex items-center flex-col gap-2">
                <div className="p-2 bg-[var(--secondary-color)] rounded-lg">
                  <Icon
                    icon="codicon:briefcase"
                    width={20}
                    height={20}
                    color="white"
                  />
                </div>
                <div className="h-full w-0.5 bg-gray-200"></div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-[var(--text-color)] mb-4">
                  Professional Summary
                </h2>

                <div className="space-y-4 text-[var(--text-color)] text-sm leading-relaxed">
                  <p className="text-gray-700">
                    I am a dedicated final-year computer science student at Mulungushi University,
                    with a strong foundation in web development and a keen interest in UI/UX design.
                    I enjoy taking on projects that challenge and expand my skills.
                  </p>

                  <p className="text-gray-700">
                    My creativity extends beyond code to art and design, where I explore both traditional and
                    digital mediums.
                    I also have a passion for novels, which fuels my love for storytelling and imaginative
                    narratives.
                  </p>

                  <p className="text-gray-700">
                    Driven by a desire to learn, innovate, and contribute to the digital landscape,
                    I thrive at the intersection of technology and creativity.
                    Join me on this exciting journey where code meets creativity!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Personal Info & Education */}
        <div className="w-full lg:w-2/5 space-y-6">
          {/* Personal Information Card */}
          <div className="bg-[var(--card-background)] rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[var(--secondary-color)] rounded-lg">
                <Icon
                  icon="mdi:account-details"
                  width={20}
                  height={20}
                  color="white"
                />
              </div>
              <h2 className="text-xl font-bold text-[var(--text-color)]">
                Personal Details
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-white border border-gray-100 hover:border-[var(--primary-color)] transition-all duration-300">
                <Icon
                  icon="mdi:account"
                  width={20}
                  height={20}
                  color="var(--accent-color)"
                />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Full Name</p>
                  <p className="font-semibold text-[var(--text-color)] text-sm">
                    Tukusalifya Sichali
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg bg-white border border-gray-100 hover:border-[var(--primary-color)] transition-all duration-300">
                <Icon
                  icon="mdi:cake"
                  width={20}
                  height={20}
                  color="var(--accent-color)"
                />
                <div>
                  <p className="text-xs text-gray-500 font-medium">
                    Date of Birth
                  </p>
                  <p className="font-semibold text-[var(--text-color)] text-sm">
                    April 25, 2002
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg bg-white border border-gray-100 hover:border-[var(--primary-color)] transition-all duration-300">
                <Icon
                  icon="mdi:map-marker"
                  width={20}
                  height={20}
                  color="var(--accent-color)"
                />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Location</p>
                  <p className="font-semibold text-[var(--text-color)] text-sm">
                    Lusaka, Zambia
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg bg-white border border-gray-100 hover:border-[var(--primary-color)] transition-all duration-300">
                <Icon
                  icon="mdi:gamepad-variant"
                  width={20}
                  height={20}
                  color="var(--accent-color)"
                />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Hobbies</p>
                  <p className="font-semibold text-[var(--text-color)] text-sm">
                    Reading, Drawing, Gamming
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="bg-[var(--card-background)] rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[var(--secondary-color)] rounded-lg">
                <Icon icon="mdi:school" width={20} height={20} color="white" />
              </div>
              <h2 className="text-xl font-bold text-[var(--text-color)]">
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {/* Tertiary Education */}
              <div className="relative pl-6 border-l-2 border-[var(--secondary-color)]">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[var(--secondary-color)] rounded-full border-2 border-white shadow-sm"></div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="text-xs text-[var(--secondary-color)] font-bold mb-1">
                    2021 - Present
                  </p>
                  <h3 className="font-bold text-[var(--text-color)] text-sm mb-1">
                    {" "}
                    Batchelor of Science in Computer Science
                  </h3>
                  <p className="text-[var(--text-color)] text-sm opacity-80">
                    Mulungushi University
                  </p>
                </div>
              </div>

              {/* Secondary Education */}
              <div className="relative pl-6 border-l-2 border-[var(--primary-color)]">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[var(--primary-color)] rounded-full border-2 border-white shadow-sm"></div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="text-xs text-[var(--primary-color)] font-bold mb-1">
                    2015 - 2019
                  </p>
                  <h3 className="font-bold text-[var(--text-color)] text-sm mb-1">
                    Secondary Education
                  </h3>
                  <p className="text-[var(--text-color)] text-sm opacity-80">
                    St. Pauls Secondary School
                  </p>
                </div>
              </div>

              {/* Primary Education */}
              <div className="relative pl-6 border-l-2 border-[var(--accent-color)]">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[var(--accent-color)] rounded-full border-2 border-white shadow-sm"></div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="text-xs text-[var(--accent-color)] font-bold mb-1">
                    2007 - 2014
                  </p>
                  <h3 className="font-bold text-[var(--text-color)] text-sm mb-1">
                    Primary Education
                  </h3>
                  <p className="text-[var(--text-color)] text-sm opacity-80">
                    Holy Cross Convent School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
