import React, { useState } from 'react';
import { FaTrain } from "react-icons/fa6";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import "./AddTrain.css";
import axios from 'axios';

export default function AddTrain() {
  const [trainDetails, setTrainDetails] = useState({
    trainName: '',
    trainNumber: '',
    trainFrom: '',
    trainTo: '', 
    price: '', 
    trainSeat: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(trainDetails);
      const response = await axios.post('http://localhost:8080/train/trains', trainDetails);
      console.log(response.data); 
      alert('Train added successfully!');
      clearForm();
    } catch (error) {
      console.error('Error adding train:', error);
      alert('Error adding train. Please try again.');
    }
  };

  const clearForm = () => {
    setTrainDetails({
      trainName: '',
      trainNumber: '',
      trainFrom: '',
      trainTo: '',
      price: '',
      trainSeat: ''
    });
  };

  return (
    <div className='full-page'>
      <div className='wrapper'>
        <form className='background' onSubmit={handleSubmit}>
          <h1>ADD TRAIN</h1>
          <br />
          <div className='input-pair'>
            <div className='input-box'>
              <FaTrain className='icon' />
              <input
                type='text'
                placeholder='Train Name'
                name='trainName'
                value={trainDetails.trainName}
                onChange={handleChange}
              />
            </div>
            <div className='input-box'>
              <AiOutlineFieldNumber className='icon' />
              <input
                type='text'
                placeholder='Train Number'
                name='trainNumber'
                value={trainDetails.trainNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <br />
          <div className='input-pair'>
            <div className='input-box'>
              <FaLocationDot className='icon' />
              <input
                type='text'
                placeholder='From Location'
                name='trainFrom'
                value={trainDetails.trainFrom}
                onChange={handleChange}
              />
            </div>
            <div className='input-box'>
              <FaLocationDot className='icon' />
              <input
                type='text'
                placeholder='To Location'
                name='trainTo'
                value={trainDetails.trainTo}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <br />
          <div className='input-pair'>
            <div className='input-box'>
              <FaRupeeSign className='icon' />
              <input
                type='number'
                placeholder='Ticket Price'
                name='price'
                value={trainDetails.price}
                onChange={handleChange}
              />
            </div>
            <div className='input-box'>
              <MdOutlineAirlineSeatReclineExtra className='icon' />
              <input
                type='number'
                placeholder='Number of Seats'
                name='trainSeat'
                value={trainDetails.trainSeat}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div className='button'>
            <button type='submit'>ADD</button>
          </div>
        </form>
      </div>
    </div>
  );
}
