/*const Discord = require('discord.js')
module.exports = {
	name: 'warn',
	description: 'Warn a user.',
	async execute(message, args, client){
	function getUserFromMention(mention) {
	if (!mention) return;
	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);
		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}
		return mention;
	}
}
 if(!message.member.hasPermission("ADMINISTRATOR")){
 	return message.channel.send("You don't have enough permission!")
 }
 else{
	if(!args[0]){
		return message.reply('You need to mention someone!')
	}
	const id = getUserFromMention(args[0]);
		const reason = args.slice(1).join(' ');
		if(!reason){
			return message.reply('Please input a reason!')
		}
		else{
			if(db.has(id+`Warned`)){
				let warned = await db.get(id+`Warned`)
			const WarnEmbed = new Discord.MessageEmbed()
			.setColor("RED")
			.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
			.addFields(
				{ name: 'User:', value: '<@' + id + '>' },
				{ name: 'Warned by:', value: `${message.author}` },
				{ name: 'Reason:', value: reason },
				)
			.setFooter('This user have warned ' + warned + ' time(s).')
			const channel = client.channels.cache.get('803111831605870592');
			channel.send(WarnEmbed);
			client.users.cache.get(id).send(`You have warned by ${message.author.username} with reason: `+reason+`. Do not make that again!`);
			await db.add(id+`Warned`, 1)
			}
			else{
			const WarnEmbed = new Discord.MessageEmbed()
			.setColor("RED")
			.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
			.addFields(
				{ name: 'User:', value: '<@' + id + '>' },
				{ name: 'Warned by:', value: `${message.author}` },
				{ name: 'Reason:', value: reason },
				)
			.setFooter('This user have warned 0 time(s).')
			const channel = client.channels.cache.get('803111831605870592');
			channel.send(WarnEmbed);
			client.users.cache.get(id).send(`You have warned by ${message.author.username} with reason: `+reason+`. Do not make that again!`);
			await db.add(id+`Warned`, 1)
			}
			}
		}
	}
	}*/