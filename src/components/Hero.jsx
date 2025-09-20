import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define variants for the parent container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Define variants for each individual character
const characterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: [0, -10, 0], // Wave effect with movement on the y-axis
    color: ['#FFFFFF', '#40E0D0'], // Animate to a light cyan color
    scale: [1, 1.1, 1],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1.5,
    },
  },
};

// Define variants for the Amharic parent container to wave in the opposite direction
const containerVariantsAmharic = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: -0.05, // Negative stagger to wave from right to left
    },
  },
};

// Define variants for each individual Amharic character (opposite y-axis movement)
const characterVariantsAmharic = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: [0, 10, 0], // Wave effect with opposite y-axis movement
    color: ['#FFFFFF', '#40E0D0'],
    scale: [1, 1.1, 1],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1.5,
    },
  },
};


const Hero = () => {
  // State to track screen width for conditional video loading
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Event listener for window resize to update isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define local video file paths for desktop and mobile
  const desktopVideoPath = "/armweb_desktop.mp4";
  const mobileVideoPath = "/armvid_mob.mp4";

  // Select the appropriate video path based on screen size
  const currentVideoPath = isMobile ? mobileVideoPath : desktopVideoPath;
  

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={currentVideoPath} // Use the dynamically selected local video path
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Main Container - now uses responsive classes */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center justify-start md:justify-between min-h-screen">
        {/* New Parent Div - mobile-only top margin */}
        <div className="flex flex-col items-center mt-4 md:mt-0">
          {/* Your existing text and content here... */}
        </div>
      
        {/* The Register button is now at the very bottom for desktop */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <a href="http://196.188.63.190:3000/users/sign_in">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  className="absolute inset-0 bg-[#102542]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Register Now</span>
              </motion.button>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
