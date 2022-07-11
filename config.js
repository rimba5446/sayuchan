module.exports = {
        TOKEN: '', //write your discord bot token
        px: 's',
        PLAYING: 's help',

    opt: {
        DJ: {
            enabled: false, 
            roleName: 'DJ', //WRITE WHAT THE NAME OF THE DJ ROLE WILL BE, THEY CAN USE IT ON YOUR SERVER
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },
        selfDeaf: false, //IF YOU WANT TO DEAF THE BOT, set false to true.
        maxVol: 100, 
        loopMessage: false, //Please don't touch
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', 
                highWaterMark: 1 << 25 
            }
        }
    }
};
