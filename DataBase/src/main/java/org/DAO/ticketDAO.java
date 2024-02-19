package org.DAO;

import org.entities.Ticket;

import java.util.List;

public interface ticketDAO
{
    void saveTicket(Ticket ticket);
    List<Ticket> showAllTickets();
    Ticket showTicketByTicketId(long id);
}
