import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// You don't need Link or react-router-dom imports here for this approach
// If you want to use the router, the previous solution is better.

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Venue from './components/Venue';
import Sponsors from './components/Sponsors';
import Resources from './components/Resources';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OnlineEvent from './components/OnlineEvent';
import Awardees from './components/Awardees';
import CoreArmCommittee from './components/CoreArmCommittee';
import ExhibitorList from './components/ExhibitorList';
// import ExhibitorRegistrationForm from './components/ExhibitorRegistrationForm';
import ConfirmationModal from './components/ConfirmationModal'; // Assuming this is in a separate file now

// You can create a reusable icon component here if you want
const Icon = ({ d, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d={d} />
  </svg>
);


function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showExhibitorList, setShowExhibitorList] = useState(false); // New state for the list
  const modalRef = useRef(null);

  const handleRegisterClick = () => {
    setIsPanelOpen(true);
  };
  
  const handleViewExhibitorsClick = () => { // New handler for the list
    setShowExhibitorList(true);
  };

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsPanelOpen(false);
      setShowExhibitorList(false); // Close the list modal too
    }
  };

  const handleBackClick = () => {
    setIsPanelOpen(false);
    setShowExhibitorList(false); // Close both forms
  };

  const handleRegistrationSuccess = () => {
    setIsPanelOpen(false);
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <About 
          onRegisterClick={handleRegisterClick} 
          onViewExhibitorsClick={handleViewExhibitorsClick} // Pass the new handler
        />
        <Speakers />
        <Schedule />
        <Venue />
        <Sponsors />
        <Awardees />
        <OnlineEvent />
        <Resources />
        <CoreArmCommittee />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    
      <AnimatePresence>
        {isPanelOpen && !showExhibitorList && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center p-4 md:p-8"
          >
            <motion.div
              ref={modalRef}
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full max-w-2xl bg-[#015aa4]/70 rounded-xl shadow-2xl relative"
            >
              {/* <ExhibitorRegistrationForm onBackClick={handleBackClick} onRegistrationSuccess={handleRegistrationSuccess} /> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showExhibitorList && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center p-4 md:p-8"
          >
            <motion.div
              ref={modalRef}
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full max-w-5xl bg-[#015aa4]/70 rounded-xl shadow-2xl relative"
            >
              <ExhibitorList onBackClick={handleBackClick} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showConfirmation && (
          <ConfirmationModal onClose={handleCloseConfirmation} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;