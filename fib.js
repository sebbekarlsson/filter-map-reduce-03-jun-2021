function* fib() {
    let n1 = 0;
    let n2 = 1;
    while(true) {
        yield n1;
        n1 = n2;
        n2 = (n1 + n2);
    }
}