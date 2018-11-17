function max(a, b, c) {
    let mayor;
    if (a > b && a > c) {
        mayor = a;
    } else if (b > a && b > c) {
        mayor = b;
    } else {
        mayor = c;
    }

    return mayor;
}


let mayor = max(8, 20, 6);

console.log(mayor);