let saya = {
    nama: "Dhabith",
    usia: 16,
    sekolah: "SMK TI Bazma",
    cita2: "programmer",
    makananFavorit: "semur daging",
    hobi: "Bobo",
}

let ripen = {
    sd: "sekolah komunitas kebon maen",
    smp: "SPQ At-tartil",
    sma: "SMK TI Bazma",
}

document.write("PERKENALAN<br><br>");
document.write(`Nama: ${saya.nama}<br> umur sekarang: ${saya.usia}<br> Asal Sekolah: ${saya.sekolah}<br> cita-cita: ${saya.cita2}<br> saya suka makan<br> ${saya.makananFavorit}<br> hobi: ${saya.hobi}.<br> `);

console.log(`Nama: ${saya.nama}<br> umur sekarang: ${saya.usia}<br> Asal Sekolah: ${saya.sekolah}<br> cita-cita: ${saya.cita2}<br> saya suka makan<br> ${saya.makananFavorit}<br> hobi: ${saya.hobi}.<br> `);

document.write("<br><br>RIWAYAT PENDIDIKAN<br><br>");
document.write(`SD: ${ripen.sd}<br> SMP: ${ripen.smp}<br> SMA: ${ripen.sma}`);


function nama() {
    alert("SELAMAT");
} nama();

function saya(perkenalan) {
    return perkenalan;
} document.write(`assalamualaikum, perkenalkan nama saya Dhabith Abdillah Adipraja`)

function kelas(kls) {
    return kls;
} document.write(` saya kelas X/PPLG `)

function sekul(sekolah) {
    return sekolah;
} document.write(`saya sekolah di SMK TI Bazma `)

function alamat(alamat) {
    return alamat;
} document.write(`rumah saya di bojonggede kab. bogor `)

function hobi(hobiii) {
    return hobiii;
} document.write(`hobi saya makan`)





