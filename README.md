# Refresh

A simple Express.js server application for learning and development purposes.

## Description

This project is a Node.js Express server that provides several REST API endpoints for testing and learning purposes.

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Dependencies

- **express**: ^5.2.1 - Web framework for Node.js

## Development Dependencies

- **nodemon**: ^3.1.11 - Monitor for changes and auto-restart the server

## Available Scripts

- `npm run devStart` - Start the server in development mode with auto-reload via nodemon
- `npm test` - Run tests (not yet configured)

## API Endpoints

- **GET /** - Returns a welcome message with the server URL
- **GET /ping** - Returns `{ message: "pong" }`
- **GET /status** - Returns server status information including version
- **GET /square/:number** - Calculates the square of a given number (route in progress)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run devStart
   ```

3. The server will run on `http://localhost:3000`

## Project Structure

- `server.js` - Main server file with Express configuration and routes
- `refresher.js` - Utility functions and learning examples

## Notes

- The project uses ES Modules (import/export syntax)
- Currently runs on port 3000
- Some endpoints and utility functions are still in development
