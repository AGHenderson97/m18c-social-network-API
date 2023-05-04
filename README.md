# m18c-social-network-API

A RESTful API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. This API is built using Node.js, Express.js, MongoDB, and Mongoose ODM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Walkthrough](#walkthrough)
- [User Story](#userstory)
- [Acceptance Criteria](#acceptancecriteria)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the required dependencies.
3. Ensure MongoDB is installed and running on your system.
4. Run `npm start` to start the server.

## Usage

To interact with the API, you can use an API testing tool like [Insomnia](https://insomnia.rest/).

## Endpoints

Below are the available API endpoints:

- User
- Friend
- Thought
- Reaction

## Walkthrough
https://drive.google.com/file/d/1-cFqzJEVlSOdmSC-X-cwdSO8KoUNj8r6/view?usp=share_link

## User Story:
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria:
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
