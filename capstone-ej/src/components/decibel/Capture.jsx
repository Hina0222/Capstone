import React, { useState } from 'react';
import TextBox from './TextBox';
import ImageBox from './ImageBox';
import { ReactComponent as Rect1 } from '../../images/DecibelImages/RectBtn/Rect1.svg';
import { ReactComponent as Rect2 } from '../../images/DecibelImages/RectBtn/Rect2.svg';
import { ReactComponent as Rect3 } from '../../images/DecibelImages/RectBtn/Rect3.svg';
import { ReactComponent as Rect4 } from '../../images/DecibelImages/RectBtn/Rect4.svg';
import { ReactComponent as ResetBtn } from '../../images/DecibelImages/RectBtn/Reset.svg';

const Capture = ({ captureRef, textBoxes, setTextBoxes, imgBoxes, setImgBoxes }) => {
    console.log("캡쳐");
    const [bgColor, setBgColor] = useState('#ffffff');
    const [captureResize, setCaptureResize] = useState({ width: 69.93, height: 86.89 });
    const [activeButton, setActiveButton] = useState(0);

    const Reset = () => {
        setBgColor('#ffffff');
        setTextBoxes([]);
        setImgBoxes([]);
        setCaptureResize({ width: 69.93, height: 86.89 });
        setActiveButton(0);
    }

    const rects = [
        { component: <Rect1 />, size: { width: 69.93, height: 86.89 } },
        { component: <Rect2 />, size: { width: 90.85, height: 51.06 } },
        { component: <Rect3 />, size: { width: 40.18, height: 82.31 } },
        { component: <Rect4 />, size: { width: 94.34, height: 30.48 } },
    ];

    return (
        <>
            <div className='capture-content'>
                <div ref={captureRef} className='relative'
                    style={{ backgroundColor: bgColor, width: `${captureResize.width}%`, height: `${captureResize.height}%` }}
                >
                    {textBoxes.map((_, idx) => (
                        <TextBox key={idx} />
                    ))}
                    {imgBoxes.map((Image, idx) => (
                        <ImageBox key={idx} Image={Image} />
                    ))}
                </div>
            </div>
            <div className='capture-option'>
                <div>
                    <div className='color-btn'>
                        <input type="color" onChange={(e) => { setBgColor(e.target.value) }} value={bgColor} />
                    </div>
                    <button onClick={Reset}>
                        <ResetBtn />
                    </button>
                </div>
                <div style={{ marginTop: '100px' }}>
                    {rects.map((rect, idx) => (
                        <button
                            key={idx}
                            className={activeButton === idx ? 'active' : ''}
                            onClick={() => {
                                setCaptureResize(rect.size);
                                setActiveButton(idx);
                            }}
                        >
                            {rect.component}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Capture;
