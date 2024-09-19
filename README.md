# JournalScript

Welcome to JournalScript, a feature-rich note-taking application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This app allows users to create, view, update, and delete notes efficiently, providing an intuitive interface for managing personal information and tasks.

## Features

- **User Authentication**: Secure user registration and login using JWT tokens.
- **CRUD Operations**: Create, Read, Update, and Delete notes with ease.
- **Responsive Design**: Fully responsive design, ensuring a seamless experience on both desktop and mobile devices.
- **Dark Mode**: Toggle between light and dark themes for a comfortable viewing experience.

## Technologies Used

- **Frontend**: React.js with Bootstrap for responsive design
- **Backend**: Node.js with Express.js for API development
- **Database**: MongoDB for storing notes and user information
- **Authentication**: JWT (JSON Web Tokens) for secure authentication

## Installation

### Prerequisites

- Node.js
- Express.js
- MongoDB
- Vite

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/TechgeekAyush/JournalScript.git
   cd JournalScript

2. **Create a .env file in the root directory and add the following:**

   ```sh
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongodb_connection_string

4. **Install dependencies and run the application:**
   ```sh
   # In the root directory, change the directory to server and run the server
   cd backend
   npm install
   npx nodemon index.js

   # In another terminal, change the directory to client and run the client
   cd frontend
   npm install
   npm run dev

## Usage

1. **Sign Up** to start using JournalScript.
2. **Log in** with your credentials.
3. **Create new notes**
4. **Update or delete** notes as needed.
