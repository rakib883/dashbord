import React from 'react';
import clsx from 'clsx'; // Corrected import
import { twMerge } from 'tailwind-merge';

const Button = ({ title, className, icon }) => {
  return (
    <div>
      <button
        className={twMerge(
          'bg-[#3180fc] flex gap-4 items-center px-7 py-3 rounded-md font-semibold text-white hover:bg-white hover:border border border-[#3180fc] duration-300 hover:text-[#3180fc]  ',
          className 
        )}
      >
        {icon && <p>{icon}</p>} 
        <p>{title}</p>
      </button>
    </div>
  );
};

export default Button;
