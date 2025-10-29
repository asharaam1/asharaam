import React, { useContext } from 'react';
import { Link, Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AvailabilityContext } from '../context/AvailabilityContext';
import { SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const { isAvailable } = useContext(AvailabilityContext);

  const techIcons = [
    { name: 'React', icon: <SiReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
        >
          {/* Availability Badge */}
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${isAvailable ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
              {isAvailable ? '✓ Available for Hire' : '✗ Not Available for Hire'}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block  text-gray-600 dark:text-gray-300" >Hi, I'm</span>
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Asha Ram</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I build modern, responsive web applications and mobile applications with cutting-edge technologies.
            Passionate about creating elegant solutions to complex problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-primary text-white font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              Contact Me
            </Link>

            <Link
              to="/projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/10 dark:bg-secondary/20 rounded-full filter blur-3xl"></div>

            {/* Profile image */}
            <div className="relative z-10 bg-gradient-to-br from-primary to-secondary p-1 rounded-2xl">
              <div className="bg-white dark:bg-darkBg rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/profile.jpg"
                  alt="Your Name"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/profile.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech stack preview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container mx-auto px-4 py-10"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">Tech Stack</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8 opacity-80">
          {/* Replace with actual tech icons */}
          {techIcons.map(({ name, icon }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-2xl">
                {icon}
              </div>
              <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">{name}</span>
            </div>
          ))}
          <Link to='/Skills' className="flex flex-col items-center">
            <button className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-2xl">
              <FaArrowRight />
            </button>
            <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">See More</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;