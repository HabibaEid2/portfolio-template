import { Container } from 'react-bootstrap' ; 
import html_img from './../../imgs/html-img.png'
import css_img from './../../imgs/css-img.png'
import js_img from './../../imgs/js-img.png'
import react_img from './../../imgs/react-img.png'
import bootstrap_img from './../../imgs/Bootstrap-img.png'
import gitHub_img from './../../imgs/github-img.webp'
import typescript_img from './../../imgs/typescript_img.png'
import scss_img from './../../imgs/scss_img.png'
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

                <div className="skill col-xsm-12 col-sm-6 col-md-4 col-lg-3">
                    <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEWWc33///+ZQluUcHqRa3aOaHPb0NOVOFOzdoepjpXx7O62n6aNZnGXPliRLkySMU7LvMCefof18fKPKEjp4uSxmJ/6+PnQwsbl3d/m3uG8p62ihI3Esrfg1tmggYrp19yfTWXs3eHQrLanX3Pfxc3Xt8DLoa2vboChUWjy5urUs7y6g5LAjZvEl6PjzdPHtrvcwcipY3eIDDm1eoscSBdWAAAK00lEQVR4nO1dbUPiOhNtSUq2hba0QIu8KMIqoiJ69///tyeZvDQpVevdvdvUJ+eDC43s5jAnycxkkvU8BwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcNOPgycNd9/hLQefhlTHpFEa/9L2M27rrXXwHKvjtDD2++zHDdK5VymR4PP1qCMVyhrjv9JYBM8wFphYQxnPWLoJDpKR20QfLSP5FShkva65tpG4LxtqC/e903G6KMdrvYxi0YkidK8KpvBD0vaC3TfoqUGhFkmrQVadY/G4JM/RYy7atIhUzvP5dpctNPkUqZ1hnG5LuIVMr0oSbT7WttaJJnttz30YTNMk1P/pvJedpbkVIjji5lGkf+i+EG9FikFJcyTZkk9/oTcmIiDbru6r8EvpApOdInP/WROGXL/bKfIqUMmUxvNYYwqxhmjbf0fdFXkVIUpijTIzDUplMQ6VW/onsdeGjIVJhQN2LSa5EKmR5Tw4SFbsT4oeciNWUKJsznuhFTJtJFX2dSBkOmYMJyPKM/78SamN70W6Ri0RcyhRiiyDAzYsGNKETadS9/D0ym3E9Lb5kJAw8zIz4mSqSbPptQl6kwIeJ25fmN/otUlyk3IWODI/pqR40Y7xnXrrv42xAyVSb0KiN+B5EKme7SQaJMKI0onvVcpNRgc5ApmFAGSZBLLQakTyJFAcoyD+NL5wSBwfb/aCakD9mz+3/u6c/huA8ODULz4SwvosU6q0kO4bBkA/H46utpbTBivsvZz+EcWc8RhzO5Q1acje7ia32TrazogxElrlaWD0UwiMLCqyjisNCb5hWRsblHPLKaoiSYC7NUu2Qo5E+iY84NrHYIUcaf5MejIG+xUNEK7HS3j8n2+WiKETj/fCMkPrwAedmCr9jbl0NMyB5GaOHZSxFShsVhSp2wOCVARJgKn9mb5ylLAZMpmzdl0hCWfH8HLfH0qTZGLQNasf79EvFRnBy13jIl3svU4fSRGTHADBBAvaqWk9XLIuzXVxlQcmDjDlpgqY9UfB8PGOHhhoG5OdrWIsSN1o5EEOlTtRcB6UJwXYD7Y5VzSn4a06eWF06Zgs+2yhQEp2XTILMUAsMJfXUiJo8KuyrJSH7ZPBC/P8NPVHpXU+n9geFkqjSxWqWwJPw0Z5ocWmC9z2szzTZl9TODQmVq7J9p+GpxUKvFbSU48D13ak2489VGFOz6qq8Flkp7VwsvWLD+vSVsxSfpq77ig+95mpKYtvAV/5lUA4/Os7wFEuHWilQa0d89kHTwdNvgtb38GJDBL2a1qjID5iP/9mlLBge+iNjseyvP+8gDCc3z5i6rXxT8z1wNvXhwNFqoa2DrMGRAub4KzLL3oqfjvppy4+3RN2HtTFMvBy7NCNirKN4ZVRiEPKqmV+ay2pxyY6Pt7hXG3PDa7GcwAQXm0e1un9SKMpKH+xtoeZs+qCXGRvCUC5kOGgoOYIvCf5wOSJJe1kbFaULo+kKZQ7I4tFWmPG2WwlK/MDvJZ5oj+bTwK2GLjK15U56/jmPIhw6NTopUxb5eBHUJyH3bWlITMM+betGw+2l4zyiDofncov4SPmzpcQtwPlkwC26KbkN8DQR3LcovuQ0t9Wpw6fN8RPxmLts4BInetSqDTu7sHYeIzSUHNpXEkTYfIuHotCPItxHtnEvFtgvYgc2HC7G3lPFU92M7glDaZuleN4iUFyLAbqe/HtOHaM3dlVM7gjwCXlgq0kiKVBiRUkRLnvzOf7SZZAYyNrZ0GHqMidFRfyOS+y/bz9dBjumrvU4brBWqMo+8VW529Fx3Q98nCLGxpSaEoq4q2ZS+iTiq2A3aHQdiSX0geGUnQR44afWjZMti9/x+23IEUr97CyG+tZVtkBLV3bI4eXp9Ig1xRBM7kiZ7HiQWdq6FnlgsnowZhSSfTzAxoeTS7Y/dDRd1HlqqUcHwue2cycklCdn/Oj2+HNW0tLFVop5IB7c8Y8jopdPt0+NNbmx9R6OGAg5rAN5nq+hhwPT7cLoxyNEBuJkjaxXKAG5pm+NpbHv414tBr8ivylEWWGw/BjjsG30+c8bp4FRlD4toUy7nKy/A9hfSCL/0k6mGLno7lVJdnOcZ2+juATmACoA/5Kcyo4tl1h9uHLxiZv++TuPkQfLLy1VT3ZvtgIrmd09sx1PFL1p7PaTnidm02iQ0QJL9neA3G3lWLwofIRhyihdCJcnbqy/54d7yY+CbhFsjHiQpebqp+PVSngpik7DYbackZqBeNTncRd+Fn8coisrDn6fDw2C7/3H/qopHF/P+86NA3lC5K9WmLsUw7Pf4q4DwSC/5FcvD5Ppb2E8Ae8uZQa+kMcM34seAg9WyvIryaEbd6hDZHjP8KyDE72jrm+fp4ODg4ODg4PD/AATouhf/JTKOrrvxn0GeMLS5/PX3IBkO/xBDONlmVWD5pxlGUNs+sojin2fI4Bj+TTiGX4Vj+PfxPkOEPtrohdaG5t4wRDgIR8vler4aNxgXjb3VfE2bw+txtfbhMQVnOGcvLbn/q5nheFXKEj62MWp+BHvLhUz9F9E5E0zwJKfgj9mr3JILzJsYIlTq6e98ZFgDL41zYH4x4VrFxofY56xliFf1PYyhNt4uiLCDNqipwVqG8syhjsovh2LGi+ZeMZSXlvjF5nwupTVLIVRx3pR2n7aeF5IMqw/uDUP531pMIEwIQsFRzP+SxprHEJ54CwdRIJIWqwW2J6quM+SlGXS+F3tPiF/TIg/TYL4FV8rrSsdia1UdRJEM/zKND1BnKCgs1fSJxBFaXqiOI+2NV6lWnQizfsUXb/XLucXxIL66iS9gWF05G84Z1N1D1jMUU6V+soBfWy4vkhiqcSh1aWayrGcYcBtl/J4dXN22I1gjeWfWbJ01ZiusZyhObk90nMXsAkNTu8QsGp7nqM7SdoZNq73EMGj6jWhiVkF3z7A2bOoMw3cJSr8GXfh0+Vr7+zpniFYhoHrwVYb0O1rWOc6u7ZlpxsLRqm6Wa2QYXSIv1RKJ8Wq9MAKMPLNmtRhvPmZ4zUfZuAHGKW88xuGynFVnSiT9zhkGw3cYCguhwmz+AKz6xlOClZ/onKH0nNVBLOmHirP0AfdCzbOEGKv/vRFqirRqPiz/wqU1DCdmh9TdNGvDpzGO9KIZK1iEc8x4DS81p05GE/IsfucMpcmUYyltIC6XkaLVzqLBIUzhl/LrEn1fv/9zoX9DFjAUsYA8tIvk9TPyF4TbFikOyMsrCvLjZ+V5q4hQfEO12KMDiOCARniYjSrpSSvdSSPPVjDaUJDxD4iAXURPlAJ4aygQSSt5sSnS4seO7Kium12MPC9TNaXVly45+0P6C968FDaWMX7lea/o29FEMB7KLIdYb8/0dXj5r/8VoLpDAqLEn/yCWu7xoqHVL6RToydrusrTNDpm+iVWyJtdtFeXuiCv4Qso1MQkp6IuGYqLkQyYaRV0kTVbaylhrepd4kq7W0qzcXe5Nu1qa97Bi6uqcbipYqS8zGpfwHyhRVDFwjiPgTx1O3bR4ZKBR9KjLPJN04EKhDPqdVJ/e1HOvYuKbzS+HpUb5o4Py/l1rRnhcLLhn+wyDEbjLFxSzFfvVaxTr5P7243NzCeF7aWm7TfR1nVBBqqHwg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4O9uJ/baW4E/EHzhkAAAAASUVORK5CYII='} alt="bootstrap" />
                    <p>Jest</p>
                </div>

                <div className="skill col-xsm-12 col-sm-6 col-md-4 col-lg-3">
                    <img src={typescript_img} alt="typescript image" />
                    <p>Typescript</p>
                </div>

                <div className="skill col-xsm-12 col-sm-6 col-md-4 col-lg-3">
                    <img src={scss_img} alt="scss image" />
                    <p>SCSS</p>
                </div>
                </div>
            </Container>
        </div>
    )
}