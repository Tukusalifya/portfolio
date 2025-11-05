 import { motion, scale } from "framer-motion";

 const Headings = ({header}) => {
    return (
      <div className="w-full flex justify-center">
     
        <div className="w-fit h-fit flex flex-col justify-center items-center">
          <h1 className="mb-[15px] text-center text-3xl font-bold text-gray-800">{header}</h1>
          <motion.div 
          initial={{opacity: 0, scale: 0}}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="w-1/2 bg-[var(--primary-color)] h-1 rounded-xl"></motion.div >
        </div>
       </div>
        
      );
 }
  
 export default Headings;