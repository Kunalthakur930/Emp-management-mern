# Employee Management System

A full-stack Employee Management System built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application enables secure employee record management with authentication, authorization, and user-specific data access.

## Features

* User Registration and Login Authentication
* JWT-Based Secure Authentication
* Protected Routes
* Session-Based User Management
* Add New Employees
* View Employee Records
* Update Employee Information
* Delete Employee Records
* User-Specific Employee Management
* Responsive User Interface
* MongoDB Database Integration
* RESTful API Architecture

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Frontend: Netlify
* Backend: Render
* Database: MongoDB Atlas

## Project Structure

```bash
Emp-management-mern/
│
├── backend/
│   ├── Controller/
│   ├── Middleware/
│   ├── Model/
│   ├── Routes/
│   ├── Db/
│   └── App.js
│
├── frontend/
│   └── admin/
│       ├── src/
│       ├── public/
│       └── package.json
```

## Security Features

* Password Hashing using bcrypt
* JWT Token Authentication
* Protected Frontend Routes
* Secure API Access
* User-Specific Employee Data Isolation
* Secure Update and Delete Operations

## Key Highlights

* Designed and developed a complete MERN Stack application from scratch.
* Implemented secure authentication and authorization mechanisms.
* Ensured each user can access and manage only their own employee records.
* Built responsive and user-friendly interfaces for employee management.
* Deployed the application using modern cloud platforms.

## Installation

### Clone Repository

```bash
git clone https://github.com/Kunalthakur930/Emp-management-mern.git
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend/admin
npm install
npm run dev
```

## Future Enhancements

* Employee Search and Filtering
* Role-Based Access Control
* Employee Profile Images
* Dashboard Analytics
* Export Employee Data
* Email Notifications

## Author

Kunal Thakur

LinkedIn: https://www.linkedin.com/in/kunalthakur-dev
