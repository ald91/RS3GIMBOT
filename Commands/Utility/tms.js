import fs from "fs";
import express from "express";



const { SlashCommandBuilder } = require('discord.js'); // for command building
const { EmbedBuilder } = require('discord.js'); // for output building

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tms')
        .setDescription('displays Travelling merchant inventory for today and next 6 days'),
    async execute(interaction) {
        tmstoday();
        tmsThisWeek();
    },
};

