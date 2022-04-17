import React from 'react';
import Banner from '../Banner/Banner';
import Photoghraper from './Photgrapher/Photoghraper';
import Massio from './Services/Massio/Massio';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Photoghraper></Photoghraper>
            <Massio></Massio>
            <Services></Services>
        </div>
    );
};

export default Home;