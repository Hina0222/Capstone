import React from 'react';
import '../styles/Poster2.scss'

const Poster2 = () => {

    return (
        <div className='poster2-page'>
            <section class="desktop-grid">
                <div class="grid-container">
                    <div class="section-1">
                        <p class="num font-Poiret">9</p>
                        <div class="image-1"></div>
                        <div class="image-2"></div>
                    </div>
                    <p class="title font-Poiret">10 SKIES IN SEPTEMBER</p>
                    <div class="section-2">
                        <div class="image-3"></div>
                        <div class="image-4"></div>
                        <div class="image-5"></div>
                        <div class="image-6"></div>
                        <div class="image-7"></div>
                    </div>
                    <div class="section-3">
                        <div class="image-8"></div>
                        <div class="image-9"></div>
                        <div class="image-10"></div>
                    </div>
                </div>
            </section>

            <section class="mobile-flex">
                <div class="grid-container">
                    <div class="flexbox-619">
                        <p class="num font-Poiret">9</p>
                        <div class="image-2"></div>
                    </div>
                    <p class="title font-Poiret">10 SKIES</p>
                    <div class="flexbox-619">
                        <div class="image-3"></div>
                        <div class="image-6"></div>
                    </div>
                    <p class="title font-Poiret">IN SEPTE<br />MBER</p>
                    <div class="flexbox-619">
                        <div class="image-8"></div>
                        <div class="image-9"></div>
                        <div class="image-10"></div>
                    </div>
                    <div class="flexbox-619">
                        <div class="image-1"></div>
                        <div class="image-7"></div>
                    </div>
                    <div class="flexbox-619">
                        <div class="image-4"></div>
                        <div class="image-5"></div>
                    </div>
                </div>
            </section>

            <footer class="poster2-footer">
                <p class="width-33">EVERY MONTH POSTER <br /> GRADUATION EXHIBITION PROJECT USE</p>
                <span class="width-33 text-center">
                    <p>9 MONTH AND 10 SKY</p>
                    <p class="font-Cooper">9 MONTH AND 10 SKY</p>
                </span>
                <p class="width-33 text-end">MY GALLERY <br /> DATE 2023</p>
            </footer>
        </div>

    );
};

export default Poster2;