import React from 'react';
import { useParams } from 'react-router-dom';
import pakege from '../../images/photoghraper/pakeges.png'

const Checkout = () => {
    const { name } = useParams();
    console.log(name);
    return (
        <div className='container mx-auto text-center '>

            <div className="my-5">
                <h1 className=''>Thanks For Check out : {name} </h1>
            </div>
            <div className="img-fluid">
                <img src={pakege} className='img-fluid imgs' alt="" />
            </div>
        </div>
    );
};

export default Checkout;