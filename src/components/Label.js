import React from 'react';

const Label = ({htmlFor}) => {
    return (
        <div>
            <label htmlFor={htmlFor}></label>
        </div>
    );
};

export default Label;