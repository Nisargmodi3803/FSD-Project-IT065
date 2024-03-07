import React, { useState } from 'react';
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import './TrainChart.css';

export default function TrainChart() {
    const [showTables, setShowTables] = useState(false);

    const handleSearch = () => {
        setShowTables(true);
    };

    const handleReset = () => {
        setShowTables(false);
    };

    return (
        <div className='chart'>
            <form className='search-form' onSubmit={e => { e.preventDefault(); handleSearch(); }}>
                <h1>TRAIN CHART</h1>
                <br />
                <div className='input-pair'>
                    <div className='input-box'>
                        <AiOutlineFieldNumber className='icon' />
                        <input type='text' placeholder='Train Number' />
                    </div>
                    <div className='input-box'>
                        <BsFillCalendar2DateFill className='icon' />
                        <input type='date' placeholder='Date' />
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
                                        <th>Total Tickets</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                    </tr>
                                    <tr>
                                        <td>Gujarat Queen</td>
                                        <td>19033</td>
                                        <td>Valsad</td>
                                        <td>Ahmedabad</td>
                                        <td>300</td>
                                        <td>50</td>
                                        <td>08/03/2024</td>
                                        <td>04:00AM</td>
                                    </tr>
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
                                        <th>Name</th>
                                        <th>Total Tickets</th>
                                        <th>Total Fare</th>
                                    </tr>
                                    <tr>
                                        <td>Nisarg Modi</td>
                                        <td>5</td>
                                        <td>1500</td>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='available-seat'>
                        <h1>Available Seats : 45</h1>
                    </div>
                </>
            )}
        </div>
    );
}
