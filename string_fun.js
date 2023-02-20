let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
// console.log(length);
// console.log(text.slice(7, 13));
// console.log(text.slice(7));
// console.log(text.slice(-12));
// console.log(text.slice(-12, -6));
// console.log(text.substring(7, 13));
// console.log(text.substr(7, 6)); // no more usage

console.log(text.replace("ABCD", "DCBA"));
console.log(text.replaceAll(/Cats/g, "Dogs")); // GLOBAL
// console.log(text.replaceAll(/Cats/i, "Dogs")); // insensitive

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.concat(" ", " KING OF PAKISTAN"));