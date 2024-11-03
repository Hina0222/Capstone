import { useCallback, useMemo, useState, memo } from 'react';
import { throttle } from 'lodash';
import ContentBox1 from '../images/EntryImages/ContentBox1.png';
import ContentBox2 from '../images/EntryImages/ContentBox2.png';
import ContentBox3 from '../images/EntryImages/ContentBox3.png';

const ImageContent = memo(({ content, idx, openModal }) => {
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

    console.log(`컴포넌트 렌더링`);
    const MouseEnter = () => {
        setIsMouseOver(true);
    };

    const MouseLeave = () => {
        setIsMouseOver(false);
    };

    const handleClick = () => {
        openModal(`https://bucket-geeks.s3.ap-northeast-2.amazonaws.com/original/${content.category}/${content.id}.png`);
    };

    const backgroundStyle = useMemo(() => {
        const random = Math.random();
        if (random < 0.2) {
            return {
                backgroundImage: `url(${ContentBox1})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            };
        } else if (random < 0.4) {
            return {
                backgroundImage: `url(${ContentBox2})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            };
        } else if (random < 0.6) {
            return {
                backgroundImage: `url(${ContentBox3})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',

            };
        }
        return { border: '1.5px solid #0800EE' };
    }, [idx]);

    // 좀 더 알아보고 지우기
    const moveImage = useMemo(() => {
        return `https://bucket-geeks.s3.ap-northeast-2.amazonaws.com/hover/${content.category}/${content.id}.png`;
    }, [content.category, content.id]);

    return (
        <>
            <div
                className="image-content flex justify-center items-center relative"
                style={backgroundStyle}
                onClick={handleClick}
                onMouseMove={MouseMove}
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
            >
                <img src={`https://bucket-geeks.s3.ap-northeast-2.amazonaws.com/symbol/deactive/${content.category}/${content.id}.svg`} alt="" />
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