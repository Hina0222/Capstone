import React, { useState } from 'react';
import TextBox from './TextBox';
import { ReactComponent as Rect1 } from '../../images/DecibelImages/RectBtn/Rect1.svg';
import { ReactComponent as Rect2 } from '../../images/DecibelImages/RectBtn/Rect2.svg';
import { ReactComponent as Rect3 } from '../../images/DecibelImages/RectBtn/Rect3.svg';
import { ReactComponent as Rect4 } from '../../images/DecibelImages/RectBtn/Rect4.svg';

const Capture = ({ captureRef, textBoxes, setTextBoxes }) => {
    console.log("캡쳐");
    const [bgColor, setBgColor] = useState('#ffffff');
    const [captureResize, setCaptureResize] = useState({ width: 800, height: 1140 });
    const [activeButton, setActiveButton] = useState(0);

    const Reset = () => {
        setBgColor('#ffffff');
        setTextBoxes([]);
        setActiveButton(0);
    }

    const rects = [
        { component: <Rect1 />, size: { width: 800, height: 1140 } },
        { component: <Rect2 />, size: { width: 1040, height: 670 } },
        { component: <Rect3 />, size: { width: 460, height: 1080 } },
        { component: <Rect4 />, size: { width: 1080, height: 400 } },
    ];

    return (
        <>
            <div ref={captureRef} className='relative'
                style={{ backgroundColor: bgColor, width: `${captureResize.width}px`, height: `${captureResize.height}px` }}
            >
                {textBoxes.map((_, idx) => (
                    <TextBox key={idx} />
                ))}
            </div>
            <div>
                <div>
                    <input type="color" onChange={(e) => { setBgColor(e.target.value) }} value={bgColor} />
                    <button onClick={Reset}>리셋</button>
                </div>
                <div className='rect-btns'>
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
