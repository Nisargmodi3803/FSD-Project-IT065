package com.example.backend.entities;

import com.example.backend.Exception.TrainNotFoundException;
import jakarta.persistence.*;

// Ticket Entity

@Entity
@Table(name = "ticket")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_id")
    private long ticketId;

    @Column(name = "passenger_name", nullable = false)
    private String passengerName;

    @Column(name = "total_tickets", nullable = false)
    private int totalTickets;

    @Column(name = "total_fare")
    private int totalFare;

    @ManyToOne
    @JoinColumn(name = "train_number")
    private Train train;

    public long getTicketId() {
        return ticketId;
    }

    public void setTicketId(long ticketId) {
        this.ticketId = ticketId;
    }

    public String getPassengerName() {
        return passengerName;
    }

    public void setPassengerName(String passengerName) {
        this.passengerName = passengerName;
    }

    public int getTotalTickets() {
        return totalTickets;
    }

    public void setTotalTickets(int totalTickets) {
        this.totalTickets = totalTickets;
    }

    public int getTotalFare() {
        return totalFare;
    }

    public void setTotalFare(int totalFare) {
        this.totalFare = totalFare;
    }

    public Train getTrain() {
        return train;
    }

    public void setTrain(Train train) {
        this.train = train;
    }

    public void calculateTotalFareAndUpdateSeats(Train train) throws TrainNotFoundException {
        if (train != null) {
            if (totalTickets <= train.getTrainSeat()) {
                totalFare = totalTickets * train.getPrice();
                int seats = train.getTrainSeat();
                seats -= totalTickets;
                train.setTrainSeat(seats);
            } else {
                throw new TrainNotFoundException("Not enough seats available on the train.");
            }
        } else {
            throw new TrainNotFoundException("Train not found.");
        }
    }

    public void updateSeatWhenDelete(Train train){
        if(train != null){
            int seats = train.getTrainSeat();
            seats += totalTickets;
            train.setTrainSeat(seats);
        } else {
            throw new TrainNotFoundException("Train not found");
        }
    }
}

