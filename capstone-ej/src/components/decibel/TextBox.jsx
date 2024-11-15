import React, {useEffect, useRef, useState} from 'react';
import Draggable from 'react-draggable';
import registMouseDownDrag from './registMouseDownDrag.js';
import {ReactComponent as DragSizeIcon} from '../../images/DecibelImages/DragSizeIcon.svg';

const TextBox = ({id, setTrashVisible, setTrashId, captureRef}) => {
    console.log("TextBox");
    const nodeRef = useRef(null);
    const textRef = useRef(null);
    const [optionVisible, setOptionVisible] = useState(false);
    const [{x, y, w}, setConfig] = useState({x: 0, y: 0, w: 450});
    const [isResizing, setIsResizing] = useState(false);

    const adjustFontSize = () => {
        if (textRef.current) {
            const {clientWidth} = textRef.current;
            const newFontSize = clientWidth / 10;
            textRef.current.style.fontSize = `${newFontSize}px`;
        }
    };

    useEffect(() => {
        adjustFontSize();
    }, [w]);

    const inrange = (v, min, max) => {
        if (v < min) return min;
        if (v > max) return max;
        return v;
    };
    const MIN_W = 200;

    const handleBlur = () => {
        if (!isResizing) {
            setTrashVisible(false);
            setOptionVisible(false);
        }
    };

    const StopDrag = (data) => {
        setConfig({
            x: data.x,
            y: data.y,
            w,
        });
    }

    return (
        <>
            <Draggable
                nodeRef={nodeRef}
                bounds="parent"
                disabled={isResizing}
                onStop={(e, data) => StopDrag(data)}
            >
                <div className='text-box' ref={nodeRef} id={id} style={{width: w}}
                     tabIndex={0} onBlur={handleBlur}
                     onClick={() => {
                         setOptionVisible(true)
                         setTrashVisible(true)
                         setTrashId(id);
                     }
                     }
                >
                    <p style={{
                        color: '#0800EE',
                        outline: 'none',
                        border: optionVisible ? '1px solid #0800EE' : 'none',
                    }}
                       ref={textRef}
                       contentEditable
                       suppressContentEditableWarning={true}
                       spellCheck={false}>
                        텍스트를 입력해주세요.
                    </p>
                    {optionVisible && (
                        <div className="drag-icon"
                             onMouseEnter={() => {
                                 setIsResizing(true)
                             }}
                             onMouseLeave={() => {
                                 setIsResizing(false)
                             }}

                             {...registMouseDownDrag((deltaX, deltaY) => {
                                 const boundary = captureRef.current.getBoundingClientRect();
                                 setConfig({
                                     x,
                                     y,
                                     w: inrange(w + deltaX, MIN_W, boundary.width - x),
                                 });
                             })}
                        >
                            <DragSizeIcon/>
                        </div>
                    )}
                </div>
            </Draggable>
        </>
    );
};

export default TextBox;
