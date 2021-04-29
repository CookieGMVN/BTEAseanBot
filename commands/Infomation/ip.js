module.exports = {
	name: 'ip',
	description: 'Show the ip',
	cooldown: 5,
	execute(message){
		message.channel.send('Server IP: asean.my.to')
	}
}