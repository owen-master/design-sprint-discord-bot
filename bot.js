const Moment = require('moment');
const Discord = require('discord.js');

const BOT_NAME = "Sprint Bot";
const BOT_PROFILE_PIC_URL = "https://i.imgur.com/A4JTO30.png";
const BOT_PREFIX = "!";
const BOT_EMBED_COLOUR = "#FF2DF2";
const BOT_TOKEN = "BOT_TOKEN_GOES_HERE";

var client = new Discord.Client();

// design sprint activites
var sprintActivities = [
    {
        "start" : Moment('15-10-2020 08:30 AM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('15-10-2020 09:00 AM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Students arrive.",
        "day" : 1
    },
    {
        "start" : Moment('15-10-2020 09:00 AM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('15-10-2020 09:30 AM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Take notes during the keynote address.",
        "day" : 1
    },
    {
        "start" : Moment('15-10-2020 09:30 AM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('15-10-2020 10:00 AM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Write interview questions for SME based on keynote.",
        "day" : 1
    },
    {
        "start" : Moment('15-10-2020 10:00 AM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('15-10-2020 11:00 AM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Interview SME and take notes. (Group #1 @ 10:00, Group #2 @ 10:30)",
        "day" : 1
    },
    {
        "start" : Moment('15-10-2020 11:00 AM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('15-10-2020 11:59 AM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Rationalise notes and secondary research as affinity diagram, SMEs available for follow-up questions.",
        "day" : 1
    },
    {
        "start" : Moment('15-10-2020 11:59 AM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('15-10-2020 01:00 PM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Develop proto-personas with POVs.",
        "day" : 1
    },
    {
        "start" : Moment('15-10-2020 01:00 PM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('15-10-2020 02:00 PM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Collaboratively develop the best HMW statement.",
        "day" : 1
    },
    {
        "start" : Moment('15-10-2020 02:00 PM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('15-10-2020 03:00 PM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Collaboratively develop the two best sketches and storyboards based on the best HMW statement.",
        "day" : 1
    },
    {
        "start" : Moment('15-10-2020 03:00 PM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('15-10-2020 04:00 PM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Refine/combine the two best sketches and storyboards using thinking hats.",
        "day" : 1
    },
    {
        "start" : Moment('15-10-2020 04:00 PM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('15-10-2020 05:00 PM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Team reflection",
        "day" : 1
    },
    {
        "start" : Moment('16-10-2020 09:00 AM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('16-10-2020 10:30 AM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Develop a paper prototype and 5-stage interview plan for the two best ideas from day 1.",
        "day" : 2
    },
    {
        "start" : Moment('16-10-2020 10:30 AM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('16-10-2020 11:00 AM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Conduct the 5-stage interview plan and gather feedback from SME.",
        "day" : 2
    },
    {
        "start" : Moment('16-10-2020 11:00 AM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('16-10-2020 11:30 AM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Develop a digital prototype and 5-stage interview plan for the best (or combined) paper prototype.",
        "day" : 2
    },
    {
        "start" : Moment('16-10-2020 11:30 AM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('16-10-2020 12:30 PM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Conduct the 5-stage interview plan and gather feedback from SME.",
        "day" : 2
    },
    {
        "start" : Moment('16-10-2020 12:30 PM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('16-10-2020 02:00 PM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Prepare a mock angel investor pitch.",
        "day" : 2
    },
    {
        "start" : Moment('16-10-2020 02:00 PM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('16-10-2020 03:00 PM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Pitch delivery.",
        "day" : 2
    },
    {
        "start" : Moment('16-10-2020 03:00 PM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('16-10-2020 04:00 PM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Finalise workbook.",
        "day" : 2
    },
    {
        "start" : Moment('16-10-2020 04:00 PM', 'DD-MM-YYYY hh:mm A'),
        "end" : Moment('16-10-2020 05:00 PM', 'DD-MM-YYYY hh:mm A'),
        "name" : "Awards ceremony and closing thoughts.",
        "day" : 2
    }
]

client.on('ready', () => {

    // notify console
    console.log(`Logged in as ${client.user.tag}!`);

    // set bot status to a helpful message
    client.user.setPresence({activity:{name: "Display help with !help" }});
});

client.on('message', msg => {

    var rawMessage = msg.content.toLowerCase();

    if (rawMessage.startsWith(BOT_PREFIX + "help")) {

        var guildString = "";
        var i = 1;

        client.guilds.cache.forEach(guild => {
            guildString += i + ". __" + guild.name + "__ ";
            i++;
        });

        var embedHelp = new Discord.MessageEmbed()
        	.setColor(BOT_EMBED_COLOUR)
        	.setTitle('Help')
        	.addField(BOT_PREFIX + "day1", "Displays day #1 activities.")
            .addField(BOT_PREFIX + "day2", "Displays day #2 activities.")
            .addField(BOT_PREFIX + "now", "Displays the current activity.")
            .addField(BOT_PREFIX + "help", "Displays this embed.")
			.addField("Author:", "owen#2223", true)
            .addField("Guild(s): (" + client.guilds.cache.size + ")", guildString.trim())
        	.setTimestamp()
        	.setFooter(BOT_NAME, BOT_PROFILE_PIC_URL);
        msg.channel.send(embedHelp);

    } else if (rawMessage.startsWith(BOT_PREFIX + "day1")) {
        var embedSchedule = new Discord.MessageEmbed()
        	.setColor(BOT_EMBED_COLOUR)
        	.setTitle('Day #1 Sprint Activities')
        	.setTimestamp()
        	.setFooter(BOT_NAME, BOT_PROFILE_PIC_URL);

        sprintActivities.forEach(activity => {
            if (activity.day === 1) {
                    embedSchedule.addField(activity.start.format("h:mm a"), activity.name);
            }
        });

        msg.channel.send(embedSchedule);

    } else if (rawMessage.startsWith(BOT_PREFIX + "day2")) {
        var embedSchedule = new Discord.MessageEmbed()
        	.setColor(BOT_EMBED_COLOUR)
        	.setTitle('Day #2 Sprint Activities')
        	.setTimestamp()
        	.setFooter(BOT_NAME, BOT_PROFILE_PIC_URL);

        sprintActivities.forEach(activity => {
            if (activity.day === 2) {
                embedSchedule.addField(activity.start.format("h:mm a"), activity.name);
            }
        });

        msg.channel.send(embedSchedule);

    } else if (rawMessage.startsWith(BOT_PREFIX + "now")) {

        var now = new Moment(); // current time
        var foundActivity = false;
		
        var i = 0;
        for (var activity of sprintActivities) {
            if (now > activity.start && now < activity.end) {
                foundActivity = true;
                break;
            }
            i++;
        }

        if (!foundActivity) {
            msg.channel.send("No activity found.");
        } else {
            var embedNow = new Discord.MessageEmbed()
                .setColor("#FF2DF2")
                .setTitle('Current Sprint Activity')
                .addField(activity.start.format("h:mm a") + " - " + activity.end.format("h:mm a"), activity.name)
                .setTimestamp()
                .setFooter(BOT_NAME, BOT_PROFILE_PIC_URL);
            msg.channel.send(nowEmbed);
        }
    }
});

// login with specified bot token
client.login(BOT_TOKEN);
