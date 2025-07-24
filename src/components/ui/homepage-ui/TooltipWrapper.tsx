import React from 'react';

interface TooltipWrapperProps {
  tooltipText: string;
  children: React.ReactNode;
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({ tooltipText, children }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute top-[92%] mt-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-50 shadow-lg">
        {tooltipText}
      </div>
    </div>
  );
};

export default TooltipWrapper;
