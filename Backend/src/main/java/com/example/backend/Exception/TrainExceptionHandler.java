package com.example.backend.Exception;

import com.example.backend.dto.TrainErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class TrainExceptionHandler {

    @ExceptionHandler(TrainNotFoundException.class)
    public ResponseEntity<TrainErrorResponse> handleException(TrainNotFoundException ex) {
        TrainErrorResponse errorResponse = new TrainErrorResponse();
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        errorResponse.setMessage(ex.getMessage());
        errorResponse.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }
}
