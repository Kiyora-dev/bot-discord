const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all available music commands.',
	usage: '[help',
	guildOnly: true,
	cooldown: 30,
	async execute(message) {
		const help = new MessageEmbed();
        help.setTitle(`Bacot Help`)
            .setDescription('`.help <command>` to see more information about that command.')
            .addField(":arrow_heading_up: Move", '`.move [current position] [desired position]`')
            .addField(":pencil2: SETTINGS", '`loop, bitrate, volume, reset`');
        help.setFooter(`version: 1.0`).setColor('#FF087F');
        return message.channel.send(help);
	},
};