import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { Loader } from 'react-loaders'

const About = () => {
    const {letterClass} = useState('text-animate')

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"About me".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a highly motivated recent University of 
                        Central Florida Computer Science graduate with a 
                        passion for solving complex problems through 
                        innovative software solutions. During my academic 
                        journey, I developed a solid foundation in computer 
                        science principles, including algorithms, data 
                        structures, software engineering methodologies, 
                        and programming languages such as Java, Python, 
                        and C++. These skills were put to the test as my 
                        journey allowed me to work with the United States 
                        Air Force to help create a maintenance scheduler.
                    </p>
                    <p>
                        I have also demonstrated my abilities in various 
                        competitions and events, such as the Technology 
                        Student Association (TSA), where I have received 
                        multiple awards at the state and national level. 
                        Additionally, I have gained valuable experience in 
                        teamwork, leadership, and customer service through 
                        my role at Publix, where I have learned to handle 
                        challenging situations, communicate effectively, 
                        and exceed customer expectations.
                    </p>
                    <p>
                        I am open to networking opportunities, mentorship, 
                        job opportunities and discussions related to software 
                        engineering and technology. Feel free to reach out to 
                        me via my socials or email!
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color='#EFD81D' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGithub} color='#c0c0c0' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About