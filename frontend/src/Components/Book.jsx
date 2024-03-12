import React, { useState } from 'react';
import './Book.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Book() {
  const location = useLocation();
  const { train } = location.state;

  const [passengerName, setPassengerName] = useState('');
  const [totalTickets, setTotalTickets] = useState(1);

  const handleBookTicket = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/ticket/tickets', {
        passengerName,
        totalTickets,
        train,
      });
      console.log(response.data);
      alert('Ticket booked successfully!');
      setPassengerName('');
      setTotalTickets(1);
    } catch (error) {
      console.error('Error booking ticket:', error);
      alert('Error booking ticket. Please try again.');
    }
  };

  return (
    <div className='book'>
      <div className='container'>
        <form onSubmit={handleBookTicket}>
          <div className='pair'>
            <div className='box'>
              <label htmlFor='trainNumber'><b>Train Number :</b></label>
              <input type='text' id='trainNumber' value={train.trainNumber} disabled />
            </div>
            <div className='box'>
              <label htmlFor='trainName'><b>Train Name :</b></label>
              <input type='text' id='trainName' value={train.trainName} disabled />
            </div>
          </div>
          <div className='pair'>
            <div className='box'>
              <label htmlFor='from'><b>From :</b></label>
              <input type='text' id='from' value={train.trainFrom} disabled />
            </div>
            <div className='box'>
              <label htmlFor='to'><b>To :</b></label>
              <input type='text' id='to' value={train.trainTo} disabled />
            </div>
          </div>
          <div className='pair'>
            <div className='box'>
              <label htmlFor='price'><b>Price :</b></label>
              <input type='text' id='price' value={train.price} disabled />
            </div>
          </div>
          <div className='pair'>
            <div className='box'>
              <label htmlFor='passengerName'><b>Passenger Name :</b></label>
              <input type='text' id='passengerName' value={passengerName} onChange={(e) => setPassengerName(e.target.value)} placeholder='Enter passenger name' required />
            </div>
            <div className='box'>
              <label htmlFor='totalTickets'><b>Total Tickets :</b></label>
              <input type='number' id='totalTickets' value={totalTickets} onChange={(e) => setTotalTickets(e.target.value)} min='1' max={train.trainSeat} required />
            </div>
          </div>
          <br />
          <div className='button'>
            <button type='submit'>Book</button>
          </div>
        </form>
      </div>
    </div>
  );
}
