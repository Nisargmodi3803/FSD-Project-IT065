import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import './TrainList.css'

export default function TrainList() {
  return (
    <div className='wrapper'>
      <form>
        <h1>TRAIN LIST</h1>
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
          <div className='button'>
            <button type='submit'>Search</button>
          </div>
          <div className='button'>
            <button type='submit'>Reset</button>
          </div>
        </div>
      </form>
      {/* <table>
        <tr>Train Name</tr>
        <tr>Train Number</tr>
        <tr>From</tr>
        <tr>To</tr>
        <tr>Price</tr>
        <tr>Available Seats</tr>
      </table> */}
    </div>
  )
}
