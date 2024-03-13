# Online Railway Ticket Booking System

This is a mini-project for an Online Railway Ticket Booking system developed using Spring Boot for the backend, React for the frontend, and SQL for the database. The project includes functionalities for both administrators and users.

## Features

### Admin & User Functionality
- **Add Train:** Admin can add a new train with details such as train number, name, destination, origin, available seats, price, etc. This is done in the `addTrain` page.
- **Update and Delete Train:** Admin can update and delete existing trains from the system. This functionality is available in the `trainList` page.
- **View Ticket List:** Both Admin and User can view the list of booked tickets in the system. This information is accessible in the ticket list page.
- **Book Ticket:** Users can book tickets for available trains. They provide passenger details, select a train, and book tickets. This is done in the `bookTicket` page.
- **View Booked Tickets:** Users can view their booked tickets in the `ticketList` page.
- **Train Chart:** Both users and admins can view the train chart, which shows the availability of seats for each train. This information is provided in the train chart page.

## Entity Classes

### Train Entity
- **trainNumber:** Primary key for the train entity.
- **trainName:** Name of the train.
- **trainTo:** Destination of the train.
- **trainFrom:** Origin of the train.
- **trainSeat:** Number of available seats on the train.
- **price:** Ticket price for the train.

### Ticket Entity
- **totalTickets:** Total number of tickets booked.
- **passengerName:** Name of the passenger.
- **totalFare:** Total fare for the booked tickets.
- **train:** Many-to-One mapping to the Train entity.

## Technologies Used
- **Backend:** Spring Boot
- **Frontend:** React
- **Database:** SQL (Assume appropriate database schema and relationships)

## Setup Instructions
1. Clone the repository to your local machine.
2. Set up the backend using Spring Boot and configure the database connection.
3. Set up the frontend using React and ensure it communicates with the backend APIs correctly.
4. Run the application and access the respective URLs for admin and user functionalities.

## Additional Notes
- Implement proper validation for user inputs.
- Handle errors and edge cases gracefully.
- Enhance the UI/UX for better user experience.
- Implement pagination for ticket lists and train charts if dealing with a large number of records.
- Note that this project does not contain a login and signup page. Admin and user functionalities are shown in one project only, accessible via the navigation bar.

## Contributors
- Nisarg Modi
