import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Target, 
  Users, 
  Store, 
  BarChart3, 
  Plane, 
  Calendar, 
  Dice1,
  Settings,
  ChevronRight,
  CreditCard,
  HeadphonesIcon,
  Zap,
  FileText,
  Workflow
} from 'lucide-react';
import { AttendanceTrackingSvgIcon, BookingSvgIcon, BulkMessageSvgIcon, ChatbotSvgIcon, DataCollectorSvgIcon, LoyaltyProgramSvgIcon, OrderTakingSvgIcon, PaymentSvgIcon, ReportingSvgIcon, ShopSvgIcon, TicketingSvgIcon, TombolaSvgIcon, TransactionValidationSvgIcon } from './custom/SvgLight';

const SEMAEcosystem = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  // Define the services with their icons and positions (13 items)
  const services = [
    { 
      id: 'transaction_validation', 
      // icon: HeadphonesIcon, 
      icon: <TransactionValidationSvgIcon />, 
      angle: 249.21, 
      name: 'Transaction Validation',
      description: 'Support client 24/7'
    },
    { 
      id: 'ticketing', 
      // icon: Zap, 
      icon: <TicketingSvgIcon />, 
      angle: 276.9, 
      name: 'Ticketing',
      description: 'Automatisation des processus'
    },
    { 
      id: 'chatbots', 
      // icon: FileText, 
      icon: <ChatbotSvgIcon />, 
      angle: 304.59, 
      name: 'ChatBot',
      description: 'Rapports détaillés'
    },
    { 
      id: 'loyalty_program', 
      // icon: Workflow, 
      icon: <LoyaltyProgramSvgIcon />, 
      angle: 332.28, 
      name: 'Loyalty Program',
      description: 'Intégrations tierces'
    },
    { 
      id: 'bulk_message', 
      // icon: MessageCircle, 
      icon: <BulkMessageSvgIcon />, 
      angle: 0, 
      name: 'Bulk Message',
      description: 'Gestion des messages WhatsApp'
    },
    { 
      id: 'payments', 
      // icon: Target, 
      icon: <PaymentSvgIcon />, 
      angle: 27.69, 
      name: 'Payment',
      description: 'Ciblage intelligent des prospects'
    },
    { 
      id: 'attendance_tracking', 
      // icon: Users, 
      icon: <AttendanceTrackingSvgIcon />, 
      angle: 55.38, 
      name: 'Attendance Tracking',
      description: 'Gestion de la clientèle'
    },
    { 
      id: 'shop', 
      // icon: Store, 
      icon: <ShopSvgIcon />, 
      angle: 83.07, 
      name: 'Shop',
      description: 'Boutique en ligne intégrée'
    },
    { 
      id: 'booking', 
      // icon: BarChart3, 
      icon: <BookingSvgIcon />, 
      angle: 110.76, 
      name: 'Booking',
      description: 'Analyses et rapports'
    },
    { 
      id: 'reporting', 
      // icon: Plane, 
      icon: <ReportingSvgIcon />, 
      angle: 138.45, 
      name: 'Reporting',
      description: 'Réservations et rendez-vous'
    },
    { 
      id: 'order_taking', 
      // icon: Calendar, 
      icon: <OrderTakingSvgIcon />, 
      angle: 166.14, 
      name: 'Order Taking',
      description: 'Rapports et analyses'
    },
    { 
      id: 'tombola', 
      // icon: Dice1, 
      icon: <TombolaSvgIcon />, 
      angle: 193.83, 
      name: 'Tombola',
      description: 'Suivi des commandes'
    },
    { 
      id: 'data_collector', 
      // icon: CreditCard, 
      icon: <DataCollectorSvgIcon />, 
      angle: 221.52, 
      name: 'Data Collector',
      description: 'Solutions de paiement'
    },
  ];

  const handleNodeClick = (serviceId: any) => {
    setActiveNode(activeNode === serviceId ? null : serviceId);
    console.log('Node clicked:', serviceId);
  };

  const handleCenterClick = () => {
    console.log('SEMA center clicked');
    setActiveNode(null);
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-[500px] h-[500px]">
        {/* Outer shadow circle */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl shadow-blue-200/50"></div>
        
        {/* Dotted guide circle */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 opacity-40"></div>
        
        {/* Inner dotted circle showing the path of service buttons */}
        <div 
          className="absolute rounded-full border border-dashed border-gray-400 opacity-30"
          style={{
            width: '360px',
            height: '360px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        
        {/* Connection lines - radial sticks */}
        <div className="absolute inset-0">
          {services.map((service, index) => {
            const radius = 180; // Distance from center
            const centerX = 250; // Center of the container
            const centerY = 100;

            // Calculate line length (from center to service node)
            const lineLength = radius - 24; // Adjusted to connect properly

            return (
              <div
                key={`line-${index}`}
                className={`absolute transition-all duration-300 ${
                  hoveredNode === service.id || activeNode === service.id
                    ? 'bg-[#3E52BC] shadow-lg'
                    : 'bg-[#3E52BC]/40'
                }`}
                style={{
                  left: `${centerX}px`,
                  top: `${centerY}px`,
                  width: '2px',
                  height: `${lineLength}px`,
                  transform: `rotate(${service.angle}deg)`,
                  transformOrigin: 'center bottom',
                }}
              />
            );
          })}
        </div>
        
        {/* Central SEMA button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            onClick={handleCenterClick}
            className={`w-16 h-16 bg-[#3E52BC] hover:bg-[#3E52BC]/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              activeNode === null ? 'ring-4 ring-[#3E52BC]/30 scale-110' : ''
            }`}
          >
            <div className="flex flex-col items-center">
              <Settings className="w-6 h-6 text-white mb-0.5" />
              <span className="text-white font-bold text-xs">SEMA</span>
            </div>
          </Button>
        </div>
        
        {/* Service nodes */}
        {services.map((service, index) => {
          const radius = 180; // Distance from center
          const centerX = 250; // Center of the container
          const centerY = 250;
          const x = centerX + Math.cos((service.angle * Math.PI) / 180) * radius;
          const y = centerY + Math.sin((service.angle * Math.PI) / 180) * radius;
          const IconComponent = service.icon;
          const isActive = activeNode === service.id;
          const isHovered = hoveredNode === service.id;
          
          return (
            <div
              key={service.id}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Service button */}
              <Button
                onClick={() => handleNodeClick(service.id)}
                onMouseEnter={() => setHoveredNode(service.id as any)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`w-12 h-12 rounded-full bg-white hover:bg-blue-50 border-2 shadow-lg transition-all duration-300 p-0 ${
                  isActive 
                    ? 'border-[#3E52BC] ring-4 ring-[#3E52BC]/30 scale-110' 
                    : isHovered 
                      ? 'border-[#3E52BC] scale-105' 
                      : 'border-[#3E52BC]/30'
                }`}
              >
                {React.cloneElement(IconComponent, {
                  color: isActive || isHovered ? '#3E52BC' : '#737373' // dark gray when inactive
                })}
                {/* <IconComponent 
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isActive || isHovered ? 'text-[#3E52BC]' : 'text-gray-600'
                  }`} 
                /> */}
              </Button>
              
              {/* Tooltip on hover */}
              {isHovered && (
                <div className="absolute z-10 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-lg whitespace-nowrap -top-10 left-1/2 transform -translate-x-1/2">
                  {service.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              )}
              
              {/* Service info panel */}
              {isActive && (
                <div className="absolute z-20 p-3 bg-white rounded-lg shadow-xl border border-gray-200 whitespace-nowrap -top-16 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 mb-1">
                    {React.cloneElement(IconComponent, {
                      className: "w-4 h-4 text-[#3E52BC]"
                    })}
                    <span className="font-semibold text-sm text-gray-900">{service.name}</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{service.description}</p>
                  <Button 
                    size="sm" 
                    className="text-xs h-6 px-2 bg-[#3E52BC] hover:bg-[#3E52BC]/90"
                  >
                    En savoir plus <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-gray-200 rotate-45"></div>
                </div>
              )}
            </div>
          );
        })}
        
        {/* Floating action hint */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm text-gray-500">Cliquez sur les nœuds pour explorer</p>
        </div>
      </div>
    </div>
  );
};

export default SEMAEcosystem;

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { 
//   MessageCircle, 
//   Target, 
//   Users, 
//   Store, 
//   BarChart3, 
//   Plane, 
//   Calendar, 
//   Dice1,
//   Settings,
//   ChevronRight,
//   CreditCard,
//   HeadphonesIcon,
//   Zap,
//   FileText,
//   Workflow
// } from 'lucide-react';

// const SEMAEcosystem = () => {
//   const [activeNode, setActiveNode] = useState(null);
//   const [hoveredNode, setHoveredNode] = useState(null);

//   // Define the services with their icons and positions (13 items)
//   const services = [
//     { 
//       id: 'messaging', 
//       icon: MessageCircle, 
//       angle: 0, 
//       name: 'Messages',
//       description: 'Gestion des messages WhatsApp'
//     },
//     { 
//       id: 'targeting', 
//       icon: Target, 
//       angle: 27.69, 
//       name: 'Ciblage',
//       description: 'Ciblage intelligent des prospects'
//     },
//     { 
//       id: 'clients', 
//       icon: Users, 
//       angle: 55.38, 
//       name: 'Clients',
//       description: 'Gestion de la clientèle'
//     },
//     { 
//       id: 'shop', 
//       icon: Store, 
//       angle: 83.07, 
//       name: 'Shop',
//       description: 'Boutique en ligne intégrée'
//     },
//     { 
//       id: 'analytics', 
//       icon: BarChart3, 
//       angle: 110.76, 
//       name: 'Analytics',
//       description: 'Analyses et rapports'
//     },
//     { 
//       id: 'travel', 
//       icon: Plane, 
//       angle: 138.45, 
//       name: 'Travel',
//       description: 'Services de voyage'
//     },
//     { 
//       id: 'booking', 
//       icon: Calendar, 
//       angle: 166.14, 
//       name: 'Booking',
//       description: 'Réservations et rendez-vous'
//     },
//     { 
//       id: 'tombola', 
//       icon: Dice1, 
//       angle: 193.83, 
//       name: 'Tombola',
//       description: 'Jeux et concours'
//     },
//     { 
//       id: 'payment', 
//       icon: CreditCard, 
//       angle: 221.52, 
//       name: 'Payment',
//       description: 'Solutions de paiement'
//     },
//     { 
//       id: 'support', 
//       icon: HeadphonesIcon, 
//       angle: 249.21, 
//       name: 'Support',
//       description: 'Support client 24/7'
//     },
//     { 
//       id: 'automation', 
//       icon: Zap, 
//       angle: 276.9, 
//       name: 'Automation',
//       description: 'Automatisation des processus'
//     },
//     { 
//       id: 'reports', 
//       icon: FileText, 
//       angle: 304.59, 
//       name: 'Reports',
//       description: 'Rapports détaillés'
//     },
//     { 
//       id: 'integration', 
//       icon: Workflow, 
//       angle: 332.28, 
//       name: 'Integration',
//       description: 'Intégrations tierces'
//     }
//   ];

//   const handleNodeClick = (serviceId) => {
//     setActiveNode(activeNode === serviceId ? null : serviceId);
//     console.log('Node clicked:', serviceId);
//   };

//   const handleCenterClick = () => {
//     console.log('SEMA center clicked');
//     setActiveNode(null);
//   };

//   return (
//     <div className="flex items-center justify-center p-8">
//       <div className="relative w-[500px] h-[500px]">
//         {/* Outer shadow circle */}
//         <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl shadow-blue-200/50"></div>
        
//         {/* Dotted guide circle */}
//         <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 opacity-40"></div>
        
//         {/* Inner dotted circle showing the path of service buttons */}
//         <div 
//           className="absolute rounded-full border border-dashed border-gray-400 opacity-30"
//           style={{
//             width: '360px',
//             height: '360px',
//             left: '50%',
//             top: '50%',
//             transform: 'translate(-50%, -50%)'
//           }}
//         ></div>
        
//         {/* Connection lines - radial sticks */}
//         <div className="absolute inset-0">
//           {services.map((service, index) => {
//             const radius = 180; // Distance from center
//             const centerX = 250; // Center of the container
//             const centerY = 250;
//             const x = centerX + Math.cos((service.angle * Math.PI) / 180) * radius;
//             const y = centerY + Math.sin((service.angle * Math.PI) / 180) * radius;
            
//             // Calculate line length (from center to service node)
//             const lineLength = radius - 32; // Subtract center button radius
            
//             return (
//               <div
//                 key={`line-${index}`}
//                 className={`absolute origin-center transition-all duration-300 ${
//                   hoveredNode === service.id || activeNode === service.id
//                     ? 'bg-[#3E52BC] shadow-lg'
//                     : 'bg-[#3E52BC]/40'
//                 }`}
//                 style={{
//                   left: `${centerX}px`,
//                   top: `${centerY}px`,
//                   width: '2px',
//                   height: `${lineLength}px`,
//                   transform: `rotate(${service.angle}deg)`,
//                   transformOrigin: 'bottom center',
//                 }}
//               />
//             );
//           })}
//         </div>
        
//         {/* Central SEMA button */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Button
//             onClick={handleCenterClick}
//             className={`w-16 h-16 bg-[#3E52BC] hover:bg-[#3E52BC]/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
//               activeNode === null ? 'ring-4 ring-[#3E52BC]/30 scale-110' : ''
//             }`}
//           >
//             <div className="flex flex-col items-center">
//               <Settings className="w-6 h-6 text-white mb-0.5" />
//               <span className="text-white font-bold text-xs">SEMA</span>
//             </div>
//           </Button>
//         </div>
        
//         {/* Service nodes */}
//         {services.map((service, index) => {
//           const radius = 180; // Distance from center (increased for 13 items)
//           const centerX = 250; // Center of the container
//           const centerY = 250;
//           const x = centerX + Math.cos((service.angle * Math.PI) / 180) * radius;
//           const y = centerY + Math.sin((service.angle * Math.PI) / 180) * radius;
//           const IconComponent = service.icon;
//           const isActive = activeNode === service.id;
//           const isHovered = hoveredNode === service.id;
          
//           return (
//             <div
//               key={service.id}
//               className="absolute"
//               style={{
//                 left: `${x}px`,
//                 top: `${y}px`,
//                 transform: 'translate(-50%, -50%)',
//               }}
//             >
//               {/* Service button */}
//               <Button
//                 onClick={() => handleNodeClick(service.id)}
//                 onMouseEnter={() => setHoveredNode(service.id)}
//                 onMouseLeave={() => setHoveredNode(null)}
//                 className={`w-12 h-12 rounded-full bg-white hover:bg-blue-50 border-2 shadow-lg transition-all duration-300 p-0 ${
//                   isActive 
//                     ? 'border-[#3E52BC] ring-4 ring-[#3E52BC]/30 scale-110' 
//                     : isHovered 
//                       ? 'border-[#3E52BC] scale-105' 
//                       : 'border-[#3E52BC]/30'
//                 }`}
//               >
//                 <IconComponent 
//                   className={`w-5 h-5 transition-colors duration-300 ${
//                     isActive || isHovered ? 'text-[#3E52BC]' : 'text-gray-600'
//                   }`} 
//                 />
//               </Button>
              
//               {/* Tooltip on hover */}
//               {isHovered && (
//                 <div className="absolute z-10 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-lg whitespace-nowrap -top-10 left-1/2 transform -translate-x-1/2">
//                   {service.name}
//                   <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
//                 </div>
//               )}
              
//               {/* Service info panel */}
//               {isActive && (
//                 <div className="absolute z-20 p-3 bg-white rounded-lg shadow-xl border border-gray-200 whitespace-nowrap -top-16 left-1/2 transform -translate-x-1/2">
//                   <div className="flex items-center gap-2 mb-1">
//                     <IconComponent className="w-4 h-4 text-[#3E52BC]" />
//                     <span className="font-semibold text-sm text-gray-900">{service.name}</span>
//                   </div>
//                   <p className="text-xs text-gray-600 mb-2">{service.description}</p>
//                   <Button 
//                     size="sm" 
//                     className="text-xs h-6 px-2 bg-[#3E52BC] hover:bg-[#3E52BC]/90"
//                   >
//                     En savoir plus <ChevronRight className="w-3 h-3 ml-1" />
//                   </Button>
//                   <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-gray-200 rotate-45"></div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
        
//         {/* Floating action hint */}
//         <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
//           <p className="text-sm text-gray-500">Cliquez sur les nœuds pour explorer</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SEMAEcosystem;

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { 
//   MessageCircle, 
//   Target, 
//   Users, 
//   Store, 
//   BarChart3, 
//   Plane, 
//   Calendar, 
//   Dice1,
//   Settings,
//   ChevronRight,
//   CreditCard,
//   HeadphonesIcon,
//   Zap,
//   FileText,
//   Workflow
// } from 'lucide-react';

// const SEMAEcosystem = () => {
//   const [activeNode, setActiveNode] = useState(null);
//   const [hoveredNode, setHoveredNode] = useState(null);

//   // Define the services with their icons and positions (13 items)
//   const services = [
//     { 
//       id: 'messaging', 
//       icon: MessageCircle, 
//       angle: 0, 
//       name: 'Messages',
//       description: 'Gestion des messages WhatsApp'
//     },
//     { 
//       id: 'targeting', 
//       icon: Target, 
//       angle: 27.69, 
//       name: 'Ciblage',
//       description: 'Ciblage intelligent des prospects'
//     },
//     { 
//       id: 'clients', 
//       icon: Users, 
//       angle: 55.38, 
//       name: 'Clients',
//       description: 'Gestion de la clientèle'
//     },
//     { 
//       id: 'shop', 
//       icon: Store, 
//       angle: 83.07, 
//       name: 'Shop',
//       description: 'Boutique en ligne intégrée'
//     },
//     { 
//       id: 'analytics', 
//       icon: BarChart3, 
//       angle: 110.76, 
//       name: 'Analytics',
//       description: 'Analyses et rapports'
//     },
//     { 
//       id: 'travel', 
//       icon: Plane, 
//       angle: 138.45, 
//       name: 'Travel',
//       description: 'Services de voyage'
//     },
//     { 
//       id: 'booking', 
//       icon: Calendar, 
//       angle: 166.14, 
//       name: 'Booking',
//       description: 'Réservations et rendez-vous'
//     },
//     { 
//       id: 'tombola', 
//       icon: Dice1, 
//       angle: 193.83, 
//       name: 'Tombola',
//       description: 'Jeux et concours'
//     },
//     { 
//       id: 'payment', 
//       icon: CreditCard, 
//       angle: 221.52, 
//       name: 'Payment',
//       description: 'Solutions de paiement'
//     },
//     { 
//       id: 'support', 
//       icon: HeadphonesIcon, 
//       angle: 249.21, 
//       name: 'Support',
//       description: 'Support client 24/7'
//     },
//     { 
//       id: 'automation', 
//       icon: Zap, 
//       angle: 276.9, 
//       name: 'Automation',
//       description: 'Automatisation des processus'
//     },
//     { 
//       id: 'reports', 
//       icon: FileText, 
//       angle: 304.59, 
//       name: 'Reports',
//       description: 'Rapports détaillés'
//     },
//     { 
//       id: 'integration', 
//       icon: Workflow, 
//       angle: 332.28, 
//       name: 'Integration',
//       description: 'Intégrations tierces'
//     }
//   ];

//   const handleNodeClick = (serviceId) => {
//     setActiveNode(activeNode === serviceId ? null : serviceId);
//     console.log('Node clicked:', serviceId);
//   };

//   const handleCenterClick = () => {
//     console.log('SEMA center clicked');
//     setActiveNode(null);
//   };

//   return (
//     <div className="flex items-center justify-center p-8">
//       <div className="relative w-[500px] h-[500px]">
//         {/* Outer shadow circle */}
//         <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl shadow-blue-200/50"></div>
        
//         {/* Dotted guide circle */}
//         <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 opacity-40"></div>
        
//         {/* Inner dotted circle showing the path of service buttons */}
//         <div 
//           className="absolute rounded-full border border-dashed border-gray-400 opacity-30"
//           style={{
//             width: '360px',
//             height: '360px',
//             left: '50%',
//             top: '50%',
//             transform: 'translate(-50%, -50%)'
//           }}
//         ></div>
        
//         {/* Connection lines - radial sticks */}
//         <div className="absolute inset-0">
//           {services.map((service, index) => (
//             <div
//               key={`line-${index}`}
//               className={`absolute w-0.5 origin-bottom transition-all duration-300 ${
//                 hoveredNode === service.id || activeNode === service.id
//                   ? 'bg-[#3E52BC] shadow-lg'
//                   : 'bg-[#3E52BC]/40'
//               }`}
//               style={{
//                 left: '50%',
//                 top: '50%',
//                 height: '156px', // Distance from center (32px) to button edge (180px - 24px)
//                 transform: `rotate(${service.angle}deg) translateY(-100%) translateX(-1px)`,
//                 transformOrigin: 'bottom center',
//               }}
//             />
//           ))}
//         </div>
        
//         {/* Central SEMA button */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Button
//             onClick={handleCenterClick}
//             className={`w-16 h-16 bg-[#3E52BC] hover:bg-[#3E52BC]/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
//               activeNode === null ? 'ring-4 ring-[#3E52BC]/30 scale-110' : ''
//             }`}
//           >
//             <div className="flex flex-col items-center">
//               <Settings className="w-6 h-6 text-white mb-0.5" />
//               <span className="text-white font-bold text-xs">SEMA</span>
//             </div>
//           </Button>
//         </div>
        
//         {/* Service nodes */}
//         {services.map((service, index) => {
//           const radius = 180; // Distance from center (increased for 13 items)
//           const x = Math.cos((service.angle * Math.PI) / 180) * radius;
//           const y = Math.sin((service.angle * Math.PI) / 180) * radius;
//           const IconComponent = service.icon;
//           const isActive = activeNode === service.id;
//           const isHovered = hoveredNode === service.id;
          
//           return (
//             <div
//               key={service.id}
//               className="absolute"
//               style={{
//                 left: `calc(50% + ${x}px)`,
//                 top: `calc(50% + ${y}px)`,
//                 transform: 'translate(-50%, -50%)',
//               }}
//             >
//               {/* Service button */}
//               <Button
//                 onClick={() => handleNodeClick(service.id)}
//                 onMouseEnter={() => setHoveredNode(service.id)}
//                 onMouseLeave={() => setHoveredNode(null)}
//                 className={`w-12 h-12 rounded-full bg-white hover:bg-blue-50 border-2 shadow-lg transition-all duration-300 p-0 ${
//                   isActive 
//                     ? 'border-[#3E52BC] ring-4 ring-[#3E52BC]/30 scale-110' 
//                     : isHovered 
//                       ? 'border-[#3E52BC] scale-105' 
//                       : 'border-[#3E52BC]/30'
//                 }`}
//               >
//                 <IconComponent 
//                   className={`w-5 h-5 transition-colors duration-300 ${
//                     isActive || isHovered ? 'text-[#3E52BC]' : 'text-gray-600'
//                   }`} 
//                 />
//               </Button>
              
//               {/* Tooltip on hover */}
//               {isHovered && (
//                 <div className="absolute z-10 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-lg whitespace-nowrap -top-10 left-1/2 transform -translate-x-1/2">
//                   {service.name}
//                   <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
//                 </div>
//               )}
              
//               {/* Service info panel */}
//               {isActive && (
//                 <div className="absolute z-20 p-3 bg-white rounded-lg shadow-xl border border-gray-200 whitespace-nowrap -top-16 left-1/2 transform -translate-x-1/2">
//                   <div className="flex items-center gap-2 mb-1">
//                     <IconComponent className="w-4 h-4 text-[#3E52BC]" />
//                     <span className="font-semibold text-sm text-gray-900">{service.name}</span>
//                   </div>
//                   <p className="text-xs text-gray-600 mb-2">{service.description}</p>
//                   <Button 
//                     size="sm" 
//                     className="text-xs h-6 px-2 bg-[#3E52BC] hover:bg-[#3E52BC]/90"
//                   >
//                     En savoir plus <ChevronRight className="w-3 h-3 ml-1" />
//                   </Button>
//                   <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-gray-200 rotate-45"></div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
        
//         {/* Floating action hint */}
//         <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
//           <p className="text-sm text-gray-500">Cliquez sur les nœuds pour explorer</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SEMAEcosystem;