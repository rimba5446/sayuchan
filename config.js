module.exports = {
        TOKEN: 'ODY1NDgzOTI5NjEwODc5MDI2.GMgrdI.qwsVwUZ85OuGKDR23hdAYogpkkfpkos-vhm1p4',
        pubkey:'2cedf6cc19a864fb47cce3811d5856ba2a6e10f320eed0bd51741fb9dad01123',
        clientid:'865483929610879026',
        px: 's',
        PLAYING: 's help',

    opt: {
        DJ: {
            enabled: false, 
            roleName: 'DJ', 
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] 
        },
        selfDeaf: false, 
        maxVol: 100, 
        loopMessage: false, 
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', 
                highWaterMark: 1 << 25 
            }
        }
    }
};
