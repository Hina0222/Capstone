import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import ImageContent from '../components/ImageContent.jsx';
import Modal from '../components/Modal.jsx'
import ProgressBar from '../components/ProgressBar.jsx';
import { ReactComponent as Home } from '../images/AboutImages/Home.svg';
import Tape from '../images/EntryImages/Tape.js';

const Entry = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [sortContentBtn, setSortContentBtn] = useState("");
    const [imageList, setImageList] = useState([
        { 'id': '1', 'category': '쓰레기' },
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
    const [rangeValue, setRangeValue] = useState(1);
    const [tapeImg, setTapeImg] = useState(Tape.s1);
    useEffect(() => {
        const tapeKey = `s${Number(rangeValue)}`;
        setTapeImg(Tape[tapeKey]);

    }, [rangeValue]);

    useEffect(() => {
        const getImageList = async () => {
            try {
                const res = await axios.get('http://52.79.32.80:8080/data');
                setImageList(res.data);
                console.log("호출")
            } catch (err) {
                console.log(err);
            }
        }
        // getImageList();
    }, []);

    // 스크롤 위치 저장
    useEffect(() => {
        if (isOpen) {
            setScrollPosition(window.scrollY);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // 타입별 정렬 기능 
    useEffect(() => {
        let filteredList = imageList.filter(content =>
            content.category.includes(sortContentBtn)
        );

        setFilterList(filteredList);
    }, [sortContentBtn, imageList]);

    // type을 변경
    const sortContent = (e) => {
        setSortContentBtn(e)
    }

    const openModal = (imgSrc) => {
        setIsOpen(true);
        setModalImage(imgSrc);
    }

    const closeModal = () => {
        setIsOpen(false);
        setModalImage('');
    }

    const MoveTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className='entry-page'>
            <div className='home-top'>
                <Link className='home-btn' to="/" onClick={() => { sortContent("") }} style={{ position: 'static' }}>
                    <Home />
                </Link>
                <div className='home-top-center'>
                    어쩌구 저쩌구
                </div>
                <div className='home-top-right'>
                    <label>
                        어쩌구 저쩌구
                    </label>
                    <input type="range" min="0" max="6" step="1" value={rangeValue} onChange={(e) => { setRangeValue(e.target.value) }} />
                </div>
            </div>
            <div className='flex justify-center text-center relative mt-10'>
                <div className='relative w-1/2'>
                    <button className={`content-btn ${sortContentBtn === "담배꽁초" ? "active" : ""}`} onClick={() => { sortContent("담배꽁초") }} >담배꽁초</button>
                    <button className={`content-btn ${sortContentBtn === "쓰레기" ? "active" : ""}`} onClick={() => { sortContent("쓰레기") }}>쓰레기</button>
                    <button className={`content-btn ${sortContentBtn === "흡연" ? "active" : ""}`} onClick={() => { sortContent("흡연") }}>흡연</button>
                    <button className={`content-btn ${sortContentBtn === "도난" ? "active" : ""}`} onClick={() => { sortContent("도난") }}>도난</button><br />
                    <button className={`content-btn ${sortContentBtn === "소음" ? "active" : ""}`} onClick={() => { sortContent("소음") }}>소음</button>
                    <button className={`content-btn ${sortContentBtn === "노상방뇨" ? "active" : ""}`} onClick={() => { sortContent("노상방뇨") }}>노상방뇨</button>
                    <button className={`content-btn ${sortContentBtn === "주차" ? "active" : ""}`} onClick={() => { sortContent("주차") }}>주차</button>
                    <button className={`content-btn ${sortContentBtn === "배설물" ? "active" : ""}`} onClick={() => { sortContent("배설물") }}>배설물</button>
                    <button className={`content-btn ${sortContentBtn === "출입금지" ? "active" : ""}`} onClick={() => { sortContent("출입금지") }}>출입금지</button>
                    <button className={`content-btn ${sortContentBtn === "" ? "invisible" : ""} absolute top-0 right-0`} onClick={() => { sortContent("") }}>X</button>
                </div>
            </div>

            <div className='flex flex-wrap mt-11'>
                {filterList?.map((content, idx) => (
                    <ImageContent key={content.id} content={content} idx={idx} openModal={openModal} />
                ))}
            </div>
            <div className='top-btn' onClick={MoveTop}></div>
            <ProgressBar />

            {isOpen && <Modal closeModal={closeModal} modalImage={modalImage} scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} />}
            {Number(rangeValue) !== 0 && <img className='fixed top-0 left-0 h-screen w-full pointer-events-none z-10' src={tapeImg} alt="" />}
        </div>
    );
};

export default Entry;