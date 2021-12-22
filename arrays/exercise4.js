function findSubstring(s, k) {
    let length, start = 0,
        array = s.trim().split(''),
        conjunto = [];
    do {
        length = 1;
        let contenido = array.filter((e, i) => {
            if (i >= start && length <= k) {
                length++;
                return e
            }
        });
        start++;
        length = contenido.length;
        length == k ? conjunto.push(contenido) : null;
    }
    while (length == k);
    let res = conjunto.map(j => {
        start = 0;
        j.map(e => {
            e == 'a' || e == 'e' || e == 'i' || e == 'o' || e == 'u' ? start++ : null
        })
        return start;
    })
    console.log(conjunto)
    if (Math.max(...res) == -Infinity || Math.max(...res) == 0) {
        return "Not found!"
    }
    return conjunto[res.indexOf(Math.max(...res))].join('')
}
console.log(findSubstring('aliejrecyoun', 4));