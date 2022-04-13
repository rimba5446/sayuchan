module.exports = async (client) => {
    console.log(`${client.user.username} Github.com/Rimba5446/sayuchan`);

    client.user.setActivity(client.config.playing);
};