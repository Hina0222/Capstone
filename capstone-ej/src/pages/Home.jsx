import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import Title from '../images/HomeImages/Title.svg';
import AboutBtn from '../images/HomeImages/AboutBtn.svg';
import EntryBtn from '../images/HomeImages/EntryBtn.svg';
import DecibelBtn from '../images/HomeImages/DecibelBtn.svg';
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

            <p className='text-center font-bold absolute bottom-8 inset-x-0' style={{ fontSize: '28px' }}>
                도로변으로 개발이 옮겨가면서 골목이 외면받았을 당시,
                다시 골목길을 보존하고 골목 문화를 활성화하자는
                움직임이 나타나면서 골목 상권이 다시 각광받기 시작했다.<br />
                이 과정에서 주거민들끼리의 커뮤니티의 성격이 약해지면서
                실제 골목 거주민들의 생활공간으로서의 중요성, 주거지로서의 가치 향상까지는 미치지 못한 골목 상실의 시대가 도래했다.
            </p>
        </div>
    );
};

export default Three;