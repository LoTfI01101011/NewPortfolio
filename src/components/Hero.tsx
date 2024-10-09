import { DiDocker, DiGit, DiMongodb, DiPostgresql, DiRedis } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiLaravel, SiRabbitmq, SiTypescript } from "react-icons/si"
import { motion } from 'framer-motion';
import { FaGolang } from "react-icons/fa6";

const Hero = () => {

  const container1 = (delay: number, position: number) => ({
    hidden: { x: position, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
    }
  })
  const container2 = (delay: number, rotationNumber: number) => ({
    hidden: { rotate: rotationNumber, opacity: 0 },
    visible: {
      rotate: 360,
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
    }
  })
  const container3 = (delay: number) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
    }
  })

  return (
    <div className=" w-full h-[550px] mx-auto flex justify-center items-center pb-4">
      <div className="m-4 w-[800px] h-full grid grid-rows-3  grid-flow-col gap-4 font-serif">
        <motion.div variants={container1(0.5, -30)} initial="hidden" animate="visible" className="bg-slate-800 rounded-xl text-white p-4 row-span-1 col-span-2 overflow-hidden overflow-ellipsis ">
          <h1 className="text-2xl">Who am I ?</h1>
          <p className="mt-4 text-slate-300 line-clamp-3">
            Hi, I'm Kaddari Lotfi Tadj Eddine, a recent computer science graduate with a strong passion for backend and full-stack development.
          </p>
        </motion.div>
        <motion.div variants={container1(2, -30)} initial="hidden" animate="visible" className="bg-slate-800 rounded-xl text-white p-4 row-span-2 col-span-1 overflow-hidden">
          <h1 className="text-2xl">Do i have Experience</h1>
          <h2 className="mt-2 text-lg">Education final project (Feb-2024 Jul-2024):</h2>
          <p className="mt-4 line-clamp-6 text-slate-300 md:line-clamp-none">
            I created a startup with some fellow students as part of our final education project, where we sold online courses. My responsibilities included designing the database, developing robust backend code that integrated with both the mobile app and the website, and leading the development process.
          </p>
        </motion.div>
        <motion.div variants={container2(0.1, 0)} initial="hidden" animate="visible" className="bg-slate-900 rounded-xl text-white p-4 overflow-hidden grid gird-col justify-center items-center">
          <motion.div variants={container3(0.3)} initial="hidden" animate="visible" className="m-auto"><img src="public/my profile pic.png" className="w-20 h-20 rounded-full block" />
          </motion.div>
          <motion.div variants={container3(0.3)} initial="hidden" animate="visible">
            <h1>Kaddari Lotfi Tadj Eddine</h1>
          </motion.div>
        </motion.div>
        <motion.div className="bg-slate-800 rounded-xl text-white py-2 px-4 row-span-1 col-span-2 overflow-hidden " variants={container1(1.5, 30)} initial="hidden" animate="visible"><h1 className="text-2xl">My Education</h1>
          <h2 className="mt-2 text-lg">Bachelor degree (2024):</h2>
          <p className="mt-1 text-slate-300">I recently graduated with a bachelor's degree in Computer Science from the University of Boumerdes, Algeria.</p>
        </motion.div>
        <motion.div className="bg-slate-800 rounded-xl text-white p-4 row-span-2 col-span-1 overflow-hidden" variants={container1(1, 30)} initial="hidden" animate="visible"><h1 className="text-2xl">Technologies</h1>
          <div className="flex flex-wrap gap-4 mt-4">
            <FaReact size={32} className="text-blue-400" />
            <FaGolang size={32} className="text-blue-400" />
            <DiGit size={32} className="text-orange-500" />
            <RiTailwindCssFill size={32} className="text-blue-500" />
            <DiPostgresql size={32} className="text-blue-600" />
            <DiMongodb size={32} className="text-green-600" />
            <SiTypescript size={32} className="text-blue-500" />
            <SiLaravel size={32} className="text-red-500" />
            <DiRedis size={32} className="text-red-500" />
            <DiDocker size={32} className="text-blue-400" />
            <SiRabbitmq size={32} className="text-red-500" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero