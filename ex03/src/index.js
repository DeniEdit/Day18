function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* [6, 7, 8];
}
let generatorArray = [];
const iterator = myGenerator();
console.log(iterator.next());
module.exports = { generatorArray, myGenerator };