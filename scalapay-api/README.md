
# SCALAPAY API

## Folder Structure

-   **src**: Contains the source code of the application.
    -   **order**: Order module to handle the corresponding api. This folder will also contains a mock file, the used DTO and the tests.
    -   **types**: Data Transfer Objects for defining data structures.
   

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

Ensure to use the correct node version:

`nvm use`

and install the dependencies:

`npm i`

### Configuration

Create a `.env` file within your root folder with the followings:

```
JWT_SECRET=SCALAPAY_SUPER_SECRET
SCALAPAY_SECRET=qhtfs87hjnc12kkos
PORT=5001
```

Feel free to change the value of PORT to the one you prefer to use. If you consider deleting it, the dev server will be available by default on port 3000

### Run the application

Start the development server:

`npm run start:dev`

The Scalapay API will be running at `http://localhost:<PORT>Ï`.
The Swagger will be available at `http://localhost:<PORT>/swagger`.

### Scripts

The other available scripts are:

-   `npm run build`: Build the application for production.
-  `npm run Test`: Run the test suite.
-   `npm run start:prod`: Start the application in production mode.

## Docker

If you do prefer to use Docker in order to run this project you can follow these steps:

### Prerequisites

- Make sure to have [Docker](https://docs.docker.com/get-docker/) installed on your machine and to have it up and running.
- Check if docker daemon is up by running `docker info`.

### Build the application

Clone the repository:

`git clone https://github.com/gvbsxmoon/scalapay-assessment`

Navigate to the api folder:

`cd  <your-scalapay-project-path>/scalapay-api`

Build your docker image: 

`docker build -t scalapay-api:latest .`

### Run the application

Run the image you created:

`docker run -d -p 5001:5001 scalapay-api:latest`

The Scalapay API will be running at `http://localhost:5001`.
The Swagger will be available at `http://localhost:5001/swagger`.



