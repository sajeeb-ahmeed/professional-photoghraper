import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ singleService }) => {
    const { id, name, img, description, price } = singleService;
    return (
        <div>
            <Card className='cards'>
                <Card.Img className='img-fluid imgs cards' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        ${price}
                    </Card.Text>

                    <button className="cta">
                        <span>Checkout</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;