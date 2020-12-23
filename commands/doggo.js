module.exports = {
    name: 'doggo',
    description: "show off someone precious",
    execute(message, args){
        // code to be executed when message author sends
        
        var pastNum = 0
        var currentNum = 0 
        random = Math.floor(Math.random() * 2)+ 1;
        currentNum = random
        while(pastNum == currentNum){
        
            random = Math.floor(Math.random() * 2) + 1;
            currentNum = random
        }
        pastNum = currentNum
        
        console.log(random)
        switch(random)
        {
            case 1:
                message.channel.send({
                    files: [
                        "./images/meAndKora.jpg"
                    ]
                });
            break;

            case 2:
                message.channel.send({
                    files: [
                        "./images/happyGorl.jpg"
                    ]
                });
            break;
        }
        
    }
}