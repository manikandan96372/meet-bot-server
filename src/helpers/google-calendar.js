const _ = require('lodash');
const { HANGOUT_LINK } = require('../constants/google-auth');

const fetchMeetingLinks = (events = []) => {
    try {
        const meetingLinks = _.map(events, HANGOUT_LINK);
        return meetingLinks || [];
    }
    catch (err) {
        return []
    }
}

module.exports = {
    fetchMeetingLinks
}