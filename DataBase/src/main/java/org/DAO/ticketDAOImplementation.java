package org.DAO;

import org.entities.Ticket;
import org.entities.Train;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import java.util.List;

public class ticketDAOImplementation implements ticketDAO
{
    SessionFactory sessionFactory;
    public ticketDAOImplementation(SessionFactory sessionFactory)
    {
        sessionFactory = this.sessionFactory;
    }
    @Override
    public void saveTicket(Ticket ticket) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            session.persist(ticket);
            transaction.commit();
        }
    }

    @Override
    public List<Ticket> showAllTickets() {
        try(Session session = sessionFactory.openSession())
        {
            Query<Ticket> query = session.createQuery("from Ticket ",Ticket.class);
            return query.list();
        }
    }

    @Override
    public Ticket showTicketByTicketId(long id) {
        try(Session session = sessionFactory.openSession())
        {
            return session.get(Ticket.class,id);
        }
    }
}
