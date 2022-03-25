import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>GET YOUR BEST FOODS</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>ORDER THE FOODS NOW..</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>THE BEST FOODS SERVICE EVER</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;