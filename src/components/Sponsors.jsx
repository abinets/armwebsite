import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsorTiers = [
    {
      title: 'Platinum Sponsors',
      sponsors: [
        { name: 'Ministry of Health, Ethiopia', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvE2QdYv2W3Yv-E-xVzYv-JcW3Yv-E-xVzYv-JcW3Yv-E-xVzYv-JcW&usqp=CAU' },
        { name: 'MedDevice Solutions', logo: 'https://placehold.co/200x80/013c71/white?font=montserrat&text=MedDevice' }
      ]
    },
    {
      title: 'Gold Sponsors',
      sponsors: [
        { name: 'HeartCare Systems', logo: 'https://placehold.co/180x70/013c71/white?font=montserrat&text=HeartCare' },
        { name: 'Cardiac Dynamics', logo: 'https://placehold.co/180x70/013c71/white?font=montserrat&text=Cardiac' },
        { name: 'Vascular Technologies', logo: 'https://placehold.co/180x70/013c71/white?font=montserrat&text=Vascular' }
      ]
    },
    {
      title: 'Silver Sponsors',
      sponsors: [
        { name: 'MedTech Partners', logo: 'https://placehold.co/160x60/013c71/white?font=montserrat&text=MedTech' },
        { name: 'Cardio Research Lab', logo: 'https://placehold.co/160x60/013c71/white?font=montserrat&text=Research' },
        { name: 'Heart Health Institute', logo: 'https://placehold.co/160x60/013c71/white?font=montserrat&text=Institute' },
        { name: 'Pulse Innovations', logo: 'https://placehold.co/160x60/013c71/white?font=montserrat&text=Pulse' }
      ]
    }
  ];

  return (
    <>
      <hr className="h-0.5 w-1/2 mx-auto border-none bg-[#015aa4] shadow-lg shadow-[#000000]" style={{boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.4)'}}/>
      
      <section id="sponsors" className="py-20 bg-gradient-to-br from-[#015aa4] to-[#013c71]" style={{ scrollMarginTop: '80px' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Sponsors
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              We're grateful to our sponsors who make this conference possible
            </p>
          </motion.div>

          <div className="space-y-16">
            {sponsorTiers.map((tier, tierIndex) => (
              <motion.div
                key={tierIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: tierIndex * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-8">
                  {tier.title}
                </h3>
                <div className={`grid gap-8 ${
                  tier.sponsors.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' :
                  tier.sponsors.length === 3 ? 'grid-cols-1 md:grid-cols-3 max-w-3xl mx-auto' :
                  'grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto'
                }`}>
                  {tier.sponsors.map((sponsor, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#0273a4]/70 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full h-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;