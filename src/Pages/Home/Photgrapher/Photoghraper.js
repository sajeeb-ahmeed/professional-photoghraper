import React from 'react';
import newazPng from '../../../images/photoghraper/newaz.png';
import followPng from '../../../images/photoghraper/follow-save.png';
import info from '../../../images/photoghraper/intro.png';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiFlag } from 'react-icons/fi';
import { FaShare } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsAward, BsAwardFill, BsBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Photoghraper = () => {
    return (
        <div className="container-fluid bg-photghraper">
            <div className="container">
                <div className=' row'>
                    <div className="col-md-2 d-flex my-lg-4 text-center align-items-center justify-content-center  ">
                        <small className=' d-md-none d-sm-none d-lg-none d-block fw-bold'>896 <br /> Following</small>

                        <img src={newazPng} className='img-fluid imgs d-none d-sm-block d-md-block d-lg-block ' alt="" />
                        <img src={newazPng} className='img-fluid imgs w-50 d-md-none d-sm-none d-lg-none d-block' alt="" />
                        <small className='best d-md-none d-sm-none d-lg-none d-block'> <BsBookmark className=' mb-2 bookmark'></BsBookmark> <br />  Follow & Save</small>


                    </div>
                    <div className="row d-lg-none d-md-none d-sm-none d-block">
                        <div className='col-12 text-center d-md-none d-sm-none d-lg-none d-block'>
                            <p className='text-muted text-center ms-2'>@snnp</p>
                            <h4>Photographer Shahriar Nabi Newaz</h4>
                            <p className='text-muted text-center'>Dhaka, Bangladesh</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                {/* <Link to='/mail' className='btn btn-primary' >Message </Link> */}
                                <a className='texttel2 btn btn-primary text-light' target="_blank" href="http://m.me/sajeebahmed21">Message</a>
                                <small className='border px-3 py-2 texttel'><a className='texttel' href="tel:+8801748402018">Call</a></small>

                                <span className='border px-3 py-2'>
                                    <a href="mailto:sajeeb.web@gmail.com">
                                        <FaShare></FaShare>
                                    </a>
                                </span>
                            </div>
                            <p className='text-muted mt-2'>Bio</p>
                        </div>
                    </div>
                    <div className="col-md-10 ">
                        <div className="row mt-lg-5 mt-1 py-lg-2">
                            <div className="col-md-7 col-12">
                                <div>
                                    <div className='d-none d-md-block d-sm-block d-lg-block'>
                                        <h3>Photographer Shahriar Nabi Newaz
                                            <sup className='text-muted'>@snnp</sup> </h3>
                                        <h6 className='text-muted'>Dhaka, Bangladesh </h6>
                                    </div>
                                    <p>Shahriar Nabi Newaz
                                        is an wedding photography & Cinematography farm that covering events all over the globe.</p>
                                    <small>
                                        <span className='me-lg-3'> <AiOutlineClockCircle className='me-2'></AiOutlineClockCircle> 4 years on MyWed</span> <span> <FiFlag className='mx-2 '></FiFlag> I can speak english, bengali, hindi.</span>
                                    </small>
                                </div>
                                <div className='d-md-flex text-center mt-2'>

                                    <h6 className='py-2 awrad me-4'>
                                        <BsAward></BsAward>
                                        <BsAward></BsAward>
                                        <BsAwardFill className='text-warning'></BsAwardFill>
                                        <BsAwardFill className='text-danger'></BsAwardFill>
                                    </h6>
                                    <h6 className='best mt-1'>
                                        <small><AiFillStar className='me-1'></AiFillStar> Top 3 best wedding photographers in Bangladesh</small> <br />
                                        <small> <AiFillStar className='me-1'></AiFillStar>Top 3 best wedding photographers in Bangladesh</small>
                                    </h6>

                                    <div className='text-center d-md-none d-sm-none d-lg-none d-block mt-3'>
                                        <p ><RiShareForwardLine></RiShareForwardLine> <a className='texttel2' href="mailto:sajeeb.web@gmail.com">sajeeb.web@gmail.com</a></p>
                                        <p className='btn btn-dark'>Sepciality : Wedding</p>
                                    </div>


                                </div>

                            </div>

                            <div className="col-md-4 col-12 text-center mt-lg-0 mt-3 d-none d-sm-block d-md-block d-lg-block">

                                <div className='d-flex align-items-center justify-content-center '>
                                    <small >986 <br /> Following</small>
                                    <small className='mx-3'>59 <br /> Follower</small>
                                    <small className='best'> <BsBookmark className='me-2 bookmark'></BsBookmark>  Follow & Save</small>
                                </div>
                                <div className='mt-3 text-dark'>
                                    <a className='texttel2 btn btn-primary text-light mb-3' target="_blank" href="http://m.me/sajeebahmed21">Send Message</a> <br />
                                    <span  >
                                        <small >Show The Number   </small> <br />
                                        <small className='btn btn-outline-dark texttel mb-1'><a className='texttel' href="tel:+8801748402018">+8801748402018</a></small>
                                    </span>

                                    <p><RiShareForwardLine></RiShareForwardLine> <a className='texttel2' href="mailto:sajeeb.web@gmail.com">sajeeb.web@gmail.com</a></p>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div >

    );
};

export default Photoghraper;