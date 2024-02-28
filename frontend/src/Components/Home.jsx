import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css'; // Your custom CSS file for styling

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
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="slider">
        <Slider {...settings}>
          <div>
            <img src="https://www.pexels.com/photo/train-at-railway-station-15578683/" alt="Image 1" />
          </div>
          <div>
            <img src="https://www.pexels.com/photo/train-on-railway-in-winter-15541442/" alt="Image 2" />
          </div>
          {/* <div>
            <img src="image3.jpg" alt="Image 3" />
          // </div> */}
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
