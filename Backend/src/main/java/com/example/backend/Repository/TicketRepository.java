package com.example.backend.Repository;

import com.example.backend.entities.Ticket;
import com.example.backend.entities.Train;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

// TicketRepository

public interface TicketRepository extends JpaRepository<Ticket,Long>
{
    @Query("SELECT ticket FROM Ticket ticket WHERE ticket.train.trainNumber = :trainNumber")
    List<Ticket> getTrainChart(long trainNumber);
}
