module.exports = {
    name: 'tos',
    description: 'Discord Terms of Service',
    aliases: ['termofservice', 'discordtos', 'distos'],
    execute(message){
        message.channel.send('https://discord.com/terms')
    }
}