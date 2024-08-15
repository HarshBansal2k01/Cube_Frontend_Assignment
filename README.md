
---

# Cube Frontend Assignment

This repository contains the frontend assignment project for Cube, developed using React, TypeScript, and Vite. The project is styled with Tailwind CSS and Material UI, and it implements a customer details portal with a dynamic photo grid fetched from the Unsplash API.

**Live Demo:** [Cube Frontend Assignment](https://cube-frontend-assignment-eosin.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Assignment Instructions](#assignment-instructions)

## Overview

This project is a single-page application developed in React and TypeScript, designed to display a list of customers and their details, including a dynamic 3x3 photo grid. The application follows best practices for component re-rendering, hooks, and state management.

## Features

- **Responsive Design**: The application is fully responsive, ensuring usability across various devices.
- **Customer List**: Displays up to 1000 customer entries with names and titles.
- **Dynamic Photo Grid**: A 3x3 grid of photos that updates every 10 seconds with images fetched from the Unsplash API.
- **Customer Details**: Shows detailed information for each customer, including name, title, address, and photos.
- **Highlighted Selection**: The selected customer card on the list is highlighted for easy identification.
- **Deployment**: The application is deployed on Vercel for easy access.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript.
- **Vite**: A fast development server and build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Material UI**: React components for faster and easier web development.
- **Change.js**: Used for generating fake customer data.
- **Unsplash API**: Used to fetch and display images dynamically.
- **Vercel**: Hosting and deployment platform for modern web apps.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HarshBansal2k01/Cube_Frontend_Assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Cube_Frontend_Assignment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To start the development server, run:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

- `src/`: Contains the main source code for the project.
  - `components/`: Reusable React components.
- `public/`: Static assets like images and fonts.
- `README.md`: Project documentation.

## Assignment Instructions

### React Assignment

Develop a single-page application in React and TypeScript which shows a customer details portal with the following specifications:

1. The portal has a list of customers on the left side. Upon clicking a card, the details of the customer are shown on the right side.
2. The customer list on the left can contain as many as 1000 entries.
3. Each card in the list shows the name of the customer and their title.
4. Customer details include the customer name, title, address, and a 3x3 grid of 9 photos.
5. The selected card on the left is highlighted.
6. All pictures in the photo grid should change every 10 seconds. Fetch the photos from a public API.

---

