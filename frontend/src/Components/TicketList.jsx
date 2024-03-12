import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";
import './TicketList.css'

export default function TicketList() {
  return (
    <div className='ticket'>
      <div className='wrap'>
          <h1>TICKET LIST</h1>
          <br />
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
                <th>Person Name</th>
                <th>Total Seats Booked</th>
                <th>Total Fare</th>
                <th>Delete Ticket</th>
              </tr>
              <tr>
                <td>Gujarat Queen</td>
                <td>19033</td>
                <td>Valsad</td>
                <td>Ahmedabad</td>
                <td>300</td>
                <td>Nisarg Modi</td>
                <td>5</td>
                <td>1500</td>
                <td><button className='delete-button'>Delete</button></td>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
