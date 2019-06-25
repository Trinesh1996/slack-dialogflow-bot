'use-strict'
const slackClient = require("../server/slackClient");
const service = require('../server/index')
const https = require('https')

const token = "xoxb-677454012294-668969956241-cf0cUkOYb8i5jNLZOdlceY5O"
// const tokenAuth = process.env.SLACK_TOKEN || token

let slackLoglevel = 'verbose'

const rtm = slackClient.init(token, slackLoglevel)
rtm.start()

// slackClient.addAuthenticatedHandler(rtm, () => {
 
 
// })

const server = https.createServer(service);
server.listen(3000)
server.on('listening', function () {
    console.log(`Server is listening on PORT ${server.address().port} in ${service.get('env')} mode.`)
});