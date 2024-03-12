package com.example.backend.Controller;

import com.example.backend.Service.TicketService;
import com.example.backend.entities.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ticket")
@CrossOrigin("*")
public class TicketController
{
    @Autowired
    TicketService ticketService;

    @PostMapping("/tickets")
    public Ticket saveTicket(@RequestBody Ticket ticket)
    {
        return ticketService.saveTicket(ticket);
    }

    @GetMapping("/tickets")
    public List<Ticket> getAllTickets()
    {
        return ticketService.getAllTickets();
    }

    @DeleteMapping("tickets/{ticketId}")
    public String deleteTicket(@PathVariable long ticketId)
    {
        ticketService.deleteTicket(ticketId);
        return "Ticket with ticket-id : "+ticketId+ " deleted";
    }

    @GetMapping("tickets/chart")
    public List<Ticket> getTrainChart(@RequestParam long trainNumber)
    {
        return ticketService.getTrainChart(trainNumber);
    }
}
