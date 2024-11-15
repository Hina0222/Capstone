import {useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Capture from '../components/decibel/Capture';
import {ReactComponent as Home} from '../images/AboutImages/Home.svg';
import html2canvas from 'html2canvas';

const Decibel = () => {
    console.log("Decibel페이지")
    const captureRef = useRef(null);
    const navigate = useNavigate();
    const [decibelLevel, setDecibelLevel] = useState(4);
    const [imgBoxes, setImgBoxes] = useState([]);
    const [activeButton, setActiveButton] = useState(0);

    const SaveClick = async () => {
        const canvas = await html2canvas(captureRef.current, {
            allowTaint: true,
            useCORS: true,
        });
        const imgData = canvas.toDataURL('image/png');
        // 로컬스토리지에 저장
        const existingImages = JSON.parse(localStorage.getItem('capturedImages')) || [];
        const newCaptureData = {
            image: imgData,
            rect: activeButton,
        };
        existingImages.push(newCaptureData);

        localStorage.setItem('capturedImages', JSON.stringify(existingImages));

        navigate('/decibel/save', {state: {activeButton, capturedImage: imgData}});
    };

    const ImageBoxAdd = (src) => {
        const newImageBox = {id: Date.now(), src};
        setImgBoxes([...imgBoxes, newImageBox]);
    };

    const ClickDecibelLevel = (idx) => {
        if (idx <= 4) {
            setDecibelLevel(4);
        } else if (idx <= 8) {
            setDecibelLevel(8);
        } else if (idx <= 12) {
            setDecibelLevel(12);
        } else if (idx <= 16) {
            setDecibelLevel(16);
        }
    }

    return (
        <div className='decibel-page'>
            <div className='flex gap-10'>
                <Link className='home-btn' to="/" style={{position: 'static'}}>
                    <Home/>
                </Link>
                <div className='decibel-top'>
                    <div className='text-3xl font-medium'>DECIBEL</div>
                    <div className='overflow-hidden w-full'>
                        <div className='decibel-top-flowing'>
                            거주민들의 목소리를 생각하면서 청각으로 들리는 경고문에 집중해 주세요. 경고문의 글쓴이가 되어 하고 싶었던 이야기를 경고문으로 만들어 나만의 골목에 부착해 보세요.
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between' style={{marginTop: '60px', height: 'calc(100% - 112px)'}}>
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
                                    {Array.from({length: 16}, (_, index) => (
                                        <button
                                            key={index}
                                            className='decibel-btn'
                                            onClick={() => {
                                                ClickDecibelLevel(index + 1)
                                            }}
                                            style={{backgroundColor: index + 1 <= decibelLevel ? '#0800EE' : 'white'}}
                                        >
                                        </button>
                                    ))}
                                </div>
                                <div className='flex justify-between mt-5' style={{fontSize: '20px', fontWeight: 700}}>
                                    <span>낮음</span>
                                    <span>높음</span>
                                </div>
                            </div>
                        </div>
                        <div className='option-box'>
                            <h3 className='option-title'><b>SPEECH</b>말투</h3>
                            <div className='flex flex-wrap gap-x-14 gap-y-12 option-content'
                                 style={{paddingBottom: '56px'}}>
                                {Array.from({length: Math.ceil(decibelLevel / 4) <= 3 ? 9 : 18}, (_, index) => {
                                        const LEVEL = Math.ceil(decibelLevel / 4);
                                        return <img key={index}
                                                    src={`https://bucket-geeks.s3.ap-northeast-2.amazonaws.com/alleyloss/DECIBEL/speech/${LEVEL}/${LEVEL}-${index + 1}.svg`}
                                                    alt=""
                                                    className='cursor-pointer' style={{maxWidth: '230px', height: '70px'}}
                                                    onClick={() => ImageBoxAdd(`https://bucket-geeks.s3.ap-northeast-2.amazonaws.com/alleyloss/DECIBEL/speech/${LEVEL}/${LEVEL}-${index + 1}.svg`)}
                                        />
                                    }
                                )}
                            </div>
                        </div>
                        <div className='option-box'>
                            <h3 className='option-title'><b>ILLUST</b>일러스트</h3>
                            <div className='option-content flex flex-wrap gap-14' style={{paddingBottom: '56px'}}>
                                {Array.from({length: 26}, (_, index) => (
                                    <img key={index}
                                         src={`https://bucket-geeks.s3.ap-northeast-2.amazonaws.com/alleyloss/DECIBEL/illust/i-${index + 1}.svg`}
                                         alt=""
                                         className='cursor-pointer'
                                         onClick={() => ImageBoxAdd(`https://bucket-geeks.s3.ap-northeast-2.amazonaws.com/alleyloss/DECIBEL/illust/i-${index + 1}.svg`)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <button onClick={SaveClick} className='save-btn'>SAVE</button>
                </section>
            </div>
        </div>
    );
};

export default Decibel;