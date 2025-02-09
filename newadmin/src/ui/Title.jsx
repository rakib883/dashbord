import { twMerge } from 'tailwind-merge';

const Title = ({ title, className }) => {
  return (
    <div className={twMerge(" font-bold text-[#313131]", className)}>
      {title}
    </div>
  );
};

export default Title;

