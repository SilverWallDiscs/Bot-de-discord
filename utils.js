const { EmbedBuilder } = require('discord.js');
const { format } = require('date-fns');

function sendMessage(client, welcome, timeOffset) {
	const channel = client.channels.cache.get(welcome);
	const avisoMiercolesEmbed = new EmbedBuilder()
		.setColor(0xa12d2d)
		.setTitle('Ronda Semanal')
		.setAuthor({ name: 'Seven [INC]', iconURL: "https://cdn.discordapp.com/icons/827945622010069012/0a21e82bb0e08ab62d75cd4ea5f93ee7.png"})
		.setThumbnail('https://cdn.discordapp.com/icons/827945622010069012/0a21e82bb0e08ab62d75cd4ea5f93ee7.png')
		.addFields(
			{ name: 'Mirecoles ' + getDateFromZone(timeOffset, 'd') + getDateFromZone(timeOffset, "MMM"), value: "- Legacy Of Glast Heim" },
			{ name: '\u200B', value: '\u200B' },
			{ name: '1.-', value: 'Se comenzara con 2 rondas semanales esto aumentara o disminuira dependiendo la participacion y actividad de los integrantes de la guild.', inline: true },
			{ name: '2.-', value: 'Las intancias o areas especiales que visitaremos iran rotando de maneral semanal ', inline: true },
		)
		.setTimestamp()
		.setFooter({ text: 'Se pide compromiso #Dooc.' });
			channel.send("@everyone");
			channel.send({embeds: [avisoMiercolesEmbed] });
}

function sendMessage2(client, welcome, timeOffset) {
	const channel = client.channels.cache.get(welcome);
	const avisoMiercolesEmbed = new EmbedBuilder()
		.setColor(0xa12d2d)
		.setTitle('Ronda Semanal')
		.setAuthor({ name: 'Seven [INC]', iconURL: "https://cdn.discordapp.com/icons/827945622010069012/0a21e82bb0e08ab62d75cd4ea5f93ee7.png"})
		.setThumbnail('https://cdn.discordapp.com/icons/827945622010069012/0a21e82bb0e08ab62d75cd4ea5f93ee7.png')
		.addFields(
			{ name: 'Viern ' + getDateFromZone(timeOffset, 'd') + getDateFromZone(timeOffset, "MMM"), value: "- Party Leveo!" },
			{ name: '\u200B', value: '\u200B' },
			{ name: '1.-', value: 'Se comenzara la primera Ronda el dia viernes de Gramps 115+ La idea de esto es alcanzar el 145+ ! ', inline: true },
			{ name: '2.-', value: 'Una vez la mayoria de la party alcanze El nivel 145 + Comenzara la Segunda Ronda (El mismo Dia)', inline: true },
		)
		.setTimestamp()
		.setFooter({ text: 'Se pide compromiso #Dooc.' });
			channel.send("@everyone");
			channel.send({embeds: [avisoMiercolesEmbed] });
}

function dia(now, d, h, m, s, ms) {
	const target = new Date();
	target.setDate(now.getDate() + ((0 - now.getDay()) % 7 + d)); // dias
	target.setHours(h);
	target.setMinutes(m);
	target.setSeconds(s);
	target.setMilliseconds(ms);
	return target;
}

function getDateFromZone(timesZone, formatt) {
    const date = new Date();
    const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
    const zoneTime = new Date(utcTime + (3600000 * timesZone));
    const xd = format(zoneTime, formatt);
    return xd;
}

exports.sendMessage = sendMessage;
exports.sendMessage2 = sendMessage2;
exports.dia = dia;
exports.getDateFromZone = getDateFromZone;