package org.DAO;

import org.entities.Train;
import org.entities.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import java.sql.Time;
import java.util.Date;
import java.util.List;

public class trainDAOImplementation implements trainDAO
{
    SessionFactory sessionFactory;

    public trainDAOImplementation(SessionFactory sessionFactory){
        this.sessionFactory = sessionFactory;
    }

    @Override
    public void saveTrain(Train train) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            session.persist(train);
            transaction.commit();
        }
    }

    @Override
    public Train getTrainByDate(Date date) {
        try(Session session = sessionFactory.openSession())
        {
            return session.get(Train.class,date);
        }
    }

    @Override
    public Train getTrainByFromLocation(String trainFrom) {
        try(Session session = sessionFactory.openSession())
        {
            return session.get(Train.class,trainFrom);
        }
    }

    @Override
    public Train getTrainByToLocation(String trainTo) {
        try(Session session = sessionFactory.openSession())
        {
            return session.get(Train.class,trainTo);
        }
    }

    @Override
    public List<Train> getAllTrain() {
        try(Session session = sessionFactory.openSession())
        {
            Query<Train> query = session.createQuery("from Train",Train.class);
            return query.list();
        }
    }

    @Override
    public void updateTrainName(Train train, String updatedTrainName) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            Train existingTrain = session.get(Train.class,train.getTrainId());
            existingTrain.setTrainName(updatedTrainName);
            transaction.commit();
        }
    }

    @Override
    public void updateTrainNumber(Train train, String updatedTrainNumber) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            Train existingTrain = session.get(Train.class,train.getTrainId());
            existingTrain.setTrainNumber(updatedTrainNumber);
            transaction.commit();
        }
    }

    @Override
    public void updateTrainFrom(Train train, String updatedTrainFrom) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            Train existingTrain = session.get(Train.class,train.getTrainId());
            existingTrain.setTrainFrom(updatedTrainFrom);
            transaction.commit();
        }
    }

    @Override
    public void updateTrainTo(Train train, String updatedTrainTo) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            Train existingTrain = session.get(Train.class,train.getTrainId());
            existingTrain.setTrainTo(updatedTrainTo);
            transaction.commit();
        }
    }

    @Override
    public void updateTrainDate(Train train, Date updatedTrainDate) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            Train existingTrain = session.get(Train.class,train.getTrainId());
            existingTrain.setTrainDate(updatedTrainDate);
            transaction.commit();
        }
    }


    @Override
    public void updateTrainSeat(Train train, int updatedTrainSeat) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            Train existingTrain = session.get(Train.class,train.getTrainId());
            existingTrain.setTrainSeat(updatedTrainSeat);
            transaction.commit();
        }
    }

    @Override
    public void updateTrainPrice(Train train, double updatedTrainPrice) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            Train existingTrain = session.get(Train.class,train.getTrainId());
            existingTrain.setTrainPrice(updatedTrainPrice);
            transaction.commit();
        }
    }
}
