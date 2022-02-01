exports.limit = (prefix) =>{
	return` ⚠️ Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`
}
exports.limitg= (prefix) =>{
	return` ⚠️ Limit game kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`
}
exports.event = (prefix) =>{
	return` ⚠️ Event grup belum di aktifkan, kirim perintah ${prefix}event on untuk mengaktifkan`
}
exports.wait = () => {
	return `\`\`\`[ ! ] Proses kak...\`\`\``
	}
exports.success = () => {
	return `✅ Selesai...`
	}
exports.successBc = () => {
	return `✅ Sukses Broadcast`
	}
exports.wrongFormat = () => {
	return `❎ Format salah, coba liat lagi di menu`
	}
exports.erorStik = () => {
	return `❎ Itu bukan stiker`
	}
exports.tagStik = () => {
	return `❎ Reply/tag stiker nya`
	}
exports.erorLink = () => {
	return `❎ Linknya error`
	}
exports.onlygc = () => {
	return `❎ Khusus Group`
	}
exports.onlyOwner = () => {
	return `❎ Khusus Owner Bot`
	}
exports.benned = () => {
	return `❎ Maaf, nomor kamu telah di blokir`
	}
exports.onlygcAdmin = () => {
	return `❎ Khusus Admin grup`
	}
exports.cariCecan = () => {
	return `⏳ Mencari cecan`
	}
exports.cariCogan = () => {
	return `⏳ Mencari cogan`
	}
exports.pesanBot = () => {
	return `❎ Reply pesan botnya`
	}
exports.replyFoto = () => {
	return `❎ Reply fotonya`
	}
exports.tagUser = () => {
	return `❎ Tag @user`
	}
exports.noReply = () => {
	return `❎ Pesan yang kamu reply tidak mengandung reply`
	}
exports.changeNmGc = () => {
	return `✅ Sukses  Mengubah Nama Grup`
	}
exports.changeDeskGc = () => {
	return `✅ Sukses  Mengubah Desk Grup`
	}
exports.spam = (prefix, command) => {
	return `❎ Example ${prefix + command} teks|jumlah`
	}
exports.tahta = (prefix, command) => {
	return `❎ Example ${prefix + command} zeeone|ofc`
	}
exports.noteks = (prefix, command) => {
	return `❎ Example ${prefix + command} zeeone`
	}
exports.botNotAdm = () => {
	return `Jadikan bot sebagai admin u/ menggunakan perintah ini`
	}
exports.tryAgain = () => {
	return `❎ Yah gagal, coba ulangi ^_^`
	}
exports.anlinOn = () => {
	return `✅ Antilink Di Aktifkan`
	}
exports.anlinOff = () => {
	return `✅ Antilink Di Nonaktifkan`
	}
exports.notregis = (prefix, sender) => {
	return `Hai @${sender.split("@")[0]} kamu belum terdaftar di database, silahkan ketik ${prefix}verify\n\nKamu juga bisa daftar dengan cara mengirimkan kode verifikasi dari web api\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `Hai ${pushname} kamu sudah terdaftar di database`
	}
exports.enNum = () => {
 return `❎ Masukan Angka Dengan Benar`
 }
exports.adminGc = () => {
 return `Karena lu adalah admin jadi bot gk bakal kick lu`
 }
 exports.izinDt = () => {
 return `Izin diterima`
 }
 exports.anjawaOn = (command) => {
	return `✅ ${command} Di Aktifkan`
	}
exports.anjawaOff = (command) => {
	return `✅ ${command} Di Nonaktifkan`
	}
exports.anjawaUdhOn = (command) => {
	return `✅ ${command} sudah aktif`
	}
exports.anjawaUdhOon = (command) => {
	return `Pilih on untuk mengaktifkan, off untuk menonaktifkan`
	}
exports.onORoff = (command) => {
	return `Pilih on untuk mengaktifkan, off untuk menonaktifkan`
	}
exports.gcOpen = (command) => {
	return `✅ ${command} Berhasil membuka grup`
	}
exports.gcClose = (command) => {
	return `✅ ${command} Berhasil Menutup grup`
	}
exports.nsfwmo= () => {
	return `Fitur nsfw belum di aktifkan, hubungi owner bot u/ mengaktifkan`
	}
exports.erorCode = () => {
 return `Kode yang anda masukkan salah silahkan cek kembali\nhttps://api-alphabot.herokuapp.com/api/verification`
 }
 exports.callOwner = () => {
 return `Hubungi owner untuk menggunakan fitur ini`
 }
 //vote
exports.noSesiVote = () => {
 	return`Tidak ada sesi voting`
 }
exports.suksesDelVot = () => {
	return`Sukses Menghapus sesi Voting Di Grup Ini`
	}
exports.adaVoting = () => {
	return`Sesi Voting Sedang Berlangsung Di Grup Ini`
	}
exports.caraVoting = (prefix, command) => {
    return`*Voting*\n\n${prefix + command} @tag target | reason  | 1 (1 = 1 Menit)`
    }
exports.caraVot = () => {
 	return`masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit`
    }
//ttt
exports.noSesiTtt = () =>{
	return`Tidak ada sesi tictactoe di grup ini`
	}
exports.suksesDelTtt = () =>{
	return`Berhasil menghapus sesi tictactoe di grup ini`
	}
//on & off
exports.ownerOff = () =>{
	return`Owner saya telah off`
	}
exports.ownerOn = () =>{
	return`Owner saya kembali on`
	}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
📛 𝖭𝖺𝗆𝖺 :
🔞 𝖴𝗆𝗎𝗋 :
🧑 𝖦𝖾𝗇𝖽𝖾𝗋 :
🏙️ 𝖠𝗌𝗄𝗈𝗍 :
╰ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
