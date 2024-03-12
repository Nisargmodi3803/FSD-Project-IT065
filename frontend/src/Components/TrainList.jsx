import React, { useState, useEffect } from 'react';
import './TrainList.css';
import axios from 'axios';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

export default function TrainList() {
  const [trains, setTrains] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [trainDetails, setTrainDetails] = useState({
    trainName: '',
    trainNumber: '',
    trainFrom: '',
    trainTo: '',
    price: '',
    trainSeat: ''
  });

  useEffect(() => {
    fetchAllTrains();
  }, []);

  const fetchAllTrains = async () => {
    try {
      const response = await axios.get('http://localhost:8080/train/trains');
      setTrains(response.data);
    } catch (error) {
      console.error('Error fetching trains:', error);
    }
  };

  const handleUpdate = (train) => {
    setSelectedTrain(train);
    setTrainDetails({
      trainName: train.trainName,
      trainNumber: train.trainNumber,
      trainFrom: train.trainFrom,
      trainTo: train.trainTo,
      price: train.price,
      trainSeat: train.trainSeat
    });
    setIsUpdateFormOpen(true);
  };

  const handleClose = () => {
    setIsUpdateFormOpen(false);
  };

  const handleUpdateSubmit = async () => {
    try {
      const response = await axios.patch(`http://localhost:8080/train/trains/${selectedTrain.trainNumber}`, trainDetails);
      console.log(response.data);
      alert('Train updated successfully!');
      setIsUpdateFormOpen(false);
      fetchAllTrains();
    } catch (error) {
      console.error('Error updating train:', error);
      alert('Error updating train. Please try again.');
    }
  };

  const handleDelete = async (trainNumber) => {
    try {
      const response = await axios.delete(`http://localhost:8080/train/trains/${trainNumber}`);
      console.log(response.data);
      alert('Train deleted successfully!');
      fetchAllTrains();
    } catch (error) {
      console.error('Error deleting train:', error);
      alert('Error deleting train. Please try again.');
    }
  };

  return (
    <div className='trainlist'>
      <div className='wrapp'>
        <h1>TRAIN LIST</h1>
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
                <th>Available Seats</th>
                <th>Delete Train</th>
                <th>Update Train</th>
              </tr>
            </thead>
            <tbody>
              {trains.map(train => (
                <tr key={train.trainNumber}>
                  <td>{train.trainName}</td>
                  <td>{train.trainNumber}</td>
                  <td>{train.trainFrom}</td>
                  <td>{train.trainTo}</td>
                  <td>{train.price}</td>
                  <td>{train.trainSeat}</td>
                  <td><button className='delete-button' onClick={() => handleDelete(train.trainNumber)}>Delete</button></td>
                  <td><button className='update-button' onClick={() => handleUpdate(train)}>Update</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={isUpdateFormOpen} onClose={handleClose} className='dialog-container'>
        <DialogTitle className='dialog-title'>Update Train</DialogTitle>
        <DialogContent className='dialog-content'>
          <div className='dialog-text-field-container'>
            <div className='dialog-text-label'>Train Name</div>
            <TextField fullWidth value={trainDetails.trainName} className='dialog-text-field' onChange={(e) => setTrainDetails({ ...trainDetails, trainName: e.target.value })} />
          </div>
          <div className='dialog-text-field-container'>
            <div className='dialog-text-label'>Train From</div>
            <TextField fullWidth value={trainDetails.trainFrom} className='dialog-text-field' onChange={(e) => setTrainDetails({ ...trainDetails, trainFrom: e.target.value })} />
          </div>
          <div className='dialog-text-field-container'>
            <div className='dialog-text-label'>Train To</div>
            <TextField fullWidth value={trainDetails.trainTo} className='dialog-text-field' onChange={(e) => setTrainDetails({ ...trainDetails, trainTo: e.target.value })} />
          </div>
          <div className='dialog-text-field-container'>
            <div className='dialog-text-label'>Train Price</div>
            <TextField fullWidth value={trainDetails.price} className='dialog-text-field' onChange={(e) => setTrainDetails({ ...trainDetails, price: e.target.value })} />
          </div>
          <div className='dialog-text-field-container'>
            <div className='dialog-text-label'>Train Available Seat</div>
            <TextField fullWidth value={trainDetails.trainSeat} className='dialog-text-field' onChange={(e) => setTrainDetails({ ...trainDetails, trainSeat: e.target.value })} />
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
