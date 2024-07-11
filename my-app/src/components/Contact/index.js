import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'default_service',
            'template_ucbjeyu',
            refForm.current,
            {publicKey: 'ksD4AeWj1v5dRGix6'}
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            (error) => {
                alert('Failed to send the message, please try again')
                console.log('Failed...', error)
            }
        )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={"Contact me".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                    If you wish to contact me for any job opportunities or have any inquiries, 
                    please leave me a message in the form below. Thank you!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                        type='text' 
                                        name='user_name' 
                                        placeholder='Name' 
                                        required 
                                    />
                                </li>
                                <li className='half'>
                                    <input 
                                        type='email' 
                                        name='user_email' 
                                        placeholder='Email' 
                                        required 
                                    />
                                </li>
                                <li>
                                    <textarea
                                        name='message'
                                        placeholder='Message'
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input 
                                        type='submit' 
                                        className='flat-button' 
                                        value='SEND' 
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact