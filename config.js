const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "923184474176"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI|| ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan="https://replit.com/@SuhailTechInfo/Secktor-Bot?v=1";
global.gurl= process.env.GURL   || "https://youtube.com/c/SuhailTechInfo";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.website =process.env.GURL|| "https://github.com/SuhailTechInfo/Suhail-Md" ; 
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.THUMB_IMAGE=process.env.THUMB_IMAGE||"https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ;






global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,923184474176";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254748211821";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "1",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || "?",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.6",
  caption:process.env.CAPTION || "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ™*\n*ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ* • 𝟭𝟰/𝟭𝟮/𝟮𝟬𝟮𝟯" ,// ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Raphael-MD",
  packname: process.env.PACK_NAME || "♥️👁️🙈💋 ",
  botname: process.env.BOT_NAME   || "Raphael md",
  ownername:process.env.OWNER_NAME|| "Raphael",


  sessionName:process.env.SESSION_ID|| "ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMlBPblM0QVFQazhlL2FlSHpQZ1I1a0JZMzBkcmhVNVlBaVVEeTNCZnpHcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInNvNVN0SFcreVZUaERacVhXY280WWRnWDAxeEF1Nkt0MUt4TVNabmNhVlU9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMk9yNWdnY3RnWVEzUVJ4ZGlzSzRzY2tsaHhpV21FS3UwcUt3UTNSMGZuWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjFPTnVPN2hzV250T2ZZREVoOEdHYWpHdHBkRVJGUmI1dVM4Y2dJZzBheE09XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieUZmSitOa0FEaWpqbEgwM3ZwSUFVWG9CRzByb2F3c0hzbGgveVFoMEpYRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjhjN3hEbDNoZ2trak5RczVGT1JlKzd1T1RzcitUaUszNWlRNStJVUE4UU09XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLUFg0M1AvZHhKS3pULzQrOXJuWWNiaUJHdG94enIwY2VnUzF3MnhMSUdRPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUGFVWExaK2M0MzB3eGZZYVUvd1dCNy9oNTVKeVg0cmFhK3M4dElTUGFVQT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJTdUgwSzdlU25odDBpelNUMnR3NDJlbGlvZHBXNU9EU2Rabm81REVlVDgrSWxnS2Jzc3g3enlxRFpNOXJWcUZUNVpZQUk4MTFxZ0g3Q0VsNm5PcjNndz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6OTIsXCJhZHZTZWNyZXRLZXlcIjpcImd2MGdUbGVmOHFtRkFGVjBSYTBWbWwzbEFRdE1mQ1hZN0VmZ1N0Slo1WHc9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCIxUXVzblJlaVF4cUN4dUhQUGJxNEFnXCIsXCJwaG9uZUlkXCI6XCI0ZWQ4M2NjNS03NTIwLTQwNTAtODVkZi1hNGM2NGFlNDFlZDFcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm5Gb2xkc2g4MDB2bXVJTXBDVHJEN3dqVVRKUT1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUzA2SktneE0ya2ZkZWNmeURtT29UMk1JNzZNPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNJS2R0L1lCRUxlTDU2NEdHQWtnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiV255NlIwMmFqNnpqa3hQblFGaStKbU1hbCtzQlYzUytEOGhoRDl5OWpSOD1cIixcImFjY291bnRTaWduYXR1cmVcIjpcImpKNjROczRndFVLQ0o4S0QrUmF0VEJyY1RFWnM2RHpFUzJHd2MwUDBSS2Y4MlBTU1JIb3RYQm9BNSs4bXA3NkJHZVc4Q0NnT2FtM1RhTkZJNE0rRERBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiYzVyQnk5M2dSNUhnL3pOY2dWamQzYTNydEZLaXFGWFdIdVpVSDFlbmJ4ZkZ0bUgxSHg5M0Y4VG1reUUyN241S2tOazluMWlScEd4Q3ZBTk9MNDhraXc9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjI1NDc0ODIxMTgyMTo0M0BzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIyNjQ4MzY1NTg2MjI4MjQ6NDNAbGlkXCIsXCJuYW1lXCI6XCLwnZmy8J2Zt/CdmbjwnZmy8J2ZviDwnZqD8J2ZuPCdmbzwnZm48J2Zs/Cdmb4g8J2aiCDwnZqC8J2ZvvCdmbvwnZm48J2ag/CdmbDwnZqB8J2ZuPCdmb5cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3NDgyMTE4MjE6NDNAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCVnA4dWtkTm1vK3M0NU1UNTBCWXZpWmpHcGZyQVZkMHZnL0lZUS9jdlkwZlwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDg3NzA3NDksXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBS2YvXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2YrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZWVWclREanZnTlhycjU0L1pCUmtFY3VLb1grbm9oZmdiSkFMVnNNbkVITT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTY4MDQyMjYsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNSw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg3Njk4MjQ4NjZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLZjUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZOE4rZ0d3WWkzdnNTQTU2bk02Z0NrQmo1WHRGWEdYek54TStEMC8xT1hJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUxNjgwNDIyNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2Y2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYzhlQjlhYUZNZi82KzdvVHhaZGNBeDZzSkNWU21MRFVxeng2VTZIUmlRMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTY4MDQyMjYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzA2NjQwMjExOTQ3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2Y3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiT3lxTENvNkpWUk1TTXI1aCtqVFFTc0pkRkl4bDZBaEtVYXgzWGJEUFA2cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTY4MDQyMjYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzA2NjQzODI3NjA4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2Y4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZTZaYWl4MVVZc0N5V0VsNkxCSFNyU2xOVEhyRjhXajRLRExqOXF5SHgwYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTY4MDQyMjYsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2Y5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUHJXemVicmROdmtmdk5EQzJ0ek1VRHFMRzI0aFJSR0YwUStyS0c5OGtOdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTY4MDQyMjYsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLZl9fLmpzb24iOiAie1wia2V5RGF0YVwiOlwiODdyNE9RUjR3bkhmbmJwTWI1b0V3YWlJU0I2aERMQjlWeWJJa1JibkczZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTY4MDQyMjYsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsN119LFwidGltZXN0YW1wXCI6XCIxNzA4NzY5ODM0ODAxXCJ9Igp9",
  userImages:process.env.USER_IMAGES|| "",
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || "3",
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || false,
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| false,
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
