
# SCALAPAY API

## Folder Structure

-   **src**: Contains the source code of the application.
    -   **order**: Order module, controller and service to handle the corresponding scalapay api. This folder will also contains a mock file and the Order DTO.
    -   **types**: Data Transfer Objects for defining data structures.
    -   **test**: Application tests
    -   **utils**: The possible utility files 
   

## Getting Started

To run this NestJS project locally, follow these steps:

### Prerequisites

Make sure you have the following software installed on your machine:

-   Node.js: [Download and Install Node.js](https://nodejs.org/)
-   npm (Node Package Manager): Installed with Node.js
-   nvm (Node Version Manager): [Follow this to install nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Install Dependencies

Clone the repository:

`git clone https://github.com/gvbsxmoon/scalapay-assessment`

Navigate to the api folder:

`cd  <your-scalapay-project-path>/scalapay-api`

Ensure to use the correct node version or to install it:

`nvm use` || `nvm install` if you dont have it on your machine

and install the dependencies:

`npm i`

### Configuration

This project will use `cross-env` which in the `package.json` scripts defines environment variables, including the port:

```
JWT_SECRET=SCALAPAY_SUPER_SECRET
SCALAPAY_SECRET=qhtfs87hjnc12kkos
```

Feel free to add the value of PORT to the one you prefer to use. The dev server will be available by default on port 3000.

### Run the application

Start the server:

`npm run start`

The Scalapay API will be running at `http://localhost:3000`.
The Swagger will be available at `http://localhost:3000/swagger`.

### Scripts

The other available scripts are:

-  `npm run start:dev`: Start the development server.
-  `npm run test`: Run the test suite.
-  `npm run test:cov`: Run the test suite and show the coverage.

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

The Scalapay API will be running at `http://localhost:3000`.
The Swagger will be available at `http://localhost:3000/swagger`.



