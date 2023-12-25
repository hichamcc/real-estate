import React from 'react';

interface ButtonProps {
    value: string;
    style: string;

}

const Button: React.FC<ButtonProps> = ({ value, style }) => {
    return (
        <button type="button" className={`font-medium px-6 py-3 ml-2 border-solid border-2 border-black rounded-full hover:text-white hover:bg-black transition duration-300 ${style} `}>
            {value}
        </button>
    );
};

export default Button;