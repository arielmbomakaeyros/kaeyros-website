import React, { useState } from 'react';
import { AttendanceTrackingSvgIcon, BookingSvgIcon, BulkMessageSvgIcon, ChatbotSvgIcon, DataCollectorSvgIcon, LoyaltyProgramSvgIcon, OrderTakingSvgIcon, PaymentSvgIcon, ReportingSvgIcon, SemaSvgIcon2, ShopSvgIcon, TicketingSvgIcon, TombolaSvgIcon, TransactionValidationSvgIcon } from './custom/SvgLight';

// Mock SVG Icons for demo - replace with your actual imports
const SemaSvgIcon = ({ color = "#ffffff" }) => (
  <svg width="25" height="17" viewBox="0 0 41 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_19512_1456)">
      <path d="M1.07889 9.27021C1.07889 5.35946 1.07233 8.77563 1.07889 4.86161C1.08544 1.88433 2.66742 0.305619 5.67418 0.302344C12.0218 0.295793 18.3694 0.292518 24.7202 0.302344C27.6451 0.305619 29.2893 1.98259 29.2926 4.92056C29.2926 9.60757 29.2959 6.96765 29.2926 11.6547C29.2893 14.442 27.6058 16.1582 24.8382 16.1648C19.8564 16.1779 14.8713 16.1844 9.88953 16.1517C9.16241 16.1484 8.65801 16.3646 8.15688 16.8821C6.43733 18.6573 4.44593 22.3781 2.6969 24.1271C2.30714 24.5169 1.93047 25.0147 1.28851 24.7101C0.692396 24.4285 0.859438 23.8291 0.859438 23.3312C0.849612 19.3091 1.08216 13.2989 1.08216 9.27348L1.07889 9.27021Z" fill={color}/>
      <path d="M40.8749 12.6173C40.8749 16.6722 40.8749 20.7303 40.8749 24.7852C40.8749 25.2536 40.9896 25.7973 40.4328 26.0462C39.8465 26.3115 39.4731 25.9054 39.0997 25.532C37.3048 23.7305 35.4968 21.9422 33.7216 20.1211C33.2762 19.6658 32.8274 19.4595 32.1789 19.4726C29.9681 19.5119 27.7539 19.4857 25.5431 19.489C24.9634 19.489 24.3574 19.4857 24.3574 18.6963C24.3574 17.9594 24.8979 17.8742 25.5103 17.8349C28.6841 17.6351 30.9539 15.1197 30.9703 11.7494C30.9933 7.10494 30.9736 9.78743 30.9769 5.14301C30.9769 3.69531 31.0457 3.62326 32.4508 3.61998C33.8526 3.61671 35.2545 3.59378 36.653 3.62653C39.2078 3.68221 40.8553 5.33953 40.8684 7.89102C40.8913 11.9099 40.8749 8.59849 40.8749 12.6173Z" fill={color === "#ffffff" ? "#C8D0F9" : "#ffffff"}/>
    </g>
    <defs>
      <clipPath id="clip0_19512_1456">
        <rect width="40.0475" height="27.1001" fill="white" transform="translate(0.833984 0.29541)"/>
      </clipPath>
    </defs>
  </svg>
);

// Mock icons for demo - replace with your actual icon imports
const MockIcon = ({ color = "#3E52BC" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="9" cy="9" r="2"/>
    <path d="M21 15.5c-3-6-10.5-6-13.5 0"/>
  </svg>
);

const HubDiagram = ({ 
  centerTitle = "Sema",
  nodes = [
    { id: 1, icon: TransactionValidationSvgIcon, label: "Transaction Validation", tooltip: "Validate transactions securely", link: "/product" },
    { id: 2, icon: TicketingSvgIcon, label: "Ticketing", tooltip: "Manage tickets and support", link: "/product" },
    { id: 3, icon: ChatbotSvgIcon, label: "Chatbot", tooltip: "AI-powered chatbot system", link: "/product" },
    { id: 4, icon: LoyaltyProgramSvgIcon, label: "Loyalty Program", tooltip: "Customer loyalty management", link: "/product" },
    { id: 5, icon: BulkMessageSvgIcon, label: "Bulk Messaging", tooltip: "Send messages in bulk", link: "/product" },
    { id: 6, icon: PaymentSvgIcon, label: "Payment", tooltip: "Payment processing system", link: "/product" },
    { id: 7, icon: AttendanceTrackingSvgIcon, label: "Attendance Tracking", tooltip: "Track attendance and time", link: "/product" },
    { id: 8, icon: ShopSvgIcon, label: "Shop", tooltip: "Online store management", link: "/product" },
    { id: 9, icon: BookingSvgIcon, label: "Booking", tooltip: "Booking and reservation system", link: "/product" },
    { id: 10, icon: ReportingSvgIcon, label: "Reporting", tooltip: "Generate reports and analytics", link: "/product" },
    { id: 11, icon: OrderTakingSvgIcon, label: "Order Taking", tooltip: "Order management system", link: "/product" },
    { id: 12, icon: TombolaSvgIcon, label: "Tombola", tooltip: "Raffle and prize management", link: "/product" },
    { 
      id: 13, 
      icon: DataCollectorSvgIcon, 
      label: 'Data Collector',
      tooltip: 'Solutions de paiement', 
      link: "/product"
    },
  ]
}) => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [hoveredCenter, setHoveredCenter] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const centerX = 300;
  const centerY = 300;
  const radius = 180;
  const nodeRadius = 28; // Reduced from 35
  const centerRadius = 45;

  const handleNodeHover = (nodeId: number, event: any) => {
    setHoveredNode(nodeId as any);
    setTooltipVisible(true);
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  const handleNodeLeave = () => {
    setHoveredNode(null);
    setTooltipVisible(false);
  };

  const handleCenterHover = () => {
    setHoveredCenter(true);
  };

  const handleCenterLeave = () => {
    setHoveredCenter(false);
  };

  const handleNodeClick = (link: string) => {
    console.log(`Navigate to: ${link}`);
    alert(`Would navigate to: ${link}`);
  };

  const getNodePosition = (index: number, total: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto  rounded-lg">
      <svg width="520" height="550" className="mx-auto ">
        {/* Define filters for glow and shadow effects */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
          <filter id="centerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="centerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="3" dy="6" stdDeviation="5" floodOpacity="0.4"/>
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius + 50}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.3"
        />

        {/* Connection lines */}
        {nodes.map((node, index) => {
          const pos = getNodePosition(index, nodes.length);
          const isHovered = hoveredNode === node.id;
          
          return (
            <line
              key={`line-${node.id}`}
              x1={centerX}
              y1={centerY}
              x2={pos.x}
              y2={pos.y}
              stroke={isHovered ? "#f97316" : "#3b82f6"}
              strokeWidth={isHovered ? "3" : "2"}
              className="transition-all duration-300"
            />
          );
        })}

        {/* Center node */}
        <g>
          <circle
            cx={centerX}
            cy={centerY}
            r={centerRadius}
            fill="#ffffff"
            stroke='#3b82f6'
            strokeWidth={3}
            className={`cursor-pointer transition-all duration-300 ${
              hoveredCenter ? 'drop-shadow-lg' : ''
            }`}
            filter={hoveredCenter ? "url(#centerGlow) url(#centerShadow)" : "url(#shadow)"}
            onMouseEnter={handleCenterHover}
            onMouseLeave={handleCenterLeave}
          />
          
          {/* Center icon */}
          <foreignObject
            x={centerX - 25}
            y={centerY - 25}
            width="50"
            height="50"
            className="pointer-events-none"
          >
            <div className="flex items-center justify-center w-full h-full">
              <SemaSvgIcon2 color="#3b82f6" />
            </div>
          </foreignObject>
        </g>

        {/* Outer nodes */}
        {nodes.map((node, index) => {
          const pos = getNodePosition(index, nodes.length);
          const isHovered = hoveredNode === node.id;
          const IconComponent = node.icon;
          
          return (
            <g key={node.id}>
              {/* Node circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={nodeRadius}
                fill={isHovered ? "#f97316" : "#ffffff"}
                stroke={isHovered ? "#f97316" : "#3E52BC"}
                strokeWidth="3"
                className="cursor-pointer transition-all duration-300"
                filter={isHovered ? "url(#glow) url(#shadow)" : "url(#shadow)"}
                onMouseEnter={(e) => handleNodeHover(node.id, e)}
                onMouseLeave={handleNodeLeave}
                onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
                onClick={() => handleNodeClick(node.link)}
              />
              
              {/* Icon */}
              <foreignObject
                x={pos.x - 12}
                y={pos.y - 12}
                width="24"
                height="24"
                className="pointer-events-none"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <IconComponent color={isHovered ? "#ffffff" : "#3E52BC"} />
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {tooltipVisible && hoveredNode && (
        <div
          className="fixed z-10 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg pointer-events-none transition-opacity duration-200"
          style={{
            left: mousePos.x + 10,
            top: mousePos.y - 10,
            transform: 'translateY(-100%)'
          }}
        >
          {nodes.find(node => node.id === hoveredNode)?.tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {/* <div className="mt-6 text-center text-gray-600">
        <p className="text-sm">Hover over nodes to see tooltips and click to navigate</p>
      </div> */}
    </div>
  );
};

export default HubDiagram;
