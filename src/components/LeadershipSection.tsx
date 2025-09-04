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
      image: "/about/tm.jpg",
      linkedin: "https://www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
      experience: [
        "+20 years experience in Data sciences,",
        "software engineering and team management"
      ],
      title: "Data Tech Entrepreneur"
    },
    {
      name: "Axel Djouonang", 
      role: "Chief Business Officer",
      image: "/about/ad.jpg",
      linkedin: "www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
      experience: [
        "+20 years experience in Finance, project",
        "management and business development"
      ],
      title: "Entrepreneur"
    }
  ];

  return (
    <div className="text-center">
      <h3 className="text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-8 pt-5">
        Notre leadership
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8 mx-auto">
        {leaders.map((leader, index) => (
          <div key={index} className="bg-[#FFEFE5] rounded-2xl shadow-lg overflow-hidden">
            {/* Profile Image Section */}
            <div className="flex items-center p-6 gap-6">
              {/* Left side - Image */}
              <div className="flex-shrink-0">
                <div className="w-[200px] h-[200px] bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-[200px] h-[200px] relative bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
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
              <div className="flex-1 text-left">
                <div className="mb-3">
                  <h4 className="text-2xl font-bold text-[#0F2A96] mb-1">
                    {leader.name}
                  </h4>
                  {/* LinkedIn link */}
                  <div className="flex items-center gap-2 mb-2">
                    {/* <Linkedin className="w-4 h-4 text-blue-600" /> */}
                    <LinkedInSvgIcon />
                    <a 
                      href={`https://${leader.linkedin}`}
                      className="text-blue-600 text-sm hover:underline truncate w-[300px]"
                      target="_blank"
                      title={`LinkedIn profile of ${leader.name}`}
                      rel="noopener noreferrer"
                    >
                      {leader.linkedin}
                    </a>
                  </div>
                </div>

                <div className='bg-white rounded-2xl space-y-3 p-4'>
                  {/* Role badge */}
                  <div className="inline-flex items-center gap-2 mb-3">
                    <CustomBullet />
                    <span className="text-[#FF5F00] font-medium text-sm">
                      {leader.role}
                    </span>
                  </div>

                  {/* Experience points */}
                  {leader.experience.map((line, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                        <CustomBullet />
                        <p className="text-sm text-gray-700">{line}</p>
                    </div>
                    ))}



                  {/* Title badge */}
                  <div className="flex items-center gap-2">
                    <CustomBullet />
                    <span className="text-sm font-medium text-gray-800">
                      {leader.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button className="mt-8 bg-[#FF5F00] text-white cursor-pointer py-[1.5rem] px-[2rem]">
        En savoir plus sur nous
      </Button>
    </div>
  );
};

export default LeadershipSection;

export const CustomBullet = () => (
  <div className="relative w-5 h-5 flex-shrink-0">
    <div className="absolute inset-0 rounded-full border-2 border-gray-700"></div>
    <div className="absolute top-[4px] left-[4px] w-3 h-3 rounded-full bg-orange-500"></div>
    <div className="absolute top-[7px] left-[7px] w-1.5 h-1.5 rounded-full bg-gray-700"></div>
  </div>
);
