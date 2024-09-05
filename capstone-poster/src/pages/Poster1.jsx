import React from 'react';
import '../styles/Poster1.scss'
import Footer1 from '../images/poster1/Footer1.png';
import Footer2 from '../images/poster1/Footer2.png';
import Footer3 from '../images/poster1/Footer3.png';

const Poster1 = () => {
    return (
        <div className='poster1-page'>
            <header className='flex justify-between'>
                <div className='poster1-date'>7 In July</div>
                <div className='poster1-year'>2023</div>
            </header>
            <main className='flex-1 flex flex-col'>
                <div className='poster1-title'>
                    <p>Random texts in the gallery</p>
                    <p>2023년 7월 사진첩 속 무작위 텍스트</p>
                </div>
                <div className='poster1-content'>
                    <p>{`2023년 7월 27일 인스타그램에서\n고개가 끄덕여질 때 시를 썼다. 외따로 떨어진 무수한 불유쾌한 말들의 조합-시라는 것-이 내게는 면벽이나 환희에 가까웠다.”그는 20년 후 개정판 자서에서 다시 이렇게 고백한다. “패배한 공화국이었지만 묻어 버리고 싶지는 않았다.” 고통뿐인 세계일지라도, 패배한 공화국일지라도, 피하거나 묻어 버리지 않고, 그 먼지 같은 폐허를 끌어안고 사는 일 ···`}</p><br />
                    <p>{`2023년 7월 26일 블로그에서\n전시는 유럽을 대표하는 디자이너와 신진 디자이너, 학생등이 참여하는데 학생들의 작품까지 전시하는게 좋았다. 작품 하단에 a,b,c 알파벳이 써있는데 a,b 디자이너/c-학생의 작품이었던 것 같다. 확실히 학생의 작품과 디자이너의 작품은 완성도에서 차이가 있었기 때문에 ···`}</p><br />
                    <p>{`2023년 7월 17일 인스타그램에서\nctrl > a > click the point > adjust > done`}</p><br />
                    <p>{`2023년 7월 16일 블로그에서\n(4) 다카야마 : 인류는 사랑때문에 멸망할 것이다. ‘사랑’이란 인류의 ‘버그’에 가깝다. 그런데 사회나 종교에서 패치(수정 프로그램해 이미지를 좋게 만들어 놓은 것이다. - 종교, 사랑, 정의 등의 이념 때문에 적당히 멈출 수가 없고, 결국 전쟁같은 역사적 에러가 발생한다. ···`}</p><br />
                    <p>{`2023년 7월 6일 인스타그램에서\n땡북에서 7년간 책을 고르고 소개해온 동료 정승님의 첫 단독저서 ! 1월부로 땡북에서는 ‘졸업’을 했지만, 코멘터리북은 계속 만나보실 수 있어요 ! -소정-`}</p>
                </div>
            </main>
            <footer className='flex justify-between m-6'>
                <img src={Footer1} alt="" />
                <img src={Footer2} alt="" />
                <img src={Footer3} alt="" />
            </footer>
        </div>
    );
};

export default Poster1;