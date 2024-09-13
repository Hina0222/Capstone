import { Link } from 'react-router-dom';
import "../styles/Entry.scss";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import ImageListHover from '../images/EntryImages/ImageListHover.png'
import ContentListHover from '../images/EntryImages/ContentListHover.png'
import ImageContent from '../components/ImageContent.jsx';
import Modal from '../components/Modal.jsx'

const backgroundColor = {
    "담배꽁초": "#E0FFBF",
    "쓰레기": "#F7DCFF",
    "흡연": "#FCFFBF",
    "도난": "#D1F3FF",
    "소음": "#FFE2BF",
    "노상방뇨": "#BFFFCD",
    "주차": "#FFE3F0",
    "배설물": "#E4FF41",
    "출입금지": "#ADFFEC",
    "": "",
}

const Entry = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [showBtn, setShowBtn] = useState("Image");
    const [sortContentBtn, setSortContentBtn] = useState("");
    const [imageList, setImageList] = useState([
        { 'id': '1', 'category': '담배꽁초' },
    { 'id': '2', 'category': '흡연' },
    { 'id': '3', 'category': '쓰레기' },
    { 'id': '4', 'category': '도난' },
    { 'id': '5', 'category': '노상방뇨' },
    { 'id': '6', 'category': '소음' },
    { 'id': '7', 'category': '흡연' },
    { 'id': '8', 'category': '담배꽁초' },
    { 'id': '9', 'category': '쓰레기' },
    { 'id': '10', 'category': '담배꽁초' },
    { 'id': '11', 'category': '노상방뇨' },
    { 'id': '12', 'category': '배설물' },
    { 'id': '13', 'category': '도난' },
    { 'id': '14', 'category': '소음' },
    { 'id': '15', 'category': '담배꽁초' },
    { 'id': '16', 'category': '흡연' },
    { 'id': '17', 'category': '쓰레기' },
    { 'id': '18', 'category': '도난' },
    { 'id': '19', 'category': '담배꽁초' },
    { 'id': '20', 'category': '도난' },
    { 'id': '21', 'category': '노상방뇨' },
    { 'id': '22', 'category': '소음' },
    { 'id': '23', 'category': '담배꽁초' },
    { 'id': '24', 'category': '도난' },
    { 'id': '25', 'category': '쓰레기' },
    { 'id': '26', 'category': '흡연' },
    { 'id': '27', 'category': '노상방뇨' },
    { 'id': '28', 'category': '도난' },
    { 'id': '29', 'category': '담배꽁초' },
    { 'id': '30', 'category': '소음' },
    { 'id': '31', 'category': '노상방뇨' },
    { 'id': '32', 'category': '쓰레기' },
    { 'id': '33', 'category': '담배꽁초' },
    { 'id': '34', 'category': '주차' },
    { 'id': '35', 'category': '소음' },
    { 'id': '36', 'category': '도난' },
    { 'id': '37', 'category': '담배꽁초' },
    { 'id': '38', 'category': '노상방뇨' },
    { 'id': '39', 'category': '주차' },
    { 'id': '40', 'category': '소음' },
    { 'id': '41', 'category': '도난' },
    { 'id': '42', 'category': '노상방뇨' },
    { 'id': '43', 'category': '담배꽁초' },
    { 'id': '44', 'category': '주차' },
    { 'id': '45', 'category': '소음' },
    { 'id': '46', 'category': '담배꽁초' },
    { 'id': '47', 'category': '쓰레기' },
    { 'id': '48', 'category': '노상방뇨' },
    { 'id': '49', 'category': '흡연' },
    { 'id': '50', 'category': '주차' }
    ]);
    const [filterList, setFilterList] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(null);

    // useEffect(() => {
    //     const getImageList = async () => {
    //         try {
    //             const res = await axios.get('http://52.79.32.80:8080/data');
    //             setImageList(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getImageList();
    // }, []);

    // 스크롤 위치 저장
    useEffect(() => {
        if (isOpen) {
            setScrollPosition(window.scrollY);
            document.body.style.overflow = 'hidden';  // 모달이 열리면 배경 스크롤 방지
        } else {
            document.body.style.overflow = 'auto';  // 모달이 닫히면 배경 스크롤 허용
        }

        return () => {
            document.body.style.overflow = 'auto';  // 컴포넌트 언마운트 시 배경 스크롤 원상복구
        };
    }, [isOpen]);

    // 타입별 정렬 기능 
    useEffect(() => {
        let filteredList = imageList.filter(content =>
            content.category.includes(sortContentBtn)
        );

        setFilterList(filteredList);
    }, [sortContentBtn, imageList]);

    const changeList = (e) => {
        setShowBtn(e)
    }
    // type을 변경, backgroundColor 변경
    const sortContent = (e) => {
        setSortContentBtn(e)
        // document.body.style.backgroundColor = backgroundColor[e];
    }

    const openModal = (imgSrc, position) => {
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
                <div className='w-1/6'>
                    <Link className='home-btn' to="/" onClick={() => { sortContent("") }}></Link>
                </div>
                <div className='text-center flex w-1/2 justify-around'>
                    <div>
                        <button className={`content-btn ${sortContentBtn === "담배꽁초" ? "active" : ""}`} onClick={() => { sortContent("담배꽁초") }} >담배꽁초</button>
                        <button className={`content-btn ${sortContentBtn === "쓰레기" ? "active" : ""}`} onClick={() => { sortContent("쓰레기") }}>쓰레기</button>
                        <button className={`content-btn ${sortContentBtn === "흡연" ? "active" : ""}`} onClick={() => { sortContent("흡연") }}>흡연</button>
                        <button className={`content-btn ${sortContentBtn === "도난" ? "active" : ""}`} onClick={() => { sortContent("도난") }}>도난</button><br />
                        <button className={`content-btn ${sortContentBtn === "소음" ? "active" : ""}`} onClick={() => { sortContent("소음") }}>소음</button>
                        <button className={`content-btn ${sortContentBtn === "노상방뇨" ? "active" : ""}`} onClick={() => { sortContent("노상방뇨") }}>노상방뇨</button>
                        <button className={`content-btn ${sortContentBtn === "주차" ? "active" : ""}`} onClick={() => { sortContent("주차") }}>주차</button>
                        <button className={`content-btn ${sortContentBtn === "배설물" ? "active" : ""}`} onClick={() => { sortContent("배설물") }}>배설물</button>
                        <button className={`content-btn ${sortContentBtn === "출입금지" ? "active" : ""}`} onClick={() => { sortContent("출입금지") }}>출입금지</button>
                    </div>
                    <button className={`content-btn ${sortContentBtn === "" ? "invisible" : ""}`} onClick={() => { sortContent("") }}>X</button>
                </div>
                <div className='flex flex-col'>
                    <button className='show-btn' style={{ backgroundImage: showBtn === "Image" ? `url(${ImageListHover})` : `` }} onClick={() => { changeList("Image") }} ></button>
                    <button className='show-btn' style={{ backgroundImage: showBtn === "List" ? `url(${ContentListHover})` : `` }} onClick={() => { changeList("List") }} ></button>
                </div>
            </div>
            <div className='flex mt-4 flex-wrap'>
                {showBtn === "Image" ?
                    filterList?.map((content, idx) => (
                        <ImageContent key={content.id} content={content} idx={idx} openModal={openModal} />
                    ))
                    :
                    filterList?.map((content, idx) => {
                        return (
                            <>
                                <div className='list-content'>
                                    <div>{String(content.id).padStart(3, '0')}</div>
                                    <div>어쩌구저쩌구 내용</div>
                                </div>
                            </>
                        );
                    })
                }

            </div>
            <div className='top-btn' onClick={MoveTop}></div>
            {isOpen && <Modal closeModal={closeModal} modalImage={modalImage} scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} />}

        </div>
    );
};

export default Entry;