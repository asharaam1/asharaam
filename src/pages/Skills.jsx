import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
// Import icons
import {
  FaReact, FaJs, FaHtml5, FaNodeJs, FaDatabase, FaServer,
  FaDocker, FaFigma, FaCode, FaTools
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFramer, SiExpress, SiMongodb, SiFirebase, SiGraphql, SiWebpack, SiJest } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineCloudServer } from 'react-icons/ai';

const Skills = () => {
  // Define skill categories with icons and descriptions
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaCode className="w-8 h-8 text-primary" />,
      skills: [
        { name: 'React.js', level: 90, icon: <FaReact className="w-8 h-8" />, description: 'Building interactive UIs' },
        { name: 'JavaScript', level: 85, icon: <FaJs className="w-8 h-8" />, description: 'ES6+ features' },
        { name: 'TypeScript', level: 80, icon: <SiTypescript className="w-8 h-8" />, description: 'Type-safe code' },
        { name: 'HTML5 & CSS3', level: 95, icon: <FaHtml5 className="w-8 h-8" />, description: 'Semantic markup' },
        { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="w-8 h-8" />, description: 'Utility-first CSS' },
        { name: 'Framer Motion', level: 75, icon: <SiFramer className="w-8 h-8" />, description: 'Fluid animations' },
      ],
    },
    {
      title: 'Backend',
      icon: <FaServer className="w-8 h-8 text-primary" />,
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNodeJs className="w-8 h-8" />, description: 'Server-side JavaScript' },
        { name: 'Express.js', level: 80, icon: <SiExpress className="w-8 h-8" />, description: 'Web framework' },
        { name: 'MongoDB', level: 75, icon: <SiMongodb className="w-8 h-8" />, description: 'NoSQL database' },
        { name: 'Firebase', level: 70, icon: <SiFirebase className="w-8 h-8" />, description: 'BaaS solution' },
        { name: 'RESTful APIs', level: 85, icon: <FaDatabase className="w-8 h-8" />, description: 'API design' },
        { name: 'GraphQL', level: 65, icon: <SiGraphql className="w-8 h-8" />, description: 'Query language' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: <FaTools className="w-8 h-8 text-primary" />,
      skills: [
        { name: 'Git & GitHub', level: 90, icon: <VscGithub className="w-8 h-8" />, description: 'Version control' },
        { name: 'Webpack', level: 75, icon: <SiWebpack className="w-8 h-8" />, description: 'Module bundler' },
        { name: 'Docker', level: 65, icon: <FaDocker className="w-8 h-8" />, description: 'Containerization' },
        { name: 'Jest', level: 70, icon: <SiJest className="w-8 h-8" />, description: 'Testing framework' },
        { name: 'CI/CD', level: 60, icon: <AiOutlineCloudServer className="w-8 h-8" />, description: 'Continuous integration' },
        { name: 'Figma', level: 80, icon: <FaFigma className="w-8 h-8" />, description: 'UI/UX design' },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-lightBg to-white dark:from-darkBg dark:to-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-primary text-transparent bg-clip-text mb-4">My Skills</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Here are some of the technologies and tools I work with.</p>
        </motion.div>

        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="mb-16"
            variants={categoryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center mb-8">
              <div className="mr-4">{category.icon}</div>
              <motion.h2
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                {category.title}
              </motion.h2>
              <div className="h-px flex-grow ml-4 bg-gradient-to-r from-primary/50 to-transparent"></div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {category.skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;