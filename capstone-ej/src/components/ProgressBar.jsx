import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        let throttleTimeout = null;

        const handleScroll = () => {
            if (!throttleTimeout) {
                throttleTimeout = setTimeout(() => {
                    const scrollTop = document.documentElement.scrollTop;
                    const scrollHeight = document.documentElement.scrollHeight;
                    const clientHeight = document.documentElement.clientHeight;
                    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
                    setPercent(scrolled);
                    throttleTimeout = null;
                }, 100);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (throttleTimeout) {
                clearTimeout(throttleTimeout);
            }
        };
    }, []);

    return (
        <div className='progress-bar-container'>
            <div className='progress-bar'
                style={{ width: `${percent}%` }}
            >
            </div>
        </div>
    );
};

export default ProgressBar;
