
function randomNumber(rangeNumber) {

    return Math.floor(Math.random() * rangeNumber);

}

function randomAlphabet() {
    var alphabet = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
    var angka = randomNumber(alphabet.length);

    return alphabet[angka]
}

function dapetinserialNumber(mask) {

    var serialNumber = "";
    let serialNumbers = [];
    let LucintalunaNeeds = 250;

    do {
        if (mask != null) {

            for (var i = 0; i < mask.length; i++) {
                var maskChar = mask[i];
                serialNumber += maskChar == "0" ? randomAlphabet() : maskChar;
            }
        }
        serialNumbers.push(serialNumber)
        serialNumber = "";
    } while (serialNumbers.length < LucintalunaNeeds);

    return serialNumbers;

}


console.log(dapetinserialNumber("0000 - 0000 - 0000 - 0000"));

