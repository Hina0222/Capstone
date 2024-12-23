import React, { useState } from 'react';
import TextBox from './TextBox';
import ImageBox from './ImageBox';
import { ReactComponent as Rect1 } from '../../images/DecibelImages/RectBtn/Rect1.svg';
import { ReactComponent as Rect2 } from '../../images/DecibelImages/RectBtn/Rect2.svg';
import { ReactComponent as Rect3 } from '../../images/DecibelImages/RectBtn/Rect3.svg';
import { ReactComponent as Rect4 } from '../../images/DecibelImages/RectBtn/Rect4.svg';
import { ReactComponent as T } from '../../images/DecibelImages/RectBtn/T.svg';
import { ReactComponent as ResetBtn } from '../../images/DecibelImages/RectBtn/Reset.svg';
import { ReactComponent as Trash } from '../../images/DecibelImages/Trash.svg';

const Capture = ({ captureRef, imgBoxes, setImgBoxes, setActiveButton, activeButton }) => {
    console.log("캡쳐");
    const [bgColor, setBgColor] = useState('#ffffff');
    const [captureResize, setCaptureResize] = useState({ width: 57.5, height: 94.1 });
    const [textBoxes, setTextBoxes] = useState([]);
    const [trashVisible, setTrashVisible] = useState(false);
    const [trashId, setTrashId] = useState('');

    const Reset = () => {
        setBgColor('#ffffff');
        setTextBoxes([]);
        setImgBoxes([]);
        setCaptureResize({ width: 57.5, height: 94.1 });
        setActiveButton(0);
    }

    const TextBoxAdd = () => {
        const newTextBox = { id: Date.now() };
        setTextBoxes([...textBoxes, newTextBox]);
    };

    const rects = [
        { component: <Rect1 style={{ width: '40.9%' }} />, size: { width: 57.5, height: 94.1 } },
        { component: <Rect2 style={{ width: '59.09%' }} />, size: { width: 81.9, height: 55.3 } },
        { component: <Rect3 style={{ width: '26.13%' }} />, size: { width: 33.05, height: 89.11 } },
        { component: <Rect4 style={{ width: '60.22%' }} />, size: { width: 77.6, height: 33 } },
    ];

    const onDelete = (id) => {
        setTextBoxes(textBoxes.filter((box) => box.id !== id));
        setImgBoxes(imgBoxes.filter((box) => box.id !== id));
    }

    return (
        <>
            <div className='capture-option'>
                <div>
                    <div className='color-btn'>
                        <input type="color" onChange={(e) => { setBgColor(e.target.value) }} value={bgColor} />
                    </div>
                    <button onClick={Reset}>
                        <ResetBtn style={{ width: '50%' }} />
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
                                setTextBoxes([]);
                                setImgBoxes([]);
                            }}
                        >
                            {rect.component}
                        </button>
                    ))}
                </div>
                <div style={{ marginTop: '100px' }}>
                    <button onClick={TextBoxAdd} >
                        <T style={{ width: '43.18%' }} />
                    </button>
                </div>
                <div style={{ marginTop: '100px' }}>
                    {trashVisible &&
                        <button onMouseDown={() => {
                            onDelete(trashId)
                            setTrashVisible(false)
                        }}>
                            <Trash style={{ width: '68%' }} />
                        </button>
                    }
                </div>
            </div>
            <div className='capture-content'>
                <div ref={captureRef} className='relative'
                    style={{ backgroundColor: bgColor, width: `${captureResize.width}%`, height: `${captureResize.height}%` }}
                >
                    {textBoxes.map((text) => (
                        <TextBox key={text.id} id={text.id} setTrashVisible={setTrashVisible} setTrashId={setTrashId} captureRef={captureRef} />
                    ))}
                    {imgBoxes.map((Image) => (
                        <ImageBox key={Image.id} id={Image.id} ImageSrc={Image.src} setTrashVisible={setTrashVisible} setTrashId={setTrashId} captureRef={captureRef} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Capture;
