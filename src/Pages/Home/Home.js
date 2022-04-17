import React from 'react';
import Banner from '../Banner/Banner';
import Featured from './Featured/Featured';
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
            <Featured></Featured>
        </div>
    );
};

export default Home;