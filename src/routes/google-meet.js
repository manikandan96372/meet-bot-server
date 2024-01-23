const express = require('express');
const router = express.Router();
const { startMeeting, endMeeting, sendMessageToParticipants, muteUnmuteMicrophone, changeLayout, participantAndHostDetails } = require('../controllers/google-meet');

router.post('/start', startMeeting);
router.delete('/end', endMeeting);
router.post('/send-message-to-participants', sendMessageToParticipants);
router.put('/mute-unmute', muteUnmuteMicrophone);
router.put('/change-layout', changeLayout);
router.post('/participant-and-host-details', participantAndHostDetails);

module.exports = router;