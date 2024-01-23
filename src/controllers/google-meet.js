const axios = require("axios");

const startMeeting = async (req, res) => {
    try {
        const { meetingLink } = req?.body;

        if (!meetingLink) {
            res.status(400).send({ message: 'Bad request - Meeting link cannot be empty' })
        }

        await axios.post(
            `${process.env.MEET_BOT_CLIENT_BASE_URL}/google-meet/start`,
            {
                meetingLink
            }
        );

        res.status(200).send({ message: 'Successfully joined meeting' })

    }
    catch (err) {
        res.status(500).send({ message: 'Error occurred while starting the meeting' })
    }
}

const endMeeting = async (req, res) => {
    try {
        const { meetingLink } = req?.body;

        if (!meetingLink) {
            res.status(400).send({ message: 'Bad request - Meeting link cannot be empty' })
        }

        await axios.delete(
            `${process.env.MEET_BOT_CLIENT_BASE_URL}/google-meet/end`,
            {
                meetingLink
            }
        );

        res.status(200).send({ message: 'Successfully ended meeting' })
    }
    catch (err) {
        res.status(500).send({ message: 'Error occurred while ending the meeting' })
    }

}

const sendMessageToParticipants = async (req, res) => {
    try {
        const { message } = req?.body;

        if (!message) {
            res.status(400).send({ message: 'Bad request - Message cannot be empty' })
        }

        await axios.post(
            `${process.env.MEET_BOT_CLIENT_BASE_URL}/google-meet/send-message-to-participants`,
            {
                message
            }
        );

        res.status(200).send({ message: 'Successfully sent message to participants in the meeting' })
    }
    catch (err) {
        res.status(500).send({
            message: 'Error occurred while sending message to participants'
        })
    }
}

const muteUnmuteMicrophone = async (req, res) => {
    try {
        await axios.put(
            `${process.env.MEET_BOT_CLIENT_BASE_URL}/google-meet/mute-unmute`
        );

        res.status(200).send({ message: 'Successfully sent message to participants in the meeting' })
    }
    catch (err) {
        res.status(500).send({
            message: 'Error occurred while muting unmuting the microphone'
        })
    }
}

const changeLayout = async (req, res) => {
    try {
        await axios.put(
            `${process.env.MEET_BOT_CLIENT_BASE_URL}/google-meet/change-layout`
        );

        res.status(200).send({ message: 'Successfully sent message to participants in the meeting' })
    }
    catch (err) {
        res.status(500).send({
            message: 'Error occurred while muting unmuting the microphone'
        })
    }
}

const participantAndHostDetails = (req, res) => {
    try {
        const { participants, hasHostJoined } = req?.body;

        console.log("Active participants who has joined the meeting :\n");
        console.log(participants);
        console.log("Has the host joined : \n");
        console.log(hasHostJoined)
    }
    catch (err) {
        res.status(500).send({
            message: 'Error occurred while processing the participants and host details'
        })
    }
}

module.exports = {
    startMeeting,
    endMeeting,
    sendMessageToParticipants,
    muteUnmuteMicrophone,
    changeLayout,
    participantAndHostDetails
}