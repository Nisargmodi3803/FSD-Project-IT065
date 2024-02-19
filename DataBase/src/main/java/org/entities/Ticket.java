package org.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "TICKET")
public class Ticket
{
    @Id
    @GeneratedValue
    @Column(name = "ticket_id")
    private long ticketId;

    @Column(name = "total_riders")
    private int totalRiders;

    @Column(name = "total_fare")
    private double totalFare;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "train_fk")
    private Train train;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_fk")
    private User user;


    public double calculateTotalFare()
    {
        double fare = train.getTrainPrice();
        totalFare = totalRiders * fare;
        return totalFare;
    }

    public long getTicketId() {
        return ticketId;
    }

    public void setTicketId(long ticketId) {
        this.ticketId = ticketId;
    }

    public int getTotalRiders() {
        return totalRiders;
    }

    public void setTotalRiders(int totalRiders) {
        this.totalRiders = totalRiders;
        totalFare = this.calculateTotalFare();
    }

    public Train getTrain() {
        return train;
    }

    public void setTrain(Train train) {
        this.train = train;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "ticketId=" + ticketId +
                ", totalRiders=" + totalRiders +
                ", totalFare=" + totalFare +
                ", train=" + train +
                ", user=" + user +
                ",totalFare="+totalFare+
                '}';
    }
}
