
import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, MapPin } from 'lucide-react';
import Image from 'next/image';
import { LinkedInSvgIcon } from './custom/svg';

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Thierry Monthé",
      role: "Founder / CEO",
      image: "/about/tm3.png",
      linkedin: "https://www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
      experience: [
        "+20 years experience in Data sciences, software engineering and team management"
      ],
      title: "Data Tech Entrepreneur"
    },
    {
      name: "Axel Djouonang", 
      role: "Chief Business Officer",
      image: "/about/axel2.png",
      linkedin: "www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
      experience: [
        "+20 years experience in Finance, project management and business development"
      ],
      title: "Entrepreneur"
    }
  ];

  return (
    <div className="text-center px-4 lg:mt-[5rem] sm:px-6 lg:px-8">
      <h3 className="text-3xl lg:text-4xl tracking-tighter lg:tracking-tight font-bold text-[#0F2A96] mb-4">
        Notre leadership
      </h3>
      
      <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6 sm:gap-8 mx-auto">
        {leaders.map((leader, index) => (
          <div key={index} className="bg-[#FFEFE5] rounded-2xl overflow-hidden">
            {/* Mobile Layout (sm and below) */}
            <div className="sm:hidden">
              {/* Mobile Profile Image - Top */}
              <div className="flex justify-center p-4 pb-2">
                <div className="w-[350px] h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full relative bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <Image
                      src={leader.image}
                      alt={leader.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Info Section */}
              <div className="px-2 pb-4 text-center">
                <h4 className="text-[16px] px-[1rem] font-black text-start lg:text-[24px] text-[#111827] mb-2">
                  {leader.name}
                </h4>
                
                {/* LinkedIn link - Mobile */}
                <div className="flex px-2 items-center w-full justify-start gap-2 mb-3">
                  <LinkedInSvgIcon />
                  <a 
                    href={`https://${leader.linkedin}`}
                    className="text-[#3772FF] text-xs text-start hover:underline truncate max-w-[200px]"
                    target="_blank"
                    title={`LinkedIn profile of ${leader.name}`}
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>

                {/* Mobile Content Card */}
                <div className='bg-white rounded-xl space-y-2 p-3 text-left'>
                  {/* Role badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <CustomBullet />
                    <span className="text-[#475569] text-[11px] font-medium text-sm">
                      {leader.role}
                    </span>
                  </div>

                  {/* Experience points */}
                  {leader.experience.map((line, idx) => (
                    <div key={idx} className="flex text-[11px] font-medium items-start gap-2">
                      <CustomBullet />
                      <p className="text-[11px] text-[#475569] font-medium leading-relaxed">{line}</p>
                    </div>
                  ))}

                  {/* Title badge */}
                  <div className="flex items-center gap-2">
                    <CustomBullet />
                    <span className="text-[11px] font-medium text-gray-800">
                      {leader.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet/Desktop Layout (sm and above) */}
            <div className="hidden sm:block">
              <div className="flex items-center flex-col sm:flex-row p-4 sm:p-6 gap-4 sm:gap-6">
                {/* Left side - Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px] bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full relative bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <Image
                        src={leader.image}
                        alt={leader.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Right side - Info */}
                <div className="flex-1 text-left w-full sm:w-auto">
                  <div className="mb-3">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#0F2A96] mb-1">
                      {leader.name}
                    </h4>
                    {/* LinkedIn link */}
                    <div className="flex items-center gap-2 mb-2">
                      <LinkedInSvgIcon />
                      <a 
                        href={`https://${leader.linkedin}`}
                        className="text-[#3772FF] text-sm hover:underline truncate max-w-[250px] sm:max-w-[300px]"
                        target="_blank"
                        title={`LinkedIn profile of ${leader.name}`}
                        rel="noopener noreferrer"
                      >
                        {leader.linkedin}
                      </a>
                    </div>
                  </div>

                  <div className='bg-white rounded-2xl space-y-3 p-3 sm:p-4'>
                    {/* Role badge */}
                    <div className="inline-flex items-center gap-2 mb-3">
                      <CustomBullet />
                      <span className="text-[#475569] font-medium text-sm">
                        {leader.role}
                      </span>
                    </div>

                    {/* Experience points */}
                    {leader.experience.map((line, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CustomBullet />
                        <p className="text-sm text-gray-700 sm:text-sm">{line}</p>
                      </div>
                    ))}

                    {/* Title badge */}
                    <div className="flex items-center gap-2">
                      <CustomBullet />
                      <span className="text-xs sm:text-sm font-medium text-[#475569]">
                        {leader.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button className="mt-6 sm:mt-8 bg-[#FF5F00] text-white cursor-pointer py-3 px-6 sm:py-[1.5rem] sm:px-[2rem] w-full sm:w-auto text-sm sm:text-base">
        En savoir plus sur nous
      </Button>
    </div>
  );
};

export default LeadershipSection;

export const CustomBullet = () => (
  <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
    <div className="absolute inset-0 rounded-full border-2 border-gray-700"></div>
    <div className="absolute top-[3px] left-[3px] sm:top-[4px] sm:left-[4px] w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-500"></div>
    <div className="absolute top-[5px] left-[5px] sm:top-[7px] sm:left-[7px] w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-700"></div>
  </div>
);

// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Linkedin, MapPin } from 'lucide-react';
// import Image from 'next/image';
// import { LinkedInSvgIcon } from './custom/svg';

// const LeadershipSection = () => {
//   const leaders = [
//     {
//       name: "Thierry Monthé",
//       role: "Founder / CEO",
//       image: "/about/tm3.png",
//       linkedin: "https://www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
//       experience: [
//         "+20 years experience in Data sciences, software engineering and team management"
//       ],
//       title: "Data Tech Entrepreneur"
//     },
//     {
//       name: "Axel Djouonang", 
//       role: "Chief Business Officer",
//       image: "/about/axel2.png",
//       // image: "/about/ad.jpg",
//       linkedin: "www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
//       experience: [
//         "+20 years experience in Finance, project management and business development"
//       ],
//       title: "Entrepreneur"
//     }
//   ];

//   return (
//     <div className="text-center">
//       <h3 className="text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-8 pt-5">
//         Notre leadership
//       </h3>
      
//       <div className="lg:grid lg:grid-cols-2 flex flex-col gap-8 mx-auto">
//         {leaders.map((leader, index) => (
//           <div key={index} className="bg-[#FFEFE5] rounded-2xl overflow-hidden">
//             {/* Profile Image Section */}
//             <div className="flex items-center flex-row p-6 gap-6">
//               {/* Left side - Image */}
//               <div className="flex-shrink-0">
//                 <div className="w-[200px] h-[200px] bg-gray-200 rounded-lg overflow-hidden">
//                   <div className="w-[200px] h-[200px] relative bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
//                     <Image
//                       src={leader.image}
//                       alt={leader.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Right side - Info */}
//               <div className="flex-1 text-left text-[12px] ">
//                 <div className="mb-3">
//                   <h4 className="text-2xl font-bold text-[#0F2A96] mb-1">
//                     {leader.name}
//                   </h4>
//                   {/* LinkedIn link */}
//                   <div className="flex items-center gap-2 mb-2">
//                     {/* <Linkedin className="w-4 h-4 text-blue-600" /> */}
//                     <LinkedInSvgIcon />
//                     <a 
//                                                                                                                                                                                                                                                            href={`https://${leader.linkedin}`}
//                       className="text-[#3772FF] text-sm hover:underline truncate max-w-[300px]"
//                       target="_blank"
//                       title={`LinkedIn profile of ${leader.name}`}
//                       rel="noopener noreferrer"
//                     >
//                       {leader.linkedin}
//                     </a>
//                   </div>
//                 </div>

//                 <div className='bg-white rounded-2xl space-y-3 p-4'>
//                   {/* Role badge */}
//                   <div className="inline-flex items-center gap-2 mb-3">
//                     <CustomBullet />
//                     <span className="text-[#FF5F00] font-medium text-sm">
//                       {leader.role}
//                     </span>
//                   </div>

//                   {/* Experience points */}
//                   {leader.experience.map((line, idx) => (
//                     <div key={idx} className="flex items-start gap-2 text-[10px]">
//                         <CustomBullet />
//                         <p className="text-sm text-gray-700 text-[12px]">{line}</p>
//                     </div>
//                     ))}

//                   {/* Title badge */}
//                   <div className="flex items-center gap-2">
//                     <CustomBullet />
//                     <span className="text-[12px] font-medium text-gray-800">
//                       {leader.title}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Button className="mt-8 bg-[#FF5F00] text-white cursor-pointer py-[1.5rem] px-[2rem]">
//         En savoir plus sur nous
//       </Button>
//     </div>
//   );
// };

// export default LeadershipSection;

// export const CustomBullet = () => (
//   <div className="relative w-5 h-5 flex-shrink-0">
//     <div className="absolute inset-0 rounded-full border-2 border-gray-700"></div>
//     <div className="absolute top-[4px] left-[4px] w-3 h-3 rounded-full bg-orange-500"></div>
//     <div className="absolute top-[7px] left-[7px] w-1.5 h-1.5 rounded-full bg-gray-700"></div>
//   </div>
// );
