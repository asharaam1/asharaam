import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "Lift Humanity",
      description:
        "A social impact platform focused on community upliftment, awareness, and humanitarian initiatives. Built to connect people, share resources, and promote causes that improve lives.",
      tech: ["Next.js", "Firebase", "Cloudinary", "Node.js"],
      githubUrl: "https://github.com/asharaam1/donation-user-web",
      liveUrl: "https://lifthumanity.vercel.app/",
      image: "/assets/projects/project-placeholder.jpg",
    },
  ]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg transition-colors duration-300 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-primary text-transparent bg-clip-text mb-4">
            My Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Click to view code or live
            demo.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
