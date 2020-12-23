module.exports = {
    name: 'kick',
    description: "kicks a member from the server",
    execute(message, args){
        // code to be executed when message author sends
        if(!args[0]) message.channel.send("You need to specify a person")
        var user = message.mentions.users.first();
        if(message.author.username == "Mattican")
        {
            if(user)
                {
            var member = message.guild.member(user);
                if(member)
                {
                    member.kick('Feel the might of my boot').then(() => {
                        message.reply("Successfully got the boot ${user.tag}");
                    })
                } else{
                        message.reply("That user isn\'t in this server ")
                    }   
                }   
            else {
                message.reply("That user isn\'t in this server ")
                }  
        }
        else
        {
            message.channel.send({
                files: [
                    "./images/doggoWhat.jpg"
                ]
            });
        }
            }
}