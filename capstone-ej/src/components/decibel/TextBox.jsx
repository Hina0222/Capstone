import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { ReactComponent as Trash } from '../../images/DecibelImages/Trash.svg';
import { ReactComponent as Minus } from '../../images/DecibelImages/Minus.svg';
import { ReactComponent as Plus } from '../../images/DecibelImages/Plus.svg';

const TextBox = () => {
    console.log("TextBox");
    const nodeRef = useRef(null);
    const [fontSize, setFontSize] = useState(48);
    const [textColor, setTextColor] = useState('#000000');
    const [boxVisible, setboxVisible] = useState(true);
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
            {boxVisible && (
                <Draggable
                    nodeRef={nodeRef}
                    bounds="parent"
                >
                    <div className='text-box' ref={nodeRef}
                        onClick={() => setOptionVisible(true)}
                    >
                        <span style={{ outline: 'none', fontSize: `${fontSize}px`, color: `${textColor}`, border: optionVisible ? '1px solid #0800EE' : 'none' }}
                            contentEditable
                            suppressContentEditableWarning={true}
                            spellCheck={false}>
                            텍스트를 입력해주세요.
                        </span>
                        {optionVisible && (
                            <div className='flex mt-3'>
                                <div className='color-btn'>
                                    <input
                                        type="color"
                                        value={textColor}
                                        onChange={(e) => { setTextColor(e.target.value); }}
                                    />
                                </div>
                                <button onClick={() => setFontSize(prev => prev + 1)}>
                                    <Plus />
                                </button>
                                <button onClick={() => setFontSize(prev => prev - 1)}>
                                    <Minus />
                                </button>
                                <button onClick={() => setboxVisible(false)}>
                                    <Trash className='trash-img' />
                                </button>
                            </div>
                        )}
                    </div>
                </Draggable>
            )}
        </>
    );
};

export default TextBox;
