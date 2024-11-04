import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Bg from "../../images/DecibelImages/Background";
import axios from 'axios';
import { ReactComponent as Home } from '../../images/AboutImages/Home.svg';

const captureRectMap = {
    1: { width: 460, height: 655, y: 1160 },
    2: { width: 520, height: 335, y: 970 },
    3: { width: 320, height: 750, y: 1190 },
    4: { width: 540, height: 200, y: 880 }
}

const Save = () => {
    const location = useLocation();
    const { activeBgImage, activeButton, capturedImage } = location.state;
    const [saveImgs, setSaveImgs] = useState([]);
    const [imgSrc, setImgSrc] = useState(capturedImage);
    const [rectNum, setRectNum] = useState(activeButton);

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

                Base64ImageSend(base64Image);
            };
        };
    };

    return (
        <div className='save-page'>
            <Link className='home-btn decibel-save-btn' to="/">
                <Home />
            </Link>
            <div className='w-1/2 p-16 flex justify-between' style={{ backgroundColor: '#0800EE' }}>
                <div style={{ width: '31.5%', paddingTop: '104px' }} >
                    <div style={{ height: '42.5%', display: 'flex' }}>
                        <img src={imgSrc} alt="" className='max-h-full m-auto' />
                    </div>
                    <button className='print-btn' onClick={ClickCapture}>
                        PRINT
                    </button>
                </div>
                <div className='mr-2 flex items-center relative' style={{ width: '62.9%' }}>
                    <img src={Bg[`BgCapture${activeBgImage + 1}`]} alt="" />
                    <img className='capture-content' src={imgSrc} style={{ top: 1280 - captureRectMap[rectNum + 1].y }} width={captureRectMap[rectNum + 1].width} height={captureRectMap[rectNum + 1].height} alt="" />
                </div>
            </div>
            <div className='w-1/2 p-16 flex flex-wrap gap-4 overflow-y-scroll'>
                {saveImgs.map((data, idx) => {
                    const { image, rect } = data;
                    return <img key={idx} id={idx} className='h-1/3' src={image} onClick={() => { imgClick(image, rect) }} alt="" style={{ cursor: 'pointer' }} />
                }
                )}
            </div>
        </div >
    );
};

export default Save;