function* myGenerator() {
    function* insideGenerator1() {
        var x;
        for(i = 1; i <= 5; i++)  { 
            x=i; 
            yield x;
    }
}
    function* insideGenerator2() {
        for( i = 10; i <= 15; i++) {
         x=i;
        yield x;
    }
}
    function* insideGenerator3() {
        for( i = 6; i <= 9; i++) {
            x = i;
            yield x;
    }
}

function* myGenerator() {
     yield insideGenerator1();
     yield insideGenerator2();
     yield insideGenerator3();
}

const iterator = myGenerator();
let fifteenArray = [];
for(let i = 0; i < 16; i++)  {
    let iter = iterator.next();
    fifteenArray[i] = iter.value + (iter.done ? "!" : "#");
}

module.exports = { fifteenArray, myGenerator };
