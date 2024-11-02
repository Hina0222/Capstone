import { ReactComponent as ModalCloseBtn } from '../images/EntryImages/ModalCloseBtn.svg';

const Modal = ({ closeModal, modalImage, scrollPosition }) => {

    return (
        <div className='modal' onClick={closeModal}
            style={{ top: scrollPosition }}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={closeModal}>
                    <ModalCloseBtn />
                </button>
                <img className='modal-img' src={modalImage} alt="" />
            </div>
        </div>
    );
};

export default Modal;
