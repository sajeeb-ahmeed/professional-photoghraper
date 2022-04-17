import React from 'react';
import Banner from '../Banner/Banner';
import Massio from './Services/Massio/Massio';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Massio></Massio>
            <Services></Services>
        </div>
    );
};

export default Home;