import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import './Blog.css'
const Blogs = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Authentication vs. Authorization</Accordion.Header>
                    <Accordion.Body>
                        <>
                            <div className="row">
                                <div className="col-md-6 col-12 p-3">
                                    <h3 className='fw-bold text-center mb-3'>Authentication</h3>
                                    <div>
                                        <li>Authentication verifies who the user is.</li>
                                        <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user</li>
                                        <li>Authentication is the first step of a good identity and access management process.</li>
                                        <li>Authentication is visible to and partially changeable by the user.</li>
                                        <li>Authentication verifies who the user is.</li>
                                    </div>

                                </div>
                                <div className="col-md-6 col-12 p-3">
                                    <h3 className='fw-bold text-center mb-3'>Authorization</h3>
                                    <div>
                                        <li>Authorization determines what resources a user can access.</li>
                                        <li>Authorization works through settings that are implemented and maintained by the organization..</li>
                                        <li>Authorization always takes place after authentication.</li>
                                        <li>Authorization isn’t visible to or changeable by the user.</li>
                                        <li>Authorization determines what resources a user can access.</li>
                                    </div>
                                </div>
                            </div>
                        </>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;