package com.example.backend.Service;

import com.example.backend.Exception.TrainNotFoundException;
import com.example.backend.Repository.TrainRepository;
import com.example.backend.entities.Train;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TrainService
{
    @Autowired
    private TrainRepository trainRepository;

    @Transactional
    public Train addTrain(Train train)
    {
        return trainRepository.save(train);
    }

    public Train getTrainByTrainNumber(long trainNumber)
    {
        Optional<Train> foundTrain = trainRepository.findById(trainNumber);
        Train train = null;
        if(foundTrain.isPresent())
        {
            train = foundTrain.get();
        }
        else
        {
            throw new TrainNotFoundException("Train with train number "+trainNumber+" not found");
        }

        return train;
    }

    public List<Train> showAllTrain()
    {
        return trainRepository.findAll();
    }

    @Transactional
    public Train updateTrain(long trainNumber,Train updatedTrain)
    {
        Train matchingTrain = getTrainByTrainNumber(trainNumber);
        if(matchingTrain!=null)
        {
            if(updatedTrain.getTrainName()!=null)
                matchingTrain.setTrainName(updatedTrain.getTrainName());
            if(matchingTrain.getPrice()!=0)
                matchingTrain.setPrice(updatedTrain.getPrice());
            if(matchingTrain.getTrainTo()!=null)
                matchingTrain.setTrainTo(updatedTrain.getTrainTo());
            if(matchingTrain.getTrainFrom()!=null)
                matchingTrain.setTrainFrom(updatedTrain.getTrainFrom());
            if(matchingTrain.getTrainSeat()!=0)
                matchingTrain.setTrainSeat(updatedTrain.getTrainSeat());
        }
        else
        {
            throw new TrainNotFoundException("Train with train number "+trainNumber+" not found");
        }

        return trainRepository.save(matchingTrain);
    }

    @Transactional
    public void deleteByTrainNumber(long trainNumber)
    {
        trainRepository.deleteById(trainNumber);
    }

    public List<Train> getTrainByLocation(String toLocation,String fromLocation)
    {
        return trainRepository.getTrainByLocation(toLocation,fromLocation);
    }

    public int getAvailableSeats(long trainNumber)
    {
        return trainRepository.getAvailableSeats(trainNumber);
    }
}
