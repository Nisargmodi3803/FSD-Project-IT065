import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './nav';
import AddTrain from './AddTrain';
import Home from './Home';
import TrainList from './TrainList';
import BookTicket from './BookTicket';
import TicketList from './TicketList';
import Book from './Book';
import TrainChart from './TrainChart';

export default function NavRouters() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addTrain' element={<AddTrain/>}/>
          <Route path='/trainList' element={<TrainList/>}/>
          <Route path='/bookTrain' element={<BookTicket/>}/>
          <Route path='/ticketList' element={<TicketList/>}/>
          <Route path='/bookTrain/book' element={<Book/>}/>
          <Route path='/chart' element={<TrainChart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
