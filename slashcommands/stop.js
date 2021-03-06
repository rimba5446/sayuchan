const { SlashCommand } = require('slash-create');

module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: 'stop',
            description: 'Stop the player',

            guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
        });
    }

    async run(ctx, message) {
        
        const { client } = require('..');

        await ctx.defer();
        const queue = client.player.getQueue(ctx.guildID);
        if (!queue || !queue.playing) return void ctx.sendFollowUp({ content: 'There is no music currently playing!. ❌' });
        queue.destroy();
        return void ctx.sendFollowUp({ content: 'The music playing on this server has been turned off, see you next time ✅' });

    }
};