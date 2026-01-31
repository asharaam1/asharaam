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
      tech: ["Next.js", "Tailwind CSS", "Firebase", "Cloudinary", "Vercel"],
      githubUrl: "https://github.com/asharaam1/donation-user-web",
      liveUrl: "https://lifthumanity.vercel.app/",
      image: "/assets/projects/project-placeholder.jpg",
    },
    {
      id: 2,
      name: "Budget Luxe",
      description:
        "Budget Luxe is a modern e-commerce website focused on showcasing affordable luxury products. The platform features a clean, responsive UI, smooth navigation, and optimized product browsing to enhance user shopping experience across all devices.",
      tech: ["Next.js", "Tailwind CSS", "Firebase", "Cloudinary", "Vercel"],
      githubUrl: "https://github.com/asharaam1/budget-luxe",
      liveUrl: "https://budgetluxe.vercel.app/",
      image: "/assets/projects/budgetluxe.png",
    },
    {
      id: 3,
      name: "SmartChat AI",
      description:
        "A modern AI chatbot built with React and Gemini API that supports real-time messaging, smooth UI interactions, API-based intelligent responses, and responsive design optimized for all devices.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Gemini API",
        "JavaScript",
        "Vercel",
      ],
      githubUrl: "https://github.com/asharaam1/My-ChatBot",
      liveUrl: "https://smartchat-gem.vercel.app/",
      image: "/assets/projects/smartchatai.png",
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
