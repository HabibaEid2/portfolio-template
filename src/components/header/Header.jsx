import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import './header.css'

export default function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-item" href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <div className="nav-connact">
                            <Nav.Link className="icon" href="https://www.linkedin.com/in/habiba-eid-8161b12a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </Nav.Link>
                            <Nav.Link className="icon" href="https://www.facebook.com/profile.php?id=100025191672288&sfnsn=scwspwa&mibextid=RUbZ1f">
                                <i className="fa-brands fa-facebook-f"></i>
                            </Nav.Link>
                            <Nav.Link className="icon" href="https://www.instagram.com/habibaeid_x?igsh=OXJ1Nmw3b3V6YWZy">
                                <i className="fa-brands fa-instagram"></i>
                            </Nav.Link>
                            <Nav.Link className="button" href="https://github.com/HabibaEid2">
                                <button>
                                    <span>GitHub Page</span>
                                </button>
                            </Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}