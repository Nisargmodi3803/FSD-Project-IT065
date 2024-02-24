package org.example;

import org.DAO.*;
import org.entities.Ticket;
import org.entities.Train;
import org.entities.User;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.Calendar;
import java.util.Date;

public class Main
{
    public static void main(String[] args) {
        Configuration config = new Configuration();
//        config.addAnnotatedClass(org.entities.User.class);
        config.addAnnotatedClass(org.entities.Train.class);
//        config.addAnnotatedClass(org.entities.Ticket.class);
        SessionFactory sessionFactory = config.buildSessionFactory();

//        userDAO userDao = new userDAOImplementation(sessionFactory);
//        ticketDAO ticketDao = new ticketDAOImplementation(sessionFactory);
        trainDAO trainDao = new trainDAOImplementation(sessionFactory);

//        User user1 = new User();
//        user1.setUserName("Nisarg Modi");
//        user1.setUserEmail("nisargmodi03@gmail.com");
//        user1.setUserPassword("Nisarg");
//        user1.setUserPhoneNo("9712971148");

        Train train1 = new Train();
        train1.setTrainNumber("19033");
        train1.setTrainName("Gujarat Queen");
        train1.setTrainFrom("Valsad");
        train1.setTrainTo("Ahmedabad");
        train1.setTrainPrice(200);
        train1.setTrainSeat(60);

//        Ticket ticket1 = new Ticket();
//        ticket1.setTrain(train1);
//        ticket1.setUser(user1);
//        ticket1.setTotalRiders(5);

        System.out.println("Adding Train : "+train1);
        trainDao.saveTrain(train1);
//        System.out.println("Adding User : "+user1);
//        userDao.saveUser(user1);
//        System.out.println("Adding Ticket : "+ticket1);
//        ticketDao.saveTicket(ticket1);
//        userDAO.updateUserEmail(user1,"nisargmodi@gmail.com");
//        System.out.println("updating user : "+user1);
    }
}