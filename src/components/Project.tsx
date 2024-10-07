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
      <div className="m-6 w-[1200px] h-full grid grid-flow-col grid-rows-2 gap-4 ">
        <motion.div variants={container1(0.1, -20)} initial="hidden" animate="visible" className="bg-slate-900 rounded-xl">
          <h1 className="text-2xl text-white m-3 pb-3 border-b-2 border-slate-100">GoForcer (CLI)</h1>
          <p className="m-3 text-slate-300 line-clamp-6 md:line-clamp-none leading-relaxed">
            I developed a tool with <span className="text-cyan-400 font-semibold">Go</span> that brute-forces URLs by sending multiple requests to discover bugs for the purpose of penetration testing. I utilized
            <span className="text-cyan-400 font-semibold"> concurrency </span>
            patterns such as
            <span className="text-cyan-400 font-semibold"> semaphores </span>
            and employed the Go/Viper package.
          </p>
        </motion.div>
        <motion.div variants={container1(0.8, 20)} initial="hidden" animate="visible" className="bg-slate-800 rounded-xl col-span-2">
          <h1 className="text-2xl text-white m-3">E-commerce</h1>
          <p className='m-3 line-clamp-6 text-slate-300 md:line-clamp-none'>
          I’m developing a backend with <span className="text-cyan-400 font-semibold">Go</span> for an E-commerce shop using the microservices pattern. I'm using the <span className="text-cyan-400 font-semibold">Chi router</span> to create a REST API for communication between the client and the API gateway. For inter-service communication, I'm employing <span className="text-cyan-400 font-semibold">gRPC</span> with <span className="text-cyan-400 font-semibold">Protocol Buffers</span>. <span className="text-cyan-400 font-semibold">Redis</span> is used for caching, while <span className="text-cyan-400 font-semibold">MongoDB</span> and <span className="text-cyan-400 font-semibold">PostgreSQL</span> serve as the databases. Additionally, <span className="text-cyan-400 font-semibold">RabbitMQ</span> is integrated as the message broker, and <span className="text-cyan-400 font-semibold">Docker</span> is used to containerize the project. 
          </p>
        </motion.div>
        <motion.div variants={container1(0.8, -20)} initial="hidden" animate="visible" className="bg-slate-800 rounded-xl">
          <h1 className="text-base mt-2 ml-2">Blog</h1>
          <p className='mt-2 line-clamp-6 text-slate-300 md:line-clamp-none'>
            I developed a tool that brute-forces URLs by sending multiple requests to discover bugs for the purpose of penetration testing. I utilized concurrency patterns such as semaphores and employed the Go/Viper package."
          </p>
        </motion.div>
        <motion.div variants={container1(0.1, -20)} initial="hidden" animate="visible" className="bg-slate-900 rounded-xl col-span-2">
          <h1 className="text-base mt-2 ml-2">E-learning</h1>
          <p className='mt-2 line-clamp-6 text-slate-300 md:line-clamp-none'>
            I developed a tool that brute-forces URLs by sending multiple requests to discover bugs for the purpose of penetration testing. I utilized concurrency patterns such as semaphores and employed the Go/Viper package."
          </p>
        </motion.div>
        <motion.div variants={container1(0.1, 20)} initial="hidden" animate="visible" className="bg-slate-900 rounded-xl col-span-2">
          <h1 className="text-base mt-2 ml-2">Library</h1>
          <p className='mt-2 line-clamp-6 text-slate-300 md:line-clamp-none'>
            I developed a tool that brute-forces URLs by sending multiple requests to discover bugs for the purpose of penetration testing. I utilized concurrency patterns such as semaphores and employed the Go/Viper package."
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Project