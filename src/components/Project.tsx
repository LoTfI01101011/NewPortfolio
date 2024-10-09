import { motion } from 'framer-motion';

const Project = () => {
  const container1 = (delay: number, position: number) => ({
    hidden: { y: position, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: delay, ease: "easeOut" }
    }
  });

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-gray-900 py-10 px-4'>
      {/* Projects Grid - 2x2 Layout */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 mb-12">
        <motion.div
          variants={container1(0.1, -20)}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          className="relative bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-4">
            <h1 className="text-2xl text-white pb-3 border-b-2 border-slate-600">GoForcer (CLI)</h1>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I developed a tool with <span className="text-cyan-400 font-semibold">Go</span> that brute-forces URLs by sending multiple requests to discover bugs for penetration testing. I used <span className="text-cyan-400 font-semibold">concurrency</span> patterns like <span className="text-cyan-400 font-semibold">semaphores</span> and employed the Go/Viper package.
            </p>
          </div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-slate-900/80 rounded-xl">
            <a href="#" className="bg-cyan-400 text-slate-900 font-semibold py-2 px-4 rounded-lg">View Source Code</a>
          </div>
        </motion.div>

        <motion.div
          variants={container1(0.2, -20)}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          className="relative bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-4">
            <h1 className="text-2xl text-white pb-3 border-b-2 border-slate-600">Library</h1>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I developed a RESTful API for a library management system using <span className="text-cyan-300 font-semibold">Gin Gonic</span>, <span className="text-cyan-300 font-semibold">GORM</span>, and <span className="text-cyan-300 font-semibold">Redis</span>. The system uses <span className="text-cyan-300 font-semibold">PostgreSQL</span> for database storage.
            </p>
          </div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-slate-900/80 rounded-xl">
            <a href="#" className="bg-cyan-400 text-slate-900 font-semibold py-2 px-4 rounded-lg">View Source Code</a>
          </div>
        </motion.div>

        <motion.div
          variants={container1(0.3, -20)}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          className="relative bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-4">
            <h1 className="text-2xl text-white pb-3 border-b-2 border-slate-600">Blog</h1>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I developed a blog using <span className="text-red-500 font-semibold">Laravel</span> and <span className="text-red-500 font-semibold">MariaDB</span>. Integrated with <span className="text-red-500 font-semibold">Mailchimp</span> for newsletters and <span className="text-red-500 font-semibold">Laravel Blade</span> and <span className="text-red-500 font-semibold">Alpine.js</span> for the front end.
            </p>
          </div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-slate-900/80 rounded-xl">
            <a href="#" className="bg-cyan-400 text-slate-900 font-semibold py-2 px-4 rounded-lg">View Source Code</a>
          </div>
        </motion.div>

        <motion.div
          variants={container1(0.4, -20)}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          className="relative bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-4">
            <h1 className="text-2xl text-white pb-3 border-b-2 border-slate-600">E-learning</h1>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I developed a RESTful API using <span className="text-red-500 font-semibold">Laravel</span>, supporting user roles like students and teachers, and managed data storage with <span className="text-red-500 font-semibold">MariaDB</span>.
            </p>
          </div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-slate-900/80 rounded-xl">
            <a href="#" className="bg-cyan-400 text-slate-900 font-semibold py-2 px-4 rounded-lg">View Source Code</a>
          </div>
        </motion.div>

        <motion.div
          variants={container1(0.5, -20)}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          className="relative bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-4">
            <h1 className="text-2xl text-white pb-3 border-b-2 border-slate-600">E-commerce</h1>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I’m developing a backend for an E-commerce shop using <span className="text-cyan-400 font-semibold">Go</span>, <span className="text-cyan-400 font-semibold">Chi router</span> for REST, <span className="text-cyan-400 font-semibold">gRPC</span> for inter-service communication, <span className="text-cyan-400 font-semibold">Redis</span> for caching, and <span className="text-cyan-400 font-semibold">RabbitMQ</span> for message brokering.
            </p>
          </div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-slate-900/80 rounded-xl">
            <a href="#" className="bg-cyan-400 text-slate-900 font-semibold py-2 px-4 rounded-lg">View Source Code</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
