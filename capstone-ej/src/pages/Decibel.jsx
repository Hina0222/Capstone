import { Link } from 'react-router-dom';
import Capture from '../components/decibel/Capture';

const Decibel = () => {
    return (
        <div className='decibel-page m-16'>
            {/* <Link className='home-btn' to="/"></Link> */}
            <Capture />
        </div>
    );
};

export default Decibel;