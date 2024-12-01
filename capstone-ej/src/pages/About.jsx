import Block3 from '../images/AboutImages/Block3.png';
import AboutTitle from '../images/AboutImages/AboutTitle.svg';
import Menu from '../components/Menu'

const About = () => {
    return (
        <div className='about-page min-h-screen flex flex-col'>
            <Menu/>
            <img className='mx-auto' src={AboutTitle} alt=""/>
            <div className='relative -mt-3'>
                <img src={Block3} alt=""/>
            </div>
            <p className='main-text'>
                이 프로젝트는 주민 생활이 공존하는 골목을 재인식할 필요성을 시사하며,<br/>
                지역과 주민에 의한 공동체 관계에 중요한 역할을 담당하는 골목의 가치를 재해석하는 데 있다.
            </p>
        </div>
    );
};

export default About;