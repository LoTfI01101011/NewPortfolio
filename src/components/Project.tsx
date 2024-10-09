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
    <div className='w-full h-[550px] flex flex-col items-center justify-center overflow-hidden'>
      <div className="mt-6 mb-3 w-[1200px] h-[275px] grid grid-flow-col grid-rows-1 gap-4 ">
        <motion.div variants={container1(0.1, -20)} initial="hidden" animate="visible" className="bg-slate-900 rounded-xl">
          <h1 className="text-2xl text-white m-3 pb-5 border-b-4 border-slate-200">GoForcer (CLI)</h1>
          <p className="m-3 text-slate-300 line-clamp-6 md:line-clamp-none leading-relaxed">
            I developed a tool with <span className="text-cyan-400 font-semibold">Go</span> that brute-forces URLs by sending multiple requests to discover bugs for the purpose of penetration testing. I utilized
            <span className="text-cyan-400 font-semibold"> concurrency </span>
            patterns such as
            <span className="text-cyan-400 font-semibold"> semaphores </span>
            and employed the Go/Viper package.
          </p>
        </motion.div>
        <motion.div variants={container1(0.1, -20)} initial="hidden" animate="visible" className="bg-slate-900 rounded-xl col-span-2">
          <h1 className="text-2xl text-white m-3 pb-5 border-b-4 border-slate-200">Library</h1>
          <p className="m-3 text-slate-300 line-clamp-6 md:line-clamp-none leading-relaxed">
            I developed a RESTful API for a library management system using the <span className="text-cyan-300 font-semibold">Gin Gonic</span> framework, ensuring lightweight and efficient performance. The API leverages <span className="text-cyan-300 font-semibold">GORM</span> for seamless database interactions, while <span className="text-cyan-300 font-semibold">Redis</span> is integrated to cache data and manage blacklisted <span className="text-cyan-300 font-semibold">JWT</span> tokens for secure authentication. <span className="text-cyan-300 font-semibold">PostgreSQL</span> serves as the database, offering reliability and scalability for data storage.
          </p>
        </motion.div>
        <motion.div variants={container1(0.8, -20)} initial="hidden" animate="visible" className="bg-slate-800 rounded-xl">
          <h1 className="text-2xl text-white m-3 pb-5 border-b-4 border-slate-200">Blog</h1>
          <p className="m-3 text-slate-300 line-clamp-6 md:line-clamp-none leading-relaxed">
            I developed a blog website using <span className="text-red-500 font-semibold">Laravel</span> for the back end, with <span className="text-red-500 font-semibold">MariaDB</span> for the database. I integrated <span className="text-red-500 font-semibold">Mailchimp</span> for managing newsletters and used <span className="text-red-500 font-semibold">Laravel Blade</span> for front-end templating, along with <span className="text-red-500 font-semibold">Alpine.js</span> to add interactivity.
          </p>
        </motion.div>
      </div>
      <div className='w-[1100px] h-[275px]  flex flex-center gap-4'>
        <motion.div variants={container1(0.1, 20)} initial="hidden" animate="visible" className="bg-slate-900 rounded-xl col-span-2">
          <h1 className="text-2xl text-white m-3 pb-5 border-b-4 border-slate-200">E-learning</h1>
          <p className='m-3 line-clamp-6 text-slate-300 md:line-clamp-none'>
            I developed a robust RESTful API using <span className="text-red-500 font-semibold">Laravel</span>, designed to serve both mobile and web applications seamlessly. The API supports various user roles, such as students and, each with distinct privileges. Features include user authentication, commenting functionality, and the ability to like posts. All data is securely stored and managed using <span className="text-red-500 font-semibold">MariaDB</span>, ensuring high performance and reliability across platforms.
          </p>
        </motion.div>
        <motion.div variants={container1(0.8, 20)} initial="hidden" animate="visible" className="bg-slate-800 rounded-xl col-span-2">
          <h1 className="text-2xl text-white m-3 pb-5 border-b-4 border-slate-200">E-commerce</h1>
          <p className='m-3 line-clamp-6 text-slate-300 md:line-clamp-none'>
            I’m developing a backend with <span className="text-cyan-400 font-semibold">Go</span> for an E-commerce shop using the microservices pattern. I'm using the <span className="text-cyan-400 font-semibold">Chi router</span> to create a REST API for communication between the client and the API gateway. For inter-service communication, I'm employing <span className="text-cyan-400 font-semibold">gRPC</span> with <span className="text-cyan-400 font-semibold">Protocol Buffers</span>. <span className="text-cyan-400 font-semibold">Redis</span> is used for caching, while <span className="text-cyan-400 font-semibold">MongoDB</span> and <span className="text-cyan-400 font-semibold">PostgreSQL</span> serve as the databases. Additionally, <span className="text-cyan-400 font-semibold">RabbitMQ</span> is integrated as the message broker, and <span className="text-cyan-400 font-semibold">Docker</span> is used to containerize the project.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Project