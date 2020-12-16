const Discord = require('discord.js'); 

const options = {
    shardCount:1,
    messageCacheMaxSize:200,
    fetchAllMembers:false,
    restTimeOffset:500,
    restRequestTimeout:15000,
    restSweepInterval:60,
    retryLimit:1
}

const client = new Discord.Client(options);
const clientUser = new Discord.ClientUser();

const token = 'NzUyNjAxODg1OTk5MTA0MDc2.X1aBIA.x1kmmTMudGobQc4dnOB2EBSvd4c';
const probablyResponses = ['Fuck you', 'fuck you'];

client.on('ready', async (received) => {
	await console.log(`Bot is ready as ${client.user.tag}`);
    
    if(received == 'undefined'){
        await console.log(typeof received);
        await console.log(`The data received is undefined`);
    };
});

client.on('message', msg => {

    if( msg.content == 'Hola'){
		msg.channel.send(`Hello ${msg.author}!!`);
    }else if(msg.content == 'Whats is my avatar'){
        msg.channel.send(`That is: ${message.author.displayAvatarURL()}`);
        
    }else{
        msg.channel.send(`Send something mesmerizing`);
    }
    
    
    if(msg.content == '.'){
        if(client.on('message')){
            do{
                printf("what you wanna get?\n");
                printf("1.Date right now");
                printf("2.What rocket has been launched the last week");
                printf("3.Exit");
            }while(msg.content != '3');
        };      
    }


});
	

client.login(token);
