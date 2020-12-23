// communicate with node modules
const Discord = require('discord.js');
const urban = require('relevant-urban');
const {prefix, token} = require('./config.json');
const { MessageEmbed } = require('discord.js');
const weather = require('weather-js'); // Make sure you call the packages you install.

const client = new Discord.Client();
const owner = "Mattican";
//const welcome = require('./welcome.js');
const { gmail } = require('googleapis/build/src/apis/gmail');
const fs = require('fs');
client.commands = new Discord.Collection;
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const fetch = require('node-fetch');
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const PREFIX = '!';
client.once('ready', ()=> {
    console.log("Booting Up")// console bot online

    // this code below was for a gmail inbox fetching idea
    // plan on finishing this eventually
    function handleClientLoad() {
        gapi.client.setApiKey(apiKey);
        window.setTimeout(checkAuth, 1);
      }
      
      function checkAuth() {
        gapi.auth.authorize({
          client_id: clientId,
          scope: scopes,
          immediate: true
        }, handleAuthResult);
      }
      
      function handleAuthClick() {
        gapi.auth.authorize({
          client_id: clientId,
          scope: scopes,
          immediate: false
        }, handleAuthResult);
        return false;
      }
      
      function handleAuthResult(authResult) {
        if(authResult && !authResult.error) {
          loadGmailApi();
          $('#authorize-button').remove();
          $('.table-inbox').removeClass("hidden");
        } else {
          $('#authorize-button').removeClass("hidden");
          $('#authorize-button').on('click', function(){
            handleAuthClick();
          });
        }
      }
      
      function loadGmailApi() {
        gapi.client.load('gmail', 'v1', displayInbox);
      }
      function displayInbox() {
        var request = gapi.client.gmail.users.messages.list({
          'userId': 'me',
          'labelIds': 'INBOX',
          'maxResults': 10
        });
      
        request.execute(function(response) {
          $.each(response.messages, function() {
            var messageRequest = gapi.client.gmail.users.messages.get({
              'userId': 'me',
              'id': this.id
            });
      
            messageRequest.execute(appendMessageRow);
          });
        });
      }
});
  


// use this before to specify a command is going to be written afterward
client.on('guildMemberAdd', member => {
    const Embed = new Discord.MessageEmbed()
    .setColor(0x14e70d)
    .setAuthor(member.user.tag + ' [' + member.user.id + ']', member.user.displayAvatarURL()) 
    .setDescription('Profile: ' + "<@" + member.user.id + ">" + "\n" + '• Created: ' + member.user.createdAt + '\n' + '• Joined: ' + member.joinedAt)
    .setTimestamp()
    .setFooter('User has joined');

client.channels.cache.get('786884497311662120').send(Embed);
client.channels.cache.get('786884497311662120').send("Please submit your vibe check to Mattican");
 });
client.on('guildMemberRemove', member => {
   
    const Embed = new Discord.MessageEmbed()
        .setColor(1752220)
        .setAuthor(member.user.tag + ' [' + member.user.id + ']',  member.user.displayAvatarURL())
        .setDescription('Profile: ' + "<@" + member.user.id + ">" + "\n" + "Joined: " + member.joinedAt)
        .setTimestamp()
        .setFooter("User has left");
    client.channels.cache.get('786884497311662120').send(Embed)
    
    return;
});


client.on('message' , async message =>{


    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();
    // allow us to prefix neeeded for arguments

    
   // Need something to handle requests 
   // FIND GMAIL API 
   /*
    Looking for methods its offers and can it do what I am looking for 
    service: api , figure out how to interact with it 

    Primary Goals: 
    GET THE BOT TO RETREIVE A MAIL FROM GMAIL 

    Check if job related 
   */
    switch (command)
    {
        case 'weather':
            weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
                if (err) message.channel.send(err);
    
                // We also want them to know if a place they enter is invalid.
                if (result === undefined || result.length === 0) {
                    message.channel.send('**Please enter a valid location.**') 
                    // This tells users in chat that the place they entered is invalid.
                    return; // stops the code from running
                }
    
                // Variables
                var current = result[0].current; // This is a variable for the current part of the JSON output
                var location = result[0].location; // This is a variable for the location part of the JSON output
    
                // Let's use an embed for this.
                const embed = new Discord.MessageEmbed()
                    .setDescription(`**${current.skytext}**`) // the sky design, like raining, sunny or cloudy 
                    .setAuthor(`Weather for ${current.observationpoint}`) // shows location of the weather
                    .setThumbnail(current.imageUrl) // sets thumbnail 
                    .setColor(0x00AE86) // default hex color for the embedded message
                    .addField('Timezone',`UTC${location.timezone}`, true) // this shows the timezone that the program is in, it can be a little trick to get to work
                    .addField('Degree Type',location.degreetype, true)// This is the field that shows the degree type, and is inline
                    .addField('Temperature',`${current.temperature} Degrees`, true)
                    .addField('Feels Like', `${current.feelslike} Degrees`, true)
                    .addField('Winds',current.winddisplay, true)
                    .addField('Humidity', `${current.humidity}%`, true)
    
                    // Presenting the information
                    message.channel.send({embed});
            });
        break;

        case 'urban':
            client.commands.get('urban').execute(message,args);
        break;
        case 'randomurban':
            client.commands.get('randomurban').execute(message,args);
        break;
        case 'doggo':
          client.commands.get('doggo').execute(message,args);
        break;
        case 'lips':
            client.commands.get('lips').execute(message,args);
        break;
        case 'clear':
            client.commands.get('clear').execute(message, args);
        break;
        case 'ban':
            client.commands.get('ban').execute(message,args);
        break;
        case 'help':
            client.commands.get('help').execute(message,args);
        break;
        case 'kick': 
            client.commands.get('kick').execute(message, args);
        break;
        case 'overwatch':
            client.commands.get('overwatch').execute(message, args);
        break;
        case 'ping':
            client.commands.get('ping').execute(message,args);
        break;
        case 'website':
            message.channel.send('https://github.com/MateuszB-hub');
        break;
        case 'info':
            if(args[1] === 'version')
            {
                message.channel.send('Version 1.0.1 (Filler Text)');
            }
            else
            {
                message.channel.send('Invalid Args');
            }
        break;
        case 'server':
            message.channel.send("Discord Name: " + message.guild.name + "\nTotal Memebers: "+ message.guild.memberCount);
        break;

        case 'user-info':
            message.channel.send("Your username: " + message.author.username + "\nYour ID: " + message.author.id);
        break;
        case 'test' :
            message.reply("What are you doing??");
        break;

        case 'test2':
            message.author.send("Private Message ");
        break;

        case 'test3':
            message.channel.send({embed: {
                color: 3447003,
                title: "Test:",
                fields: [
                  { name: "Test 1", value: "Line1\nLine2\nLine3", inline: true},
                  { name: "Test 2", value: "AlsoLine1\nAlsoLine2\nAndLine3", inline: true}
                ]
              }
            });
        break;

        case 'lessthanthree':
            // the goal with this is to avoid adjacent duplicates, so that would avoid
            // receiving duplicate messages 
            // this code I made works perfectly, just need to avoid 
            // people spamming the command, that ruins the # generation 
            client.commands.get('lessthanthree').execute(message, args);
        break;
            /*
            NEVER USE A DEFAULT, it causes request handler errors in the DiscordAPI 
            Giving the code: 50007 and HTTP: 400 Bad Request 
            This would happen even if a proper command was given, and would cause the bot
            to shut down after one command 
        */

    }   
    
});

client.login(token);