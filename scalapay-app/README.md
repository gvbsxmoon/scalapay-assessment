# SCALAPAY APP

## Folder Structure

-   **src**: Contains the source code of the application.
    -   **assets**: Mocked data, logos
    -   **components**: Structured design system based on the Atomic Design Patter
        -   **atoms**
        -   **molecules**
        -   **organisms**
    -   **context**: Order context
    -   **interfaces**: The interfaces used throughout the app
    -   **styles**: Color palette, fonts definition and global style
    -   **views**: The views that make up the pages  
   

## Getting Started

To run this Vite React project locally, follow these steps:

### Prerequisites

Make sure you have the following software installed on your machine:

-   Node.js: [Download and Install Node.js](https://nodejs.org/)
-   npm (Node Package Manager): Installed with Node.js
-   nvm (Node Version Manager): [Follow this to install nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Install Dependencies

Clone the repository:

`git clone https://github.com/gvbsxmoon/scalapay-assessment`

Navigate to the api folder:

`cd  <your-scalapay-project-path>/scalapay-app`

Ensure to use the correct node version or to install it:

`nvm use` || `nvm install` if you dont have it on your machine

and install the dependencies:

`npm i`

### Run the application

** IMPORTANT: if by chance a custom port has been defined within the API project, change the port of the `_baseUrl` in `./src/views/FormView.tsx` in the port value chosen previously**

Start the server:

`npm run dev`

The Scalapay APP will be running at `http://localhost:5173`.

### Scripts

The other useful available scripts are:

-  `npm run test`: Run the test suite.

### Known errors

Despite the form validation is working, error messages have not been managed.

## Docker

If you do prefer to use Docker in order to run this project you can follow these steps:

### Prerequisites

- Make sure to have [Docker](https://docs.docker.com/get-docker/) installed on your machine and to have it up and running.
- Check if docker daemon is up by running `docker info`.

### Clone the application

Clone the repository:

`git clone https://github.com/gvbsxmoon/scalapay-assessment`

Navigate to the root folder folder:

`cd  <your-scalapay-project-path>`

### Run the application

`docker-compose up`

The Scalapay APP will be running at `http://localhost:5173`.



