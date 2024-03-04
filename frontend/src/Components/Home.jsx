import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';
import image1 from '../assets/pexels-julia-volk-5205541.jpg'
import image2 from '../assets/pexels-julia-volk-5205083.jpg';
import image3 from '../assets/pexels-shivam-tak-4481330.jpg'

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <div className="home">
      <header>
        <h1>Welcome to the Train Ticket Booking System</h1>
      </header>

      <section id="slider">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Image 1" />
          </div>
          <div>
            <img src={image2} alt="Image 2" />
          </div>
          <div>
            <img src={image3} alt="Image 3" />
          </div>
        </Slider>
      </section>

      <section id="features">
        <h2>Features</h2>
        <p>Explore the key features of our Train Ticket Booking System.</p>
        {/* Add more content and features here */}
      </section>
    </div>
  );
}

export default Home;
