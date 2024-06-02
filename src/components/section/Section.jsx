import { useEffect, useRef, useState } from 'react'
import moving_img from './../../imgs/header-img.svg'
import './section.css'
export default function Section() {
    let jop = useRef() ; 
    let headerSpan_content = "Front-End Developer." ; 
    let arrOfTxt = [...headerSpan_content] ; 
    let num = 0 ; 
    useEffect(() => {
        setInterval(() => {
            if (num < arrOfTxt.length) {
                jop.current.innerHTML += arrOfTxt[num]
                num++ ; 
            }
        } , 200)
    } ,[])
    
    return (
        <div className="section" id="home">
            <div className="container">
                <div className="section-content row" style={{padding: "70px 0"}}>
                    <div className="definition col-sm-12 col-lg-7">
                        <div className="welcome">Welcome to my Portfolio</div>
                        <h1>Hi! I'm Habiba <span id='jop' ref={jop}></span><span className='type'></span></h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="image col-sm-12 col-lg-5">
                        <img src={moving_img} alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}