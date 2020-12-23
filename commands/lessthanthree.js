module.exports = {
    name: 'lessthanthree',
    description: "give a nice message to the command sender :)",
    execute(message, args){
        // code to be executed when message author sends
        var pastNum = 0
            var currentNum = 0 
            random = Math.floor(Math.random() * 5)+ 1;
            currentNum = random
            while(pastNum == currentNum){
            
                random = Math.floor(Math.random() * 5) + 1;
                currentNum = random
            }
            pastNum = currentNum
            
            console.log(random)
            switch(random)
            {
                case 1: 
                    message.channel.send({embed: {
                        color: 16580705,
                        title: "<3",
                        fields: [{name: "You too", inline: true}]
                    }});
                break;

                case 2: 
                    message.channel.send({embed: {
                        color: 16580705,
                        title: "<3",
                        fields: [{
                            name: "It always seems impossible until you try :)", inline: true
                        }]
                        }});
                break;
                
                case 3: 
                    message.channel.send({embed: {
                        color: 16580705,
                        title: "<3",
                        fields: [{
                            name: "No one is like you", inline: true
                        }]
                    }});
                break;

                case 4: 
                    message.channel.send({embed: {
                        color: 16580705,
                        title: "<3",
                        fields: [{
                            name: "Perfection is impossible, do the best to be your best", inline: true
                        }]
                    }});
                break;

                case 5: 
                message.channel.send({embed: {
                    color: 16580705,
                    title: "<3",
                    fields: [{
                        name: "Comparing yourself to others will just make you stressed and tired, focus on making yourself the best you possible.", inline: true
                    }]
                    }});
                break;
            }
    }
}