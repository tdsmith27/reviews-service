<link rel="stylesheet" href="lib/readme.css" />

# The Home Repot - Reviews Microservice

This is a Reviews component within a microservice architecture for a product-detail page stylistically based on The Home Depot. The component displays ratings and reviews for a given product, and allows a user to leave a new review and save it to the database. The component displays a total count of reviews for the product, the average review rating, and a visual breakdown of the distribution of ratings. It allows the user to filter the reviews by rating, and sort by age or rating.

## Related Projects

- https://github.com/the-home-repot/overview-service
- https://github.com/the-home-repot/similar-options-service
- https://github.com/the-home-repot/photo-gallery-service

## Table of Contents

1. [App Usage](#app-usage)
   <br>a. [Writing a Review](#writing-a-review)
   <br>b. [Filter Reviews by Rating](#filter-reviews-by-rating)
   <br>c. [Sort by Age or Rating](#sort-by-age-or-rating)
2. [Developer Usage](#developer-usage)
   <br>a. [Installation](#installation)
   <br>b. [Database Setup](#database-setup)
   <br>c. [For Use in Development](#for-use-in-development)
3. [Tech Choices](#tech-choices)

## App Usage

- Displays ratings and reviews for a given product
- Allows a user to leave a new review and save it to the database
- Displays a total count of reviews for the product, the average review rating, and a visual breakdown of the distribution of ratings
- Allows the user to filter the reviews by rating, and sort by age or rating.

<a href="https://imgur.com/ViMmAwH" target=blank><img src="https://i.imgur.com/ViMmAwHl.png" title="source: imgur.com" /></a>

### Writing a Review

<a href="https://imgur.com/Sf4MrW5" target=blank><img src="https://i.imgur.com/Sf4MrW5b.gif" title="source: imgur.com" /></a>
<br><sub>Write a review by entering a name, rating, and review body. Submitted reviews are saved to the database and reviews component is updated with new ratings breakdown and review list</sub>

### Filter Reviews by Rating

<a href="https://imgur.com/dCSv3tb" target=blank><img src="https://i.imgur.com/dCSv3tbb.gif" title="source: imgur.com" /></a>
<br><sub>Click on ratings bar to filter reviews by rating. Click total reviews count to show reviews of all ratings</sub>

### Sort by Age or Rating

<a href="https://imgur.com/YVgLkKT" target=blank><img src="https://i.imgur.com/YVgLkKTb.gif" title="source: imgur.com" /></a>
<br><sub>Click drop-down menu to sort reviews by rating or date posted, in ascending or descending order</sub>

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
10. Seed your database with `npm run seed-reviews`<br>

#### For use in development

<sub>From the root directory of your locally cloned repo:</sub>

1. `npm run react-dev` to compile bundle with live reloading
2. `npm run start` in a new terminal window to start server
3. Navigate to localhost:3030 to view development version of app

## Tech Choices
