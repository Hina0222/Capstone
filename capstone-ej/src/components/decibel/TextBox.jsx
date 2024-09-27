import React, { useState } from 'react';

const TextBox = () => {
    const [fontSize,setFontSize] =useState(24);
    
    return (
        <p style={{fontSize:`${fontSize}px`}}>
            하이
        </p>
    );
};

export default TextBox;