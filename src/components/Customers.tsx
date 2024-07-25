import './Customers.css'
import SectionHeader from './sectionHeader'
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/300.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Component } from 'react'
import React from 'react';

const CarouselItem1 =  (
        <img src='./northwestern.png'></img>
    )

const CarouselItem2 =  (
        <img src='./rose.png'></img>
    )

const carouselItems = [CarouselItem1, CarouselItem2];

const CustomDot = ({ onClick, index, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </button>
    );
  };

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel
                swipeable={true}
                draggable={false}
                showDots
                arrows={false}
                customDot={<CustomDot />}
                renderDotsOutside
                responsive={responsive}
                infinite={true}
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                >
                <div className='item'>
                    <p className='testimonial'>“I recently had the pleasure of working with Damous and I couldn't be more satisfied with the service provided. They were incredibly fast at gathering the requested reviews from the desired social media platforms, consistently delivering results promptly. The data was delivered in a highly professional manner, complete with detailed descriptions and updates for all the clarifications I requested. The thoroughness and attention to detail ensured that the final product met all my expectations and more. ”</p>
                    <div className="user">
                        <p className="person">Giorgia Chinazzo</p>
                        <p className="company">Professor of Civil Engineering, Northwestern University</p>
                    </div>
                </div>
                <div className='item'>
                    <p className='testimonial'>[insert Rose Testimonial]</p>
                    <div className="user">
                        <p className="person">Djibril Cisse</p>
                        <p className="company">Rose Inc</p>
                    </div>
                    
                </div>
            </Carousel>
        );
    }
};

export default function Customers() {
  return (
    <div>
      <SectionHeader 
          title="CUSTOMERS"
          headline="Data We Gathered"
          description="We’ve saved them hours of labor better spent elsewhere
          Don’t take our word for it, hear it from them"
        />
        <div className="Carousel">
            <DemoCarousel />
        </div>
    </div>
  )
}
