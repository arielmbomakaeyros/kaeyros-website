import React from "react";
import { WhoAreWe } from "./svg";

const SmallSectionHeader = ({ label }: { label: string }) => {
  return (
    <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[#FF5E00] to-[#0F2A96] mb-4">
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white">
        {/* Icon here */}
        <WhoAreWe />
        <span className="text-[16px] font-bold text-black">
          {label}
        </span>
      </div>
    </div>
  );
};

export default SmallSectionHeader;
