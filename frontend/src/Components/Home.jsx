import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './home.css';
// import image1 from '../assets/pexels-julia-volk-5205541.jpg'
// import image2 from '../assets/pexels-julia-volk-5205083.jpg';
// import image3 from '../assets/pexels-shivam-tak-4481330.jpg'

const Home = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   pauseOnHover: true
  // };

  return (
    <div className='home-container'>
      <div className="home">
        <header>
          <h1>Welcome to the Train Ticket Booking System</h1>
        </header>

        {/* <section id="slider">
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
      </section> */}

        <section id="features">
          <h1>Features</h1>
          <p>Explore the key features of our Train Ticket Booking System.</p>
          <ul>
            <li>User can See Train From Location to To Location</li>
            <li>User can Book Train Ticket as well as can delete the Train Ticket</li>
            <li>Admin can Add Train,Update the Train & Delete the Train</li>
            <li>Admin can See the Train Chart</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
