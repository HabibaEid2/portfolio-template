import { Alert, Container } from 'react-bootstrap'
import contact_img from './../../imgs/contact-img.svg'
import './contact.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import smile_img from './../../imgs/smile.png'
import heart_img from './../../imgs/heart.png'
export default function Contact() {
    let [err , setErr] = useState(false) ; 
    let [alertStyle , setAlertStyle] = useState({top : "-110px"}) ; 
    let [checkFields , setCheckFields] = useState(false) ; 
    let [submitted , setSubmitted] = useState(false) ; 
    let form = useRef() ; 
    function submit(e) {
        e.preventDefault() ; 
        emailjs.sendForm(
            'service_flrboo7' ,
            'template_68rscd8' , 
            form.current , 
            'sD742EjGcoDRBjSnU'
        ) .then(() => {
            setAlertStyle({top : "0"})
        }) .catch(err => {
            setAlertStyle({top : "0"})
            setErr(true)
            console.log("something is wrong")
        })
        setSubmitted(true) ; 
        if(form.current.querySelectorAll("div")[0].querySelector("input").value.length === 0 ||
        form.current.querySelectorAll("div")[1].querySelector("input").value.length === 0 || 
        form.current.querySelectorAll("div")[2].querySelector("textarea").value.length === 0) setCheckFields(false) ;
        else setCheckFields(true) ; 

        console.log("check fields : " , checkFields)
    }
    function remove() {
        setAlertStyle({top : "-110px"})
    }
    return(
        <div className="contact">
            {
            !checkFields && submitted ? 
            <Alert onClick={remove} style={alertStyle} key= "danger" variant="danger">
                first name , email and message are required !
            </Alert> : 
            checkFields && err ? 
            <Alert onClick={remove} style={alertStyle} key= "danger" variant="danger">
                check connection
            </Alert> :
            checkFields && <Alert onClick={remove} style={alertStyle} key= "success" variant="success">
                Thank you ! the message submitted <img src={smile_img} alt="smile" /> <img src={heart_img} alt="heart" />
            </Alert> 
            }
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