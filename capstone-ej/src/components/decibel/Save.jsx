import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Bg from "../../images/DecibelImages/Background";
import axios from 'axios';
import { ReactComponent as Home } from '../../images/AboutImages/Home.svg';
import { ReactComponent as Check } from '../../images/DecibelImages/BgBtn/Check.svg';
import { ReactComponent as SwapArrow } from '../../images/DecibelImages/SavePage/SwapArrow.svg';
import QrTest from '../../images/DecibelImages/SavePage/QrTest.png';

const captureRectMap = {
    1: { width: 588, height: 837, y: 1208, widthPer: '81.5%', heightPer: '65.5%', top: '5.7%' },
    2: { width: 600, height: 386, y: 1053, widthPer: '83%', heightPer: '32.2%', top: '17.6%' },
    3: { width: 372, height: 873, y: 1207, widthPer: '51.5%', heightPer: '68.2%', top: '5.7%' },
    4: { width: 600, height: 222, y: 879, widthPer: '83.1%', heightPer: '17.4%', top: '31.2%' }
}
const buttons = [
    Bg.BgBtn1,
    Bg.BgBtn2,
    Bg.BgBtn3,
    Bg.BgBtn4,
    Bg.BgBtn5,
];

const Save = () => {
    const location = useLocation();
    const { activeButton, capturedImage } = location.state;
    const localImgsRef = useRef(null);

    const [saveImgs, setSaveImgs] = useState([]);
    const [imgSrc, setImgSrc] = useState(capturedImage);
    const [rectNum, setRectNum] = useState(activeButton);
    const [activeBgImage, setActiveBgImage] = useState(0);
    const [localImgNum, setLocalImgNum] = useState(0);
    const [qrVisible,setQrVisible] = useState(false);

    const Base64ImageSend = async (image) => {
        try {
            const res = await axios.post('http://localhost:8080/save/image', {
                image: image
            });
            console.log(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const savedImages = JSON.parse(localStorage.getItem('capturedImages')) || [];
        setSaveImgs(savedImages);
    }, []);

    const imgClick = (imgSrc, rect) => {
        setImgSrc(imgSrc);
        setRectNum(rect);
    }

    useEffect(() => {
        const localImgs = localImgsRef.current;

        const handleWheel = (event) => {
            event.preventDefault();
            localImgs.scrollLeft += event.deltaY;
        };

        localImgs.addEventListener('wheel', handleWheel);

        return () => localImgs.removeEventListener('wheel', handleWheel);
    }, []);

    const HandleSwap = (direction) => {
        const newIndex = direction === 'left' ? localImgNum - 1 : localImgNum + 1;
        if (newIndex >= 0 && newIndex < saveImgs.length) {
            const { image, rect } = saveImgs.slice().reverse()[newIndex];
            setLocalImgNum(newIndex);
            imgClick(image, rect);

            const localImgs = localImgsRef.current;
            const imgElement = document.getElementById(`localImg-${newIndex}`);
            if (imgElement) {
                localImgs.scrollTo({
                    left: imgElement.offsetLeft - localImgs.clientWidth / 2 + imgElement.clientWidth / 2,
                    behavior: 'smooth',
                });
            }
        }
    };

    const ClickQrPrint = () => {
        // api받아서 이미지 넣기
        setQrVisible(!qrVisible);
    }

    const ClickCapture = () => {
        const imgData = imgSrc;

        const backgroundImage = new Image();
        backgroundImage.src = Bg[`BgCapture${activeBgImage + 1}`];

        backgroundImage.onload = () => {
            const finalCanvas = document.createElement('canvas');
            // 배경 이미지의 크기
            finalCanvas.width = backgroundImage.width;
            finalCanvas.height = backgroundImage.height;

            const ctx = finalCanvas.getContext('2d');
            ctx.drawImage(backgroundImage, 0, 0);

            const capturedImage = new Image();
            capturedImage.src = imgData;

            capturedImage.onload = () => {
                const x = (finalCanvas.width - captureRectMap[rectNum + 1].width) / 2;
                const y = (finalCanvas.height - captureRectMap[rectNum + 1].y);
                // 그려질 이미지, x좌표, y좌표, 이미지의 너비, 높이
                ctx.drawImage(capturedImage, x, y, captureRectMap[rectNum + 1].width, captureRectMap[rectNum + 1].height);

                const pngDataUrl = finalCanvas.toDataURL('image/png');
                const base64Image = pngDataUrl.split(',')[1]

                const link = document.createElement('a');
                link.href = pngDataUrl;
                link.download = 'final-image.png';
                link.click();

                // Base64ImageSend(base64Image);
            };
        };
    };

    return (
        <div className='save-page'>
            <Link className='home-btn decibel-save-btn' to="/">
                <Home />
            </Link>
            <div className='flex justify-between' style={{ height: '78.9%' }}>
                <div className='flex items-center'>
                    <button className='swap-btn -scale-x-100 ' onClick={() => HandleSwap('left')}>
                        <SwapArrow />
                    </button>
                </div>
                <div className='flex gap-x-16 justify-center'>
                    <div style={{ width: '5.5%' }}>
                        {buttons.map((bgBtn, idx) => (
                            <button
                                className='bg-btn'
                                key={idx} onClick={() => {
                                    setActiveBgImage(idx);
                                }}>
                                <img src={bgBtn} alt="" />
                                {(activeBgImage === idx) &&
                                    <div className='overlay'>
                                        <Check />
                                    </div>
                                }
                            </button>
                        ))}
                    </div>
                    <div className='relative'>
                        <img src={Bg[`BgCapture${activeBgImage + 1}`]} alt="" style={{ height: '100%' }} />
                        <img className='capture-content' src={imgSrc} style={{ top: captureRectMap[rectNum + 1].top, width: captureRectMap[rectNum + 1].widthPer, height: captureRectMap[rectNum + 1].heightPer }} alt="" />
                    </div>
                </div>
                <div>
                    {/*<button className='swap-btn' onClick={() => HandleSwap('right')}>*/}
                    {/*    <SwapArrow />*/}
                    {/*</button>*/}
                    <button className='print-btn' onClick={ClickCapture}>
                        PRINT
                    </button>
                    <button className='qr-btn' onClick={ClickQrPrint}>
                        SAVE IMAGE
                    </button>
                    {qrVisible &&
                        <div className='qr-box'>
                            <p>큐알을 찍으면 <br/>모바일에서 이미지를<br/>저장할 수 있어요</p>
                            <img src={QrTest} alt=""/>
                        </div>
                    }
                </div>
            </div>

            <div className='local-imgs' ref={localImgsRef}>
                {saveImgs.slice().reverse().map((data, idx) => {
                    const { image, rect } = data;
                    return <img key={idx} id={`localImg-${idx}`} src={image}
                        onClick={() => {
                            imgClick(image, rect);
                            setLocalImgNum(idx);
                        }} alt=""
                        tabIndex={0}
                        style={{
                            cursor: 'pointer',
                            border: idx === localImgNum ? '2px solid #0800EE' : '2px solid white',
                            height: idx === localImgNum ? '100%' : '64%'
                        }}
                    />
                }
                )}
            </div>

        </div >
    );
};

export default Save;