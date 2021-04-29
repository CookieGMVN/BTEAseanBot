const Discord = require("discord.js")

module.exports = {
    name: 'purge',
    description: 'Delete messages',
    aliases: ['delete', 'prune', 'del'],
    permissions: 'MANAGE_MESSAGES',
    usage: '<ammount of messages you want to purge/delete>',
    cooldown: 3,
    async execute(message, args){
        if (!args[0]) return message.reply('Please provide a correct value of MessagesToDelete!')
        const verify = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
        .addFields(
            { name: 'Verification', value: `Wait! Are you SURE to delete ${args[0]} message(s)?\nReact to 🇾 to confirm\nIf not, react to 🇳 to cancel.` }
        )
        await message.channel.send(verify).then(msg => {
            msg.react('🇾')
            msg.react('🇳')
            const filter = (reaction, user) => {
                return ['🇾', '🇳'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            msg.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
    
            if (reaction.emoji.name === '🇾') {
                message.channel.bulkDelete(args[0]).then(async () => {
                await message.channel.bulkDelete(2)
                message.channel.send(`Deleted ${args[0]} messages!`).then(msgg => {
                    setTimeout(async function(){
                        await msgg.delete()
                    }, 5000)
                })
            })
            } else {
                msg.delete()
                message.channel.send('Cancelled.')
            }
        }).catch(collected => {
            msg.reply('Error 0Ex121: Timeout.');
        });
        })
    }
}