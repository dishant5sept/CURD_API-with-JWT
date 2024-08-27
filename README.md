# CURD API with JWT

## Project Description

This project is a robust Node.js-based application designed with a modular and scalable architecture. The application leverages Sequelize ORM for database interactions, following the MVC (Model-View-Controller) design pattern. It features a role-based access control (RBAC) system, enabling secure and efficient management of users and resources. The project is structured to facilitate easy maintenance, scalability, and clear separation of concerns, making it suitable for both small-scale and large-scale applications.

Key features of the project include:

- **Role-Based Access Control (RBAC):** Ensures that users have access only to the resources and actions permitted by their roles.
- **Authentication & Authorization:** Utilizes JWT for secure user authentication and token-based authorization.
- **RESTful API Design:** Provides well-defined routes for managing users and resources with support for CRUD operations.
- **Error Handling:** Includes middleware for global error handling, ensuring consistent and clear error responses.
- **Configuration Management:** Centralizes configuration in a single location, simplifying the process of adapting the application to different environments.

This project is ideal as a starting point for building secure and scalable backend systems, particularly those requiring user management and resource control.

## Project Structure

The project is organized into several folders and files, each with a specific purpose to ensure clear separation of concerns and maintainability.

```plaintext
project-root/
│
├── src/
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── app.js
│
├── .env
├── package.json
└── README.md
```

### Folder and File Descriptions

1. **`src/config/`**: Contains configuration files for setting up databases and other services.
   - `database.js`: Database connection configuration using environment variables.

2. **`src/models/`**: Contains Sequelize model definitions and associations.
   - `index.js`: Initializes Sequelize and sets up models and their associations.
   - `user.js`: Defines the `User` model.
   - `role.js`: Defines the `Role` model.
   - `resource.js`: Defines the `Resource` model.

3. **`src/controllers/`**: Contains controller logic for handling requests and business logic.
   - `authController.js`: Handles user registration and login.
   - `userController.js`: Manages operations on users, like fetching and deleting users.
   - `resourceController.js`: Manages operations on resources, like creating, updating, and deleting resources.

4. **`src/routes/`**: Defines the API endpoints and maps them to their respective controllers.
   - `authRoutes.js`: Routes for authentication (register, login).
   - `userRoutes.js`: Routes for user management (fetch, delete users).
   - `resourceRoutes.js`: Routes for resource management (CRUD operations).

5. **`src/middleware/`**: Contains middleware functions that handle tasks like authentication and error handling.
   - `authMiddleware.js`: Middleware for token authentication and role-based authorization.
   - `errorMiddleware.js`: Global error handling middleware.

6. **`src/utils/`**: Placeholder for utility functions and helper modules.

7. **`src/app.js`**: The main entry point of the application where routes are registered and the server is started.

8. **`.env`**: Environment variables for configuring the application, such as database credentials and JWT secret.

9. **`package.json`**: Contains metadata about the project, scripts for running the application, and dependencies.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MySQL (or compatible database)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the project root with the following contents:
     ```plaintext
     DB_HOST=localhost
     DB_USER=your_mysql_username
     DB_PASS=your_mysql_password
     DB_NAME=rbac_db
     JWT_SECRET=your_jwt_secret
     PORT=3000
     ```

4. Run database migrations (if needed) or sync models with the database:
   ```bash
   npm run migrate
   ```

### Running the Application

Start the application in development mode:
```bash
npm run dev
```

Or start it in production mode:
```bash
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

Here’s a brief overview of the available API endpoints:

- **Auth Routes**:
  - `POST /api/auth/register` - Register a new user.
  - `POST /api/auth/login` - Authenticate and log in a user.

- **User Routes**:
  - `GET /api/users` - Get all users (Admin only).
  - `DELETE /api/users/:id` - Delete a user by ID (Admin only).

- **Resource Routes**:
  - `GET /api/resources` - Get all resources.
  - `POST /api/resources` - Create a new resource.
  - `PUT /api/resources/:id` - Update a resource by ID (Admin only).
  - `DELETE /api/resources/:id` - Delete a resource by ID (Admin only).

## Contributing

If you want to contribute, please follow these guidelines:

1. Fork the project.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.
