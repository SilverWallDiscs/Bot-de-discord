const express = require("express");
const Discord = require("discord.js");
const canvacord = require("canvacord");
const { format } = require('date-fns');
const { sendMessage, sendMessage2, dia } = require("./utils.js");

const app = express();
const welcome = "1079640187644153856"
const guildID = "1079615021207801897"

app.listen(3000, () => {
	console.log("el bot esta activado!");
});

app.get("/", (_req, res) => {
	res.send("El bot esta activo!");
});

const client = new Discord.Client({ intents: ["Guilds", "GuildMembers", "MessageContent", "GuildMessages"]});
const timeOffset = -8;
const time = {
	miercoles: {
		d: 3,
		h: 4 - 3,
		m: 30,
		s: 0,
		ms: 0
	},
	viernes: {
		d: 3,
		h: 1 - 3,
		m: 32,
		s: 0,
		ms: 0
	}
}

client.on("guildMemberAdd", async member => {
	if (member.guild.id !== guildID) return;
	const welcomeCard = new canvacord.Welcomer()
		.setUsername(member.user.username)
		.setDiscriminator(member.user.discriminator)
		.setAvatar(member.user.displayAvatarURL({ format: "png" }))
		.setColor("title", "#ffffff")
		.setColor("username-box", "#1f1f1f")
		.setColor("discriminator-box", "#1f1f1f")
		.setColor("message-box", "#1f1f1f")
		.setColor("border", "#1f1f1f")
		.setColor("avatar", "#ffffff")
		.setColor("member-count", "#000000")
		.setText("member-count", "Miembro {count}!")
		.setText("title", "Bienvenid@")
		.setText("message", "Disfruta la guild Seven")
		.setBackground("https://media.discordapp.net/attachments/1073395822521237586/1080264030574346321/FONDE_2.jpg")
		.setMemberCount(member.guild.memberCount);
	const attachment = new Discord.AttachmentBuilder(await welcomeCard.build(), "welcome.png");
	member.guild.channels.cache.get(welcome).send(member.user.toString());
	member.guild.channels.cache.get(welcome).send({ files: [attachment] });
});

client.on('ready', () => {
	const now = new Date();
	const target = dia(now, time.miercoles.d, time.miercoles.h, time.miercoles.m, time.miercoles.s, time.miercoles.ms);
	const target2 = dia(now, time.viernes.d, time.viernes.h, time.viernes.m, time.viernes.s, time.viernes.ms);
	setTimeout(() => {
		sendMessage(client, welcome, timeOffset);
		target.setDate(target.getDate() + 7);
	}, target.getTime() - now.getTime());
	setTimeout(() => {
		sendMessage2(client, welcome, timeOffset);
		target2.setDate(target2.getDate() + 7);
	}, target2.getTime() - now.getTime());
    client.user.setPresence({ status: "dnd" });
	console.log(target)
	console.log(target2)
	console.log(now)
    setInterval(() => {
        const date = new Date();
        const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
        const zoneTime = new Date(utcTime + (3600000 * timeOffset));
        const status = format(zoneTime, "HH:mm");
        client.user.setActivity({name: '🕛 ' + status});
    }, 15000)
});

client.login("MTA3OTYxNDExODE2MTU0NzMxNA.GFyx6w.pv78xaxXR5DeJR5GqB6Y1EEE3zjVvhOtKOO5cg")