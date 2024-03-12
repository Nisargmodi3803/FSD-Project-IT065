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
        // Ensure train object is set in the ticket
        if (ticket.getTrain() == null || ticket.getTrain().getTrainNumber() == 0){
            throw new IllegalArgumentException("Train information missing in the ticket.");
        }

        // Fetch train object from database
        Optional<Train> optionalTrain = trainRepository.findById(ticket.getTrain().getTrainNumber());
        if (optionalTrain.isEmpty()) {
            throw new IllegalArgumentException("Train with ID " + ticket.getTrain().getTrainNumber() + " not found.");
        }
        Train train = optionalTrain.get();

        // Update ticket's total fare and train's seats
        ticket.calculateTotalFareAndUpdateSeats(train);

        // Save the updated train (with updated seats)
        trainRepository.save(train);

        // Save the ticket
        return ticketRepository.save(ticket);
    }


    @Transactional
    public void deleteTicket(long ticketId)
    {
        ticketRepository.deleteById(ticketId);
    }
}
