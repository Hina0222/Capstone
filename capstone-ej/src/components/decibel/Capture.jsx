import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import TextBox from './TextBox';

const Capture = () => {
    const captureRef = useRef(null);
    const [bgColor, setBgColor] = useState('#ffffff');
    const [textBoxes, setTextBoxes] = useState([]);

    const ClickCapture = () => {
        const element = captureRef.current;
        html2canvas(element).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'capture.png';
            link.click();
        });
    };

    const ColorChange = (event) => {
        setBgColor(event.target.value);
    };

    const TextBoxAdd = () => {
        setTextBoxes([...textBoxes, {}]);  
    };
    
    return (
        <>
            <div ref={captureRef} className='capture-container' style={{ backgroundColor: bgColor }}>
                {textBoxes.map((_,idx) => (
                    <TextBox key={idx}/>
                ))}
            </div>
            <input type="color" onChange={ColorChange} value={bgColor} />
            <button onClick={TextBoxAdd}>텍스트 추가하기</button>
            <button onClick={ClickCapture} style={{ background: 'white' }}>저장★</button>
        </>
    );
};

export default Capture;
