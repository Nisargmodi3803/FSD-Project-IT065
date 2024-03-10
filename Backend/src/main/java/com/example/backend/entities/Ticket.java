package com.example.backend.entities;

import jakarta.persistence.*;

@Entity
public class Ticket
{
    @Id
    @GeneratedValue(strategy = CascadeType.ALL)
    @Column(name = "ticket_id")
    private int ticketId;

    @Column(name = "passenger")
    private  String name;

    @Column(name = "total_tickets")
    private  int totalTickets;

    public Ticket(int ticketId, String name, int totalTickets) {
        this.ticketId = ticketId;
        this.name = name;
        this.totalTickets = totalTickets;
    }

    public Ticket() {
    }

    public int getTicketId() {
        return ticketId;
    }

    public void setTicketId(int ticketId) {
        this.ticketId = ticketId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTotalTickets() {
        return totalTickets;
    }

    public void setTotalTickets(int totalTickets) {
        this.totalTickets = totalTickets;
    }
}
