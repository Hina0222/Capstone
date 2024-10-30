export default function registMouseDownDrag(onDragChange, e) {
    return {
        onMouseDown: (clickEvent) => {
            e.stopPropagation()
            const mouseMoveHandler = (moveEvent) => {
                const deltaX = moveEvent.screenX - clickEvent.screenX;
                const deltaY = moveEvent.screenY - clickEvent.screenY;
                onDragChange(deltaX, deltaY);
            };

            const mouseUpHandler = () => {
                document.removeEventListener('mousemove', mouseMoveHandler);
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler, { once: true });
        },
    };
}