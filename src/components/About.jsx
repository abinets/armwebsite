import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConceptNote from './ConceptNote';
// --- IMPORTANT: Define your backend server URL here ---
const BACKEND_URL = 'https://arm.moh.gov.et';

// Self-contained Icon component using SVG for a single-file solution
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

// --- Confirmation Modal Component ---
const ConfirmationModal = ({ onClose }) => {
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

// --- Exhibitor Registration Form Component ---
const ExhibitorRegistrationForm = ({ onBackClick, onRegistrationSuccess }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    region: '',
    contactPersonName: '',
    contactPhoneNumber: '',
    optionalPhoneNumber: '',
    contactEmail: '',
    thematicAreas: [],
    conceptNote: null,
    animationsVideos: null,
  });

  const [showConceptNote, setShowConceptNote] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ethiopianRegions = [
    'Afar', 'Amhara', 'Benishangul-Gumuz', 'Gambela', 'Harari', 'Oromia', 'Sidama', 'Somali', 'Southern Nations, Nationalities, and Peoples\' Region', 'South West Ethiopia Peoples\' Region', 'Tigray'
  ];

  // Updated list of 8 thematic areas
  const thematicAreas = [
    'Digital Health Innovation',
    'Health Finance System',
    'Health Service Delivery',
    'Human Resources for Health',
    'Pharmaceutical and Medical Supply',
    'Public Health Emergency',
    'Healthcare Technology Adoption',
    'Maternal and Child Health'
  ];

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === 'file') {
      // File type and size validation
      if (name === 'conceptNote') {
        const file = files[0];
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (file && !allowedTypes.includes(file.type)) {
          setErrors(prev => ({ ...prev, conceptNote: 'Invalid file type. Only PDF, DOC, DOCX allowed.' }));
          return;
        }
        if (file && file.size > 10 * 1024 * 1024) {
          setErrors(prev => ({ ...prev, conceptNote: 'File too large. Max size is 10MB.' }));
          return;
        }
        setErrors(prev => ({ ...prev, conceptNote: undefined }));
        setFormData({ ...formData, [name]: file });
      } else if (name === 'animationsVideos') {
        const file = files[0];
        if (file && file.type !== 'video/mp4') {
          setErrors(prev => ({ ...prev, animationsVideos: 'Invalid file type. Only MP4 allowed.' }));
          return;
        }
        if (file && file.size > 500 * 1024 * 1024) {
          setErrors(prev => ({ ...prev, animationsVideos: 'File too large. Max size is 500MB.' }));
          return;
        }
        setErrors(prev => ({ ...prev, animationsVideos: undefined }));
        setFormData({ ...formData, [name]: file });
      } else {
        setFormData({ ...formData, [name]: files[0] });
      }
    } else if (type === 'checkbox') {
      setFormData(prevData => {
        const updatedAreas = checked
          ? [...prevData.thematicAreas, value]
          : prevData.thematicAreas.filter(area => area !== value);
        return { ...prevData, thematicAreas: updatedAreas };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.organizationName) newErrors.organizationName = 'Organization Name is required.';
    if (!formData.region) newErrors.region = 'Region is required.';
    if (!formData.contactPersonName) newErrors.contactPersonName = 'Contact Person Name is required.';
    if (!formData.contactPhoneNumber) newErrors.contactPhoneNumber = 'Phone Number is required.';
    if (!formData.contactEmail) {
      newErrors.contactEmail = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Email address is invalid.';
    }
    if (formData.thematicAreas.length === 0) newErrors.thematicAreas = 'At least one Thematic Area must be selected.';
    if (!formData.conceptNote) newErrors.conceptNote = 'Concept Note is required.';
    if (!formData.animationsVideos) newErrors.animationsVideos = 'Animations/Videos attachment is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    setLoading(true);
    setError(null);
    try {
      const submissionData = new FormData();
      submissionData.append('organizationName', formData.organizationName);
      submissionData.append('region', formData.region);
      submissionData.append('contactPersonName', formData.contactPersonName);
      submissionData.append('contactPhoneNumber', formData.contactPhoneNumber);
      submissionData.append('optionalPhoneNumber', formData.optionalPhoneNumber);
      submissionData.append('contactEmail', formData.contactEmail);
      submissionData.append('thematicAreas', JSON.stringify(formData.thematicAreas));
      submissionData.append('conceptNote', formData.conceptNote);
      submissionData.append('animationsVideos', formData.animationsVideos);

      let response;
      try {
        response = await fetch(`${BACKEND_URL}/register_exhibitor`, {
          method: 'POST',
          body: submissionData,
        });
      } catch (networkError) {
        setError('Network error: Unable to reach the server. Please check your connection and try again.');
        setLoading(false);
        return;
      }

      if (!response.ok) {
        let errorMsg = `Server error: ${response.statusText}`;
        try {
          const errorData = await response.json();
          errorMsg = errorData.message || errorMsg;
        } catch { }
        setError(errorMsg);
        setLoading(false);
        return;
      }

      onRegistrationSuccess();
    } catch (e) {
      setError(`An unexpected error occurred: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#015aa4]/80 p-8 md:p-12 rounded-xl shadow-lg relative max-h-[90vh] overflow-y-auto w-full max-w-2xl text-white">
      <button
        onClick={onBackClick}
        className="absolute top-4 right-4 text-white hover:text-red-400 text-2xl font-bold px-4 py-2 rounded-full focus:outline-none"
        aria-label="Close Registration Form"
      >
        &times;
      </button>
      <div className="absolute top-4 right-4">
        <button onClick={onBackClick} className="text-white hover:text-gray-300 transition-colors">
          <Icon d="M6 18L18 6M6 6l12 12" className="w-8 h-8" />
        </button>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Exhibitor Registration
      </h2>
      <button
        type="button"
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition"
        onClick={() => setShowConceptNote(true)}
      >
        View Concept Note
      </button>
      {showConceptNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <ConceptNote onClose={() => setShowConceptNote(false)} />
          </div>
        </div>
      )}
      <p className="text-white mb-8">
        Please fill out the form below to register your organization as an exhibitor.
      </p>

      {error && (
        <div className="p-4 mb-4 text-sm text-red-100 bg-red-800 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Organization Name */}
        <div>
          <label htmlFor="organizationName" className="block text-sm font-semibold text-white mb-1">
            Organization Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            className={`block w-full rounded-md bg-white/10 text-white border border-white/20 shadow-sm p-3 ${errors.organizationName ? 'border-red-400' : ''}`}
            required
          />
          {errors.organizationName && <p className="text-red-400 text-sm mt-1">{errors.organizationName}</p>}
        </div>

        {/* Region */}
        <div>
          <label htmlFor="region" className="block text-sm font-semibold text-white mb-1">
            Region <span className="text-red-400">*</span>
          </label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            className={`block w-full rounded-md bg-white/10 text-white border border-white/20 shadow-sm p-3 ${errors.region ? 'border-red-400' : ''}`}
            required
          >
            <option className="bg-[#015aa4]" value="">Select a Region</option>
            {ethiopianRegions.map(region => (
              <option className="bg-[#015aa4]" key={region} value={region}>{region}</option>
            ))}
          </select>
          {errors.region && <p className="text-red-400 text-sm mt-1">{errors.region}</p>}
        </div>

        {/* Contact Person Name */}
        <div>
          <label htmlFor="contactPersonName" className="block text-sm font-semibold text-white mb-1">
            Contact Person Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="contactPersonName"
            name="contactPersonName"
            value={formData.contactPersonName}
            onChange={handleChange}
            className={`block w-full rounded-md bg-white/10 text-white border border-white/20 shadow-sm p-3 ${errors.contactPersonName ? 'border-red-400' : ''}`}
            required
          />
          {errors.contactPersonName && <p className="text-red-400 text-sm mt-1">{errors.contactPersonName}</p>}
        </div>

        {/* Contact Phone Numbers */}
        <div>
          <label htmlFor="contactPhoneNumber" className="block text-sm font-semibold text-white mb-1">
            Contact Person Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="contactPhoneNumber"
            name="contactPhoneNumber"
            value={formData.contactPhoneNumber}
            onChange={handleChange}
            placeholder="e.g., +251..."
            pattern="\+251[0-9]{9}"
            className={`block w-full rounded-md bg-white/10 text-white border border-white/20 shadow-sm p-3 ${errors.contactPhoneNumber ? 'border-red-400' : ''}`}
            required
          />
          {errors.contactPhoneNumber && <p className="text-red-400 text-sm mt-1">{errors.contactPhoneNumber}</p>}
        </div>

        <div>
          <label htmlFor="optionalPhoneNumber" className="block text-sm font-semibold text-white mb-1">
            Optional Phone Number
          </label>
          <input
            type="tel"
            id="optionalPhoneNumber"
            name="optionalPhoneNumber"
            value={formData.optionalPhoneNumber}
            onChange={handleChange}
            placeholder="e.g., +251..."
            pattern="\+251[0-9]{9}"
            className="block w-full rounded-md bg-white/10 text-white border border-white/20 shadow-sm p-3"
          />
        </div>

        {/* Contact Email */}
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-semibold text-white mb-1">
            Contact Person Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            placeholder="(preferable organization email)"
            className={`block w-full rounded-md bg-white/10 text-white border border-white/20 shadow-sm p-3 ${errors.contactEmail ? 'border-red-400' : ''}`}
            required
          />
          {errors.contactEmail && <p className="text-red-400 text-sm mt-1">{errors.contactEmail}</p>}
        </div>

        {/* Thematic Area Checkboxes */}
        <div>
          <label className="block text-sm font-semibold text-white mb-1">
            Selected Thematic Area <span className="text-red-400">*</span>
          </label>
          <p className="text-xs text-gray-300 mb-2">Please select a minimum of one.</p>
          <div className="space-y-2">
            {thematicAreas.map((area, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`thematicArea-${index}`}
                  name="thematicAreas"
                  value={area}
                  checked={formData.thematicAreas.includes(area)}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#49A6E9] rounded-sm focus:ring-[#49A6E9] border-gray-300"
                />
                <label htmlFor={`thematicArea-${index}`} className="ml-2 text-white">{area}</label>
              </div>
            ))}
          </div>
          {errors.thematicAreas && <p className="text-red-400 text-sm mt-1">{errors.thematicAreas}</p>}
        </div>

        {/* File Uploads */}
        <div className="space-y-4">
          <div>
            <label htmlFor="conceptNote" className="block text-sm font-semibold text-white mb-1">
              Concept Note Attachment <span className="text-red-400">*</span>
            </label>
            <p className="text-xs text-gray-300 mb-2">
              Accepted file types: PDF, DOC, DOCX. Max size: 10MB.
            </p>
            <input
              type="file"
              id="conceptNote"
              name="conceptNote"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              className={`block w-full text-sm text-gray-300
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-[#49A6E9]/20 file:text-[#49A6E9]
              hover:file:bg-[#49A6E9]/30
              transition-colors duration-300 ${errors.conceptNote ? 'border border-red-400 rounded-md' : ''}`}
              required
            />
            {errors.conceptNote && <p className="text-red-400 text-sm mt-1">{errors.conceptNote}</p>}
          </div>

          <div>
            <label htmlFor="animationsVideos" className="block text-sm font-semibold text-white mb-1">
              Animations/Videos Attachment <span className="text-red-400">*</span>
            </label>
            <p className="text-xs text-gray-300 mb-2">
              Accepted file type: MP4 (1080p). Max size: 500MB.
            </p>
            <input
              type="file"
              id="animationsVideos"
              name="animationsVideos"
              onChange={handleChange}
              accept="video/mp4"
              className={`block w-full text-sm text-gray-300
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-[#49A6E9]/20 file:text-[#49A6E9]
              hover:file:bg-[#49A6E9]/30
              transition-colors duration-300 ${errors.animationsVideos ? 'border border-red-400 rounded-md' : ''}`}
              required
            />
            {errors.animationsVideos && <p className="text-red-400 text-sm mt-1">{errors.animationsVideos}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-semibold rounded-full text-white bg-[#0273a4] hover:bg-[#016591] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Submit Registration'}
        </button>

      </form>
      {/* Bottom right X close button */}
      <button
        onClick={onBackClick}
        className="fixed bottom-8 right-8 text-white hover:text-red-400 text-2xl font-bold px-4 py-2 rounded-full focus:outline-none z-50"
        aria-label="Close Registration Form"
        style={{ pointerEvents: 'auto' }}
      >
        &times;
      </button>
    </div>
  );
};

// --- Exhibitor List Component (Corrected) ---
const ExhibitorList = ({ onBackClick }) => {
  const [exhibitors, setExhibitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Corrected JSON data with escaped quotes
  const rawData = '[{"organization_name":"HABTech","region":"Amhara","contact_person_name":"Abinet Seife Zergaw","contact_person_phone_number":"+251913827238","contact_person_email":"abnios@gmail.com","selected_thematic_areas":"[\\"Digital Health Innovation\\",\\"Health Finance System\\",\\"Health Service Delivery\\"]","concept_note_path":"uploads/conceptNote-1758384944645-169585719.pdf","animations_videos_path":"uploads/animationsVideos-1758384944653-709285271.mp4"},{"organization_name":"Pers","region":"Harari","contact_person_name":"Abinet Zergaw","contact_person_phone_number":"+251913827238","contact_person_email":"abnios.se@gmail.com","selected_thematic_areas":"[\\"Digital Health Innovation\\",\\"Health Service Delivery\\",\\"Health Finance System\\",\\"Pharmaceutical and Medical Supply\\"]","concept_note_path":"uploads/conceptNote-1758385411442-682603398.pdf","animations_videos_path":"uploads/animationsVideos-1758385411452-112201978.mp4"}]';

  useEffect(() => {
    try {
      const data = JSON.parse(rawData);
      setExhibitors(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  return (
    <div className="bg-[#015aa4]/80 p-8 md:p-12 rounded-xl shadow-lg relative max-h-[90vh] overflow-y-auto w-full max-w-4xl text-white">
      <div className="absolute top-4 right-4">
        <button onClick={onBackClick} className="text-white hover:text-gray-300 transition-colors">
          <Icon d="M6 18L18 6M6 6l12 12" className="w-8 h-8" />
        </button>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
        Registered Exhibitors
      </h2>

      {loading && <p className="text-center text-lg">Loading exhibitor list...</p>}
      {error && <p className="text-center text-red-400 text-lg">Error: {error}</p>}

      {!loading && !error && (
        <div className="space-y-6">
          {exhibitors.length > 0 ? (
            exhibitors.map((exhibitor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl border border-white/20"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {exhibitor.organization_name}
                </h3>
                <div className="text-sm space-y-1">
                  <p><strong>Region:</strong> {exhibitor.region}</p>
                  <p><strong>Contact Person:</strong> {exhibitor.contact_person_name}</p>
                  <p><strong>Email:</strong> {exhibitor.contact_person_email}</p>
                  <p><strong>Phone:</strong> {exhibitor.contact_person_phone_number}</p>
                  {/* Correctly parse the thematicAreas string before using .map() */}
                  <p className="mt-2">
                    <strong>Thematic Areas:</strong> {exhibitor.selected_thematic_areas && JSON.parse(exhibitor.selected_thematic_areas).join(', ')}
                  </p>

                  {/* Attachment Links Section - New addition */}
                  <div className="mt-4 pt-4 border-t border-white/20 flex flex-wrap gap-2">
                    {exhibitor.concept_note_path && (
                      <a
                        href={`${BACKEND_URL}/${exhibitor.concept_note_path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-full text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
                      >
                        <Icon
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          className="w-4 h-4"
                        />
                        <span>Concept Note</span>
                      </a>
                    )}
                    {exhibitor.animations_videos_path && (
                      <a
                        href={`${BACKEND_URL}/${exhibitor.animations_videos_path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-purple-600 rounded-full text-white font-semibold text-sm hover:bg-purple-700 transition-colors"
                      >
                        <Icon
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h.01M10 18h.01M15 18h.01M5 14h.01M10 14h.01M15 14h.01"
                          className="w-4 h-4"
                        />
                        <span>Animations/Videos</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-lg">No exhibitors have registered yet.</p>
          )}
        </div>
      )}
    </div>
  );
};


// --- About Component ---
const About = ({ onRegisterClick }) => {
  const highlights = [{
    icon: (
      <Icon
        d="M12 2a4 4 0 0 0-4 4v7a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4zM6 13a6 6 0 0 0 12 0v-2h-2v2a4 4 0 0 1-8 0v-2H6v2zm6 11a7 7 0 0 1-7-7h2a5 5 0 0 0 10 0h2a7 7 0 0 1-7 7z"
        className="w-8 h-8 text-white"
      />
    ),
    title: '20+ Sessions',
    description: 'Reviewing annual health reports and engaging in collaborative panel discussions.'
  }, {
    icon: (
      <Icon
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        className="w-8 h-8 text-white"
      />
    ),
    title: '25+ Speakers',
    description: 'Higher officials, donors, partners, and healthcare leaders sharing their insights.'
  }, {
    icon: (
      <Icon
        d="M21 21c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v16zM5 5v14h14V5H5zm8 4h-2V7h2v2zm-2 4h2v-2h-2v2zm4 0h-2v-2h2v2zm-4 4h2v-2h-2v2zm4 0h-2v-2h2v2zm-4 4v2h2v-2h-2zm4 0v2h2v-2h-2zm-4 0v2h2v-2H6z"
        className="w-8 h-8 text-white"
      />
    ),
    title: '8+ Side Events',
    description: 'Field visits, an awards ceremony, and discussions on advancing the health sector.'
  }, {
    icon: (
      <Icon
        d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm2 0v14h16V5H4zm2 2v2h2v-2H6zm0 4v2h2v-2H6zm4-4v2h2v-2h-2zm0 4v2h2v-2h-2zm4-4v2h2v-2h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zm-4 0v2h2v-2h-2zm-4 0v2h2v-2H6z"
        className="w-8 h-8 text-white"
      />
    ),
    title: '12+ Exhibitions Booths',
    description: 'All regional and national-level exhibitors are participating and exhibiting their works at the event.'
  }];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Set target date to October 22, 2025 at midnight EAT
    const targetDate = new Date('2025-10-22T00:00:00+03:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const characters_days = Array.from("DAYS");
  const characters_hours = Array.from("HRS");
  const characters_minutes = Array.from("MINS");
  const characters_seconds = Array.from("SECS");

  return (
    <section id="about" className="py-20 bg-[#015aa4]" style={{ scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-4">
        {/* The Countdown Display is now here */}
        <motion.div
          className="flex flex-col items-center justify-center text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex justify-center items-center gap-2 md:gap-4">
            {/* Days */}
            <div className="flex flex-col items-center">
              <motion.span
                className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {Array.from(timeLeft.days.toString()).map((char, index) => (
                  <motion.span key={`days-${index}`} variants={characterVariants} style={{ display: 'inline-block' }}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                className="text-base md:text-lg font-semibold text-blue-100 uppercase mt-1"
                variants={containerVariantsAmharic}
                initial="hidden"
                animate="visible"
              >
                {characters_days.map((char, index) => (
                  <motion.span key={`days-label-${index}`} variants={characterVariantsAmharic} style={{ display: 'inline-block' }}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
            </div>

            <div className="text-3xl md:text-5xl font-extrabold text-white">:</div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <motion.span
                className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {Array.from(timeLeft.hours.toString().padStart(2, '0')).map((char, index) => (
                  <motion.span key={`hours-${index}`} variants={characterVariants} style={{ display: 'inline-block' }}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                className="text-base md:text-lg font-semibold text-blue-100 uppercase mt-1"
                variants={containerVariantsAmharic}
                initial="hidden"
                animate="visible"
              >
                {characters_hours.map((char, index) => (
                  <motion.span key={`hours-label-${index}`} variants={characterVariantsAmharic} style={{ display: 'inline-block' }}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
            </div>

            <div className="text-3xl md:text-5xl font-extrabold text-white">:</div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <motion.span
                className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {Array.from(timeLeft.minutes.toString().padStart(2, '0')).map((char, index) => (
                  <motion.span key={`minutes-${index}`} variants={characterVariants} style={{ display: 'inline-block' }}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                className="text-base md:text-lg font-semibold text-blue-100 uppercase mt-1"
                variants={containerVariantsAmharic}
                initial="hidden"
                animate="visible"
              >
                {characters_minutes.map((char, index) => (
                  <motion.span key={`minutes-label-${index}`} variants={characterVariantsAmharic} style={{ display: 'inline-block' }}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
            </div>

            {/* Display seconds on larger screens only */}
            {!isMobile && (
              <>
                <div className="text-3xl md:text-5xl font-extrabold text-white">:</div>
                <div className="flex flex-col items-center">
                  <motion.span
                    className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {Array.from(timeLeft.seconds.toString().padStart(2, '0')).map((char, index) => (
                      <motion.span key={`seconds-${index}`} variants={characterVariants} style={{ display: 'inline-block' }}>
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                  <motion.span
                    className="text-base md:text-lg font-semibold text-blue-100 uppercase mt-1"
                    variants={containerVariantsAmharic}
                    initial="hidden"
                    animate="visible"
                  >
                    {characters_seconds.map((char, index) => (
                      <motion.span key={`seconds-label-${index}`} variants={characterVariantsAmharic} style={{ display: 'inline-block' }}>
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </motion.span>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Register Now button */}
        <div className="flex justify-center mt-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="http://196.188.63.190:3000/users/sign_in">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-[#0273a4] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#016591] transition-all duration-300 group"
              >
                <span className="relative z-10">Register Now</span>
              </motion.button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About the ARM
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white mb-2 leading-relaxed">
              The Annual Review Meeting (ARM) of the Ethiopian Ministry of Health brings together stakeholders to review health sector performance, share best practices, and establish new priorities.
              <br /> <br /> The 27th ARM will focus on the theme <span className="text-lg font-bold text-white leading-relaxed">ዘላቂ ኢንቨስትመንት እና ፈጠራ፤ ለጠንካራ የጤና ስርአት!</span>
              with the English translation </p>
            <p className="text-lg font-bold text-white leading-relaxed">
              Driving Health Gains Through Sustainable Investments and Innovations

            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#015aa4]/70 rounded-xl p-8 shadow-lg shadow-black/30 border-2 border-white/20 hover:shadow-xl hover:shadow-black/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0273a4] to-[#013c71] rounded-full mb-6 mx-auto">
                {highlight.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {highlight.title}
              </h3>
              <p className="text-white text-center leading-relaxed mb-4">
                {highlight.description}
              </p>
              {highlight.title === '12+ Exhibitions Booths' && (
                <div className="text-center mt-4">
                  <button
                    onClick={onRegisterClick}
                    className="inline-block px-6 py-3 text-sm font-semibold text-white bg-[#0273a4] rounded-full hover:bg-[#016591] transition-colors duration-300"
                  >
                    Register as Exhibitor
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Main App Component ---
const App = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isExhibitorListOpen, setIsExhibitorListOpen] = useState(false);
  const modalRef = useRef(null);

  const handleRegisterClick = () => {
    setIsExhibitorListOpen(false); // Close list if it's open
    setIsPanelOpen(true);
  };

  const handleViewExhibitorsClick = () => {
    setIsPanelOpen(false); // Close form if it's open
    setIsExhibitorListOpen(true);
  };

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsPanelOpen(false);
      setIsExhibitorListOpen(false);
    }
  };

  const handleBackClick = () => {
    setIsPanelOpen(false);
    setIsExhibitorListOpen(false);
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
      {/* New Navigation Bar with "View Exhibitors" Button */}
      {/* <nav className="fixed top-0 left-0 right-0 z-40 bg-[#015aa4] bg-opacity-80 backdrop-blur-md p-4 flex justify-between items-center text-white shadow-lg">
        <div className="text-xl font-bold">ARM</div>
        <button
          onClick={handleViewExhibitorsClick}
          className="relative overflow-hidden bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 group"
        >
          View Exhibitors
        </button>
      </nav> */}
      <About onRegisterClick={handleRegisterClick} />

      <AnimatePresence>
        {isPanelOpen && (
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
              <ExhibitorRegistrationForm onBackClick={handleBackClick} onRegistrationSuccess={handleRegistrationSuccess} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExhibitorListOpen && (
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
              className="w-full max-w-4xl bg-[#015aa4]/70 rounded-xl shadow-2xl relative"
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
