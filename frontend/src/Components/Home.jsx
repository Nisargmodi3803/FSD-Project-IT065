import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css'; // Your custom CSS file for styling
import image1 from '../assets/pexels-pixabay-210144.jpg'; // Import your local image
import image2 from '../assets/pexels-pixabay-258510.jpg'; // Import your local image

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
          {/* Add more slides with local images */}
        </Slider>
      </section>

      <section id="features">
        <h2>Features</h2>
        <p>Explore the key features of our Train Ticket Booking System.</p>
        {/* Add more content and features here */}
      </section>

      {/* Other sections like how it works, pricing, contact, etc. */}
    </div>
  );
}

export default Home;
