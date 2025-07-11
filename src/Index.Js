const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');
const { token } = require('./config/config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
 const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
const commandsPath = path.join(foldersPath, folder);
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
const filePath = path.join(commandsPath, file);
console.log(`🔍 Loading command: ${filePath}`);
try {
const command = require(filePath);
console.log(`✅ Loaded: ${filePath}`);
if ('data' in command && 'execute' in command) {
client.commands.set(command.data.name, command);
} else {
console.warn(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
}
} catch (err) {
console.error(`❌ Error loading ${filePath}:`, err);
}
}
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}



client.login(token);