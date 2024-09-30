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
            <section className='flex flex-col mt-36'>
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
            <section>
                <div>
                    <div className='option-box'>
                        <h3>DECIBEL STEP 데시벨 단계</h3>
                        <div>

                        </div>
                    </div>
                    <div className='option-box'>
                        <h3>A CAUSE OF ANGER 분도 원인</h3>
                        <button onClick={TextBoxAdd}>텍스트 추가하기</button>
                    </div>
                    <div className='option-box'>
                        <h3>SPEECH 말투</h3>
                    </div>
                    <div className='option-box'>
                        <h3>ILLUST 일러스트</h3>
                    </div>
                </div>
                <button onClick={ClickCapture} style={{ background: 'white' }}>저장</button>
            </section>
        </div>
    );
};

export default Decibel;