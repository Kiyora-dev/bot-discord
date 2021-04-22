const { MessageEmbed } = require('discord.js');
const request = require("request-promise");

module.exports = {
	name: 'cuaca',
	description: 'List all available music commands.',
	usage: '.cuaca [kota]',
	guildOnly: true,
	cooldown: 3,
	async execute(message, args) {
        const rawcity = args.slice(0, args.length).join([' ']);
        if (!rawcity) {
            message.channel.send("parameter kota tidak boleh kosong")
        }

        const city = rawcity.toLowerCase()

        const link = 'http://bmkg-scrap.herokuapp.com/api/cuaca/' + encodeURIComponent(city);
        let weatherData = await request({ url: link, json: true })

        if (weatherData.length === 0) {
            return message.channel.send("kota tidak ditemukan");
        }
        console.log(link)
        const help = new MessageEmbed()
        help.setTitle(`:cloud: ${weatherData.title} :cloud:`)
            weatherData.daftar_kota.forEach(element => {
                help.addField(element.nama_kota, `${element.suhu}`)
            });
        help.setFooter(`version: 1.0`).setColor('#FF087F');
        return message.channel.send(help);
	},
};