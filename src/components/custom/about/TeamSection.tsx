import React from "react";
import { WhoAreWe } from "../svg";
import { ExternalLink } from "lucide-react";
import { CustomBullet } from "@/components/LeadershipSection";

const leaders = [
  {
    name: "Thierry Monthé",
    role: "Founder / CEO",
    image: "/about/tm.jpg",
    linkedin: "https://www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
    experience: [
      "+20 years experience in Data sciences,",
      "software engineering and team management",
    ],
    title: "Data Tech Entrepreneur",
  },
  {
    name: "Axel Djouonang",
    role: "Chief Business Officer",
    image: "/about/ad.jpg",
    linkedin: "www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
    experience: [
      "+20 years experience in Finance, project",
      "management and business development",
    ],
    title: "Entrepreneur",
  },
  {
    name: "Gleyne Monthé",
    role: "Chief Operation Officer",
    image: "/about/gm.jpg",
    linkedin: "www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
    experience: [
      "+20 years experience in Finance, project",
      "management and business development",
    ],
    title: "Data Scientist",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-[#FAFAFAD9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 mb-4">
            <div className="flex items-center gap-2 px-6 py-1 rounded-full bg-white">
              <WhoAreWe />
              <span className="text-2xl font-bold text-black font-[yourCustomFont]">
                Kaeyros Family
              </span>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-4">
            Team
          </h2>
        </div>

        {/* Content */}
        <div className="flex lg:mb-[4rem] flex-col md:flex-row items-center md:items-start gap-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  {/* Profile Image - Fixed sizing and cropping */}
                  <div className="relative mb-6">
                    <div className="w-[250px] h-[300px] rounded-2xl overflow-hidden bg-gray-200">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top filter grayscale"
                        style={{
                          objectPosition: "center 20%", // Focus on face/upper chest area
                        }}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {leader.name}
                  </h3>

                  <div className="bg-white justify-center p-4 gap-3 rounded-lg flex flex-col">
                    {/* Role with icon */}
                    <div className="flex items-center justify-start gap-2">
                      <CustomBullet />
                      <p className="text-sm font-medium text-gray-700">
                        {leader.role}
                      </p>
                    </div>

                    {/* Title with icon */}
                    <div className="flex items-start justify-start gap-2 ">
                      <CustomBullet />
                      <p className="text-sm text-gray-600">{leader.title}</p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="text-center space-y-1 mt-4">
                    {leader.experience.map((exp, expIndex) => (
                      <p
                        key={expIndex}
                        className="text-xs text-gray-600 leading-relaxed"
                      >
                        {exp}
                      </p>
                    ))}
                  </div>

                  {/* LinkedIn Link */}
                  <div className="mt-4 flex justify-center">
                    <a
                      href={
                        leader.linkedin.startsWith("http")
                          ? leader.linkedin
                          : `https://${leader.linkedin}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      <ExternalLink size={12} />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
          {/* Rest of the family */}
          <div className="relative rounded-bl-[200px] rounded-tr-[200px] overflow-hidden shadow-lg h-[500px]">
            <img
              src="/about/kaeyros_family.png"
              alt="Notre histoire"
              className="w-full h-full object-cover"
            />
          </div>
      </div>
    </section>
  );
};

export default TeamSection;

// import React from "react";
// import { WhoAreWe } from "../svg";
// import { ExternalLink } from "lucide-react";
// import { CustomBullet } from "@/components/LeadershipSection";

// const leaders = [
//   {
//     name: "Thierry Monthé",
//     role: "Founder / CEO",
//     image: "/about/tm.jpg",
//     linkedin: "https://www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
//     experience: [
//       "+20 years experience in Data sciences,",
//       "software engineering and team management",
//     ],
//     title: "Data Tech Entrepreneur",
//   },
//   {
//     name: "Axel Djouonang",
//     role: "Chief Business Officer",
//     image: "/about/ad.jpg",
//     linkedin: "www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
//     experience: [
//       "+20 years experience in Finance, project",
//       "management and business development",
//     ],
//     title: "Entrepreneur",
//   },
//   {
//     name: "Gleyne Monthé",
//     role: "Chief Operation Officer",
//     image: "/about/gm.jpg",
//     linkedin: "www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
//     experience: [
//       "+20 years experience in Finance, project",
//       "management and business development",
//     ],
//     title: "Data Scientist",
//   },
// ];

// const TeamSection = () => {
//   return (
//     <section className="py-16 bg-[#FAFAFAD9]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 mb-4">
//             <div className="flex items-center gap-2 px-6 py-1 rounded-full bg-white">
//               <WhoAreWe />
//               <span className="text-2xl font-bold text-black font-[yourCustomFont]">
//                 Kaeyros Family
//               </span>
//             </div>
//           </div>
//           <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-4">
//             Team
//           </h2>
//         </div>

//         {/* Content */}
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
//             <div className="max-w-6xl mx-auto">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {leaders.map((leader, index) => (
//                   <div
//                     key={index}
//                     className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 hover:shadow-xl transition-all duration-300"
//                   >
//                     {/* Profile Image */}
//                     <div className="relative mb-6">
//                       <div className=" rounded-2xl overflow-hidden bg-gray-200">
//                         <img
//                           src={leader.image}
//                           alt={leader.name}
//                           className="w-full h-full object-cover filter grayscale"
//                         />
//                       </div>
//                     </div>

//                     {/* Name */}
//                     <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
//                       {leader.name}
//                     </h3>

//                     <div className="bg-white justify-center p-4 gap-3 rounded-lg flex flex-col">
//                     {/* Role with icon */}
//                     <div className="flex items-center justify-start gap-2">
//                       <CustomBullet />
//                       <p className="text-sm font-medium text-gray-700">
//                         {leader.role}
//                       </p>
//                     </div>

//                     {/* Title with icon */}
//                     <div className="flex items-start justify-start gap-2 ">
//                       <CustomBullet />
//                       <p className="text-sm text-gray-600">{leader.title}</p>
//                     </div>
//                     </div>

//                     {/* Experience */}
//                     <div className="text-center space-y-1">
//                       {leader.experience.map((exp, expIndex) => (
//                         <p
//                           key={expIndex}
//                           className="text-xs text-gray-600 leading-relaxed"
//                         >
//                           {exp}
//                         </p>
//                       ))}
//                     </div>

//                     {/* LinkedIn Link */}
//                     <div className="mt-4 flex justify-center">
//                       <a
//                         href={
//                           leader.linkedin.startsWith("http")
//                             ? leader.linkedin
//                             : `https://${leader.linkedin}`
//                         }
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700 transition-colors"
//                       >
//                         <ExternalLink size={12} />
//                         LinkedIn Profile
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;
