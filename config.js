//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "221774699896";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dZWkV1cVBxN0R5MUVZRlhHS2NXdDlqTkZsT0xxWmhiZG42UEc4K09WST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTdnMUNSWW1aaTFjcU5SOUl0eXgwaXdwK0lGMmdNeWZUQ05HZGN4VXRDWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR3JyMXoycjQwaE14ODBkRFpBY2h3alN2V2xVS3FIWk9LREl1QmhFN1hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5aWpvSkZCTGdvTGV2ZDIwck0xUndKMVkrbEhpM3ZDUHRsTGxlS1lBeEg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFMbkJyNWY1Z0QvbUx6TjAvYm9qc3BnY2F2MUJiMXRXWDcrbjUycnZMR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFZUmxJMSsxRzBvaW1VQjFpUTY0ZmZjUXhuVlVjdEQzZzRRanFpOVdFMjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUdPMERGaGFRZ1FOdEpidWVzblB3QjhWTHBQTUpKR1IwaW41N1hZTXEydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXFEY0RqOFFoYlJXQmNPdUhoZXRnMnhReVFjeWNFZXp1MzArWnJjSXBEUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5qRFlZOVJYWHYzRTdnRXJxekNPbEFWazRNWGJkc05hMGpjdXAybkQyYzdsb25yZjk0Y3RidjljdnNKbm5ocVFlRys3Y3hFZmtGWWpDTGhzM2xIT2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6IktFRnNXbS8vYXdONjViZ1c3Q1VqdER0UlZBZVhuY3JjUkhTT2dZTiswYTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjIxNzc0Njk5ODk2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBRkExQkVEMzMwREZFQzkzOEI4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDQzOTIzMjJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IllOdDRuM0J6UmpXSEs4TkhvaHZlRVEiLCJwaG9uZUlkIjoiYTI5NzE3MzgtNTU5MS00MTMwLWFjYWYtYTcxZTJjODEyZTc3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh1aDh3VHducHJ0M3F1U3VFWXhoZjdLTks1RT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzSTRuYTdBd3RtbXU5c3F2cGpNOUQzbHJvZzg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMkc4ODNGOVMiLCJtZSI6eyJpZCI6IjIyMTc3NDY5OTg5NjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkZyZWVsYW5jZXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lxcmkrVUtFUENnNWI4R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVGR3pXdTVqV2NUUWpVdEg0ckdxMS9QNjVWcDhxdXNocUtkZ0JqQkh2bVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFXV0hrZVpJRytJU20rNzB6dGdaYzBPRXB2K3Jwb1NtRDNwU2o3QnBUbTNIT0FnV2Z0di92MnJNOVlSdUY0cm9tVUQvd0lEUzk5VTh1WFk2Z1B3UGdBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqNm1BSXZ0VFAxcEdFTTRKUytodnJwUTR3RUNtSkc3RytqNFB1T3RsVEd4bFBxbUJOdE5tNmh5d1pZZjRjSW8wZDJvV2FQalRKSzFGRWpPaGxBbk5ndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMTc3NDY5OTg5NjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhoUnMxcnVZMW5FMEkxTFIrS3hxdGZ6K3VWYWZLcnJJYWluWUFZd1I3NW0ifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDQzOTIzMTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS3BUIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
