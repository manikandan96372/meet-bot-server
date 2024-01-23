const { google } = require('googleapis');
const fs = require('fs');
const readline = require('readline');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);
const path = require('path');

const { ACCESS_TYPE, GOOGLE_CALENDAR_AUTH_READ_ONLY_SCOPE } = require('../constants/google-auth');

async function fetchOAuth2Client() {
    const content = await readFileAsync(path.join(__dirname, '../google-credentials/credentials.json'));
    const credentials = JSON.parse(content);

    const { client_secret, client_id, redirect_uris, refresh_token } = credentials?.web;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    oAuth2Client.setCredentials({
        refresh_token
    })

    try {
        const token = await readFileAsync(path.join(__dirname, '../google-credentials/token.json'));
        oAuth2Client.setCredentials(JSON.parse(token));
        oAuth2Client.setCredentials({
            refresh_token
        })
    } catch (err) {
        console.log(err)
        await getAccessToken(oAuth2Client);
    }
    return oAuth2Client;
}

async function getAccessToken(oAuth2Client) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: ACCESS_TYPE,
        scope: [GOOGLE_CALENDAR_AUTH_READ_ONLY_SCOPE],
    });

    console.log('Authorize this app by visiting this url:', authUrl);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const code = await new Promise(resolve => {
        rl.question('Enter the code from that page here: ', resolve);
    });

    rl.close();

    const token = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(token);

    fs.writeFile(path.join(__dirname, '../google-credentials/token.json'), JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to token.json');
    });
}

module.exports = {
    fetchOAuth2Client
}
