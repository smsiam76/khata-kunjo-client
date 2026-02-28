import React from 'react';

const Button = ({ children, variant = "primary", className = "", card, ...props }) => {
    const base = "font-semibold rounded-md transition-all ease-in-out duration-300 cursor-pointer hover:ring-1";
    const variants = {
        primary: "bg-primary border border-white/10 text-white hover:bg-white hover:text-primary hover:border-primary ring-primary",
        outline: "bg-white border border-primary text-primary hover:bg-primary hover:text-white hover:border-primary ring-primary"
    }

    const sizes = card
        ? "w-3/4 mx-auto py-1 text-xs block"
        : "text-sm md:text-base px-3 md:px-4 lg:px-6 py-2 md:py-3";
    return (
        <button
            className={`${base} ${variants[variant]} ${sizes} ${className}`}
            {...props}>
            {children}
        </button>
    );
};


export default Button;