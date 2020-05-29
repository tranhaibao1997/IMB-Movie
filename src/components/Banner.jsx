import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Banner() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/hSidSyz.jpg"
            alt="First slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdna.artstation.com/p/assets/images/images/017/022/542/large/amirhosein-naseri-desktop-screenshot-2019-04-03-18-17-47-11.jpg?1554338571"
            alt="Second slide"
          />

      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.collider.com/wp-content/uploads/2012/05/dark-knight-rises-movie-poster-banner-catwoman.jpg"
            alt="Third slide"
          />

      
        </Carousel.Item>
      </Carousel>
    </>
  )
}
