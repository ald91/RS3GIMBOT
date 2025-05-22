import fs from "fs";
import express from "express";

const { getVos } = require('../src/apilinks.js'); // locate API URL
const { SlashCommandBuilder } = require('discord.js'); // for command building
const { EmbedBuilder } = require('discord.js'); // for output building

module.exports = {
    data: new SlashCommandBuilder()
        .setName('VoS')
        .setDescription('displays the active voice of seren'),


    async execute(interaction) {
        await interaction.deferReply()
        await fetch(endpointretriever.getVos())
            .then((response) => {
                if (response.ok) {
                    Console.log("district 1 is : " + JSON.stringify(response["disrict1"]) + " district 2 is : " + JSON.stringify(response["disrict2"]));
                    return response.json
                }
                throw new Error('unable to get data')
            })


    },
    // inside a command, event listener, etc.
    var date = new date();
    const tmstodayEmbed = new EmbedBuilder();
	.setColor(0x0099FF)
        .setTitle(`Travelling Merchant Store for ` + date + `.`)
        .setURL('https://https://runescape.wiki/w/Travelling_merchant')
        .setAuthor({ name: 'from RS Wiki API', iconURL: 'https://runescape.wiki/images/Favicon.ico', url: 'https://https://runescape.wiki/' })
        .setDescription('Current inventory')
        .setThumbnail('https://runescape.wiki/images/Favicon.ico')
        .addFields(

            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true }
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    channel.send({ embeds: [tmstodayEmbed] });

};

