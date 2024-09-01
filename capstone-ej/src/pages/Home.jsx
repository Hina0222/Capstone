import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import "./Home.scss";
import Title from '../images/HomeImages/Title.png'

// function Model(props) {
//     const { scene } = useGLTF('scene.gltf');
//     return <primitive object={scene} {...props} />;
// }

const Three = () => {
    return (
        <div className='main-page h-screen mt-8'>
            <div className='flex justify-around'>
                <Link className='btn-img' to="/about"></Link>
                <img className='title-img' src={Title} alt="title" />
                <Link className='btn-img' to="/entry"></Link>
            </div>
            <p className='text-center mt-12 font-bold text-lg'>
                도로변으로 개발이 옮겨가면서 골목이 외면받았을 당시,
                다시 골목길을 보존하고 골목 문화를 활성화하자는
                움직임이 나타나면서 골목 상권이 다시 각광받았고,<br />
                요즘엔 주거민들끼리의 커뮤니티의 성격보다는
                상권의 성격이 더 강해졌다. 하지만 이 과정에서
                실제 골목 거주민들의 생활공간으로서의 중요성,<br />
                주거지로서의 가치 향상까지는 미치지 못하여
                기존의 골목 성격을 잃은 골목 상실의 시대가 도래했다.
            </p>
            {/* <Canvas>
                <PerspectiveCamera
                    makeDefault
                    position={[0, 10, 0]}  // 카메라 위치 조정
                    fov={30}                // 시야각 조정 (기본값은 50 정도입니다)
                />

                <ambientLight intensity={3.0} />
                <pointLight position={[10, 10, 10]} intensity={2.0} />

                <Model position={[0, -1, 0]} scale={7.0} />

                <OrbitControls
                    enableZoom={false}
                    minPolarAngle={Math.PI / 2.2}
                    maxPolarAngle={Math.PI / 2.2}
                />
            </Canvas> */}
        </div>
    );
};

export default Three;