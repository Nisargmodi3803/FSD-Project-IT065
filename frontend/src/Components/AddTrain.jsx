import React, { useState } from 'react';
import { FaTrain } from "react-icons/fa6";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";
import "./AddTrain.css";

export default function AddTrain() {
  const [trainDetails, setTrainDetails] = useState({
    trainName: '',
    trainNumber: '',
    fromLocation: '',
    toLocation: '',
    ticketPrice: '',
    numberOfSeats: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(trainDetails);
    setTrainDetails({
      trainName: '',
      trainNumber: '',
      fromLocation: '',
      toLocation: '',
      ticketPrice: '',
      numberOfSeats: '',
      date:'',
      time:''
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
                name='fromLocation'
                value={trainDetails.fromLocation}
                onChange={handleChange}
              />
            </div>
            <div className='input-box'>
              <FaLocationDot className='icon' />
              <input
                type='text'
                placeholder='To Location'
                name='toLocation'
                value={trainDetails.toLocation}
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
                name='ticketPrice'
                value={trainDetails.ticketPrice}
                onChange={handleChange}
              />
            </div>
            <div className='input-box'>
              <MdOutlineAirlineSeatReclineExtra className='icon' />
              <input
                type='number'
                placeholder='Number of Seats'
                name='numberOfSeats'
                value={trainDetails.numberOfSeats}
                onChange={handleChange}
              />
            </div>
          </div>
          <br/>
          <br/>
          <div className='input-pair'>
            <div className='input-box'>
              <BsFillCalendar2DateFill className='icon' />
              <input
                type='date'
                placeholder='Date'
                name='Date'
                value={trainDetails.date}
                onChange={handleChange}
              />
            </div>
            <div className='input-box'>
              <IoIosTime className='icon' />
              <input
                type='time'
                placeholder='time'
                name='time'
                value={trainDetails.time}
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
