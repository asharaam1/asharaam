import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text inline-block">
            About Me
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Image Column */}
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-xl">
                <div className="bg-white dark:bg-darkBg rounded-xl overflow-hidden">
                  <img 
                    src="/assets/images/about-me.jpg" 
                    alt="About Me" 
                    className="w-full h-auto object-cover aspect-[3/4]" 
                    style={{ minHeight: '400px' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/profile.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Asha Ram
              </h2>
              
              <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Full Stack Developer
              </h3>
              
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                  With a strong foundation in both frontend and backend technologies, I create seamless, 
                  user-friendly experiences that solve real-world problems.
                </p>
                
                <p>
                  My journey in web development began in 2024, and since then, I've worked on a variety of projects 
                  ranging from small business websites to complex enterprise applications. I'm constantly learning 
                  and adapting to new technologies to stay at the forefront of web development.
                </p>
                
                <p>
                  When I'm not coding, you can find me sketching UI ideas, reading about emerging technologies, or enjoying time with friends and family. I believe that a well-rounded life 
                  makes for a better developer, and I bring creativity and problem-solving skills from all aspects of my life 
                  to my work.
                </p>
              </div>
              
              {/* Personal Info */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                  <p className="text-gray-900 dark:text-white">lohanaasharaam1@gmail.com</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Location</h4>
                  <p className="text-gray-900 dark:text-white">Garden West, Karachi, Pakistan</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Education</h4>
                  <p className="text-gray-900 dark:text-white">BS Information Tech, Benazir Bhutto Shaheed University, Lyari</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Experience</h4>
                  <p className="text-gray-900 dark:text-white">1+ Years in Web/App Development</p>
                </div>
              </div>
              
              {/* Resume Button */}
              <div className="mt-8">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-primary text-white font-medium rounded-md hover:opacity-90 transition-opacity inline-block"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;