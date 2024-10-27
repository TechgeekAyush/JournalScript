import React from 'react'

const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-4">JournalScript</h1>
        <p className="lead">Welcome to JournalScript, a feature-rich note-taking application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This app allows users to create, view, update, and delete notes efficiently, providing an intuitive interface for managing personal information and tasks.</p>
      </div>

      <div className="mb-5">
        <h2 className="h3">Features</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>User Authentication:</strong> Secure user registration and login using JWT tokens.
          </li>
          <li className="list-group-item">
            <strong>CRUD Operations:</strong> Create, Read, Update, and Delete notes with ease.
          </li>
          <li className="list-group-item">
            <strong>Responsive Design:</strong> Fully responsive design, ensuring a seamless experience on both desktop and mobile devices.
          </li>
          <li className="list-group-item">
            <strong>Dark Mode:</strong> Toggle between light and dark themes for a comfortable viewing experience.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="h3">Technologies Used</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Frontend:</strong> React.js with Bootstrap for responsive design
          </li>
          <li className="list-group-item">
            <strong>Backend:</strong> Node.js with Express.js for API development
          </li>
          <li className="list-group-item">
            <strong>Database:</strong> MongoDB for storing notes and user information
          </li>
          <li className="list-group-item">
            <strong>Authentication:</strong> JWT (JSON Web Tokens) for secure authentication
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About