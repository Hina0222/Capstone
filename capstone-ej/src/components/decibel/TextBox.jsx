import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';

const TextBox = ({ id, setTrashVisible, setTrashId }) => {
    console.log("TextBox");
    const nodeRef = useRef(null);
    const [fontSize, setFontSize] = useState(48);
    const [optionVisible, setOptionVisible] = useState(false);

    const handleBlur = () => {
        setOptionVisible(false);
        setTrashVisible(false);
    };

    return (
        <>
            <Draggable
                nodeRef={nodeRef}
                bounds="parent"
            >
                <div className='text-box' ref={nodeRef} id={id}
                    tabIndex={0} onBlur={handleBlur}
                    onClick={() => {
                        setOptionVisible(true)
                        setTrashVisible(true)
                        setTrashId(id);
                    }
                    }
                >
                    <span style={{ color: '#0800EE', outline: 'none', fontSize: `${fontSize}px`, border: optionVisible ? '1px solid #0800EE' : 'none' }}
                        contentEditable
                        suppressContentEditableWarning={true}
                        spellCheck={false}>
                        텍스트를 입력해주세요.
                    </span>
                    {optionVisible && (
                        <>
                            {/* 드래그 확대 축소 이미지 */}
                        </>
                    )}
                </div>
            </Draggable>
        </>
    );
};

export default TextBox;
