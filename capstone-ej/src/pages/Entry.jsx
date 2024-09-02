import { Link } from 'react-router-dom';
import "../styles/Entry.scss";
import React, { useEffect, useState } from 'react';
import HomeImage from '../images/AboutImages/HomeImage.svg'
import ImageListHover from '../images/EntryImages/ImageListHover.png'
import ContentListHover from '../images/EntryImages/ContentListHover.png'
import ImageContent from '../components/ImageContent.jsx';
import test2 from '../images/EntryImages/test2.png'

const backgroundColor = {
    "tobacco": "#E0FFBF",
    "trash": "#F7DCFF",
    "smoke": "#FCFFBF",
    "theft": "#D1F3FF",
    "noise": "#FFE2BF",
    "pee": "#BFFFCD",
    "park": "",
    "excrement": "",
    "noEntry": "",
    "": "",
}

const Entry = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [showBtn, setShowBtn] = useState("Image");
    const [sortContentBtn, setSortContentBtn] = useState("");
    const [imageList, setImageList] = useState([
        { "num": "001", "type": "tobacco", "imgSrc": test2 },
        { "num": "002", "type": "noise", "imgSrc": "img" },
        { "num": "003", "type": "noise", "imgSrc": "img" },
        { "num": "004", "type": "trash", "imgSrc": "img" },
        { "num": "005", "type": "trash", "imgSrc": "img" },
        { "num": "006", "type": "pee", "imgSrc": "img" },
        { "num": "007", "type": "park", "imgSrc": "img" },
        { "num": "008", "type": "smoke", "imgSrc": "img" },
        { "num": "009", "type": "excrement", "imgSrc": "img" },
        { "num": "010", "type": "tobacco", "imgSrc": "img" },
        { "num": "011", "type": "theft", "imgSrc": "img" },
        { "num": "012", "type": "theft", "imgSrc": "img" },
        { "num": "013", "type": "noEntry", "imgSrc": "img" },
        { "num": "014", "type": "theft", "imgSrc": "img" },
        { "num": "015", "type": "trash", "imgSrc": "img" },
        { "num": "016", "type": "smoke", "imgSrc": "img" },
        { "num": "017", "type": "noEntry", "imgSrc": "img" },
        { "num": "018", "type": "park", "imgSrc": "img" },
    ]);
    const [filterList, setFilterList] = useState([]);
    // 여기서 리스트 api

    // 타입별 정렬 기능 
    useEffect(() => {
        let filteredList = imageList.filter(content =>
            content.type.includes(sortContentBtn)
        );

        setFilterList(filteredList);
    }, [sortContentBtn, imageList]);

    const changeList = (e) => {
        setShowBtn(e)
    }
    // type을 변경, backgroundColor 변경
    const sortContent = (e) => {
        setSortContentBtn(e)
        document.body.style.backgroundColor = backgroundColor[e];
    }

    const openModal = (imgSrc) => {
        setIsOpen(true);
        setModalImage(imgSrc);
    }

    const closeModal = () => {
        setIsOpen(false);
        setModalImage(null);
    }

    const MoveTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
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
                    <button className='show-btn' style={{ backgroundImage: showBtn === "List" ? `url(${ContentListHover})` : `` }} onClick={() => { changeList("List") }} ></button>
                </div>
            </div>
            <div className='flex mt-4 flex-wrap justify-center'>
                {showBtn === "Image" ?
                    filterList.map((content, idx) => (
                        <ImageContent content={content} idx={idx} openModal={openModal} />
                    ))
                    :
                    filterList.map((content, idx) => {
                        return (
                            <>
                                <div className='list-content'>
                                    <div>{content.num}</div>
                                    <div>어쩌구저쩌구 내용</div>
                                </div>
                            </>
                        );
                    })
                }

            </div>
            <div className='top-btn' onClick={MoveTop}></div>

            {isOpen && (
                <div className='modal' onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>X</span>
                        <img src={modalImage} alt="" />
                    </div>
                </div>
            )}

        </div>
    );
};

export default Entry;