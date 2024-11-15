import React, {useRef, useState} from 'react';
import Draggable from 'react-draggable';
import {ReactComponent as DragSizeIcon} from '../../images/DecibelImages/DragSizeIcon.svg';
import registMouseDownDrag from './registMouseDownDrag.js';

const ImageBox = ({ImageSrc, id, setTrashVisible, setTrashId, captureRef}) => {
    console.log("ImageBox");
    const nodeRef = useRef(null);
    const [optionVisible, setOptionVisible] = useState(false);
    const [{x, y, w, h}, setConfig] = useState({x: 0, y: 0, w: 200, h: 100});
    const [isResizing, setIsResizing] = useState(false);
    const [imageSrcWithTimestamp] = useState(`${ImageSrc}?timestamp=${Date.now()}`);

    const inrange = (v, min, max) => {
        if (v < min) return min;
        if (v > max) return max;
        return v;
    };
    const MIN_W = 80;
    const MIN_H = 50;

    const handleBlur = () => {
        setOptionVisible(false);
        setTrashVisible(false);
    };

    const StopDrag = (data) => {
        setConfig({
            x: data.x,
            y: data.y,
            w,
            h,
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
                <div className='text-box' ref={nodeRef} id={id} style={{width: w, height: h}}
                     tabIndex={0}
                     onBlur={handleBlur}
                     onClick={() => {
                         setOptionVisible(true)
                         setTrashVisible(true)
                         setTrashId(id);
                     }}

                >
                    <img crossOrigin="anonymous" className="w-full h-full" src={imageSrcWithTimestamp} alt=""
                         style={{border: optionVisible ? '1px solid #0800EE' : 'none', pointerEvents: 'none'}}/>
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
                                     h: inrange(h + deltaY, MIN_H, boundary.height - y),
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
export default ImageBox;