module.exports = {
        TOKEN: 'OTg0NzUzNDg2NDE3NzY0MzYy.G_RHSB.jgsaWR8KYVGUgUJ29GGcHHy36U536rZ999_t2I',
        applicationID:'984753486417764362',
        pubkey:'16bea63ed2ef97458c1f201d70de2bb152aa6d062749ba27c8025f7a77c7cc7f',
        guildid:'',
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
