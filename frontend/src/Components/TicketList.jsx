import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TicketList.css';

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchAllTickets();
  }, []);

  const fetchAllTickets = async () => {
    try {
      const response = await axios.get('http://localhost:8080/ticket/tickets');
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const handleDelete = async (ticketId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/ticket/tickets/${ticketId}`);
      console.log(response.data);
      alert('Ticket deleted successfully!');
      fetchAllTickets();
    } catch (error) {
      console.error('Error deleting ticket:', error);
      alert('Error deleting ticket. Please try again.');
    }
  };

  return (
    <div className='ticket'>
      <div className='wrap'>
        <h1>TICKET LIST</h1>
        <br />
      </div>
      <div className='table-container'>
        <div className='table'>
          {tickets.length === 0 ? (
            <p className='no-tickets'>Tickets not found</p>
          ) : (
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
              </thead>
              <tbody>
                {tickets.map(ticket => (
                  <tr key={ticket.ticketId}>
                    <td>{ticket.train.trainName}</td>
                    <td>{ticket.train.trainNumber}</td>
                    <td>{ticket.train.trainFrom}</td>
                    <td>{ticket.train.trainTo}</td>
                    <td>{ticket.train.price}</td>
                    <td>{ticket.passengerName}</td>
                    <td>{ticket.totalTickets}</td>
                    <td>{ticket.totalFare}</td>
                    <td><button className='delete-button' onClick={() => handleDelete(ticket.ticketId)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
