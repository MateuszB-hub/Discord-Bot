
const Discord = module.require("discord.js");
const urban = module.require("urban");


module.exports = {
    name: 'urban',
    description:'this should get a word from the urban dictionary',
    execute(message,args){
        if(args.length < 1) return message.channel.send("Please enter a word with the command");
        let str = args.join(" ");
            // makes the list of input into a single string to process it and find the word
        urban(str).first(json => {
            if(!json) return message.channel.send("No Results");
            console.log(json);

            let embed = new Discord.MessageEmbed()
                .setTitle(json.word)
                .addField(json.permalink)
                .setDescription(json.definition)
                .addField("Upvotes", json.thumbs_up, true)
                .addField("Downvotes", json.thumbs_down, true)
                .addField("Written On:", json.written_on);
            message.channel.send({embed});
        });

    }
}