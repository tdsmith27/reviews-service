# The Home Repot - Reviews Microservice

This is a Reviews component within a microservice architecture for a product-detail page based on The Home Depot

## Related Projects

- https://github.com/the-home-repot/overview-service
- https://github.com/the-home-repot/similar-options-service
- https://github.com/the-home-repot/photo-gallery-service

## Table of Contents

1. [App Usage](#app-usage)
2. [Developer Usage](#developer-usage)
3. [Tech Choises](#tech-choices)

## App Usage

## Developer Usage

#### Prerequisites

This application is built with Node and will require Node to be installed to run. To install Node, follow the [instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) <br>
<sub>_installing with nvm recommended_</sub>

#### Installation

1. Navigate to [repo](https://github.com/tdsmith27/reviews-service)
2. Clone locally using `git clone https://github.com/tdsmith27/backyard-veggies.git`
3. Install dependencies with `npm install`

#### Database setup

This app uses an Atlas-hosted mongoDB cluster.

1. Navigate to mongodb.com/cloud/atlas in your web browser and sign in or create an account
2. Create a new project
3. Within this project, build a new DB cluster
4. Click the "Connect" button for the newly created cluster
5. After making sure to whitelist the IP address that your server will run from, create a MongoDB user and click "Choose a connection method"
6. Click "Connect Your Application" to generate a connection string
7. In your local repo, navigate to the file titled sample.env and rename it or duplicate it as .env
8. In the .env file, complete the DB_USR and DB_PASS fields with the username and password created from step 5
9. Complete the DB_STRING field with everything between the @ and ? in the generated connection string from step 6
10. Seed your database with `node db/seedVeggies.js`<br>
    <sub>_Be patient, this step could take several minutes_</sub>

#### For use in development

<sub>From the root directory of your locally cloned repo:</sub>

1. Build with `npm run react-dev`
2. Start server with `npm run start`
3. Navigate to localhost:3030 to view development version of app

## Tech Choices
