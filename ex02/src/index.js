function* myGenerator() {
    function* insideGenerator1() {
        for(let i = 1; i <= 5; i++) 
            yield x;
    }
    function* insideGenerator2() {
        yield* myGenerator();
        for(let i = 10; i <= 15; i++) 
        yield x;
    }
    function* insideGenerator3() {
        yield* insideGenerator1();
        for(let i = 6; i <= 9; i++) 
            yield x;
    }
}
const iterator = myGenerator();
console.log(iterator.next().value);
let fifteenArray = [];
let x;
for(let i=0; i < x; i++) {
    console.log(iterator.next().value);
}

module.exports = { fifteenArray, myGenerator };