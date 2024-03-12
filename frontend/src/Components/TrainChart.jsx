import React, { useState } from 'react';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import axios from 'axios';
import './TrainChart.css';

export default function TrainChart() {
    const [showTables, setShowTables] = useState(false);
    const [chartData, setChartData] = useState([]);
    const [trainNumber, setTrainNumber] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/ticket/tickets/chart?trainNumber=${trainNumber}`);
            console.log(response.data);
            setChartData(response.data);
            setShowTables(true);
        } catch (error) {
            console.error('Error fetching train chart:', error);
        }
    };

    const handleReset = () => {
        setShowTables(false);
        setChartData([]);
        setTrainNumber('');
    };

    return (
        <div className='chart'>
            <form className='search-form' onSubmit={e => { e.preventDefault(); handleSearch(); }}>
                <h1>TRAIN CHART</h1>
                <br />
                <div className='input-pair'>
                    <div className='input-box'>
                        <AiOutlineFieldNumber className='icon' />
                        <input
                            type='number'
                            placeholder='Train Number'
                            value={trainNumber}
                            onChange={(e) => setTrainNumber(e.target.value)}
                        />
                    </div>
                    <div className='button'>
                        <button type='submit'>Search</button>
                    </div>
                    <div className='button'>
                        <button type='button' onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </form>

            {showTables && (
                <>
                    {chartData.length === 0 ? (
                        <div className='no-chart-message'>
                            <h1>No Chart Available for train: {trainNumber} number</h1>
                        </div>
                    ) : (
                        <>
                            <div className='table-container-train'>
                                <div className='table-train'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Train Name</th>
                                                <th>Train Number</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Price</th>
                                            </tr>
                                            {chartData.map((ticket, index) => (
                                                <tr key={index}>
                                                    <td>{ticket.train.trainName}</td>
                                                    <td>{ticket.train.trainNumber}</td>
                                                    <td>{ticket.train.trainFrom}</td>
                                                    <td>{ticket.train.trainTo}</td>
                                                    <td>{ticket.train.price}</td>
                                                </tr>
                                            ))}
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='table-container-chart'>
                                <div className='table-chart'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Passenger Name</th>
                                                <th>Total Tickets</th>
                                                <th>Total Fare</th>
                                            </tr>
                                            {chartData.map((ticket, index) => (
                                                <tr key={index}>
                                                    <td>{ticket.passengerName}</td>
                                                    <td>{ticket.totalTickets}</td>
                                                    <td>{ticket.totalFare}</td>
                                                </tr>
                                            ))}
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='available-seat'>
                                <h1>Available Seats: {chartData.length > 0 ? chartData[0].train.trainSeat : 0}</h1>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}
