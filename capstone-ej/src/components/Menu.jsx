import React, {useState} from 'react';
import {ReactComponent as MenuIcon} from '../images/MenuIcon.svg';
import {ReactComponent as XIcon} from '../images/XIcon.svg';
import HomeBtn from '../images/HomeBtn.svg';
import AboutBtn from '../images/AboutBtn.svg';
import EntryBtn from '../images/EntryBtn.svg';
import DecibelBtn from '../images/DecibelBtn.svg';
import {useNavigate, useLocation} from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const currentPage = (path) => {
        return location.pathname === path ? 'none' : 'flex';
    }

    return (
        <div className='menu-buttons'>
            {isOpen ? (
                <button className='select-button mb-5 w-[93.6px]' onClick={() => setIsOpen(false)}>
                    <XIcon/>
                </button>
            ) : (
                <button className='select-button mb-5 w-[93.6px]' onClick={() => setIsOpen(true)}>
                    <MenuIcon/>
                </button>
            )}
            {isOpen && (
                <>
                    <button
                        className={`select-button select-hover ${currentPage('/')}`}
                        style={{display: `${currentPage('/')}`}}
                        onClick={() => navigate('/')}
                        disabled={location.pathname === '/'}
                    >
                        <img src={HomeBtn} alt="Home"/>
                    </button>
                    <button
                        className={`select-button select-hover w-[53%]`}
                        style={{display: `${currentPage('/about')}`}}
                        onClick={() => navigate('/about')}
                        disabled={location.pathname === '/about'}
                    >
                        <img src={AboutBtn} alt="About"/>
                    </button>
                    <button
                        className={`select-button select-hover w-[78%] ${currentPage('/entry')}`}
                        style={{display: `${currentPage('/entry')}`}}
                        onClick={() => navigate('/entry')}
                        disabled={location.pathname === '/entry'}
                    >
                        <img src={EntryBtn} alt="Entry"/>
                    </button>
                    <button
                        className={`select-button select-hover w-[63%] ${currentPage('/decibel')}`}
                        style={{display: `${currentPage('/decibel')}`}}
                        onClick={() => navigate('/decibel')}
                        disabled={location.pathname === '/decibel'}
                    >
                        <img src={DecibelBtn} alt="Decibel"/>
                    </button>
                </>
            )}
        </div>
    );
};

export default Menu;
