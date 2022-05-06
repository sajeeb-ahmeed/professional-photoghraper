import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/Banner/10.jpg'
import banner2 from '../../images/Banner/11.jpg'
import banner3 from '../../images/Banner/12.jpg'
import banner4 from '../../images/Banner/8.jpg'
import banner5 from '../../images/Banner/6.jpg'
import banner6 from '../../images/Banner/7.jpg'
const Banner = () => {
    return (
        <div id='banner'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block imgs d-sm-none d-md-none d-lg-none w-100 img-fluid"
                        src={banner4}
                        alt="First slide"
                    />
                    <img
                        className="d-none imgs d-sm-block d-md-block d-lg-block w-100 img-fluid"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='d-sm-block d-md-block d-lg-block d-none'> JOE</h3>
                        <p className='d-sm-block d-md-block d-lg-block d-none'>“I need you like a heart needs a beat.” – Unknown</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block imgs d-sm-none d-md-none d-lg-none w-100 img-fluid"
                        src={banner5}
                        alt="First slide"
                    />
                    <img
                        className="d-none imgs d-sm-block d-md-block d-lg-block w-100 img-fluid"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='d-sm-block d-md-block d-lg-block d-none'> KEVIN</h3>
                        <p className='d-sm-block d-md-block d-lg-block d-none'>“If I know what love is, it is because of you.” – Hermann Hesse</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imgs d-sm-none d-md-none d-lg-none w-100 img-fluid"
                        src={banner6}
                        alt="First slide"
                    />
                    <img
                        className="d-none imgs d-sm-block d-md-block d-lg-block w-100 img-fluid"
                        src={banner3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='d-sm-block d-md-block d-lg-block d-none'>FIDA</h3>
                        <p className='d-sm-block d-md-block d-lg-block d-none'>“You call it madness, but I call it love.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;