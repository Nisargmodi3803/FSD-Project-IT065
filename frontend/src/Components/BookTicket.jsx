import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookTicket.css';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function BookTicket() {
  const navigate = useNavigate();
  const [trains, setTrains] = useState([]);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  useEffect(() => {
    fetchAllTrains();
  }, []);

  const fetchAllTrains = async () => {
    try {
      const response = await axios.get('http://localhost:8080/train/trains');
      setTrains(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching trains:', error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/train/trains/location?fromLocation=${fromLocation}&toLocation=${toLocation}`);
      setTrains(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching trains by location:', error);
    }
  };

  const handleReset = () => {
    setFromLocation('');
    setToLocation('');
    fetchAllTrains();
  };

  const handleBook = (train) => {
    console.log(train)
    navigate('/bookTrain/book', { state: { train } });
  };

  return (
    <div className='bookticket'>
      <div className='wrapp'>
        <form className='search-form' onSubmit={handleSearch}>
          <h1>BOOK TRAIN</h1>
          <br />
          <div className='input-pair'>
            <div className='input-box'>
              <FaLocationDot className='icon' />
              <input type='text' placeholder='From Location' value={fromLocation} onChange={(e) => setFromLocation(e.target.value)} />
            </div>
            <div className='input-box'>
              <FaLocationDot className='icon' />
              <input type='text' placeholder='To Location' value={toLocation} onChange={(e) => setToLocation(e.target.value)} />
            </div>
            <div className='button'>
              <button type='submit'>Search</button>
            </div>
            <div className='button'>
              <button type='button' onClick={handleReset}>Reset</button>
            </div>
          </div>
        </form>
      </div>
      <div className='table-container'>
        <div className='table'>
          <table>
            <thead>
              <tr>
                <th>Train Name</th>
                <th>Train Number</th>
                <th>From</th>
                <th>To</th>
                <th>Price</th>
                <th>Available Seats</th>
                <th>Book</th>
              </tr>
            </thead>
            <tbody>
              {trains.map(train => (
                <tr key={train.trainNumber}>
                  <td>{train.trainName}</td>
                  <td>{train.trainNumber}</td>
                  <td>{train.trainFrom}</td>
                  <td>{train.trainTo}</td>
                  <td>{train.price}</td>
                  <td>{train.trainSeat}</td>
                  <td><button className='book-button' onClick={() => handleBook(train)}>Book</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
