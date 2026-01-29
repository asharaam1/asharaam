import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const TECH_LIMIT = 4;

const ProjectCard = ({ project }) => {
  const [showMore, setShowMore] = useState(false);

  const visibleTech = project.tech.slice(0, TECH_LIMIT);
  const extraTech = project.tech.slice(TECH_LIMIT);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-darkCard rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/70 hover:bg-black text-white p-2 rounded-full"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/80 hover:bg-primary text-white p-2 rounded-full"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {project.name}
        </h3>

        {project.description && (
          <details className="mb-4">
            <summary className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-primary">
              {project.description.length > 120
                ? `${project.description.substring(0, 120)}...`
                : project.description}
            </summary>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              {project.description}
            </p>
          </details>
        )}

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {visibleTech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

          {extraTech.length > 0 && (
            <button
              onClick={() => setShowMore(true)}
              className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition"
            >
              +{extraTech.length} more
            </button>
          )}
        </div>

        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Popup Modal */}
      {showMore && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-darkCard p-6 rounded-xl max-w-md w-full">
            <h4 className="text-lg font-bold mb-3">All Technologies</h4>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() => setShowMore(false)}
              className="mt-2 px-4 py-2 bg-primary text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
