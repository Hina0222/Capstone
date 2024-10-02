import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { ReactComponent as Trash } from '../../images/DecibelImages/Trash.svg';
import { ReactComponent as Minus } from '../../images/DecibelImages/Minus.svg';
import { ReactComponent as Plus } from '../../images/DecibelImages/Plus.svg';

const ImageBox = ({ Image }) => {
    console.log("ImageBox");
    const nodeRef = useRef(null);
    const [imageSize, setImageSize] = useState(200);
    const [imageColor, setimageColor] = useState('#000000');
    const [boxVisible, setBoxVisible] = useState(true);
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
                    <div className='text-box flex' ref={nodeRef}
                        onClick={() => setOptionVisible(true)}
                    >
                        <div style={{ color: `${imageColor}`, width: `${imageSize}px` }}>
                            {Image}
                        </div>
                        {optionVisible && (
                            <div className='ml-5'>
                                <div className='color-btn'>
                                    <input
                                        type="color"
                                        value={imageColor}
                                        onChange={(e) => { setimageColor(e.target.value); }}
                                    />
                                </div>
                                <button onClick={() => setImageSize(prev => prev + 3)}>
                                    <Plus />
                                </button>
                                <button onClick={() => setImageSize(prev => prev - 3)}>
                                    <Minus />
                                </button>
                                <button onClick={() => setBoxVisible(false)}>
                                    <Trash />
                                </button>
                            </div>
                        )}
                    </div>
                </Draggable>
            )}
        </>
    );
};
export default ImageBox;