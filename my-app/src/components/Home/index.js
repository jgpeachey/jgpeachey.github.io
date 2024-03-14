import { Link } from 'react-router-dom';
import Profile from '../../assets/images/Profile Pic.jpg';
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br /> I'm
                    John Peachey <br />
                    Software Engineer
                </h1>
                <h2>
                    Welcome to my Website! <br />
                    Please be patient as it is currently being created. <br />
                    Feel free to watch my progress!
                </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home

// Welcome to my Website! <br />
//                     Please be patient as it is currently being created. <br />
//                     Feel free to watch my progress!