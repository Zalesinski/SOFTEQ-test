function print() {
    for (let i = 1; i <= 99; i++) {
        let a = i % 3 == 0, b = i % 7 == 0;
        console.log(a ? b ? "OpenSource" : "Open" : b ? "Source" : i);
    }
}

print();