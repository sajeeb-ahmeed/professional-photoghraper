import React from 'react';
import { VscTwitter } from 'react-icons/vsc';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { TiSocialVimeo } from 'react-icons/ti';
import { Nav } from 'react-bootstrap';
const Fotter = () => {
    return (
        <div className='container-fluid bg-dark text-light text-center'>
            <div className='container'>
                <div className="row py-5 text-center">
                    <div className="col-md-4 col-12">
                        <p>© 2019 Missio. All rights reserved.</p>
                    </div>
                    <div className="col-md-4 col-12">

                    </div>
                    <div className="col-md-4 col-12 nav_socials">
                        <Nav className='links'>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fotter;