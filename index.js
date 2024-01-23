const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

const googleCalendarRoutes = require('./src/routes/google-calendar');
const googleMeetRoutes = require('./src/routes/google-meet');

dotenv.config();

const serverPort = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/google-calendar', googleCalendarRoutes);
app.use('/google-meet', googleMeetRoutes);

app.listen(serverPort, () => {
  console.log(`Server is listening at http://localhost:${serverPort}`);
});