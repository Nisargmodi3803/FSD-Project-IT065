package com.example.backend.Service;

import com.example.backend.Repository.TicketRepository;
import com.example.backend.Repository.TrainRepository;
import com.example.backend.entities.Ticket;
import com.example.backend.entities.Train;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService
{
    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private TrainRepository trainRepository;

    public List<Ticket> getAllTickets()
    {
        return ticketRepository.findAll();
    }

    @Transactional
    public Ticket saveTicket(Ticket ticket) {
        if (ticket.getTrain() == null || ticket.getTrain().getTrainNumber() == 0){
            throw new IllegalArgumentException("Train information missing in the ticket.");
        }

        Optional<Train> optionalTrain = trainRepository.findById(ticket.getTrain().getTrainNumber());
        if (optionalTrain.isEmpty()) {
            throw new IllegalArgumentException("Train with ID " + ticket.getTrain().getTrainNumber() + " not found.");
        }
        Train train = optionalTrain.get();

        ticket.calculateTotalFareAndUpdateSeats(train);

        trainRepository.save(train);

        return ticketRepository.save(ticket);
    }


    @Transactional
    public void deleteTicket(long ticketId)
    {
        ticketRepository.deleteById(ticketId);
    }

    public List<Ticket> getTrainChart(long trainNumber)
    {
        return ticketRepository.getTrainChart(trainNumber);
    }
}
