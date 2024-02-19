package org.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "USER")
public class User
{
    @Id
    @Column(name = "user_id")
    @GeneratedValue
    private long userId;

    @Column(name = "name")
    private String userName;

    @Column(name = "email",nullable = false)
    private String userEmail;

    @Column(name = "password",nullable = false)
    private String userPassword;

    @Column(name = "phone-no")
    private String userPhoneNo;

    @Column(name = "date_of_birth")
    @Temporal(TemporalType.DATE)
    private Date userDOB;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserPhoneNo() {
        return userPhoneNo;
    }

    public void setUserPhoneNo(String userPhoneNo) {
        this.userPhoneNo = userPhoneNo;
    }

    public Date getUserDOB() {
        return userDOB;
    }

    public void setUserDOB(Date userDOB) {
        this.userDOB = userDOB;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userPhoneNo=" + userPhoneNo +
                ", userDOB=" + userDOB +
                '}';
    }
}
