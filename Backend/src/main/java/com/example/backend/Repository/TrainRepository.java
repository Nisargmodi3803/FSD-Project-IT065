package com.example.backend.Repository;

import com.example.backend.entities.Train;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TrainRepository extends JpaRepository<Train, Long> {

    @Query("SELECT train FROM Train train WHERE train.trainTo = :toLocation AND train.trainFrom = :fromLocation")
    List<Train> getTrainByLocation(String toLocation, String fromLocation);
}
