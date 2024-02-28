# Dotidot Home Task
![Dotidot logo](https://assets-global.website-files.com/62f4c8c97222c60e6bcb42f4/64241167c1a88b05f45d288a_animation_layer_1.svg)


## Introduction

This project is developed as part of the Dotidot home task and web application built using a feature-based architecture.

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)


## Tech Stack

This project utilizes the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **React Router Dom**: For handling routing within the application.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **React Query**: A library for managing server state in React applications.
- **Axios**: A promise-based HTTP client for making HTTP requests.
- **Vite**: A modern, fast frontend build tool.
- **ESLint**: A tool for identifying and reporting on patterns in JavaScript.

## Project Structure

The project is structured with import aliases, configured in both Vite config and `tsconfig.json`, for cleaner and more maintainable import statements.


## Architecture

The application adopts a feature-based architecture, organizing code by feature for modularity and scalability. Each feature encapsulates its logic, components, services, and types, fostering a clear separation of concerns.

## Setup and Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/DevAbas/dotidot-home-task.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dotidot-home-task
   ```
3. Install dependencies using Yarn:
   ```bash
   yarn
   ```
4. Start the development server:
   ```bash
   yarn dev
   ```


## Environment Variables
Set up the required environment variables in your local environment.
Create a .env file in your local first and then add a value for VITE_API_BASE_URL

## Usage
After starting the project, access it via http://localhost:3000 in your browser.

