let sayi1;
let sayi2;
let sonuc;
let opt;

function hesapla(sayi) {
    document.getElementById('panel').value += sayi;
}

function islem(operator) {
    sayi1 = document.getElementById('panel').value;
    opt = operator;

    if (operator === 'C') {
        document.getElementById('panel').value = '';

        sayi1 = '';
        sayi2 = '';

        return;
    }

    document.getElementById('panel').value = '';
}

function sonucBul() {
    sayi2 = document.getElementById('panel').value;

    console.log(sayi1);
    console.log(sayi2);
    console.log(opt);

    if (opt === '+') sonuc = parseInt(sayi1) + parseInt(sayi2);
    else if (opt === '-') sonuc = parseInt(sayi1) - parseInt(sayi2);
    else if (opt === '*') sonuc = parseInt(sayi1) * parseInt(sayi2);
    else if (opt === '/') sonuc = parseInt(sayi1) / parseInt(sayi2);

    sayi1 = sonuc;
    document.getElementById('panel').value = sonuc;
}