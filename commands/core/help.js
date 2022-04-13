const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h',"yardım"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('BLUE');
        embed.setTitle(client.user.username);
        embed.setThumbnail(client.user.displayAvatarURL())
        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('Access to open source music bot: [RaykujanK13](https://github.com/Rimba5446/sayuchan), need more help You can get help by joining our Discord Community [Join](https://discord.gg/ZK88kBqK2u)\nHow about creating your own music world?') ;
        embed.addField(`Available - ${commands.size} Command Available`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases[0]})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter({ text: 'Music Bot Commands - RaykujanK13', iconURL:message.author.avatarURL({ dynamic: true }) });
        message.channel.send({ embeds: [embed] });
    },
};
