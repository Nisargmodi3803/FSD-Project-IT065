package org.DAO;

import org.entities.Train;

import java.sql.Time;
import java.util.Date;
import java.util.List;

public interface trainDAO
{
    void saveTrain(Train train);

    Train getTrainByDate(Date date);

    Train getTrainByFromLocation(String trainFrom);

    Train getTrainByToLocation(String trainTo);

    List<Train> getAllTrain();

    void updateTrainName(Train train,String updatedTrainName);

    void updateTrainNumber(Train train,String updatedTrainNumber);

    void updateTrainFrom(Train train,String updatedTrainFrom);

    void updateTrainTo(Train train,String updatedTrainTo);

    void updateTrainDate(Train train,Date updatedTrainDate);

    void updateTrainSeat(Train train,int updatedTrainSeat);

    void updateTrainPrice(Train train,double updatedTrainPrice);

}
