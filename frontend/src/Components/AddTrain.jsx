import React from 'react'
import { FaTrain } from "react-icons/fa6";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import "./AddTrain.css"

export default function AddTrain() {
  return (
    <section>
      <div className='wrapper'>
        <form className='background'>
          <h1>ADD TRAIN</h1>
          <br />
          <div className='input-pair'>
            <div className='input-box'>
              <FaTrain className='icon' />
              <input type='text' placeholder='Train Name' />
            </div>
            <div className='input-box'>
              <AiOutlineFieldNumber className='icon' />
              <input type='text' placeholder='Train Number' />
            </div>
          </div>
          <br />
          <br />
          <div className='input-pair'>
            <div className='input-box'>
              <FaLocationDot className='icon' />
              <input type='text' placeholder='From Location' />
            </div>
            <div className='input-box'>
              <FaLocationDot className='icon' />
              <input type='text' placeholder='To Location' />
            </div>
          </div>
          <br />
          <br />
          <div className='input-pair'>
            <div className='input-box'>
              <FaRupeeSign className='icon' />
              <input type='number' placeholder='Ticket Price' />
            </div>
            <div className='input-box'>
              <MdOutlineAirlineSeatReclineExtra className='icon' />
              <input type='number' placeholder='Number of Seats' />
            </div>
          </div>
          <br />
          <div className='button'>
            <button type='submit'>ADD</button>
          </div>
        </form>
      </div>
    </section>
  )
}
