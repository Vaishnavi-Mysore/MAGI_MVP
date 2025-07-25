import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'noStyle';
  usage: 'button' | 'icon' | 'link';
  isDisabled?: boolean;
  customContent?: React.ReactNode;
  type?: 'button' | 'submit';
};

const variantStyles: Record<'primary' | 'secondary' | 'danger' | 'noStyle', string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-black hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  noStyle: '',
};

const usageStyles: Record<'button' | 'icon' | 'link', string> = {
  button: 'w-28 h-8 px-3 py-1 text-sm rounded-lg sm:w-24 sm:h-9 sm:text-sm md:w-32 md:h-10 md:px-4 md:py-2 md:text-base flex items-center justify-center',
  icon: 'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full',
  link: 'bg-transparent text-[#15477A] p-0 hover:text-[#AA0732] text-sm md:text-base',
};

const CustomButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  usage,
  variant = 'primary',
  isDisabled = false,
  customContent,
  type = 'button',
}) => {
  const baseStyle = 'font-semibold transition-all duration-200';
  const variantStyle = variantStyles[variant];
  const usageStyle = usageStyles[usage];
  const disabledStyle = isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const finalClassName = `${baseStyle} ${variantStyle} ${usageStyle} ${disabledStyle}`.trim();

  return (
    <button type={type} disabled={isDisabled} onClick={onClick} className={finalClassName}>
      {customContent ? customContent : label}
    </button>
  );
};

export default CustomButton;
