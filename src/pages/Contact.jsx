import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import MapComponent from '../components/MapComponent';

const Contact = () => {
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
          <h1 className="text-4xl font-bold bg-gradient-primary text-transparent bg-clip-text mb-4">Contact Me</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Have a question or want to work together? Feel free to reach out!</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-darkText mb-6">Let's Talk</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-darkText">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">lohanaasharaam1@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-darkText">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+92 306 3039620</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-darkText">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900 dark:text-darkText mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/asharaam1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  GitHub
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/asharaam1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  LinkedIn
                </motion.a>
                <motion.a 
                  href="https://twitter.com/asharaam123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Twitter
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
        
        {/* Added Map Section from Location Page */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-darkText mb-6">My Location</h2>
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
}

export default Contact;