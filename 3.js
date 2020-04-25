

function gambar(ganjil) {
    let hasil = "";

    for (let i = 1; i <= ganjil; i++) {
        for (let u = 1; u <= ganjil; u++) {
            if (i == u) {
                hasil = hasil.concat("*")
            } else if (u == ganjil - i + 1) {
                hasil = hasil.concat("*");
            }
            else {
                hasil = hasil.concat("-")
            }
        }
        hasil = hasil.concat("\n");
    }

    return hasil;

}

console.log(gambar(5))

