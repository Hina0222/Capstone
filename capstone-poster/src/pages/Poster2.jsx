import React from 'react';
import '../styles/Poster2.scss'

const Poster2 = () => {

    return (
        <div className='poster2-page'>
            <div className='grid-container'>
                <div className='section-1'>
                    <p className='num font-Poiret'>9</p>
                    <div className='image-1'></div>
                    <div className='image-2'></div>
                </div>
                <p className='title font-Poiret'>10 SKIES IN SEPTEMBER</p>
                <div className='section-2'>
                    <div className="image-3"></div>
                    <div className="image-4"></div>
                    <div className="image-5"></div>
                    <div className="image-6"></div>
                    <div className="image-7"></div>
                </div>
                <div className='section-3'>
                    <div className="image-8"></div>
                    <div className="image-9"></div>
                    <div className="image-10"></div>
                </div>
            </div>

            <footer className='poster2-footer'>
                <p>EVERY MONTH POSTER <br /> GRADUATION EXHIBITION PROJECT USE</p>
                <span>
                    <p>9 MONTH AND 10 SKY</p>
                    <p className=''>9 MONTH AND 10 SKY</p>
                </span>
                <p>MY GALLERY <br /> DATE 2023</p>
            </footer>
        </div>

    );
};

export default Poster2;