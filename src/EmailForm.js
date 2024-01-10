import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

export const EmailForm = () => {
    const form = useRef();

    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_yyyqxhz', 'template_8x303xf', form.current, 'zu1MuL92hIlEVcMTo')
            .then((result) => {
                console.log(result.text);
                console.log("message sent!")
            }, (error) => {
                console.log(error.text);
                console.log("error sending message, try again!")
            });
            setUserEmail("");
            setUserName("");
            setUserMessage("");
        };

    return (
        <form className='mb-3' ref={form} onSubmit={sendEmail}>
            <h2 className='form-header'>Shoot me an email!</h2>
            <input 
                className='form-control form-contents' 
                id='email' 
                name='user_email' 
                type="email" 
                placeholder='Your email address' 
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required />
            <input 
                className='form-control form-contents' 
                id='name' 
                name='user_name' 
                type='text' 
                placeholder='Your name'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required />
            <textarea 
                className='form-control form-contents' 
                name='user_message' 
                placeholder='Write message...' 
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                required >
            </textarea>
            <button type="submit" className="btn btn-outline-danger">Send</button>
        </form>
    
    )}