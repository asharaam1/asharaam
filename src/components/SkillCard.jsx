import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
  return (
    <motion.div 
      whileHover={{ y: -10, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-darkBg rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800 transition-colors duration-300 overflow-hidden relative h-full"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-10 rounded-full -mr-10 -mt-10 z-0"></div>
      
      <div className="relative z-10">
        {skill.icon && (
          <div className="flex justify-center mb-4">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.1 }}
              whileTap={{ rotate: 25, scale: 0.9 }}
              className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary"
            >
              {skill.icon}
            </motion.div>
          </div>
        )}
        
        <h3 className="text-xl font-bold text-center text-gray-900 dark:text-darkText mb-2">{skill.name}</h3>
        
        {skill.level && (
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-gradient-primary h-2.5 rounded-full relative"
            >
              <motion.div 
                className="absolute top-0 right-0 h-full w-2 bg-white/30 rounded-full"
                animate={{ 
                  x: ['-100%', '100%'],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "linear",
                  repeatDelay: 0.5
                }}
              />
            </motion.div>
          </div>
        )}
        
        {skill.description && (
          <p className="text-gray-600 dark:text-gray-400 text-center text-sm">{skill.description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default SkillCard;