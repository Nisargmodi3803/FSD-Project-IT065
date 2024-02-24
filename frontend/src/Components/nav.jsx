import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <div className='nav-UI'>
            <nav>
                <ul>
                    <li className="logo-container">
                        <img src="https://imgs.search.brave.com/cyJmuUmzTkYGAKZFeRR7hFKx1tMRoZze6HHqsWIbTUQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvaW1hZ2UvdXBs/b2FkL3YxNjcwNDQ1/MDQwL2xvZ2FzdGVy/L2xvZ2FzdGVyLTIw/MjAtMDgtdC1yYWls/d2F5LWxvZ28tMi5q/cGc" alt="Logo"/>
                        <strong><em>TRAIN TICKET BOOKING</em></strong>
                    </li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/addTrain"}>Add Train</Link></li>
                    <li><Link to={"/trainList"}>Train List</Link></li>
                    <li><Link to={"/bookTrain"}>Book Train</Link></li>
                    <li><Link to={"/ticketList"}>Ticket List</Link></li>
                </ul>
            </nav>
        </div>
    );
}
