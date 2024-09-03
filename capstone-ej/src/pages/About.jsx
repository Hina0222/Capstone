import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import HomeImage from '../images/AboutImages/Home.svg'
import Rectangle from '../images/AboutImages/Rectangle.png'
import Rectangle1 from '../images/AboutImages/Rectangle1.png'
import Frame1 from '../images/AboutImages/Frame1.png'
import Frame2 from '../images/AboutImages/Frame2.png'
import Image1 from '../images/AboutImages/Image1.png'
import Image2 from '../images/AboutImages/Image2.png'
import Image3 from '../images/AboutImages/Image3.png'
import "../styles/About.scss";

const About = () => {
    const [imageIndex, setImageIndex] = useState([1]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => {
                if (prevIndex.length < 3) {
                    return [...prevIndex, prevIndex.length + 1];
                } else {
                    return prevIndex;
                }
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='main-container'>
            <div className='sub-text flex justify-between'>
                <div className='flex'>
                    <Link to="/"><img style={{ maxWidth: '72px' }} src={HomeImage} alt="" /></Link>
                    <p className='ml-2.5 '>
                        도로변으로 개발이 옮겨가면서 골목이 외면받았을 당시,
                        다시 골목길을 보존하고 골목 문화를 활성화하자는
                        움직임이 나타나면서 골목 상권이 다시
                    </p>
                </div>
                <div style={{ width: '30%' }}>
                    <p className='text-right'>각광받았고, 요즘엔 주거민들끼리의 커뮤니티의 성격보다는 상권의</p>
                    <p className='font-eng'>When development moved to the side of the road</p>
                </div>
            </div>
            <p className='main-text'>
                골목의 경고문 280장을 수집하였습니다. <br />
                골목 거주민들의 분노를<img src={Rectangle} alt="" />엿볼 수 있는 경고문들을 기준을 세워 분류한 후,<br />
                경고문의 재미난 요소들에<img src={Rectangle1} alt="" />집중하였습니다.<br />
                시각적으로 보여지는 경고문<img src={Frame1} alt="" />과 텍스트로 보여지는 경고문<img src={Frame2} alt="" />두가지 방법으로<br />
                거주민들의 분노에 집중해 주세요.<br />
                라는 내용을 적을 예정입니다. 아직 내용 정리를 못 했습니다 교수님...
            </p>
            <p className='font-eng mb-12'>These days, it's not about the characteristics of the community among the residents<br />
                The nature of the commercial district has become stronger. However, during this process<br />
                The importance as a living space for the residents of the alley,<br />
                It didn't reach the improvement of its value as a residence<br />
                The era of loss of alleys has arrived, which has lost the character of existing alleys.
            </p>
            <span className='rotate-90 origin-bottom-right absolute bottom-0 right-11'>
                <p className='font-eng'>
                    and the alley was turned away,I wanted to preserve the alley and revitalize the alley culture
                </p>
                <p className='sub-text'> 성격이 더 강해졌다. 하지만 이 과정에서
                    실제 골목 거주민들의 생활공간으로서의 중요성,</p>
            </span>
            <div className='flex items-end justify-around h-2/5'>
                <div className='w-2/5 h-full relative'>
                    <img className={`trash-image absolute bottom-0`} src={Image1} alt="" />
                    <img className={`trash-image absolute ${imageIndex.includes(2) ? 'opacity-100' : 'opacity-0'}`} src={Image2} alt="" />
                    <img className={`trash-image absolute ${imageIndex.includes(3) ? 'opacity-100' : 'opacity-0'}`} src={Image3} alt="" />
                </div>
                <div style={{ width: '55%' }}>
                    <p sub-text>주거지로서의 가치 향상까지는 미치지 못하여
                        기존의 골목 성격을 잃은 골목 상실의 시대가 도래했다.</p>
                    <p className='font-eng text-right'>As the movement appeared, the alley business district was back in the spotlight,
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;