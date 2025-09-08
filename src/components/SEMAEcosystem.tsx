import React, { useState } from "react";
import {
  AttendanceTrackingSvgIcon,
  BookingSvgIcon,
  BulkMessageSvgIcon,
  ChatbotSvgIcon,
  DataCollectorSvgIcon,
  LoyaltyProgramSvgIcon,
  OrderTakingSvgIcon,
  PaymentSvgIcon,
  ReportingSvgIcon,
  SemaSvgIcon2,
  ShopSvgIcon,
  TicketingSvgIcon,
  TombolaSvgIcon,
  TransactionValidationSvgIcon,
} from "./custom/SvgLight";

const HubDiagram = ({
  centerTitle = "Sema",
  nodes = [
    {
      id: 1,
      icon: TransactionValidationSvgIcon,
      label: "Transaction Validation",
      tooltip: "Validate transactions securely",
      link: "/product",
    },
    {
      id: 2,
      icon: TicketingSvgIcon,
      label: "Ticketing",
      tooltip: "Manage tickets and support",
      link: "/product",
    },
    {
      id: 3,
      icon: ChatbotSvgIcon,
      label: "Chatbot",
      tooltip: "AI-powered chatbot system",
      link: "/product",
    },
    {
      id: 4,
      icon: LoyaltyProgramSvgIcon,
      label: "Loyalty Program",
      tooltip: "Customer loyalty management",
      link: "/product",
    },
    {
      id: 5,
      icon: BulkMessageSvgIcon,
      label: "Bulk Messaging",
      tooltip: "Send messages in bulk",
      link: "/product",
    },
    {
      id: 6,
      icon: PaymentSvgIcon,
      label: "Payment",
      tooltip: "Payment processing system",
      link: "/product",
    },
    {
      id: 7,
      icon: AttendanceTrackingSvgIcon,
      label: "Attendance Tracking",
      tooltip: "Track attendance and time",
      link: "/product",
    },
    {
      id: 8,
      icon: ShopSvgIcon,
      label: "Shop",
      tooltip: "Online store management",
      link: "/product",
    },
    {
      id: 9,
      icon: BookingSvgIcon,
      label: "Booking",
      tooltip: "Booking and reservation system",
      link: "/product",
    },
    {
      id: 10,
      icon: ReportingSvgIcon,
      label: "Reporting",
      tooltip: "Generate reports and analytics",
      link: "/product",
    },
    {
      id: 11,
      icon: OrderTakingSvgIcon,
      label: "Order Taking",
      tooltip: "Order management system",
      link: "/product",
    },
    {
      id: 12,
      icon: TombolaSvgIcon,
      label: "Tombola",
      tooltip: "Raffle and prize management",
      link: "/product",
    },
    {
      id: 13,
      icon: DataCollectorSvgIcon,
      label: "Data Collector",
      tooltip: "Solutions de paiement",
      link: "/product",
    },
  ],
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
      y: centerY + radius * Math.sin(angle),
    };
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto  rounded-lg">
      <svg width="550" height="550" className="mx-auto ">
        {/* Define filters for glow and shadow effects */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodOpacity="0" />
          </filter>
          <filter id="centerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="centerShadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow dx="3" dy="6" stdDeviation="5" floodOpacity="0.4" />
          </filter>
        </defs>

        <defs>
          <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
            {/* <!-- Shift shadow --> */}
            <feOffset dx="0" dy="0" />
            {/* <!-- Blur shadow --> */}
            <feGaussianBlur stdDeviation="0" result="offset-blur" />
            {/* <!-- Take source graphic --> */}
            <feComposite
              operator="out"
              in="SourceGraphic"
              in2="offset-blur"
              result="inverse"
            />
            {/* <!-- Colorize shadow --> */}
            <feFlood floodColor="#3E52BC" floodOpacity="0.5" result="color" />
            {/* <!-- Apply color only on inverse --> */}
            <feComposite
              operator="in"
              in="color"
              in2="inverse"
              result="shadow"
            />
            {/* <!-- Blend shadow with original shape --> */}
            <feComposite in="SourceGraphic" in2="shadow" operator="over" />
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius + 50}
          fill="none"
          stroke="#3E52BC"
          strokeWidth="1"
          opacity="0.4"
          filter="url(#glow) url(#innerShadow)"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={radius + 10}
          fill="none"
          stroke="#3E52BC"
          strokeWidth="1"
          strokeDasharray="5,5"
          opacity=".4"
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
              stroke={isHovered ? "#f97316" : "#3E52BC"}
              strokeWidth={isHovered ? "4" : "4"}
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
            stroke="#3E52BC"
            strokeWidth={4}
            className={`cursor-pointer transition-all duration-300 ${
              hoveredCenter ? "drop-shadow-lg" : ""
            }`}
            filter={
              hoveredCenter
                ? "url(#centerGlow) url(#centerShadow)"
                : "url(#shadow)"
            }
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
              <SemaSvgIcon2 color="#3E52BC" />
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
                // fill={isHovered ? "#f97316" : "#ffffff"}
                fill="#ffffff"
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
                x={pos.x - 15}
                y={pos.y - 15}
                width="30"
                height="30"
                className="pointer-events-none"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <IconComponent color={isHovered ? "#f97316" : "#3E52BC"} />
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
            transform: "translateY(-100%)",
          }}
        >
          {nodes.find((node) => node.id === hoveredNode)?.tooltip}
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
