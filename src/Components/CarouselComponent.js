import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import CarouselItem from 'react-bootstrap/CarouselItem';

function CarouselComponent() {
    return (
        <div>
            <Carousel>
                <CarouselItem>
                    <img className="h-fit" src="Images/shop-img-one.jpg" alt="Shop" />
                    <CarouselCaption>
                        <p>Find friends and get one discount for 50% off on everything.</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <img className="h-fit" src="Images/shop-img-one.jpg" alt="Shop" />
                    <CarouselCaption>
                        <p>Find friends and get one discount for 50% off on everything.</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <img className="h-fit" src="Images/shop-img-one.jpg" alt="Shop" />
                    <CarouselCaption>
                        <p>Find friends and get one discount for 50% off on everything.</p>
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
        </div>
    )
}

export default CarouselComponent
