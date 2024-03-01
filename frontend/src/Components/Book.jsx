import React from 'react';
import './Book.css'

export default function Book() {
  const trainNumber = 19033;
  const trainName = 'Gujarat Queen';
  const to = 'Ahmedabad';
  const from = 'Valsad';
  const price = 300;

  return (
    <div className='book'>
      <div className='container'>
        <form>
          <div className='pair'>
            <div className='box'>
              <label htmlFor='trainNumber'><b>Train Number :</b></label>
              <input type='text' id='trainNumber' value={trainNumber} disabled />
            </div>
            <div className='box'>
              <label htmlFor='trainName'><b>Train Name :</b></label>
              <input type='text' id='trainName' value={trainName} disabled />
            </div>
          </div>
          <div className='pair'>
            <div className='box'>
              <label htmlFor='from'><b>From :</b></label>
              <input type='text' id='from' value={from} disabled />
            </div>
            <div className='box'>
              <label htmlFor='To'><b>To :</b></label>
              <input type='text' id='to' value={to} disabled />
            </div>
          </div>
          <div className='pair'>
            <div className='box'>
              <label htmlFor='price'><b>Price :</b></label>
              <input type='text' id='price' value={price} disabled />
            </div>
          </div>
          <div className='pair'>
            <div className='box'>
              <label htmlFor='name'><b>Person Name :</b></label>
              <input type='text' id='name' placeholder='Person Name' />
            </div>
            <div className='box'>
              <label htmlFor='numberOfSeats'><b>Number of Seats :</b></label>
              <input type='number' id='numberOfSeats' placeholder='Total number of seats' />
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
