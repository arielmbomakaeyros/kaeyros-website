import React from "react";
import { WhoAreWe } from "./svg";

const SmallSectionHeader = ({ label }: { label: string }) => {
  return (
    <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 mb-4">
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
