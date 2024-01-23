const { google } = require('googleapis');

const { GOOGLE_CALENDAR_VERSION, GOOGLE_CALENDAR_ID, GOOGLE_CALENDAR_ORDER_BY } = require('../constants/google-auth');
const { fetchMeetingLinks } = require('../helpers/google-calendar');


const listCalendarEvents = (auth) => {
    return new Promise(async (resolve, reject) => {
        const calendar = google.calendar({ version: GOOGLE_CALENDAR_VERSION, auth });
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        calendar.events.list({
            calendarId: GOOGLE_CALENDAR_ID,
            timeMin: today.toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: GOOGLE_CALENDAR_ORDER_BY,
        }, (err, res) => {
            if (err) {
                reject(err)
            };
            const events = res?.data?.items || [];
            if (events?.length) {
                const meetingLinks = fetchMeetingLinks(events);
                resolve(meetingLinks)
            } else {
                resolve([])
            }
        });
    })
}

module.exports = {
    listCalendarEvents
}