import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';

const ImageBox = ({ Image, id, setTrashVisible, setTrashId }) => {
    console.log("ImageBox");
    const nodeRef = useRef(null);
    const [imageSize, setImageSize] = useState(200);
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
                <div className='text-box flex' ref={nodeRef} id={id}
                    tabIndex={0}
                    onBlur={handleBlur}
                    onClick={() => {
                        setOptionVisible(true)
                        setTrashVisible(true)
                        setTrashId(id);
                    }
                    }
                >
                    <div style={{ color: '#0800EE', width: `${imageSize}px`, border: optionVisible ? '1px solid #0800EE' : 'none' }}>
                        {Image}
                    </div>
                    {optionVisible && (
                        <>
                            {/* 드래그 확대 축소 이미지 */}
                        </>
                    )}
                </div>
            </Draggable >
        </>
    );
};
export default ImageBox;