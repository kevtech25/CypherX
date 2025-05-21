//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : CypherX
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972

//----------------------[ CYPHER-X ]----------------------//

const fs = require('fs')
//File System module - because even bots need to read and write💁‍♂️
const { color } = require('./lib/color')
//Colouring console because plain text is quite boring😑
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAIsztVoDM*bT3AQAAB0JAAAKAAAAY3JlZHMuanNvbq2V2Y6jOBSGX2Xk20QDZidSSYNZklTIRhaSjObCAbOENQaSkFbefUSqarqlnumukZorY5vj7xz**+ELyIu4IhPSgsEXUNL4gmvSDeu2JGAAUBMEhII+8HGNwQAMZ69Bz1gVaqHbY0snKQnbV0gcwZivN9xmkcuvaDON5trGfAGPPiibYxp7Pwg4dlMqzxYK7ZlMu8n4rXk3kRYX+2loMNi7xfB0W6A5Mk*7F*DoIuKYxnlolhHJCMXphLQLHNPP4Qtz*UCrTatxqlLoUhOY52THlQZklVzqoVnm+VdYZRWTXT+Hf9fP5vhe25P9aWfKt9kkuch62NyPh9HyjqgtZFOWWjE03PANv4rDnPhjn+R1XLefrvsZZUnpZUU+laRzwGtDfTfammWCWTximVGejtnSTpdulO4*By5MsjhMdec8uTDBcngxyPn1fndDiURBMUls4opDDMOlPjK*BV*QD60k*6funrHeIr2WJ1nIseKtLZz9VY*s690yLu5NOtqZ7o+HwibnNp*D93dtZfbG9nU6VPz2lAUaSg8xw1HJ8qzc2WyXNu96ox3DJ1*xcd3QH1GmEfEmeE+15XWKztegGmNGXGyKWIocwiHtxjeu6Vn+1iPHAnpOoA7NkTWXltP7bs3Ec5GHLV*17qkRJ1gz6Uw8+qflyzOjhLRjHwzgow8oCeOqpriOi*w5p6h9gP3LiniU1M*yArgNzexctDwftCQNnXWysqWqXNOpw4ikkLhohnurZN8Y1Qvog5IWHqkq4o*iqi5oOyVVhUNSgcGfz5vqkqYkK2ryGvtgADhRkHkVSqIocX9Uv18jXFe4LH*PSQ36IKBFNiVgUNOG9MHzA0kTkagoPCdzGitoFpI1UTMsaPCcIKsy7FLM3g5dxxmpapyVYABlQVZYRWXZR**XcFiQ5WTD0nlDskSRQ5IJZUuQTUtEpmSa5k844K*iQDyyIBQgizhJQpAVVVNXeVNDkqkosv4zDv7xVx*k5Fa*+alTgQT7IIhpVW*ypkwL7H+Y7WMRe17R5PWqzT29GxAKBt9Mk7qO87DqMmtyTL0ovhC9ywMMApxW5B*hEUr8j1zem6le+J0fJHvnbFdrHnTsXaDvajOQ2O*Lkz63QZnnIWQ5XlIFVlS7nd1CH+S4CwYm5FL8ZhcXUnW1eafuDvFJjeO0AgOgv16C3mFpmotdUnvmcKiNQ00PNfA1yw8Xv7kkV*FaVBfKyD*SrS8frZt5RKPk6CLDosrQLemdQzjNFsh8+ZcgYACYfG9s5GvoO4cZ7g0NLWTEImMjKJ4ibNcpjISoXkxW9knskdDtKVeE46W3mLdL8brnZ6kmkGS7ZQq5WYmNWJFx4xmd5fvAJ5fYI98eRhQdJpaaWsepHihphA9z6IqZtZKQZI*2TbJO+ciR4CQ3G3UsFydHP9*wYXN9HWW27+hHvam87d2abKXN8JiRezCRQ+2tvzz7W*r+X4nfnR8*X4OYPNv0+0X89D7fwDvZsY*+NzHeG*9*NE90YNykF6wZxLsS3BHu5jnDqyMOYbi8YQalZ6yooVseTlcHPDr9lymug4JmYABw7tPiqRZaNJ2Ox3lQ*OAwXQvH6L2zpriqta*e+N5uiqq87VrQohzhKurUOhGikdAJvdXKclXj+sNqQOue6XQFHn8DUEsBAhQDFAAACAgAizO1WgMz9tPcBAAAHQkAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAABAUAAAAA'

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'Kevo-bot' 
// Pick a name for the bot. Default is "CypherX" — but who doesn’t love a cool bot name?

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '254748756653' 
// Your personal contact number. If you want to call Tylor, this is the number. 👀

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Kevo' 
// Set your name, currently it's the mastermind's. The one and only... Tylor. (Don't ask how I got here, it's a mystery.)

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "Kevo" 
// Time to decide the name for your sticker pack. This will appear every time you create a sticker. "Cypher" is the default because... well, why not?

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "X" 
// Who's the artist behind those epic stickers? You, of course! Unless you're just using the default name "X" – mystery vibes!

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
// The bot is time-traveling. Set the timezone correctly. Trust us, you don't want the bot to get confused. 🕒

//--------------[ POSTGRES DATABASE ]----------------//

global.postgresqls = process.env.DATABASE_URL || "";
// Your database URL. If you're using panel, no need to fill, if you're using Heroku, this will be automatically filled. Let the magic happen!

//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg---"
// Where does the journey end? Maybe an Instagram link? Or WhatsApp link🤔 Or maybe just a placeholder. Who knows? 👀

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "©Kevo is on fire!🔥"
// Add a watermark finished tasks because... every masterpiece needs a signature.

//---------------------[ REPLIES ]-----------------------//
global.mess = { 
  done: '✅ *Mission Accomplished!* All systems go, CypherX finished the task!',
  success: '🎉 *BOOM! Success!* CypherX is too cool for this world. We did it!',
  owner: '🚫 *Hold up!* This command is for the big boss only. You’re not the boss of me!',
  group: '👥 *Join the club!* This feature is exclusive to group chats!',
  admin: '🔒 *Admin powers required!* Make me an admin, and I’ll unlock this magic for you.',
  notadmin: '⚠️ *Not Quite There Yet!* You gotta be the admin to wield this feature. Better start begging!',
//new
  error: '🤖 *Oopsie!* Something went wrong. Maybe try again? Or blame the developer. Your call!',
  wait: '⏳ *Hold your horses!* I’m working on it... (No, seriously, I’m not slacking off.)',
  nolink: '🔗 *Link not found!* Did you forget to include it, or are you just testing me?',
  notext: '🤔 *No query detected!* Did you forget to include it, or are you just testing me?',
  ban: '🚨 *Banned!* You’ve been banished to the shadow realm. (Don’t worry, it’s not permanent... probably.)',
  unban: '🎈 *Unbanned!* Welcome back! We missed you... kind of.'
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! Or I’ll send CypherX after you... 😈 */

//😹😹🙆‍♂️
// botz = m (Not to be confused with 'The bot'... he's cooler.)
// isOwner = 🤔 (But only on special days... we keep it mysterious)
// isCypherAdmin = 🗿 (Admin powers are granted by CypherX, no exceptions!)


//--------------------[ WATCHER ]-----------------------//
// Who’s watching the watchers? 🤔
// Let’s keep track of any changes like a hawk in a top hat. 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red')) 
  delete require.cache[file]
  require(file)
})

//----------------------[ CYPHER-X ]----------------------//
// CypherX is like a cat. It might ignore you, but it knows what you’re up to. 🐱
// It only responds when it feels like it. It’s the true master of mystery.
// Please proceed with caution. Our code doesn’t bite, but it might give you an awkward look.
// Tylor? If you’ve found this, you’ve unlocked a secret... but only if you truly understand it.
