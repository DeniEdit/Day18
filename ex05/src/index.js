let shopingList = new Map([
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5],
]);
for(let col of shopingList.entries()) {
    console.log(`${col[0]}: ${col[1]}`);
}

let arrKey = [];
arrKey = new Map(shopingList);
console.log(Array.from(arrKey));
console.log([...arrKey]);
let arrValue = [];
arrValue = new Map(arrKey);
console.log(Array.from(arrValue));
console.log([...arrValue]);
module.exports = { shopingList, arrKey, arrValue };