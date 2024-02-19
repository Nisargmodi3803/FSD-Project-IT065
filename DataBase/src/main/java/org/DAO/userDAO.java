package org.DAO;

import org.entities.User;

import java.util.Date;
import java.util.List;

public interface userDAO
{
    void saveUser(User user);

    User getUserByEmail(String email);

    List<User> getAllUser();

    void updateUserName(User user,String updatedUserName);

    void updateUserEmail(User user,String updatedUserEmail);

    void updateUserPassword(User user,String updatedUserPassword);

    void updateUserPhoneNo(User user,String updatedUserPhoneNo);

    void updateUserDOB(User user, Date updatedUserDOB);

    void deleteUser(String email);
}
