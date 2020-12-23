module.exports = {
    name: 'help',
    description: "give the user some commands to enter",
    execute(message, args){
        // code to be executed when message author sends
        message.channel.send({embed:{
            color: 1146986,
            title: "Commands",
            fields: [
                { name: "!ping", value : "The bot will message you back with pong", inline: false},
                { name: "!info", value: "Add on 'version' after info to see what version we are on", inline: false},
                { name: "!website", value: "A link to Mattican's Github account to see what else he has made", inline: false},
                { name: "!lessthanthree", value: "The robot sends you a nice message", inline: false},
                { name: "!server", value: "Some info about the server", inline: false},
                { name: "!user-info", value: "Get to know some details about yourself, they will be posted on the channel", inline: false},
                { name: "!lips", value : "Watchout for member health", inline: false},
                ]
            }
        });
    }
}