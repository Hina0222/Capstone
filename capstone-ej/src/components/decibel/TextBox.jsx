import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';

const TextBox = () => {
    console.log("TextBox");
    const nodeRef = useRef(null);
    const [fontSize, setFontSize] = useState(24);
    const [textColor, setTextColor] = useState('#000000');
    const [textVisible, setTextVisible] = useState(true);
    const [optionVisible, setOptionVisible] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (nodeRef.current && !nodeRef.current.contains(event.target)) {
                setOptionVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            {textVisible && (
                <Draggable
                    nodeRef={nodeRef}
                    bounds="parent"
                >
                    <div className='text-box' ref={nodeRef} style={{ fontSize: `${fontSize}px`, color: `${textColor}` }}
                        onClick={() => setOptionVisible(true)}
                    >
                        <span
                            contentEditable
                            suppressContentEditableWarning={true}>
                            텍스트를 입력해주세요.
                        </span>
                        {optionVisible && (
                            <div>
                                <input
                                    type="color"
                                    value={textColor}
                                    onChange={(e) => { setTextColor(e.target.value); }}
                                />
                                <button onClick={() => setFontSize(prev => prev + 1)}>+</button>
                                <button onClick={() => setFontSize(prev => prev - 1)}>-</button>
                                <button onClick={() => setTextVisible(false)}>사라지기</button>
                            </div>
                        )}
                    </div>
                </Draggable>
            )}
        </>
    );
};

export default TextBox;
