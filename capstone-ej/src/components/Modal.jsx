import React, { useEffect, useState } from 'react';
import { ReactComponent as Back } from '../images/EntryImages/BackBtn.svg';
import { ReactComponent as Block1 } from '../images/EntryImages/ModalBlock1.svg';
import { ReactComponent as Block2 } from '../images/EntryImages/ModalBlock2.svg';
import { ReactComponent as Block3 } from '../images/EntryImages/ModalBlock3.svg';
import { ReactComponent as Block4 } from '../images/EntryImages/ModalBlock4.svg';

const Modal = ({ closeModal, modalImage, scrollPosition }) => {
    const [BlockComponent, setBlockComponent] = useState(null);

    useEffect(() => {
        const random = Math.random();
        if (random < 0.25) {
            setBlockComponent(Block1);
        } else if (random < 0.5) {
            setBlockComponent(Block2);
        } else if (random < 0.75) {
            setBlockComponent(Block3);
        } else {
            setBlockComponent(Block4);
        }
    }, []);

    return (
        <div className='modal' onClick={closeModal}
            style={{ top: scrollPosition }}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {BlockComponent && <BlockComponent className="absolute left-6 top-8" />}
                <Back className="close" onClick={closeModal} />
                <img src={modalImage} alt="" />
            </div>
        </div>
    );
};

export default Modal;
