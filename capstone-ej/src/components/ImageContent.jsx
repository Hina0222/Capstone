import { useCallback, useMemo, useState, memo } from 'react';
import { throttle } from 'lodash';
import ContentBox1 from '../images/EntryImages/ContentBoxs/ContentBox1.png';
import ContentBox2 from '../images/EntryImages/ContentBoxs/ContentBox2.png';
import ContentBox3 from '../images/EntryImages/ContentBoxs/ContentBox3.png';
import ContentBoxHover1 from '../images/EntryImages/ContentBoxs/ContentBoxHover1.png';
import ContentBoxHover2 from '../images/EntryImages/ContentBoxs/ContentBoxHover2.png';
import ContentBoxHover3 from '../images/EntryImages/ContentBoxs/ContentBoxHover3.png';

const ContentBox = [ContentBox1, ContentBox2, ContentBox3];
const ContentBoxHover = [ContentBoxHover1, ContentBoxHover2, ContentBoxHover3];

const ImageContent = memo(({ content, idx, openModal }) => {
    console.log(`컴포넌트 렌더링`);
    const adjustedIndex = idx % 9;
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseOver, setIsMouseOver] = useState(false);

    const MouseMove = useCallback(
        throttle((e) => {
            const element = e.currentTarget;
            if (!element) return;

            const rect = element.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }, 5), []);

    const MouseEnter = () => {
        setIsMouseOver(true);
    };

    const MouseLeave = () => {
        setIsMouseOver(false);
    };

    const handleClick = () => {
        openModal(`https://bucket-geeks.s3.ap-northeast-2.amazonaws.com/original/${content.category}/${content.id}.png`);
    };


    const randomImg = useMemo(() => {
        const randomValue = Math.random();
        if (randomValue < 0.2) return 1;
        else if (randomValue < 0.4) return 2;
        else if (randomValue < 0.6) return 3;
        return 4; // 기본값 설정
    }, []);

    // 좀 더 알아보고 지우기
    const moveImage = useMemo(() => {
        return `https://bucket-geeks.s3.ap-northeast-2.amazonaws.com/hover/${content.category}/${content.id}.png`;
    }, [content.category, content.id]);

    return (
        <>
            <div
                className="image-content flex justify-center items-center relative"
                style={{
                    backgroundImage: isMouseOver ? `url(${ContentBoxHover[randomImg - 1]})` : `url(${ContentBox[randomImg - 1]})`,
                    border: randomImg === 4 ? '1.5px solid #0800EE' : 'none',
                    backgroundColor: randomImg === 4 ? isMouseOver ? '#0800EE' : 'white' : 'none',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
                onClick={handleClick}
                onMouseMove={MouseMove}
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
            >
                {!isMouseOver ? <img src={`https://bucket-geeks.s3.ap-northeast-2.amazonaws.com/symbol/deactive/${content.category}/${content.id}.svg`} alt="" /> :
                    <img src={`https://bucket-geeks.s3.ap-northeast-2.amazonaws.com/symbol/active/${content.category}/${content.id}.svg`} alt="" />}
                {isMouseOver && (
                    <img
                        src={moveImage}
                        alt=""
                        style={{
                            position: 'absolute',
                            left: `${mousePosition.x}px`,
                            top: `${mousePosition.y}px`,
                            pointerEvents: 'none',
                            zIndex: '1',
                            width: 'auto',
                            height: 'auto',
                        }}
                    />
                )}
            </div>
            {((adjustedIndex + 1) % 5 === 0 || (adjustedIndex + 1) % 9 === 0) && (
                <div className="empty-box"></div>
            )}
        </>
    );
}, (prev, next) => {
    // 컴포넌트 재랜더링 되는지 확인
    console.log('비교 함수 실행');
    return prev.content === next.content;
});
export default ImageContent;