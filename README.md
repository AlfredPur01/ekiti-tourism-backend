# Ekiti Tourism Backend

This is the backend server for the Ekiti Tourism Project, built with Node.js, Express.js, and MongoDB. It provides a robust API for managing users, accommodations, attractions, blogs, and more, with features like authentication, role-based access control, and integration with external services like Cloudinary and Nodemailer.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Node.js** + **Express.js**: Server-side framework for building the API.
- **MongoDB** + **Mongoose**: Database and Object Data Modeling (ODM) for data storage and management.
- **JWT**: JSON Web Tokens for secure authentication and role-based access control.
- **Cloudinary**: Service for image upload and management.
- **Nodemailer**: Email notification system.
- **Zod**: Schema validation for request data.
- **Swagger**: API documentation tool.
- **Jest**: Testing framework for unit and integration tests.
- **Docker** + **PM2**: Tools for deployment and process management.

## Features

- **User Authentication**: Register, login, reset passwords, and manage user profiles.
- **Role-Based Access Control**: Permissions vary for tourists, business owners, and admins.
- **Accommodations Management**: Create, read, update, and delete (CRUD) operations for hotels, shortlets, and bars, with search and filtering capabilities.
- **Booking System**: Book accommodations with a mock payment integration.
- **Attractions Management**: CRUD operations for tourist attractions, including user reviews.
- **Blog System**: Create, read, and comment on blog posts.
- **Image Uploads**: Upload and manage images via Cloudinary.
- **Email Notifications**: Send emails for password resets and other notifications.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AlfredPur01/ekiti-tourism-backend.git
   cd ekiti-tourism-backend
Install dependencies:
bash
npm install
Set up MongoDB:
Ensure MongoDB is installed and running locally, or use a cloud instance (e.g., MongoDB Atlas).
Alternatively, use Docker to run MongoDB:
bash
docker run -d -p 27017:27017 --name mongo mongo:latest
Configuration
Environment Variables:
Create a .env file in the root directory by copying the .env.example file.
Update it with the following values:
PORT=5000
MONGO_URI=mongodb://localhost:27017/ekiti-tourism
JWT_SECRET=your_jwt_secret
NODEMAILER_USER=your_email@gmail.com
NODEMAILER_PASS=your_email_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
External Services:
Set up a Cloudinary account for image management and obtain your API credentials.
Configure an email service (e.g., Gmail) for Nodemailer and generate an app-specific password if needed.
Running the Application
Start the server:
bash
npm run dev
The server will be available at http://localhost:5000.
Access Swagger API Documentation:
Open your browser and go to http://localhost:5000/api-docs to explore and test the API endpoints.
API Documentation
The API is documented using Swagger, providing an interactive interface to explore endpoints, request parameters, and responses. Access it at /api-docs when the server is running.
Testing
Run tests:
bash
npm test
This executes all Jest tests and generates a coverage report.
Test Coverage:
Strive for comprehensive coverage by testing critical endpoints and edge cases.
Manual Testing:
Use tools like Postman to manually test endpoints. A sample Postman collection is included in the repository.
Deployment
Docker:
Build and run the application with Docker:
bash
docker-compose up --build
PM2:
For production, manage the process with PM2:
bash
npm run pm2
Production Environment:
Ensure the .env file is configured with production-specific values (e.g., a remote MongoDB URI).
Contributing
We welcome contributions! To contribute:
Fork the repository.
Create a new branch for your feature or bug fix:
bash
git checkout -b feature/your-feature-name
Commit your changes with descriptive messages:
bash
git commit -m "Add your message here"
Push your branch and submit a pull request:
bash
git push origin feature/your-feature-name
Please ensure your code follows the project's style guidelines and includes relevant tests.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

This README provides everything needed to understand, set up, run, test, and contribute to the Ekiti Tourism Project backend. It’s structured for clarity and uses markdown to enhance readability. Let me know if you’d like to adjust anything!
