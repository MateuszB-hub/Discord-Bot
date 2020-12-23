module.exports = {
    name: 'clear',
    description: "remove messages from chat up to a certain point by a given integer value",
    async execute(message, args){
        // code to be executed when message author sends
        if(!args[0])return messsage.reply("Please enter the amount of messages you want to clear");
        if(isNaN(args[0])) return message.reply("Please enter a real number");
        if(args[0] > 100)return message.reply("You cannot delete more than a 100 messages");
        if(args[0] < 1) return message.reply("You must delete at least one message");
        // saftey taken care of now I can move onto the clearing

        //async await, waits to fetch the messages then deletes them
        // fetching 10 messages fetching that and waits for messages to be fetched

        await message.channel.messages.fetch({limit: args[0]}). then(messages => {
            message.channel.bulkDelete(messages);
        })

    }
}