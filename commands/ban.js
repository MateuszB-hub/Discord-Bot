module.exports = {
    name: 'ban',
    description: "bans a member from the server",
    execute(message, args){
        // code to be executed when message author sends
        if(!args[1]) message.channel.send("You need to specify a person")
        var user = message.mentions.users.first();

        if(user)
        {
            var member = message.guild.member(user);
            if(member)
                {
                    member.ban({days:1, reason: "You have been banned from the server"}).then(() => {
                        message.channel.send("Successfully got the ban hammer ${user.tag}");
                    })
            } else{
                message.reply("That user isn\'t in this server ")
            }
        }
        else{
            message.reply("That user isn\'t in this server ")
        }      }
}