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

global.SESSION_ID = process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAGRZrlosNeszNQUAAIEJAAAKAAAAY3JlZHMuanNvbq1V2Y7rthL8F76OJ9a+GBjgavUi77K8XdwHjknJsrWZpGRLB*73QPYMzlwkOZkA0RMhNquru4vFHyDLY4o9XIPeD1CQuIIMt0tWFxj0gFmGISagAxBkEPTAbl5co1Cj++2grzHV3g2G7BjCY7YaNeXKdZPTCu133CVPh2*g3gFF+Z7Eh18A4gHaK4fx8rbyZ3tvI1uwGJPuotxGCV8uLdfjySjfUfdkaG*g3iLCmMRZ5BRHnGICEw*XcxiT79FXJiZl53jlNup8dvDX73l4Mmf+RWLFfhEr8oXMbaVh1t7Rvke*2g09aZENCk+bYuVEutaCXJfx6TZVrBUKSl+*Rv5WMqhNn*RpHGUYDRHOWMzqb*e9b+AgksbBSBGqiK+oPIk4kbAQZ35AU0fBDTe8deNLuc2*2ffKQBNzoE08mzXpUfaVl+vYum4GU7xwb2eDH+N8lC2o5vwf8Tn51Mr5n*T94mR1vHfQVkUj2QqrIb+o*HFlyLosh9vZbTixae4J1bb*Tdkc61n8YrEtLNZ7lJJsfG5mjV1wXPjeFQdCstysxN1p76Rf6UNWkl+xHI2bZplyuM90vEaDgF4PL8Lam3UN1pySdSVKL3BUzI8OSU4jVek7Vg493xvPblVBl*5VJPEicIPAtm2hWc8XhqSv7Ovbo6IzrocI9Ph7BxAcxZQRyOI8a*8JgtQBEFU+PhDMHu0F2W7inHzZejFMGWe+sNdrc4NVcspSU+x7YR26xYzXRzc*eAMdUJD8gCnFaBBTlpN6gimFEaag99*HpNqiCU5zhkcxAj0gyJIq6rwiy4rwH*rb9QgZhUXxW4YZ6ICQ5OkEgx4jJe6AxwHT5SXb1ixTUVRZE13HcERJtHVHM1XZVpS2xPSZdBWnmDKYFqDHq5IqCDynqPfOv8ODc2WDE13JkSzX5mxDVl3NETTedGRLlgTrb3ho9*91QIZv7Knjtvsi3wFhTCgLsrJIcog+Rf65CQ+HvMyYX2cHq11gAnpffmPG4iyibWVlBsnhGFfYausAvRAmFN87AOEqPuAWD7xe5hG9WOLyPS52i+FJzwz1FrUTPObZM0SXBInjEXrVOEl5lTQxfIVQRa+6qGoagmqoIh607XhaSHvmLxVdbPeeu6mvvpnn23PWnCTtQKY8HL7QhyqfUsQEo88uv8PDuSxW+Rlnv8BdSis8iSVBVwjmh*OzUSyWhoirBfcV9ylx0Pvx07atHLV4m5Htqaq5BO202jx*UENPlv4oiOQRxquiyPOcICq6xMl6G9ludEAGWzDg4SpvSXxMqIVHmME4oaAHrKk6FHeB6Ywb7nxw+n1jGBlWZICfE*10iudNvNZXqUGc1jj1Stw0s1Qbz4P0cpYmUlAaG26nLXmVn3BkcX77E5C2LDo5zTRUNrhSahkVVRmc6Ux0UGTq8nwUk6XHCadIeF8tli95fkm6nLrZDDdMOCK9MWGZZNl6bQ+vl+vyStTdrbvmLOOtzfZU1tdkvFYE3sBXxIMx8UVuz+1gytbHhB9Xyi1Q5jy1jMz1y64ondSplvrr7nGen1GmXC7sLEtJMNUpv1vniF8cN3V3IU631oeHPTw0+Xi74g93eeowjPHjKfgYwd9O8ueV4O6dLxgfj8tfyM48TOhsIqL55DY56zxtispq+NGlmNkzdxy5rD93ENZXU48bgXt714sEsjAnKegBmCGSP3RC8rK9s8MszH+RzDKiobl4Vp5AyoyfPvBn1iI*o+YkLwaQHttReNJxILUSr42i8Blkn7YCjPabii64*w5QSwECFAMUAAAICABkWa5aLDXrMzUFAACBCQAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAABdBQAAAAA=' 
// You know the drill. Put your CypherX session id here. Should look like: XPLOADER-BOT:~ (don't forget that, it's crucial!)

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
