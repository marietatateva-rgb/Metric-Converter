
import React from 'react';
import SwitchIcon from './icons/SwitchIcon';

interface SwapButtonProps {
  onClick: () => void;
}

const SwapButton: React.FC<SwapButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Swap units"
      className="
        p-3 lg:p-4 rounded-full bg-indigo-600 text-white 
        hover:bg-indigo-700 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-indigo-500 
        dark:focus:ring-offset-slate-800
        transition-transform duration-200 ease-in-out
        md:rotate-90 transform hover:scale-110
      "
    >
      <SwitchIcon className="w-5 h-5 lg:w-6 lg:h-6" />
    </button>
  );
};

export default SwapButton;
