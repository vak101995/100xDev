const input = [1, 2, 3, 4, 5];

const multiple = input.map((i) => {
    return i * 2;
})

//arrayname.map(transform function)

console.log(multiple)

const evenArray = input.filter((i) => i % 2 == 0);

console.log(evenArray);