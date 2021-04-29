//BTE ASEAN Bot
//A Discord bot for BTE ASEAN
//Made by CookieGMVN#9173
//All rights reversed. Published due to CC 1.0.

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection(); 
const config = require('./data/config.json')
const login = require('./data/botlogin.json')

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
	var type
	console.log('Logged!');
  	console.log('Loaded 16 built-in plugins, 0 external plugin.')
  	console.log('Prefix is ' + config.general.prefix)
  	if (!config.status.type) return type = "PLAYING"
	  if (config.status.type) return type = config.status.type
  	client.user.setActivity(config.status.name, {
  		type: type,
	});
})

client.on('message', message => {
if (!message.content.startsWith(config.general.prefix) || message.author.bot) return;		
	const args = message.content.slice(config.general.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			const PermMiss = new Discord.MessageEmbed()
			.setColor("RED")
			.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
			.setTitle("ERROR!")
			.addFields(
				{ name: "Error Code:", value: "0Ex403" },
				{ name: "Reason:", value: "You don't have enough permissions to run this command. Please check again!" }
			)
			return message.reply(PermMiss);
		}
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`You have to wait ${timeLeft.toFixed(1)} seconds before reuse \`${command.name}\` command.`);
		}
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	try {
		command.execute(message, args, client);
	} catch (error) {
		console.error(error);
		const Err = new Discord.MessageEmbed()
		.setColor("RED")
		.setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ dynamic: true })}`)
		.addFields(
			{ name: 'Error!', value: 'An error occured! Please contact <@584411132769337440>!'},
			{ name: 'Debug Info', value: error}
		)
		message.channel.send(Err)
	}
});

client.login(login.discord.token);