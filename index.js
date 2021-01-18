const Discord = require('discord.js');
const client = new Discord.Client();
 
const cheerio = require('cheerio');
const request = require('request');

const prefix = 'botulica ';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Mere botu!');
});
 
client.on('message', message =>{
    if(message.content==='buzau'){
        message.channel.send('Sa-mi bag pulan curu tau!');
    }
    if(message.content==='bucuresti'){
        message.channel.send('Pula mi-o belesti!');
    }
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    // const args = message.content.slice(prefix.length).split(/ +/);
    // const command = args.shift().toLowerCase();
    const command = message.content;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command2 = args.shift().toLowerCase();
    if(command === 'botulica spune ceva actual'){
        client.commands.get('spune').execute(message, args);
    }
    else if(command2 === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command2 === 'help'){
        client.commands.get('command').execute(message, args, Discord);
    } else if(command2 === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command2 === 'image'){
        client.commands.get('goagal').execute(message, args, request, cheerio);   
    } else if(command2 === 'play' || command2 === 'p'){
        client.commands.get('play').execute(message, args);
    } else if(command2 === 'leave' || command2 === 'l'){
        client.commands.get('leave').execute(message, args);
    }  else {
        client.commands.get('default').execute(message, args);
    }
});

client.login('NzkyMzM2Mjg0MjIzNTM3MTUy.X-cOqw.5Qv9YKDCiLZqa1JKRCde5sXOSpk');
