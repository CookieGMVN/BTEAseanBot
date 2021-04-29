const Discord = require('discord.js');
const config = require('../../data/config.json');

module.exports = {
	name: 'help',
	description: 'All my commands!',
	aliases: ['commands', '', 'helpme', '?', 'cmd', 'command', 'cmds'],
	usage: '[command name]',
	cooldown: 5,
	permissions: 'SEND_MESSAGES',
	async execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			const HelpEmbed = new Discord.MessageEmbed()
			.setColor('BLUE')
			.setTitle('BTE ASEAN BOT HELP')
			.setAuthor(`${message.guild.name} BOT`, `${message.guild.iconURL({ dynamic: true})}`)
			.setDescription('This is a list of my commands!')
			.addFields(
				{ name: 'System', value: 'help' , inline: true },
				{ name: 'Moderation', value: 'warn\npurge' , inline: true },
				{ name: 'Builders', value: 'buiderrs', inline: true },
				{ name: 'Infomations', value: 'howtojoin\nip\nrule\ntos', inline: true },
				{ name: 'Utilities', value: 'avatar', inline: true }
			)
			.setFooter(`\nYou can send \`${config.general.prefix}help [command name]\` for more details!`)
			return message.channel.send(HelpEmbed)
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply(`I don't have that command!`);
		}

		data.push(`**Command name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${config.general.prefix}${command.name} ${command.usage}`);
		if (command.permissions) data.push(`**Required permissions:** ${command.permissions}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} seconds`);

		message.channel.send(data, { split: true });
	},
};