package com.example.backend.Service;

import com.example.backend.Repository.TicketRepository;
import com.example.backend.Repository.TrainRepository;
import com.example.backend.entities.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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
    public Ticket saveTicket(Ticket ticket)
    {
        ticket.calculateTotalFareAndUpdateSeats();
        return ticketRepository.save(ticket);
    }

    @Transactional
    public void deleteTicket(long ticketId)
    {
        ticketRepository.deleteById(ticketId);
    }
}
