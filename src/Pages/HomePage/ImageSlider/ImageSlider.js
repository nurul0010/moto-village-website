import React from 'react';
import { Carousel } from 'react-bootstrap';



const ImageSlider = () => {
    return (
        <div className='container'>
            <h4 className='my-3' style={{ letterSpacing: 10, fontWeight: 'bolder' }}>ITS JUST NOT A BIKE ITS EMOTION</h4>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <img
                        style={{ width: '100%', height: '500px' }}
                        className="d-block w-100"
                        src='https://i.postimg.cc/T2NhXxbg/carousel1.jpg'
                        alt=''
                    />
                    <Carousel.Caption>
                        <h3>BIKE GIVES POWER</h3>
                        <p>Bike wanna give you maximum power.Handle it and enjoy...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        style={{ width: '100%', height: '500px' }}
                        className="d-block w-100"
                        src="https://i.postimg.cc/tC1Jqcdf/carousel2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>BIKE NEEDS CARE</h3>
                        <p>Your bike gives you happiness unitill its feels unhealthy...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        style={{ width: '100%', height: '500px' }}
                        className="d-block w-100"
                        src="https://i.postimg.cc/qM9RzGj7/carousel3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>INCREASE YOUR RIDING SKILLS</h3>
                        <p>Enjoy better ride with better skills...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ImageSlider;