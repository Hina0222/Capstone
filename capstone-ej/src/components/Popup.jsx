import PopupGif from '../images/HomeImages/PopupGif.gif';
import PopupClose from '../images/HomeImages/PopupClose.svg';

const Popup = ({ setPopupOpen }) => {
    return (
        <div className='popup-page'>
            <img className='popup-img' src={PopupGif} alt="" />
            <button className='popup-close'>
                <img onClick={() => { setPopupOpen(false) }} src={PopupClose} alt="" />
            </button>
        </div>
    );
};

export default Popup;