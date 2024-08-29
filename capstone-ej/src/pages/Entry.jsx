import { Link } from 'react-router-dom';
import "./Entry.scss";
import React, { useState } from 'react';
import HomeImage from '../images/AboutImages/HomeImage.svg'
import ImageListHover from '../images/EntryImages/ImageListHover.png'
import ContentListHover from '../images/EntryImages/ContentListHover.png'

const Images = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [showBtn, setShowBtn] = useState("Image");
    const [sortContentBtn, setSortContentBtn] = useState("");

    const imageList = ["001", "002", "003", "004", "005", "6", "7", "8", "9", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const openModal = (imageSrc) => {
        setIsOpen(true);
        setModalImage(imageSrc);
    }

    const closeModal = () => {
        setIsOpen(false);
        setModalImage(null);
    }

    const changeList = (e) => {
        setShowBtn(e)
    }

    const sortContent = (e) => {
        setSortContentBtn(e)
    }

    return (
        <div className='entry-page'>
            <div className='flex justify-between'>
                <Link className='w-1/6' to="/"><img style={{ maxWidth: '72px' }} src={HomeImage} alt="" /></Link>
                <div className='text-center flex w-1/2 justify-around'>
                    <div>
                        <button className={`content-btn ${sortContentBtn === "tobacco" ? "active" : ""}`} onClick={() => { sortContent("tobacco") }}>담배꽁초</button>
                        <button className={`content-btn ${sortContentBtn === "trash" ? "active" : ""}`} onClick={() => { sortContent("trash") }}>쓰레기</button>
                        <button className={`content-btn ${sortContentBtn === "smoke" ? "active" : ""}`} onClick={() => { sortContent("smoke") }}>흡연</button>
                        <button className={`content-btn ${sortContentBtn === "theft" ? "active" : ""}`} onClick={() => { sortContent("theft") }}>도난</button><br />
                        <button className={`content-btn ${sortContentBtn === "noise" ? "active" : ""}`} onClick={() => { sortContent("noise") }}>소음</button>
                        <button className={`content-btn ${sortContentBtn === "pee" ? "active" : ""}`} onClick={() => { sortContent("pee") }}>노상방뇨</button>
                        <button className={`content-btn ${sortContentBtn === "park" ? "active" : ""}`} onClick={() => { sortContent("park") }}>주차</button>
                        <button className={`content-btn ${sortContentBtn === "excrement" ? "active" : ""}`} onClick={() => { sortContent("excrement") }}>배설물</button>
                        <button className={`content-btn ${sortContentBtn === "noEntry" ? "active" : ""}`} onClick={() => { sortContent("noEntry") }}>출입금지</button>
                    </div>
                    <button className={`content-btn ${sortContentBtn === "" ? "invisible" : ""}`} onClick={() => { sortContent("") }}>X</button>
                </div>
                <div className='flex flex-col'>
                    <button className='show-btn' style={{ backgroundImage: showBtn === "Image" ? `url(${ImageListHover})` : `` }} onClick={() => { changeList("Image") }} ></button>
                    <button className='show-btn' style={{ backgroundImage: showBtn === "Content" ? `url(${ContentListHover})` : `` }} onClick={() => { changeList("Content") }} ></button>
                </div>
            </div>
            <div className='flex mt-4 flex-wrap justify-center'>
                {imageList.map((image, index) => {
                    const adjustedIndex = index % 9;
                    return (
                        <>
                            <div className={`image-box`}>
                                <div className='image-num'>{image}</div>
                                <div>그림</div>
                            </div>
                            {((adjustedIndex + 1) % 5 === 0 || (adjustedIndex + 1) % 9 === 0) && <div className="empty-box"></div>}
                        </>
                    );
                })}
            </div>

            {/* {imageList.map((image) => (
                <img className='image' src={image} alt=""
                    onClick={(e) => { openModal(image) }} />
            ))} */}

            {/* {isOpen && (
                <div className='modal' onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>X</span>
                        <img src={modalImage} alt="" />
                    </div>
                </div>
            )} */}

        </div>
    );
};

export default Images;