/*
Support channel ZEEONE OFC
*/
exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*
• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}
• Total User : ${totalUser.length}
Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}
exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Gender :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  >_<`
count leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
