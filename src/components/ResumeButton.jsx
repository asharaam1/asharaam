import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const ResumeButton = ({ resumeUrl = '/resume.pdf' }) => {
  return (
    <motion.a
      href={resumeUrl}
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white font-medium rounded-md hover:opacity-90 transition-opacity"
    >
      <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
      Download Resume
    </motion.a>
  );
};

export default ResumeButton;