import React from 'react';

const IconBox = ({children, variant = "primary", className=""}) => {

    const base = "w-8 h-8 flex items-center justify-center rounded-full p-2 transition-all duration-300 ease-in-out  cursor-pointer border hover:ring-1 outline-0 hover:ring-offset-2"
    const variants = {
        primary: "bg-primary text-white hover:bg-primary-content border-primary  hover:ring-primary",
        outline: "bg-white text-primary hover:bg-primary border-white hover:ring-white",
        facebook: "bg-white text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:ring-[#1877F2]",
        youtube: "bg-white text-[#FF0000] hover:bg-[#FF0000] hover:text-white hover:ring-[#FF0000]",
        whatsapp: "bg-white text-green-400 hover:bg-green-400 hover:text-white hover:ring-[#FF0000]",
    }
    return (
        <span className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default IconBox;