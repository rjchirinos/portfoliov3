import React from 'react';

const TextInput = ({ name, value, onFocus, onBlur, onChange, placeholder, error }) => {
    return (
        <div className="mb-6 ">
            <input
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value, e)}
                className={`bg-background border-4 ${error ? "border-error" : "border-text-t2"} text-text-t2 focus:border-primary focus:text-primary-t1 py-2 px-4 w-full`}
                placeholder={placeholder}
            />
        </div>
    );
}

export default TextInput;