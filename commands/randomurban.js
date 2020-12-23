
const Discord = module.require("discord.js");
const urban = module.require("urban");


module.exports = {
    name: 'randomurban',
    description:'this should get a random word from the urban dictionary',
    execute(message,args){
// no parsing in this urban file since there is no user input
        urban.random().first(json => {
            if(!json) return message.channel.send("No Results");
            console.log(json);

            let embed = new Discord.MessageEmbed()
                .setTitle(json.word)
                .addField(json.permalink)
                .setDescription(json.definition)
                .addField("Upvotes", json.thumbs_up, true)
                .addField("Downvotes", json.thumbs_down, true)
                .addField("Examples", json.example)
                .addField("Written On:", json.written_on);
            message.channel.send({embed});
        });

    }
}