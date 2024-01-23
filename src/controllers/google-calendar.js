const { fetchOAuth2Client } = require('../services/google-auth');
const { listCalendarEvents: listCalendarEventsService } = require('../services/google-calendar')


const listCalendarEvents = async (req, res) => {
    const auth = await fetchOAuth2Client();
    const calendarEvents = await listCalendarEventsService(auth);

    res.status(200).send({
        message: 'Successfully fetched calendar events',
        calendarEvents
    })

}


module.exports = {
    listCalendarEvents
}