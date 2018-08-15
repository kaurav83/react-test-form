import React from 'react';

const InputField = ({
    name,
    value,
    type,
    onChange,
    id
}) => {
    return (
        <div>
            <input 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                id={id}
                required
            />
        </div>
    );
};

export default InputField;