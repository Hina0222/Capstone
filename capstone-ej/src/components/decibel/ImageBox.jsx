import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { ReactComponent as DragSizeIcon } from '../../images/DecibelImages/DragSizeIcon.svg';
import registMouseDownDrag from './registMouseDownDrag.js';

const ImageBox = ({ Image, id, setTrashVisible, setTrashId }) => {
    console.log("ImageBox");
    const nodeRef = useRef(null);
    const [optionVisible, setOptionVisible] = useState(false);
    // const [{ w, h }, setConfig] = useState({ w: 0, h: 0, });

    const handleBlur = () => {
        setOptionVisible(false);
        setTrashVisible(false);
    };

    // useEffect(() => {
    //     const boundary = nodeRef.current?.getBoundingClientRect();

    //     if (boundary) {
    //         const DEFAULT_W = 240;
    //         const DEFAULT_H = 120;
    //         setConfig({
    //             w: DEFAULT_W,
    //             h: DEFAULT_H,
    //         });
    //     }
    // }, []);

    return (

        <>
            <Draggable
                nodeRef={nodeRef}
                bounds="parent"
            >
                <div className='text-box flex' ref={nodeRef} id={id}
                    tabIndex={0}
                    onBlur={handleBlur}
                    onClick={() => {
                        setOptionVisible(true)
                        setTrashVisible(true)
                        setTrashId(id);
                    }
                    }
                // style={{ width: w, height: h }}
                >
                    <div style={{ color: '#0800EE', border: optionVisible ? '1px solid #0800EE' : 'none' }}>
                        <Image className="img-svg" />
                    </div>
                    {optionVisible && (
                        // {...registMouseDownDrag((deltaX, deltaY) => {
                        //     setConfig({
                        //         w: w + deltaX,
                        //         h: h + deltaY,
                        //     });
                        // })}
                        <div className="drag-icon">
                            <DragSizeIcon />
                        </div>
                    )}

                </div>
            </Draggable >
        </>
    );
};
export default ImageBox;