import React from 'react';

const InputField = ({
    id,
    type = "text",
    name, placeholder,
    className = "",
    variant = "primary",
    ...props }) => {

    // css here
    const base = 'w-full border border-primary/50 rounded-md outline-0 focus:ring-1'
    const variatns = {
        primary: 'border-base-content focus:border-primary ring-primary',
    }
    const sizes = 'px-4 py-2 md:px-6 md:py-3'

    return (
        <input
            className={`${base}  ${variatns[variant]} ${sizes}  ${className}`}
            {...props}
            type={type} name={name} placeholder={placeholder} id={id || name} />
    );
};

export default InputField;