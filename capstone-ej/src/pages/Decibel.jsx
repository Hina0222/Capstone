import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Bg from "../images/DecibelImages/Background";
import Capture from '../components/decibel/Capture';
import html2canvas from 'html2canvas';
import { ReactComponent as Check } from '../images/DecibelImages/BgBtn/Check.svg';

const Decibel = () => {
    console.log("Decibelㅠㅔ이지")
    const captureRef = useRef(null);
    const buttons = [
        Bg.BgBtn1,
        Bg.BgBtn2,
        Bg.BgBtn3,
        Bg.BgBtn4,
        Bg.BgBtn5,
    ];
    const [bgImage, setBgImage] = useState(Bg.Bg1);
    const [activeBgImage, setActiveBgImage] = useState(0);
    const [textBoxes, setTextBoxes] = useState([]);
    const [decibelLevel, setDecibelLevel] = useState(0);

    const ClickCapture = () => {
        const element = captureRef.current;
        html2canvas(element).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'capture.png';
            link.click();
        });
    };

    const TextBoxAdd = () => {
        setTextBoxes([...textBoxes, {}]);
    };

    return (
        <div className='decibel-page' style={{ backgroundImage: `url(${bgImage})` }}>
            <Link className='home-btn' to="/"></Link>
            <section className='flex flex-col mt-36' style={{ width: '4.93%' }}>
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
                <Capture captureRef={captureRef} textBoxes={textBoxes} setTextBoxes={setTextBoxes} />
            </section>
            <section className='option-container'>
                <div>
                    <div className='option-box'>
                        <h3 className='mb-14'><b>DECIBEL STEP</b>데시벨 단계</h3>
                        <div className='flex justify-between'>
                            {Array.from({ length: 16 }, (_, index) => (
                                <button
                                    key={index}
                                    className='decibel-btn'
                                    onClick={() => { setDecibelLevel(index) }}
                                    style={{backgroundColor: index <= decibelLevel ? '#0800EE' : '#E8E8E8'}}
                                >
                                </button>
                            ))}
                        </div>
                        <div className='flex justify-between mt-5' style={{ fontSize: '20px', fontWeight: 700 }}>
                            <span>낮음</span>
                            <span>높음</span>
                        </div>
                    </div>
                    <div className='option-box'>
                        <h3 className='mb-14'><b>A CAUSE OF ANGER</b>분도 원인</h3>
                        <button className='text-add' onClick={TextBoxAdd}>+ 텍스트 추가하기</button>
                    </div>
                    <div className='option-box'>
                        <h3 className='mb-14'><b>SPEECH</b>말투</h3>
                    </div>
                    <div className='option-box'>
                        <h3 className='mb-14'><b>ILLUST</b>일러스트</h3>
                    </div>
                </div>
                <button className='save-btn' onClick={ClickCapture} >SAVE</button>
            </section>
        </div>
    );
};

export default Decibel;