const fs = require("fs");

//===== [ Session ] =====\\
global.session = 'session' // Jangan Di Ubah

//======= [ Setting ] =======\\
global.owner = "62882015082351"
global.creator = "Gihh Hosting"
global.botNumber = "6282173284892"
global.botName = "Simple Bot Shop"
global.delayPushkontak = "7000" // 1000 = 1 detik
global.delayJpm = "5000" // 1000 = 1 detik
global.idSaluran = "120363336758292547@newsletter"
global.namaSaluran = "⏤͟͟͞͞Gihh Hosting - Maniac Script ㄆ"

//======= [ Setting CloudFlare ] =======\\
global.apitoken_cloudflare = "twXs3i-5OpvPdJWQcn0fvxIH-qrfKT1H8AvasC2w"
global.accountid_cloudflare = "5d931e976a8e77d671c8d5a7be393303"
global.email_cloudflare = "gihhdeveloper@gmail.com"

//====== [ Setting API DigitalOcean ] ======\\
global.apiDigitalOcean = "dop_v1_6db934f8b7ce25d49bcf188d49a94d3e57dce22fd851d758e62ec82d2ade6581"

//====== [ Setting Cpanel ] ======\\
global.egg = "15" // Id Egg
global.nestid = "5" // Id Nest
global.loc = "1" // Id Location
global.domain = "https://sellerpanelamanah.gihhdeveloper.biz.id"
global.apikey = "ptla_CrBVrdxeuQgEbfYPGDwddgAySinaJmTDeLL4gLfzG69" // Plta
global.capikey = "ptlc_U15dl8HSG69LiK5Cn9AxTPi6fLBhtMVW4rHFd0cKoMt" // Pltc

//====== [ Setting Payment ] ======\\
global.dana = "085264075767"
global.ovo = "Tidak Tersedia"
global.gopay = "Tidak Tersedia"
global.shopepay = "Tidak Tersedia"
global.qris = "https://files.catbox.moe/8dqn8m.jpg"

//====== [ Setting Link ] ======\\
global.linkSaluran = "https://whatsapp.com/channel/0029VajqjcmAYlUHlImvMC3X"
global.linkGrup = "https://whatsapp.com/channel/0029Vay2RwO9WtCDKicD0B0a"

//====== [ Setting Thumbnail ] ======\\
global.imgmenu = "https://files.catbox.moe/bkiysm.jpg"

global.subdomain = {
"gihhdeveloper.biz.id": {
"zone": "7557ba26e89dd9cb4f532c9c6536273c", 
"apitoken": "twXs3i-5OpvPdJWQcn0fvxIH-qrfKT1H8AvasC2w"
}, 
"gihhtampan.my.id": {
"zone": "1d949a38193a6bd6a37b49ca74880422", 
"apitoken": "dv4EiL37P3GmvQO7FfHBK3-cSC15frkrfYihqCNR"
}, 
"cloud-shopp.biz.id": {
"zone": "365f57282cbea3a6d5a738f107df244e", 
"apitoken": "hZKxD6afDLF-wsg1qVA-qbDK_h8lBE4NtqnVZPP8"
}, 
"marketplace.us.kg": {
"zone": "2f33118c3db00b12c38d07cf1c823ed1", 
"apitoken": "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ZPAXx7CL51PtbGweL2pE3BsI3x0hgTgLuy56iXuo"
}, 
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "cj17Lzg9otqwkYIVzgL0pcVA4GfcXqePHAOhCqa_"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"botwhatsapp.us.kg": {
"zone": "fb1ac418c5564373a56c91d962b30dca", 
"apitoken": "rfQih0XNXiq7AyEuDoLjoFfHX2mhYf_9kddAdKIo"
}, 
"market-panel.site": {
"zone": "d06bf5450ae51612a400bab1c4450283", 
"apitoken": "kmb6AkpJ6XvHMzw2m0KbYKZOycIURNYMPA7Wm0BE"
}, 
"gacorr.biz.id": {
"zone": "cff22ce1965394f1992c8dba4c3db539", 
"apitoken": "v9kYfj5g2lcacvBaJHA_HRgNqBi9UlsVy0cm_EhT"
}
}

global.mess = {
    admin: "Fitur ini hanya dapat digunakan oleh admin </>",
	botAdmin: "Fitur hanya dapat digunakan ketik bot menjadi admin </>",
	group: "Fitur ini hanya dapat digunakan di grup chat </>",
    wait: "Mohon Tunggu Sebentar. . . .",
    owner: "Fitur ini hanya dapat digunakan oleh owner bot </>"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update ${__filename}`)
    delete require.cache[file]
    require(file)
})