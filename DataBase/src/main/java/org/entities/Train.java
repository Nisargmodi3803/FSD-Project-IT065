package org.entities;

import jakarta.persistence.*;

import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "TRAIN")
public class Train
{
    @Id
    @GeneratedValue
    @Column(name = "train_id")
    private long trainId;

    @Column(name = "train_name",nullable = false)
    private String trainName;

    @Column(name = "train_number",nullable = false)
    private String trainNumber;

    @Column(name = "train_date")
    @Temporal(TemporalType.DATE)
    private Date trainDate;

    @Column(name = "from")
    private String trainFrom;

    @Column(name = "to")
    private String trainTo;

    @Column(name = "price")
    private double trainPrice;

    @Column(name = "seat")
    private int trainSeat;

    public long getTrainId() {
        return trainId;
    }

    public void setTrainId(long trainId) {
        this.trainId = trainId;
    }

    public String getTrainName() {
        return trainName;
    }

    public void setTrainName(String trainName) {
        this.trainName = trainName;
    }

    public String getTrainNumber() {
        return trainNumber;
    }

    public void setTrainNumber(String trainNumber) {
        this.trainNumber = trainNumber;
    }

    public Date getTrainDate() {
        return trainDate;
    }

    public void setTrainDate(Date trainDate) {
        this.trainDate = trainDate;
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

    public double getTrainPrice() {
        return trainPrice;
    }

    public void setTrainPrice(double trainPrice) {
        this.trainPrice = trainPrice;
    }

    public long getTrainSeat() {
        return trainSeat;
    }

    public void setTrainSeat(int trainSeat) {
        this.trainSeat = trainSeat;
    }


    @Override
    public String toString() {
        return "Train{" +
                "trainId=" + trainId +
                ", trainName='" + trainName + '\'' +
                ", trainNumber='" + trainNumber + '\'' +
                ", trainDate=" + trainDate +
                ", trainFrom='" + trainFrom + '\'' +
                ", trainTo='" + trainTo + '\'' +
                ", trainPrice='" + trainPrice + '\'' +
                ", trainSeat=" + trainSeat +
                '}';
    }
}
