import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

 

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


function ConfirmationModal({ onClose }) {
  // Your component logic for the ConfirmationModal goes here
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-75">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-[#015aa4]/90 rounded-xl p-8 shadow-2xl max-w-sm w-full text-center text-white"
      >
        <div className="text-green-400 mx-auto mb-4">
          <Icon d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" className="w-16 h-16 mx-auto" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Registration Successful!</h3>
        <p className="text-white mb-6">
          We will be in touch shortly with more details about your exhibition.
        </p>
        <button
          onClick={onClose}
          className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-semibold rounded-full text-white bg-[#0273a4] hover:bg-[#016591] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ConfirmationModal;