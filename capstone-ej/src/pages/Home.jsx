import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import Title from '../images/HomeImages/Title.svg';
import AboutBtn from '../images/AboutBtn.svg';
import EntryBtn from '../images/EntryBtn.svg';
import DecibelBtn from '../images/DecibelBtn.svg';
import { useState } from 'react';
import Popup from '../components/Popup';

function Model(props) {
    const { scene } = useGLTF('scene.gltf');
    return <primitive object={scene} {...props} />;
}

const Three = () => {
    const [popupOpen, setPopupOpen] = useState(true);

    return (
        <div className='main-page h-screen'>
            {popupOpen && <Popup setPopupOpen={setPopupOpen} />}
            <section className='relative flex justify-center mt-11'>
                <img src={Title} alt="title" />
                <div className='absolute right-12 flex flex-col items-end gap-y-4'>
                    <Link className='page-btn' to="/about" >
                        <img src={AboutBtn} alt="about" />
                    </Link>
                    <Link className='page-btn' to="/entry" >
                        <img src={EntryBtn} alt="Entry" />
                    </Link>
                    <Link className='page-btn' to="/decibel" >
                        <img src={DecibelBtn} alt="decibel" />
                    </Link>
                </div>
            </section>
            <section className="h-screen relative w-full" style={{ top: '-8%' }}>
                <Canvas>
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 13]}
                        fov={25}
                    />

                    <ambientLight intensity={2.4} />
                    <pointLight position={[10, 10, 10]} intensity={2.0} />

                    <Model position={[0, -1.7, 0]} scale={9.2} />

                    <OrbitControls
                        enableZoom={false}
                        minPolarAngle={Math.PI / 2.15}
                        maxPolarAngle={Math.PI / 2.15}
                        autoRotate={true}
                        autoRotateSpeed={0.5}
                    />
                </Canvas>
            </section>
        </div>
    );
};

export default Three;