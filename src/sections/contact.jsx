import Headings from "../components/headings";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="pt-20 pb-15 bg-[var(--compliment-bg-color)] w-full h-full lg:px-[100px] px-5"
    >
      <Headings header="Contact" />

      <div className="w-full h-fit sm:grid-cols-1 lg:grid-cols-2 gap-10 grid pt-20">
        <div className="grid-rows-3 gap-5 h-full w-full grid">
          <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 border-2 border-gray-200 flex items-center gap-5">
            <div className="rounded-2xl bg-[var(--primary-color-light)] w-12 h-12 flex items-center justify-center">
              <Icon
                icon="nimbus:mail"
                width={25}
                height={25}
                color="var(--primary-color)"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-lg font-bold">Email</h2>
              <p className="text-gray-600">sichalitukusalifya@gmail.com</p>
            </div>
          </div>

          <div className="w-full h-full bg-white shadow-lg rounded-xl p-5 border-2 border-gray-200 flex items-center gap-5">
            <div className="rounded-2xl bg-[var(--secondary-color-light)] w-12 h-12 flex items-center justify-center">
              <Icon
                icon="solar:phone-linear"
                width={30}
                height={30}
                color="var(--secondary-color)"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-lg font-bold">Phone Number</h2>
              <p className="text-gray-600">+260762628048</p>
            </div>
          </div>

          <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 border-2 border-gray-200 flex items-center gap-5">
            <div className="rounded-2xl bg-[var(--accent-color-light)] w-12 h-12 flex items-center justify-center">
              <Icon
                icon="iconoir:instagram"
                width={30}
                height={30}
                color="var(--accent-color)"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-lg font-bold">Instagram</h2>
              <p className="text-gray-600">Tuku Sichali</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-center">Send Me a Message</h2>
          <div className="flex flex-col md:flex-row gap-5 mt-[30px]">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="text-[16px] font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[var(--primary-color)]"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-[16px] font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="your.email@examplel.com"
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[var(--primary-color)]"
              />
            </div>
          </div>

          <div className="flex gap-5 mt-[30px]">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="subject" className="text-[16px] font-semibold">
                Subject
              </label>
              <input
                type="text"
                placeholder="What is this about ?"
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[var(--primary-color)]"
              />
            </div>
          </div>

          <div className="flex gap-5 mt-[30px]">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="message" className="text-[16px] font-semibold">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Tell me about your project, opportunity, or just say hello...."
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[var(--primary-color)]"
                rows={5}
                cols={50}
              />
            </div>
          </div>

          <button className="w-full mt-5 bg-[var(--primary-color)] text-white font-bold py-3 px-6 rounded-lg hover:bg-[var(--primary-color-hover)] transition duration-300">
            Send Message
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
