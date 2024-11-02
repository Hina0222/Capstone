import { useCallback, useMemo, useState, memo } from 'react';
import { throttle } from 'lodash';
import Back1 from '../images/EntryImages/Back1.svg';
import Back2 from '../images/EntryImages/Back2.svg';

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
        if (random < 0.1) {
            return {
                backgroundImage: `url(${Back1})`,
                backgroundSize: '50px',
                backgroundPosition: 'left bottom calc(-1px)',
                backgroundRepeat: 'no-repeat',
            };
        } else if (random < 0.2) {
            return {
                backgroundImage: `url(${Back2})`,
                backgroundSize: '140px',
                backgroundPosition: 'right calc(28px) top calc(-1px)',
                backgroundRepeat: 'no-repeat',
            };
        }
        return {};
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
                            zIndex: '2',
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