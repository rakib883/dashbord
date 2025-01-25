import React from 'react';
import { TbAlertOctagon } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

const Alert = ({ title, className }) => {
  return (
    <div className={twMerge(" rounded-lg", )}>
      <div className={ twMerge (" bg-[#fff2ed] px-4 py-1 flex gap-2 items-center text-[#ff602a] rounded-lg",className)}>
        <TbAlertOctagon className="text-[30px]" />
        <p className="py-2 xxs:text-xs md:text-base">{title}</p>
      </div>
    </div>
  );
};

export default Alert;
