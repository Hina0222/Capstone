import React from 'react';
import { ReactComponent as Back } from '../images/EntryImages/BackBtn.svg'


const Modal = ({ closeModal, modalImage }) => {
    console.log("s")
    return (
        <div className='modal' onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <Back className="close" onClick={closeModal} />
                <img src={modalImage} alt="" />
            </div>
        </div>
    );
};

export default Modal;