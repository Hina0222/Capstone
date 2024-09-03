import "../styles/Home.scss";
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import Title1 from '../images/HomeImages/Title1.svg';
import Title2 from '../images/HomeImages/Title2.svg';
import Block from '../images/HomeImages/Block.svg';
import Block2 from '../images/HomeImages/Block2.svg';

function Model(props) {
    const { scene } = useGLTF('scene.gltf');
    return <primitive object={scene} {...props} />;
}

const Three = () => {
    return (
        <div className='main-page h-screen'>
            <div className='flex justify-evenly mt-8'>
                <div className="w-1/4 flex flex-col">
                    <Link className='btn-img about-btn' to="/about"></Link>
                    <img className="btn-img ml-auto" src={Block} alt="" />
                    <img className="btn-img -translate-x-12" src={Block} alt="" />
                </div>
                <div className="flex flex-col items-center">
                    <img className='title-img mb-2' src={Title1} alt="title" />
                    <img className='title-img' src={Title2} alt="title" />
                </div>
                <div className="w-1/4 flex flex-col items-center">
                    <img className="btn-img ml-auto translate-x-40" src={Block} alt="" />
                    <Link className='btn-img entry-btn mt-4' to="/entry"></Link>
                    <img className="" src={Block2} alt="" />
                </div>
            </div>
            <Canvas>
                <PerspectiveCamera
                    makeDefault
                    position={[0, 0, 11]}  // 카메라 위치 조정
                    fov={25}                // 시야각 조정 (기본값은 50 정도입니다)
                />

                <ambientLight intensity={3.0} />
                <pointLight position={[10, 10, 10]} intensity={2.0} />

                <Model position={[0, -0.9, 0]} scale={7.0} />

                <OrbitControls
                    enableZoom={false}
                    minPolarAngle={Math.PI / 2.2}
                    maxPolarAngle={Math.PI / 2.2}
                />
            </Canvas>
            <p className='text-center font-bold text-xl absolute bottom-8 inset-x-0'>
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