import React, { useState, useEffect } from 'react';

const ExhibitorList = ({ onBackClick }) => {
  const [exhibitors, setExhibitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExhibitors = async () => {
      try {
        const response = await fetch('http://localhost:3001/exhibitors');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExhibitors(data);
      } catch (e) {
        console.error('Failed to fetch exhibitor list:', e);
        setError('Failed to fetch exhibitor list.');
      } finally {
        setLoading(false);
      }
    };

    fetchExhibitors();
  }, []);

  if (loading) return <div className="p-8 text-center text-white">Loading exhibitors...</div>;
  if (error) return <div className="p-8 text-center text-red-400">{error}</div>;
  if (exhibitors.length === 0) return <div className="p-8 text-center text-white">No registered exhibitors yet.</div>;

  return (
    <div className="p-8 max-h-[80vh] overflow-y-auto">
      <button onClick={onBackClick} className="absolute top-4 left-4 text-white hover:text-gray-200 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <h2 className="text-3xl font-bold text-center text-white mb-6">Registered Exhibitors</h2>
      <div className="space-y-6">
        {exhibitors.map((exhibitor, index) => {
          // Add this check to prevent the error
          const thematicAreas = exhibitor.selected_thematic_areas ? JSON.parse(exhibitor.selected_thematic_areas) : [];

          return (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">{exhibitor.organization_name}</h3>
              <p className="text-gray-200"><span className="font-semibold">Region:</span> {exhibitor.region}</p>
              <p className="text-gray-200"><span className="font-semibold">Contact Person:</span> {exhibitor.contact_person_name}</p>
              <p className="text-gray-200"><span className="font-semibold">Email:</span> {exhibitor.contact_person_email}</p>
              <p className="text-gray-200"><span className="font-semibold">Phone:</span> {exhibitor.contact_person_phone_number}</p>
              
              <div className="mt-4">
                <h4 className="font-semibold text-white">Thematic Areas:</h4>
                <p className="text-gray-200">
                  {
                    // Use the new thematicAreas variable which is guaranteed to be an array
                    thematicAreas.map((area, i) => (
                      <span key={i} className="inline-block bg-[#015aa4] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2 mb-2">
                        {area}
                      </span>
                    ))
                  }
                </p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold text-white">Submitted Files:</h4>
                <ul className="list-disc list-inside text-gray-200">
                  <li>
                    <a href={`http://localhost:3001/${exhibitor.concept_note_path}`} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                      View Concept Note
                    </a>
                  </li>
                  <li>
                    <a href={`http://localhost:3001/${exhibitor.animations_videos_path}`} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                      View Animation/Video
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExhibitorList;