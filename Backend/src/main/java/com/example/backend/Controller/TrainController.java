package com.example.backend.Controller;

import com.example.backend.Service.TrainService;
import com.example.backend.entities.Train;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/train")
@CrossOrigin("*")
public class TrainController
{
    @Autowired
    TrainService trainService;

    @GetMapping("/trains/{trainNumber}")
    public Train getTrainByNumber(@PathVariable long trainNumber)
    {
        return trainService.getTrainByTrainNumber(trainNumber);
    }

    @PostMapping("/trains")
    public Train addTrain(@RequestBody Train train)
    {
        return trainService.addTrain(train);
    }

    @GetMapping("/trains")
    public List<Train> showAllTrain()
    {
        return trainService.showAllTrain();
    }

    @PatchMapping("/trains/{trainNumber}")
    public Train updateTrain(@PathVariable long trainNumber,@RequestBody Train updatedTrain)
    {
        return trainService.updateTrain(trainNumber,updatedTrain);
    }

    @DeleteMapping("/trains/{trainNumber}")
    public String deleteTrain(@PathVariable long trainNumber)
    {
        trainService.deleteByTrainNumber(trainNumber);
        return "Train with trainNumber : "+trainNumber+" delete successfully";
    }

    @GetMapping("/trains/location")
    public List<Train> getTrainByLocation(@RequestParam("toLocation") String toLocation, @RequestParam("fromLocation") String fromLocation)
    {
        return trainService.getTrainByLocation(toLocation,fromLocation);
    }

    @GetMapping("/trains/availableSeats/{trainNumber}")
    public int getAvailableSeats(@PathVariable long trainNumber)
    {
        return trainService.getAvailableSeats(trainNumber);
    }
}
