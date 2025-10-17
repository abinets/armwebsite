import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
// IMPORT the Registration Modal and AnimatePresence
import { AnimatePresence } from 'framer-motion'; 
import RegistrationModal from './RegistrationModal'; // Adjust path if needed

const { FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal

  // Functions to control the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Existing scroll listener for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    // { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Itinerary', href: '#visits' },
    { name: 'Resources', href: '#Resources' },
    { name: 'Awardees', href: '#awardees' },
    { name: 'Committee', href: '#corearm-committee' },
    { name: 'Online', href: '#online-event' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    // Check if href is a valid selector
    if (!href || href === '#') return;

    const element = document.querySelector(href);
    if (element) {
      // Find all images within the target element
      const images = element.querySelectorAll('img');

      // Create a promise for each image's load event
      const imagePromises = Array.from(images).map(img => {
        return new Promise((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => resolve(); // Resolve even on error to not block the scroll
          }
        });
      });

      // Wait for all images to load before executing the scroll
      Promise.all(imagePromises).then(() => {
        const headerHeight = 80;
        // ⭐ MODIFICATION 1: Add a slight delay to ensure correct calculation on first load
        setTimeout(() => {
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
        }, 50); 
      });
    }
    setIsMobileMenuOpen(false);
  };
  
  // ⭐ MODIFICATION 2: New useEffect to handle initial page load hash routing
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Use requestAnimationFrame to ensure the DOM is painted and ready
      window.requestAnimationFrame(() => {
        // Calls the modified scrollToSection, which will wait for images/use timeout
        scrollToSection(hash);
      });
    }
  }, []); // Runs only once on component mount

  const FlipText = ({ children, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={`relative overflow-hidden ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -30 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
        <motion.div
          className="absolute inset-0"
          initial={{ y: 30 }}
          animate={{ y: isHovered ? 0 : 30 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </div>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#015aa4] shadow-lg' : 'bg-transparent'
        }`}
        style={{ height: '80px' }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* Mobile menu button is now on the left */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden ${isScrolled ? 'text-white' : 'text-white'}`}
              >
                <SafeIcon icon={isMobileMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
              </button>

              <motion.div
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="https://hispmd.moh.gov.et/app/MOH_logo_text_white.png"
                    alt="Ministry of Health Ethiopia Logo"
                    className="rounded-full w-10 h-10"
                  />
                </div>
                {/* Conditional rendering for desktop view */}
                <div className="hidden md:block">
                  <h1 className={`font-bold text-xl ${isScrolled ? 'text-white' : 'text-white'}`}>
                    Ministry of Health, Ethiopia
                  </h1>
                  <p className={`text-sm ${isScrolled ? 'text-blue-100' : 'text-blue-100'}`}>
                    2025
                  </p>
                </div>
                {/* Mobile-specific layout */}
                <div className="block md:hidden">
                  <div className="flex flex-col ml-1">
                    <h1 className={`font-bold text-sm leading-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
                      Ministry of Health,
                    </h1>
                    <p className={`text-xs leading-tight ${isScrolled ? 'text-blue-100' : 'text-blue-100'}`}>
                      Ethiopia | 2025
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-all duration-300 hover:font-bold ${
                    isScrolled ? 'text-white' : 'text-white'
                  }`}
                >
                  <FlipText>{item.name}</FlipText>
                </button>
              ))}
              
              {/* === MODIFIED DESKTOP BUTTON === */}
              <motion.button
                onClick={openModal} // <-- New: Open Modal on click
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 group"
              >
                <motion.div
                  className="absolute inset-0 bg-[#102542]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Register</span>
              </motion.button>
              {/* ============================= */}
            </nav>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 1, height: 0 }}
              className={`absolute top-full left-0 right-0 w-[70%] rounded-lg shadow-lg p-4 mx-auto
                ${isScrolled ? 'bg-white' : 'bg-white/50'}`}
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              
              {/* === MODIFIED MOBILE BUTTON === */}
              <button 
                onClick={() => { closeModal(); openModal(); setIsMobileMenuOpen(false); }} // <-- New: Open Modal
                className="w-full bg-blue-600 text-white py-2 rounded-full mt-4 hover:bg-blue-700 transition-colors relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-[#102542]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Register</span>
              </button>
              {/* ============================== */}
            </motion.div>
          )}
        </div>
      </motion.header>
      
      {/* The Reusable Modal is rendered outside the header */}
      <RegistrationModal 
        isModalOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default Header;
