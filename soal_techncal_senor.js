function globalFunc(items, warna, harga) {
    const ratakan = (arr) => arr.flat();
    items = ratakan(items);
    warna = ratakan(warna);
    harga = ratakan(harga);

    const hasil = [];
    
    for (let a = 0; a < items.length; a++) {
        let item = items[a];
        let warnaItem = warna[a % warna.length];
        let hargaItem = harga[a % harga.length];

        hasil.push(`${item.charAt(0).toUpperCase() + item.slice(1)} ${warnaItem.charAt(0).toUpperCase() + warnaItem.slice(1)} ${hargaItem}`);
    }

    return hasil;
}

const items = ["baju", "celana", "topi", "jaket", "sepatu"];
const harga = ["Diskon", "Sale", "Diskon", "Sale", "Sale"];
const warna = ["merah", "kuning", "hijau", "pink", "ungu"];

// r1
console.log(globalFunc(items, warna, harga));
//k1 tmbaah warna
warna.push("maroon");
console.log(globalFunc(items, warna, harga));

// k2 hrga
harga.push("New");
console.log(globalFunc(items, warna, harga));
// k3 itm
items.push("kacamata");
console.log(globalFunc(items, warna, harga));

// k4 tmbha n
items.push(["sendal"]);
warna.push(["orange"]);
harga.push(["New1"]);
console.log(globalFunc(items, warna, harga));
