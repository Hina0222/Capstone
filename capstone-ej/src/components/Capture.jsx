import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

const Capture = () => {
    const captureRef = useRef(null);
    const [bgColor, setBgColor] = useState('#ffffff');
    const [fontSize,setFontSize] =useState(24);

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

    // 디바운스 처리
    const ColorChange = (event) => {
        setBgColor(event.target.value);
    };

    const TextAdd = () => {
        const newText = document.createElement('p');
        newText.innerText = "추가된 텍스트";
        newText.style.fontSize = `${fontSize}px`;
        captureRef.current.appendChild(newText);
    };

    return (
        <>
            <div ref={captureRef} className='capture-container' style={{ backgroundColor: bgColor }}>
            </div>
            <input type="color" onChange={ColorChange} value={bgColor} />
            <button onClick={TextAdd}>텍스트 추가하기</button>
            <button onClick={ClickCapture} style={{ background: 'white' }}>저장★</button>
        </>
    );
};

export default Capture;