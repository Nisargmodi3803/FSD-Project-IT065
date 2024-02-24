package org.DAO;

import org.entities.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import java.util.Date;
import java.util.List;

public class userDAOImplementation implements userDAO
{
    private SessionFactory sessionFactory;

    public userDAOImplementation(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public void saveUser(User user) {
        try(Session session = sessionFactory.openSession())
        {
            session.beginTransaction();
            session.persist(user);
            session.getTransaction().commit();
        }
    }

    @Override
    public User getUserByEmail(String email) {
        try(Session session = sessionFactory.openSession())
        {
            return session.get(User.class,email);
        }
    }

    @Override
    public List<User> getAllUser() {
        try(Session session = sessionFactory.openSession())
        {
            Query<User> query = session.createQuery("from User",User.class);
            return query.list();
        }
    }

    @Override
    public void updateUserName(User user, String updatedUserName) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            User existingUser = session.get(User.class,user.getUserId());
            existingUser.setUserName(updatedUserName);
            transaction.commit();
        }
    }

    @Override
    public void updateUserEmail(User user, String updatedUserEmail) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            User existingUser = session.get(User.class,user.getUserId());
            existingUser.setUserEmail(updatedUserEmail);
            transaction.commit();
        }
    }

    @Override
    public void updateUserPassword(User user, String updatedUserPassword) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            User existingUser = session.get(User.class,user.getUserId());
            existingUser.setUserPassword(updatedUserPassword);
            transaction.commit();
        }
    }

    @Override
    public void updateUserPhoneNo(User user, String updatedUserPhoneNo) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            User existingUser = session.get(User.class,user.getUserId());
            existingUser.setUserPhoneNo(updatedUserPhoneNo);
            transaction.commit();
        }
    }

    @Override
    public void deleteUser(String email) {
        try(Session session = sessionFactory.openSession())
        {
            Transaction transaction = session.beginTransaction();
            User user = session.get(User.class,email);
            if(user!=null)
                session.remove(user);
            transaction.commit();
        }
    }
}
