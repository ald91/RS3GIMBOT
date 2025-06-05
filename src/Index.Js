// Require the necessary discord.js classes
import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import data from "./config.json" with {type: 'json'};
import { readdirSync } from 'node:fs';
import { readdir } from 'fs/promises';
import { join } from 'node:path';
import path from 'path';
import { fileURLToPath } from "node:url";

const json = data;
const Token = json.token;

const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // Create a new client instance
client.commands = new Collection(); // generate comments using collection item

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const utilityPath = path.join(__dirname, 'Commands', 'Utility');
const commandFiles = await readdir(utilityPath);

// const commandFiles = await readdir('./commands');


for (const file of commandFiles) {
if (file.endsWith('.js')) {
const filePath = path.join(utilityPath, file);
const command = await import(`file://${filePath}`);

if ('data' in command && 'execute' in command) {
client.commands.set(command.data.name, command);
console.log(`The command at ${filePath} has been initialized`);
} else {
console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
}
}
}


// Log in to Discord with your client's token
console.log(Token);
client.login(Token);

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});