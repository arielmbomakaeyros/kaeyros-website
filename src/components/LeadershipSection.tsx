import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, MapPin } from 'lucide-react';

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Thierry Monthé",
      role: "Founder / CEO",
      image: "/about/tm.jpg", // You'll need to add actual images
      linkedin: "https://www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
      experience: [
        "+20 years expérience in Data sciences,",
        "software engineering and team management"
      ],
      title: "Data Tech Entrepreneur"
    },
    {
      name: "Axel Djouonang", 
      role: "Chief Business Officer",
      image: "/about/ad.jpg", // You'll need to add actual images
      linkedin: "www.linkedin.com/in/thierry-month%C3%A9-3a209317a",
      experience: [
        "+20 years expérience in Finance, project",
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
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {leaders.map((leader, index) => (
          <div key={index} className="bg-[#FFEFE5] rounded-2xl shadow-lg overflow-hidden">
            {/* Profile Image Section */}
            <div className="flex items-center p-6 gap-6">
              {/* Left side - Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Replace with actual Image component when you have the photos */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-xs">Photo</span>
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
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <a 
                      href={`https://${leader.linkedin}`}
                      className="text-blue-600 text-sm hover:underline truncate w-[200px]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {leader.linkedin}
                    </a>
                  </div>
                </div>

                <div className='bg-white rounded-2xl p-4'>
                    {/* Role badge */}
                    <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-orange-600 font-medium text-sm">
                            {leader.role}
                        </span>
                    </div>

                    {/* Experience points */}
                    <div className="space-y-1 mb-3">
                        <div className="flex items-start gap-2">
                            <div className="w-3 h-3 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div className="text-sm text-gray-700">
                            {leader.experience.map((line, idx) => (
                                <p key={idx}>{line}</p>
                            ))}
                            </div>
                        </div>
                    </div>

                    {/* Title badge */}
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
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

      <Button className="mt-8 bg-[#0F2A96] hover:bg-[#0F2A96]/90 text-white px-8 py-3 rounded-lg font-medium">
        En savoir plus sur nous
      </Button>
    </div>
  );
};

export default LeadershipSection;