const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'me',
	description: 'idk',
	usage: '.me',
	guildOnly: true,
	cooldown: 3,
	async execute(message, args) {
        const help = new MessageEmbed();
        help.setTitle(`Bacot Help`)
            .setDescription('`.help <command>` to see more information about that command.')
            .addField(":green_book: GENERAL", `\`help, invite, ping, stats\``)
            .addField(":musical_note: MUSIC", '`add, clear, goto, leave, nowplaying, pause, play, queue, remove, replay, resume, search, skip, rewind, volume, forward`')
            .addField(":pencil2: SETTINGS", '`loop, bitrate, volume, reset`');
        help.setFooter(`version: 1.0`).setColor('#FF087F');
        return message.channel.send(help);
	},
};