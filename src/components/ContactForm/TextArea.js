import React from 'react';

const TextArea = ({ name, value, onFocus, onBlur, onChange, placeholder }) => {
    return (
        <div className="my-4 ">
            <textarea
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value, e)}
                className="bg-background border-4 border-text-t2 focus:border-primary text-text-t2 focus:text-primary-t1 py-2 px-4 w-full h-56"
                placeholder={placeholder}
            />
        </div>
    );
}

export default TextArea;