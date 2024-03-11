package com.example.backend.Repository;

import com.example.backend.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket,Long>
{

}
