'use client';

import { type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  _size: string;
  type?: string;
  inputStyle?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ _size, onChange, type, inputStyle, ...props }: InputProps) => {
  let inputSize: string = '';
  // 추가필요? background-color style (login modal input bg -> sub3)
  const inputDefault = 'rounded-lg font-normal text-base border border-opacityblack outline-none ';
  const sizeFunc = () => {
    switch (_size) {
      case 'sm':
        return (inputSize = 'w-[388px] h-[3rem] py-3 px-4');
      case 'md':
        return (inputSize = 'w-[75%] h-[2.5rem] py-1 px-2 sm:h-[3rem] sm:py-3 sm:px-4 md:w-[473px] md:h-[51px] md:py-[12px] md:px-[40px]');
      case 'lg':
        return (inputSize = 'w-[543px] py-[8px] px-[24px]');
    }
  };
  sizeFunc();
  return <input type={type} className={`${inputDefault} ${inputSize} ${inputStyle} `} onChange={onChange} {...props} />;
};

// width 기준으로 사이즈 지정 / 로그인폼 => sm / 댓글=> md / post title, content => lg
