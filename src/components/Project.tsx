import { motion } from 'framer-motion';

const Project = () => {
  const container1 = (delay: number, position: number) => ({
    hidden: { y: position, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
    }
  })
  return (
    <div className='w-full h-[550px] flex items-center justify-center'>
      <div className="m-6 w-[900px] h-full grid grid-flow-col grid-rows-2 gap-4 ">
        <motion.div variants={container1(0.3, -20)} initial="hidden" animate="visible" className="flex justify-center items-center bg-slate-700 rounded-xl">
          <h1 className="text-xl">Project 1</h1>
        </motion.div>
        <div className="flex justify-center items-center bg-slate-600 rounded-xl"><h1 className="text-xl">Project 2</h1></div>
        <div className="flex justify-center items-center bg-slate-600 rounded-xl"><h1 className="text-xl">Project 3</h1></div>
        <div className="flex justify-center items-center bg-slate-700 rounded-xl"><h1 className="text-xl">Project 4</h1></div>
        <div className="flex justify-center items-center bg-slate-700 rounded-xl"><h1 className="text-xl">Project 5</h1></div>
        <div className="flex justify-center items-center bg-slate-600 rounded-xl"><h1 className="text-xl">Project 6</h1></div>
      </div>
    </div>
  )
}

export default Project