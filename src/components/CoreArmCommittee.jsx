import React from 'react';

const directImageUrls = [
  'https://media.licdn.com/dms/image/v2/D5603AQFry9LVPYT8KA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701350707711?e=2147483647&v=beta&t=XQiYA8t55JhgA2rpAAaw14rN4f8ZOCZQ-CI0X6WPq1o',
  'https://www.moh.gov.et/sites/default/files/2021-09/photo_2021-09-28_11-44-04.jpg',
  'https://media.licdn.com/dms/image/v2/D4E03AQEQJW8iKxSRFg/profile-displayphoto-scale_200_200/B4EZjxRDBTGcAc-/0/1756394435992?e=2147483647&v=beta&t=fIKJGI0Ds_e7lZYFF33uzbFcRP56lszxkq-E6fKj59w',
  'https://www.moh.gov.et/sites/default/files/2021-06/0B1A9978%20-%20Copy.JPG',
  'https://www.moh.gov.et/sites/default/files/2024-10/Dr.%20Muluken%20Argaw.jpg',
  'https://www.moh.gov.et/sites/default/files/2021-06/0B1A9957%20-%20Copy.JPG',
  'https://www.moh.gov.et/sites/default/files/2024-03/yehenew.jpg',
  'https://www.moh.gov.et/sites/default/files/2024-03/photo_2023-07-03_10-10-26.jpg',
  'https://media.licdn.com/dms/image/v2/D4D03AQHpC8c9j4GPmg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695112592329?e=1761177600&v=beta&t=ueoy3mdVR-bM7YwhSg8MYDsBv-Ok4SO25FPbsDQCq0g',
  'https://media.licdn.com/dms/image/v2/D4E03AQE0w3qavweVwQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695479892595?e=1761177600&v=beta&t=Sy-8kYmiNLphMQhNsNN-wjLttA9BBxXWK_DM3dLrS0g',
  'https://media.licdn.com/dms/image/v2/D4D03AQGfa467VdvrRg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720374018409?e=1761177600&v=beta&t=FSJujiJMWjBybdVZCePuIOKlKtV1HoU5e1GL8891J5Y',
  'https://media.licdn.com/dms/image/v2/D4D03AQGfa467VdvrRg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720374018409?e=1761177600&v=beta&t=FSJujiJMWjBybdVZCePuIOKlKtV1HoU5e1GL8891J5Y',
];

const committeeMembers = [
  {
    name: 'Dr. Mebrhatu M.',
    position: 'Chief of Staff',
    department: 'Ministry of Health',
    role: 'Provides strategic leadership and oversight for all ministerial initiatives, ensuring alignment with national health goals.',
    imageUrl: directImageUrls[0]
  },
  {
    name: 'Dr. Muluken Argaw',
    position: 'Executive Officer',
    department: 'Strategic Affairs/SAO',
    role: 'Leads the strategic planning and execution of key health programs and partnerships.',
    imageUrl: directImageUrls[4]
  },
  {
    name: 'Dr. Tegene Regassa',
    position: 'Executive Officer',
    department: 'Public Relations - MoH',
    role: 'Manages public communication and media relations to enhance public health awareness and transparency.',
    imageUrl: directImageUrls[1]
  },
  {
    name: 'Mr. Solomon Ejigu',
    position: 'Executive Officer',
    department: 'Finance  - MoH',
    role: 'Oversees the financial management and investment in health systems to ensure sustainable financing.',
    imageUrl: directImageUrls[5]
  },
  {
    name: 'Mr. Eskinder Lakew',
    position: 'Executive Officer',
    department: 'Basic Service Executive - MoH',
    role: 'Directs the implementation and expansion of essential health services across the country.',
    imageUrl: directImageUrls[3]
  },
  {
    name: 'Mr. Gemechis Melkamu',
    position: 'Lead Executive Officer',
    department: 'Digital Health - MoH',
    role: 'Leads the development and integration of digital health solutions to modernize healthcare delivery.',
    imageUrl: directImageUrls[2]
  },
  {
    name: 'Mr. Yehenew Berhane',
    position: 'Executive Officer',
    department: 'Procurement Executive. - MoH',
    role: 'Manages the procurement and supply chain for medical equipment, pharmaceuticals, and other essential goods.',
    imageUrl: directImageUrls[6]
  },
  {
    name: 'Mr. Assegid Samuel',
    position: 'Lead Executive Officer',
    department: 'Human Resources For Health Development and Improvement - MoH',
    role: 'Manages the Human Resources For Health Development and Improvement of the Health Sector.',
    imageUrl: directImageUrls[10]
  },
  {
    name: 'Mrs. Rahima Skihur',
    position: 'Senior Advisor',
    department: 'Misinter\'s Office - MoH',
    role: 'Provides expert counsel on key policy decisions and strategic initiatives for the Minister\'s Office.',
    imageUrl: directImageUrls[8]
  },
  {
    name: 'Mr. Mesoud Mohammed ',
    position: 'Desk Head',
    department: 'Strategic Affairs - MoH',
    role: 'Leads critical projects within the Strategic Affairs Office, ensuring goals are met efficiently.',
    imageUrl: directImageUrls[9]
  },
];

const CoreArmCommittee = () => {
  return (
    <>
      <hr className="h-0.5 w-1/2 mx-auto border-none bg-[#015aa4] shadow-lg shadow-[#000000]" style={{ boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.4)' }} />

      <section id="corearm-committee" className="py-20 bg-gradient-to-br from-[#015aa4] to-[#013c71]" style={{ scrollMarginTop: '80px' }}>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Meet the Core ARM Committee
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              A distinguished group of leaders and experts, passionately dedicated to steering the ARM Initiative towards its vision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {committeeMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#0273a4]/70 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2
                           p-8 flex flex-col items-center justify-center"
              >
                {/* Enhanced Image Container */}
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-[6px] border-[#49A6E9] shadow-xl">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>

                {/* Position and Department with Separator */}
                <p className="text-xl font-semibold text-gray-200">
                  <span>{member.position}</span>
                  <span className="text-gray-400 font-normal mx-2">|</span>
                  <span className="text-gray-400 font-normal">{member.department}</span>
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreArmCommittee;