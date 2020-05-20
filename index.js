let a = 5
let b = 7
let c = 9

function hitung(x, y, fungsi) {
    return fungsi(x * y)
}

console.log(hitung(a, c, (x,y) => x * y))