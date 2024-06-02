import { Alert, Container } from 'react-bootstrap'
import contact_img from './../../imgs/contact-img.svg'
import './contact.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import smile_img from './../../imgs/smile.png'
import heart_img from './../../imgs/heart.png'
export default function Contact() {
    let [err , setErr] = useState(false) ; 
    let [alert , setAlert] = useState({top : "-90px"}) ; 
    let form = useRef() ; 
    function submit(e) {
        e.preventDefault() ; 
        emailjs.sendForm(
            'service_flrboo7' ,
            'template_68rscd8' , 
            form.current , 
            'sD742EjGcoDRBjSnU'
        ) .then(() => {
            setAlert({top : "0"})
        }) .catch(err => {
            setAlert({top : "0"})
            setErr(true)
            console.log("something is wrong")
        })
    }
    function remove() {
        setAlert({top : "-90px"})
    }
    return(
        <div className="contact">
            {err ? <Alert onClick={remove} style={alert} key= "danger" variant="danger">
            check connection
            </Alert> : 
            <Alert onClick={remove} style={alert} key= "success" variant="success">
            Thank you ! the message submitted <img src={smile_img} alt="smile" /> <img src={heart_img} alt="heart" />
            </Alert>}
            <Container>
                <div className="image">
                    <img src={contact_img} alt="contact image" />
                </div>
                <div className="content">
                    <h3>Get In Touch</h3>
                    <form ref={form}>
                        <div className='row-half'>
                            <input required name='FName' type="text" placeholder='First Name'/>
                            <input required name = 'LName' type="text" placeholder='Last Name'/>
                        </div>
                        <div className='row-half'>
                            <input required name = 'email' type="email" placeholder='Email Address'/>
                            <input name = 'phone' type="text" placeholder='Phone No.'/>
                        </div>
                        <div className='row-full'>
                            <textarea required name='message' placeholder='Message'/>
                        </div>
                        <input onClick={submit} type="submit" value="Send"/>
                    </form>
                </div>
            </Container>
        </div>
    )
}