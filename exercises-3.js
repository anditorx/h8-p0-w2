// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"

var nama ='';
var peran = '';

if (nama=='') {
    console.log('Nama harus diisi!')
} else {
    console.log('Selamat datang,' +nama)
}

//Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!"

var nama = 'Mikael';
var peran = '';

if (peran=='') {
    console.log('Halo ' +nama+ ', Pilih peranmu untuk memulai game!')
} else {
    console.log('Selamat datang '+nama+ ', peranmu adalah ' +peran)
}

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

var nama = 'Nina';
var peran = 'Ksatria';

if (peran=='Ksatria') {
    console.log('Selamat datang di Dunia Proxyta,' +nama)
    console.log('Halo ' +peran , nama+ ', kamu dapat menyerang dengan senjatamu!')
} else {
    console.log('Halo' +nama+ ', pilih peranmu untuk memulai game!')
}

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

var nama = 'Danu';
var peran = 'Tabib';

if (peran=='Tabib') {
    console.log('Selamat datang di Dunia Proxyta,' +nama)
    console.log('Halo ' +peran , nama+ ', kamu akan membantu temanmu yang terluka.')
} else {
    console.log('Halo' +nama+ ', pilih peranmu untuk memulai game!')
}

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"

var nama = 'Zero';
var peran = 'Penyihir';

if (peran=='Penyihir') {
    console.log('Selamat datang di Dunia Proxyta,' +nama)
    console.log('Halo ' +peran , nama+ ', ciptakan keajaiban yang membantu kemenanganmu!')
} else {
    console.log('Halo' +nama+ ', pilih peranmu untuk memulai game!')
}