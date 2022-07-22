# Discord.js v13 Music Bot
This project was created for you to create your own music bot, adapted to run on a virtual computer or on your own computer, **Github.com** is a privately published discord music bot project.

## HANDLER STYLE PREFIX
```js

module.exports = {
name: "ping",
usage: "Nothing rlly",
ownerOnly: false, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
}

```

## HANDLER STYLE SLASHCOMMANDS
```js
module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: 'np',
            description: 'See what\'s currently being played',

            guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
        });
    }

```

![Discord](https://cdn.discordapp.com/attachments/983355485384216626/999992636796583956/logobanner.png)
