import React from 'react';
import clsx from 'clsx'; // Corrected import
import { twMerge } from 'tailwind-merge';

const Button = ({ title, className, icon, }) => {
  return (
    <div>
      <button type="submit"
        className={twMerge(
          'bg-[#3180fc] flex gap-4 items-center md:px-7 md:py-3 xxs:px-2 xxs:py-2 xxs:text-xs md:text-base rounded-md font-semibold text-white hover:bg-white hover:border border border-[#3180fc] duration-300 hover:text-[#3180fc]  ',
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
