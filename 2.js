let blokCoklat = [1, 2, 1, 3, 2]

var tanggalLahir = 3;
var bulanLahir = 2;

let tanggal = 0;
let bulan = 0;

// berurut
let urut = blokCoklat.sort()


for (let i = 0; i < urut.length; i++) {
    if (i === tanggalLahir) {
        tanggal += 1
    }
}


for (let i = 0; i < urut.length; i++) {
    if (urut[i] === bulanLahir) {
        bulan += 1
    } else {
        bulan += 0
    }
}

var hasil = bulan * tanggal;

console.log(hasil);



