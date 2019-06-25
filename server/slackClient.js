'use strict'
const { RTMClient } = require('@slack/rtm-api');
const { createEventAdapter } = require('@slack/events-api');
const ob = require("../object")


const slackEvents = createEventAdapter("8939dfd75725889468cf2e903491182a");


function handleOnAuthenticated (rtmStartData) {
    console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected`)
}

// async function addAuthenticatedHandler(rtm, handler) {
//     let conversationId = "DKV9RGECV"

//     rtm.on("message", (event) => {
//         console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`)     
   
//     })
// };

// After the connection is open, your app will start receiving other events
// The client is initialized and then started to get an active connection to the platform
module.exports.init = function slackClient(token, logLevel) {
    const rtm = new RTMClient(token, {logLevel: logLevel});
    // addAuthenticatedHandler(rtm, handleOnAuthenticated)
    rtm.on('ready', async () => {
        console.log("CONNECTED");
      });

      rtm.on("message", (event) => {
          console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`)     
          if (event.text != null) {
            rtm.sendMessage("How are you Trinesh?", "DKV9RGECV", function () {
                console.log("success")
            })
          }          
    })     
    return rtm
}

// module.exports.addAuthenticatedHandler = addAuthenticatedHandler