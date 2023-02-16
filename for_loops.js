console.log("==================");
console.log("==================");
console.log("FOR LOOP: ");
console.log("============ ");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("==================");
console.log("==================");
console.log("FOR IN LOOP: ");
console.log("============ ");

const item = {
  name: "Paasta",
  price: 150,
  expiry: undefined,
  baken: false,
  itemId: BigInt("1501519832"),
};

for (let a in item) {
  console.log(a);
}

console.log("==================");
console.log("==================");
console.log("FOR OF LOOP: ");
console.log("============ ");
const myName = "My Name is Atif";
for (let a of myName) {
  console.log(a);
}
