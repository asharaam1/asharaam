import { motion } from 'framer-motion';
import MapComponent from '../components/MapComponent';

const Location = () => {
  // Replace with your actual coordinates
  const position = [24.8607, 67.0011]; // Karachi coordinates
  
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg transition-colors duration-300 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-primary text-transparent bg-clip-text mb-4">My Location</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">I'm currently based in Karachi, Pakistan. Here's where you can find me.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <MapComponent position={position} zoom={13} />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-darkBg rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-darkText mb-4">About My Location</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Karachi is Pakistan's largest city and a hub for technology and innovation. It's a vibrant metropolis with a rich cultural heritage and a growing tech community.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I'm available for local meetups and remote work opportunities. If you're in the area and would like to connect, feel free to reach out through the contact form.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-darkBg rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-darkText mb-4">Working Hours</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                <span className="font-medium text-gray-900 dark:text-darkText">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                <span className="font-medium text-gray-900 dark:text-darkText">10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                <span className="font-medium text-gray-900 dark:text-darkText">Closed</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-darkText mb-2">Timezone</h3>
              <p className="text-gray-600 dark:text-gray-400">Pakistan Standard Time (PKT) - UTC+5</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Location;