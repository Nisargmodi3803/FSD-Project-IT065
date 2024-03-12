package com.example.backend.Exception;

// TrainNotFoundException

public class TrainNotFoundException extends RuntimeException
{
    public TrainNotFoundException(String message)
    {
        super(message);
    }
}
