import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "../styles/About.scss";
import Block3 from '../images/AboutImages/Block3.svg';
import AboutTitle from '../images/AboutImages/AboutTitle.svg';
import AboutGif1 from '../images/AboutImages/AboutGif1.gif';
import AboutGif2 from '../images/AboutImages/AboutGif2.gif';

const About = () => {
    const [showGif, setShowGif] = useState(false);
    const MouseEnter = () => {
        setShowGif(true);
    };

    const MouseLeave = () => {
        setShowGif(false);
    };

    return (
        <div className='main-container min-h-screen flex flex-col items-center'>
            <Link className='home-btn' to="/"></Link>
            <div>
                <img className='mx-auto mt-7' src={AboutTitle} alt="" />
                <div className='relative mx-6'>
                    <img src={Block3} alt="" />
                    {showGif && <img className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2' src={AboutGif2} alt="" />}
                </div>
            </div>
            <div>
                <p className='main-text'>
                    골목의 다양한 경고문을 240장 수집하였습니다.<br />
                    골목 거주민들의 분노를 엿볼 수 있는 경고문들을 기준을 세워 분류한 후,<br />
                    경고문의 재미난 요소들에<img onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={AboutGif1} alt="" />집중하였습니다.<br />
                    시각으로 보여지는 경고문과 청각으로 들리는 경고문, 두가지 방법으로 거주민들의 분노에 집중해 주세요.
                </p>
            </div>
        </div>
    );
};

export default About;