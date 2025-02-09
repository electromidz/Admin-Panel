# TurboRepo Project

Welcome to the TurboRepo Project! This repository is built with Next.js, MongoDB, and NextAuth for authentication. The project also includes an admin panel for managing data. MongoDB is run using Docker for easy setup and management.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **TurboRepo:** Fast and efficient monorepo management.
- **Next.js:** Modern React framework for server-rendered and statically generated web applications.
- **MongoDB:** NoSQL database for storing application data.
- **NextAuth:** Authentication for secure login and session management.
- **Admin Panel:** Interface for managing application data.
- **Docker:** Containerized MongoDB for easy setup and deployment.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version >= 14.x)
- [Docker](https://www.docker.com/get-started) (for MongoDB)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/turbo-repo-project.git
   cd turbo-repo-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the following:

   ```env
   MONGODB_URI=mongodb://localhost:27017/turbo-repo
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret
   ```

## Running the Project

1. **Start MongoDB with Docker:**

   ```bash
   docker run -d -p 27017:27017 --name mongo-db mongo
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

   Your application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- **Admin Panel:** Navigate to `/admin` to access the admin panel.
- **Authentication:** Sign up and log in using the authentication forms provided.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

