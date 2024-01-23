# Meet bot server

A meet bot server that could assist a user in meetings with various functionalities

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)

## Prerequisites

1. Node version 18
2. NPM version 9.5.1

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/manikandan96372/meet-bot-server.git
   cd meet-bot-server

2. npm install

3. cp .env.example .env

4. npm start


## Usage

1. The meet bot server is now running at http://localhost:3001. You can use tools like Postman or cURL to interact with the endpoints.
2. It can fetch the calendar events of the bot user and respond with respective meeting links.
3. It can trigger the meet bot client to join a meeting when a meeting link is provided via an API
4. It can trigger the meet bot client to mute and unmute microphone afterwards
5. It can trigger the meet bot client to change the layout of the meeting afterwards
6. It can trigger the meet bot client to send messages to other participants in the meeting
7. It can receive the name of participants who joined the meeting as well as the presence of host of the meeting from meet bot client
8. It can trigger the meet bot client to end a meeting
9. This server handles one meeting session at a time.

## Endpoints

1. Kindly refer to meet_bot_server.postman_collection.json at the root folder of the application.

2. It consists of all API endpoints and a sample request and response for API usage