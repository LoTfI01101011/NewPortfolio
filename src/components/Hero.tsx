import { DiDocker, DiGit, DiMongodb, DiPostgresql, DiRedis } from "react-icons/di";
import { FaReact, FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiLaravel, SiRabbitmq, SiTypescript } from "react-icons/si";
import { motion } from 'framer-motion';

const Hero = () => {

  // Combined container function for flexibility
  const container = (delay: number, position?: number, rotation?: number) => ({
    hidden: { 
      x: position || 0, 
      rotate: rotation || 0, 
      opacity: 0 
    },
    visible: {
      x: 0,
      rotate: rotation ? 360 : 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
    }
  });

  // Technologies data
  const technologies = [
    { icon: <FaReact size={32} className="text-blue-400" />, name: "React" },
    { icon: <FaGolang size={32} className="text-blue-400" />, name: "GoLang" },
    { icon: <DiGit size={32} className="text-orange-500" />, name: "Git" },
    { icon: <RiTailwindCssFill size={32} className="text-blue-500" />, name: "Tailwind CSS" },
    { icon: <DiPostgresql size={32} className="text-blue-600" />, name: "PostgreSQL" },
    { icon: <DiMongodb size={32} className="text-green-600" />, name: "MongoDB" },
    { icon: <SiTypescript size={32} className="text-blue-500" />, name: "TypeScript" },
    { icon: <SiLaravel size={32} className="text-red-500" />, name: "Laravel" },
    { icon: <DiRedis size={32} className="text-red-500" />, name: "Redis" },
    { icon: <DiDocker size={32} className="text-blue-400" />, name: "Docker" },
    { icon: <SiRabbitmq size={32} className="text-red-500" />, name: "RabbitMQ" }
  ];

  return (
    <div className="w-full h-[550px] mx-auto flex justify-center items-center pb-4">
      <div className="m-4 w-[800px] h-full grid grid-rows-3 grid-flow-col gap-4 font-serif">
        
        <motion.div 
          variants={container(0.5, -30)} 
          initial="hidden" 
          animate="visible" 
          className="bg-slate-800 rounded-xl text-white p-4 row-span-1 col-span-2"
        >
          <h1 className="text-xl md:text-2xl">Who am I ?</h1>
          <p className="mt-4 text-slate-300 line-clamp-3 text-sm md:text-base">
            Hi, I'm Kaddari Lotfi Tadj Eddine, a recent computer science graduate with a strong passion for backend and full-stack development.
          </p>
        </motion.div>

        <motion.div 
          variants={container(2, -30)} 
          initial="hidden" 
          animate="visible" 
          className="bg-slate-800 rounded-xl text-white p-4 row-span-2 col-span-1"
        >
          <h1 className="text-xl md:text-2xl">Do I have Experience</h1>
          <h2 className="mt-2 text-base md:text-lg">Education final project (Feb-2024 Jul-2024):</h2>
          <p className="mt-4 line-clamp-6 text-slate-300 text-sm md:line-clamp-none md:text-base">
            I created a startup with fellow students for our final project, where we sold online courses. My responsibilities included designing the database, developing backend code that integrated both mobile and web platforms, and leading the development process.
          </p>
        </motion.div>

        <motion.div 
          variants={container(0.1)} 
          initial="hidden" 
          animate="visible" 
          className="bg-slate-900 rounded-xl text-white p-4 flex flex-col justify-center items-center"
        >
          <motion.img 
            variants={container(0.3)} 
            src="/images/my profile pic.png" 
            className="w-20 h-20 rounded-full mb-4"
            alt="Profile"
          />
          <motion.h1 variants={container(0.3)}>Kaddari Lotfi Tadj Eddine</motion.h1>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          variants={container(1.5, 30)} 
          initial="hidden" 
          animate="visible" 
          className="bg-slate-800 rounded-xl text-white py-2 px-4 row-span-1 col-span-2"
        >
          <h1 className="text-xl md:text-2xl">My Education</h1>
          <h2 className="mt-2 text-base md:text-lg">Bachelor degree (2024):</h2>
          <p className="mt-1 text-slate-300 text-sm md:text-base">
            I recently graduated with a bachelor's degree in Computer Science from the University of Boumerdes, Algeria.
          </p>
        </motion.div>

        <motion.div 
          variants={container(1, 30)} 
          initial="hidden" 
          animate="visible" 
          className="bg-slate-800 rounded-xl text-white p-4 row-span-2 col-span-1"
        >
          <h1 className="text-xl md:text-2xl">Technologies</h1>
          <div className="flex flex-wrap gap-4 mt-4">
            {technologies.map((tech, index) => (
              <motion.div key={index} title={tech.name} whileHover={{ scale: 1.2 }}>
                {tech.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Hero;
