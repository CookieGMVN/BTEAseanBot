const Discord = require('discord.js');
const moment = require('moment-timezone');
module.exports = {
	name: 'rule',
	description: 'Rule',
	execute(message, args){
		moment.tz.setDefault("Asia/Singapore");
		var time = moment().format('lll')
        if(args.length > 1){
        	return message.channel.send('Too much arguments!')
        }
		else if(!args[0]){
			const RuleGeneral = new Discord.MessageEmbed()
			.setColor("BLUE")
			.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
			.setTitle('BTE ASEAN Rule')
			.addFields(
				{ name: 'Rule #1', value: 'Being nice to others.\nAll forms of Racism, Sexism, Homophobia and other forms are prohibited. This can lead to heavy punishment.' },
				{ name: 'Rule #2', value: 'No NSFW (Not Safe For Work).\nSexual contents are banned here including texts, images, links, even voice chat!' },
				{ name: 'Rule #3', value: 'Follow Discord’s Terms of Services (TOS).\nhttps://discord.com/terms' },
				{ name: 'Rule #4', value: 'No spamming and randomly pinging someone.' },
				{ name: 'Rule #5', value: 'No talking about heavy politics or any other heavy topics.\nWe don’t allow any heavy topics in this server. Punishment will be used if you discuss about them.' }
				)
			.setFooter('Content requested at: '+time+' GMT +8')
			message.channel.send(RuleGeneral)
			}
			if (args[0] === '1' || args[0] === '#1'){
				const rule1 = new Discord.MessageEmbed()
				.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
				.setTitle('BTE ASEAN Rule #1')
				.addFields(
					{ name: 'Rule #1', value: 'Being nice to others.\nAll forms of Racism, Sexism, Homophobia and other forms are prohibited. This can lead to heavy punishment.' },
					)
				.setFooter('Content requested at: '+time+' GMT +8')
				message.channel.send(rule1)
			}
			if (args[0] === '2' || args[0] === '#2'){
				const rule2 = new Discord.MessageEmbed()
				.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
				.setTitle('BTE ASEAN Rule #2')
				.addFields(
					{ name: 'Rule #2', value: 'No NSFW (Not Safe For Work).\nSexual contents are banned here including texts, images, links, even voice chat!' },
					)
				.setFooter('Content requested at: '+time+' GMT +8')
				message.channel.send(rule2)
			}
			if (args[0] === '3' || args[0] === '#3'){
				const rule3 = new Discord.MessageEmbed()
				.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
				.setTitle('BTE ASEAN Rule #3')
				.addFields(
					{ name: 'Rule #3', value: 'Follow Discord’s Terms of Services (TOS).\nhttps://discord.com/terms' },
					)
				.setFooter('Content requested at: '+time+' GMT +8')
				message.channel.send(rule3)
			}
			if (args[0] === '4' || args[0] === '#4'){
				const rule4 = new Discord.MessageEmbed()
				.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
				.setTitle('BTE ASEAN Rule #4')
				.addFields(
					{ name: 'Rule #4', value: 'No spamming and randomly pinging someone.' },
					)
				.setFooter('Content requested at: '+time+' GMT +8')
				message.channel.send(rule4)
			}
			if (args[0] === '5' || args[0] === '#5'){
				const rule5 = new Discord.MessageEmbed()
				.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
				.setTitle('BTE ASEAN Rule #5')
				.addFields(
					{ name: 'Rule #5', value: 'No talking about heavy politics or any other heavy topics.\nWe don’t allow any heavy topics in this server. Punishment will be used if you discuss about them.' }
					)
				.setFooter('Content requested at: '+time+' GMT +8')
				message.channel.send(rule5)
			}
		}
	}