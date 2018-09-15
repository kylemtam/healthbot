var express = require('express');
var app = express();
var FBBotFramework = require('fb-bot-framework');
// Initialize
var bot = new FBBotFramework({
    page_token: 'EAADffTomEQgBAHgjh8q7EMKJb1W6ZARTMEXySeZAZAgt5z6dBYqjhDqHEbiIDW03Wq1ZBjXkP07YGP4SCyUUxPGXeAtZBYZAkSerbTrGZBYZBApJMOAYprDutGZB4S4WsNZABM9qKux8hyGB9VOgDrssXvKeVhV0TWDXEyld3lGbWpw2Ap3AlEHIq8',
    verify_token: 'verify_token'
});
// Setup Express middleware for /webhook
app.use('/webhook', bot.middleware());
// Setup listener for incoming messages
bot.on('message', function(userId, message){
    console.log('msg', message)
    bot.sendTextMessage(userId, 'Echo Message: ' + message);
});
app.get('/', function (req, res){
    res.send('Health Bot');
});
//Make Express listening
app.listen(3000);