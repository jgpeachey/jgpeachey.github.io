import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logo-transparent-png.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo' />
        </Link>
        <nav>
            <NavLink 
                exact='true' 
                activeclassname='active' 
                to='/'
            >
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink 
                exact='true' 
                activeclassname='active' 
                className='about-link' 
                to='/about'
            >
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink 
                exact='true' 
                activeclassname='active' 
                className='contact-link' 
                to='/contact'
            >
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/john-peachey-05b136164/'
                >
                    <FontAwesomeIcon icon={faLinkedinIn} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/jgpeachey'
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar