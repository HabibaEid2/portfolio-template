import { Container } from 'react-bootstrap' ; 
import html_img from './../../imgs/html-img.png'
import css_img from './../../imgs/css-img.png'
import js_img from './../../imgs/js-img.png'
import react_img from './../../imgs/react-img.png'
import bootstrap_img from './../../imgs/Bootstrap-img.png'
import gitHub_img from './../../imgs/github-img.webp'
import './skills.css'
export default function Skills() {
    return (
        <div className="skills" id="skills">
            <Container>
                <h1 className="heading">Skills</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolores alias illo ex odio temporibus earum, ducimus recusandae, voluptate harum culpa? Modi obcaecati tempore illo. Quae sint id dignissimos architecto.
                </p>
                <div className="skills-content row">
                <div className="skill col-xsm-12 col-sm-6 col-md-4 col-lg-3">
                    <img src={html_img} alt="html" />
                    <p>HTML</p>
                </div>

                <div className="skill col-xsm-12 col-sm-6 col-md-4 col-lg-3">
                    <img src={css_img} alt="css" />
                    <p>CSS</p>
                </div>

                <div className="skill col-sm-6 col-md-4 col-lg-3">
                    <img src={bootstrap_img} alt="bootstrap" />
                    <p>BOOSTRAP</p>
                </div>

                <div className="skill col-xsm-12 col-sm-6 col-md-4 col-lg-3">
                    <img src={js_img} alt="bootstrap" />
                    <p>JavaScript</p>
                </div>

                <div className="skill col-xsm-12 col-sm-6 col-md-4 col-lg-3">
                    <img src={react_img} alt="bootstrap" />
                    <p>React</p>
                </div>

                <div className="skill col-xsm-12 col-sm-6 col-md-4 col-lg-3">
                    <img src={gitHub_img} alt="bootstrap" />
                    <p>Git/GitHub</p>
                </div>
                </div>
            </Container>
        </div>
    )
}