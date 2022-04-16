import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo-main.png';
import './Header.css'
import { VscTwitter } from 'react-icons/vsc';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { TiSocialVimeo } from 'react-icons/ti';
const Header = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="ligth" variant="light">
                <Container >
                    <Navbar.Brand className='mx-auto' href="#home"><img className='w-75' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='navlinks'>
                            <Nav.Link href="#deets">Services</Nav.Link>
                            <Nav.Link href="#memes">
                                Blogs
                            </Nav.Link>
                            <Nav.Link href="#memes">
                                About me
                            </Nav.Link>
                            <Nav.Link href="#memes">
                                Login
                            </Nav.Link>
                        </Nav>

                        <Nav className=' mx-auto nav_socials'>
                            <Nav.Link>
                                <VscTwitter></VscTwitter>
                            </Nav.Link>
                            <Nav.Link >
                                <FaFacebookF></FaFacebookF>
                            </Nav.Link>
                            <Nav.Link >
                                <TiSocialVimeo className='fosvimeoi'></TiSocialVimeo>
                            </Nav.Link>
                            <Nav.Link >
                                <FaInstagram></FaInstagram>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;