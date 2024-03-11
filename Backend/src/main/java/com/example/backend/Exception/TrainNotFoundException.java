package com.example.backend.Exception;

public class TrainNotFoundException extends RuntimeException
{
    public TrainNotFoundException(String message)
    {
        super(message);
    }
}
