package com.example.backend.entities;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

// Train Entity

@Entity
@Table(name = "train")
public class Train {
    @Id
    @Column(name = "train_number") // Specify the column name explicitly
    private long trainNumber;

    @Column(name = "train_name", nullable = false)
    private String trainName;

    @Column(name = "train_from", nullable = false)
    private String trainFrom;

    @Column(name = "train_to", nullable = false)
    private String trainTo;

    @Column(name = "train_seat", nullable = false)
    private int trainSeat;

    @Column(name = "price", nullable = false)
    private int price;

//    @OneToMany(mappedBy = "train", cascade = CascadeType.ALL, targetEntity = Ticket.class)
//    private List<Ticket> tickets = new ArrayList<>();

    public long getTrainNumber() {
        return trainNumber;
    }

    public void setTrainNumber(long trainNumber) {
        this.trainNumber = trainNumber;
    }

    public String getTrainName() {
        return trainName;
    }

    public void setTrainName(String trainName) {
        this.trainName = trainName;
    }

    public String getTrainFrom() {
        return trainFrom;
    }

    public void setTrainFrom(String trainFrom) {
        this.trainFrom = trainFrom;
    }

    public String getTrainTo() {
        return trainTo;
    }

    public void setTrainTo(String trainTo) {
        this.trainTo = trainTo;
    }

    public int getTrainSeat() {
        return trainSeat;
    }

    public void setTrainSeat(int trainSeat) {
        this.trainSeat = trainSeat;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

//    public List<Ticket> getTickets() {
//        return tickets;
//    }
//
//    public void setTickets(List<Ticket> tickets) {
//        this.tickets = tickets;
//    }
}
