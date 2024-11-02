import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Bg from "../images/DecibelImages/Background";
import Capture from '../components/decibel/Capture';
import { ReactComponent as Check } from '../images/DecibelImages/BgBtn/Check.svg';
import { ReactComponent as Test1 } from '../images/DecibelImages/Test1.svg';
import { ReactComponent as Test2 } from '../images/DecibelImages/Test2.svg';
import { ReactComponent as Test3 } from '../images/DecibelImages/Test3.svg';
import { ReactComponent as Test4 } from '../images/DecibelImages/Test4.svg';
import { ReactComponent as Test5 } from '../images/DecibelImages/Test5.svg';
import { ReactComponent as Home } from '../images/AboutImages/Home.svg';
import html2canvas from 'html2canvas';

const buttons = [
    Bg.BgBtn1,
    Bg.BgBtn2,
    Bg.BgBtn3,
    Bg.BgBtn4,
    Bg.BgBtn5,
];

const Decibel = () => {
    console.log("Decibel페이지")
    const captureRef = useRef(null);
    const navigate = useNavigate();
    const [bgImage, setBgImage] = useState(Bg.Bg1);
    const [activeBgImage, setActiveBgImage] = useState(0);
    const [decibelLevel, setDecibelLevel] = useState(0);
    const [imgBoxes, setImgBoxes] = useState([]);
    const [activeButton, setActiveButton] = useState(0);

    const SaveClick = async () => {
        const canvas = await html2canvas(captureRef.current);
        const imgData = canvas.toDataURL('image/png');
        // 로컬스토리지에 저장
        const existingImages = JSON.parse(localStorage.getItem('capturedImages')) || [];
        const newCaptureData = {
            image: imgData,
            rect: activeButton,
        };
        existingImages.push(newCaptureData);

        localStorage.setItem('capturedImages', JSON.stringify(existingImages));

        navigate('/decibel/save', { state: { activeBgImage, activeButton, capturedImage: imgData } });
    };

    const ImageBoxAdd = (component) => {
        const newImageBox = { id: Date.now(), component };
        setImgBoxes([...imgBoxes, newImageBox]);
    };

    return (
        <div className='decibel-page' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='flex gap-10'>
                <Link className='home-btn' to="/" style={{ position: 'static' }}>
                    <Home />
                </Link>
                <div className='decibel-top'>
                    어쩌구 저쩌구
                </div>
            </div>
            <div className='flex' style={{ marginTop: '60px', height: 'calc(100% - 112px)' }}>
                <section className='flex flex-col' style={{ width: '5%' }}>
                    {buttons.map((bgBtn, idx) => (
                        <button
                            className='bg-btn'
                            key={idx} onClick={() => {
                                setBgImage(Bg[`Bg${idx + 1}`]);
                                setActiveBgImage(idx);
                            }}>
                            <img src={bgBtn} alt="" />
                            {(activeBgImage === idx) &&
                                <div className='overray'>
                                    <Check />
                                </div>
                            }
                        </button>
                    ))}
                </section>
                <section className='capture-container'>
                    <Capture captureRef={captureRef}
                        imgBoxes={imgBoxes}
                        setImgBoxes={setImgBoxes}
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                    />
                </section>
                <section className='option-container'>
                    <div className='option-boxes'>
                        <div className='option-box'>
                            <h3 className='option-title'><b>DECIBEL STEP</b>데시벨 단계</h3>
                            <div className='option-content'>
                                <div className='flex justify-between'>
                                    {Array.from({ length: 16 }, (_, index) => (
                                        <button
                                            key={index}
                                            className='decibel-btn'
                                            onClick={() => { setDecibelLevel(index) }}
                                            style={{ backgroundColor: index <= decibelLevel ? '#0800EE' : '#E8E8E8' }}
                                        >
                                        </button>
                                    ))}
                                </div>
                                <div className='flex justify-between mt-5' style={{ fontSize: '20px', fontWeight: 700 }}>
                                    <span>낮음</span>
                                    <span>높음</span>
                                </div>
                            </div>
                        </div>
                        <div className='option-box'>
                            <h3 className='option-title'><b>SPEECH</b>말투</h3>
                            <div className='flex flex-wrap gap-14 option-content' style={{ paddingBottom: '56px' }}>
                                <Test1 onClick={() => ImageBoxAdd(Test1)} />
                                <Test2 onClick={() => ImageBoxAdd(Test2)} />
                                <Test3 onClick={() => ImageBoxAdd(Test3)} />
                                <Test4 onClick={() => ImageBoxAdd(Test4)} />
                                <Test5 onClick={() => ImageBoxAdd(Test5)} />
                            </div>
                        </div>
                        <div className='option-box'>
                            <h3 className='option-title'><b>ILLUST</b>일러스트</h3>
                            <div className='option-content' style={{ paddingBottom: '56px' }}></div>
                        </div>
                    </div>
                    <button onClick={SaveClick} className='save-btn'>SAVE</button>
                </section>
            </div>
        </div>
    );
};

export default Decibel;