const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: process.env.token,
  prefix: "!",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

//ELLEME
bot.onMessage()

//Örnek Komut
bot.command({
name: "ping",
code: `Pong! Pingim $pingms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Hazır! $userTag[$clientID]]`
})