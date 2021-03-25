let rockStar = new Map();

rockStar.set("artist", "The Rolling Stones");
rockStar.set("song", "Angie");
rockStar.set("album", "Goats Head Soup");
rockStar.set("singer", "Mick Jagger");

for(let value of rockStar)
console.log(value);

let newRock = new Map();
module.exports = { rockStar, newRock };