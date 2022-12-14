/*
ANCHOR PRIME NUMBER 
*/

function primeNumber0(r) {
    if (r <= 1) return null;
    let e = [2];
    for (i = 3; i <= r; i += 2) {
        let t = Math.sqrt(i);
        for (o = 0; o < e.length && i % e[o] != 0; o++)
            if (e[o] > t) {
                e.push(i);
                break;
            }
    }
    return e;
}

function primeNumber(r, e) {
    r = Math.ceil(r)
    e = Math.floor(e)
    let u = [];
    if (r <= 2) (r = 3), u.push(2);
    else if (r > e) return null;
    for (r % 2 == 0 && r++, e % 2 == 0 && e--, i = r; i <= e; i += 2) {
        let f = Math.sqrt(i);
        for (o = 3; o <= f + 2 && (i % o != 0 || i == o); o++)
            if (o > f) {
                u.push(i);
                break;
            }
    }
    return u;
}


function isPrime(r) {
    if (r < 2 || (r % 2 == 0 && 2 != r) || r != Math.floor(r)) return !1;
    if (2 == r) return !0;
    let e = Math.ceil(Math.sqrt(r)) + 1;
    for (i = 3; i < e; i++) if (r % i == 0) return !1;
    return !0;
}

