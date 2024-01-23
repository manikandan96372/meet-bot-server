const express = require('express');
const router = express.Router();
const { listCalendarEvents } = require('../controllers/google-calendar');

router.get('/events', listCalendarEvents);

module.exports = router;