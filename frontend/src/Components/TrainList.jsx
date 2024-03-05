import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import './TrainList.css';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

export default function TrainList() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [trainDetails, setTrainDetails] = useState({
    name: 'Gujarat Queen',
    number: '19033',
    from: 'Valsad',
    to: 'Ahmedabad',
    price: '300',
    availableSeats: '50'
  });

  const handleUpdate = () => {
    setIsUpdateFormOpen(true);
  };

  const handleClose = () => {
    setIsUpdateFormOpen(false);
  };

  const handleUpdateSubmit = () => {
    setIsUpdateFormOpen(false);
  };

  return (
    <div className='trainlist'>
      <div className='wrap'>
        <form className='search-form'>
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
                <th>Delete Train</th>
                <th>Update Train</th>
              </tr>
              <tr>
                <td>{trainDetails.name}</td>
                <td>{trainDetails.number}</td>
                <td>{trainDetails.from}</td>
                <td>{trainDetails.to}</td>
                <td>{trainDetails.price}</td>
                <td>{trainDetails.availableSeats}</td>
                <td><button className='delete-button'>Delete</button></td>
                <td><button className='update-button' onClick={() => handleUpdate()}>update</button></td>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={isUpdateFormOpen} onClose={handleClose} className='dialog-container'>
        <DialogTitle className='dialog-title'>Update Train</DialogTitle>
        <DialogContent className='dialog-content'>
          <div className='dialog-text-field-container'>
            <div className='dialog-text-label'>Train Name</div>
            <TextField fullWidth value={trainDetails.name} className='dialog-text-field' onChange={(e) => setTrainDetails({ ...trainDetails, name: e.target.value })} />
          </div>
          <div className='dialog-text-field-container'>
            <div className='dialog-text-label'>Train Number</div>
            <TextField fullWidth value={trainDetails.number} className='dialog-text-field' onChange={(e) => setTrainDetails({ ...trainDetails, number: e.target.value })}/>
          </div>
          <div className='dialog-text-field-container'>
            <div className='dialog-text-label'>Train From</div>
            <TextField fullWidth value={trainDetails.from} className='dialog-text-field' onChange={(e) => setTrainDetails({ ...trainDetails, from: e.target.value })}/>
          </div>
          <div className='dialog-text-field-container'>
            <div className='dialog-text-label'>Train To</div>
            <TextField fullWidth value={trainDetails.to} className='dialog-text-field' onChange={(e) => setTrainDetails({ ...trainDetails, to: e.target.value })}/>
          </div>
          <div className='dialog-text-field-container'>
            <div className='dialog-text-label'>Train Price</div>
            <TextField fullWidth value={trainDetails.price} className='dialog-text-field' onChange={(e) => setTrainDetails({ ...trainDetails, price: e.target.value })}/>
          </div>
          <div className='dialog-text-field-container'>
            <div className='dialog-text-label'>Train Available Seat</div>
            <TextField fullWidth value={trainDetails.availableSeats} className='dialog-text-field' onChange={(e) => setTrainDetails({ ...trainDetails, availableSeats: e.target.value })}/>
          </div>
        </DialogContent>
        <DialogActions className='dialog-actions'>
          <Button onClick={handleClose} className='dialog-button'>Cancel</Button>
          <Button onClick={handleUpdateSubmit} variant="contained" color="primary" className='dialog-button'>Update</Button>
        </DialogActions>
      </Dialog>


    </div>
  );
}
