module.exports = {
    name: 'ping',
    description: "this is a ping command",
    execute(message, args){
        // code to be executed when message author sends
        message.channel.send('pong!');
    }
}
