// Null
// Number
// String
// Symbol
// Boolean
// BigInt
// undefined

let a = null;
let b = 120;
let c = "Atif";
let d = Symbol("124");
let e = false;
let f = BigInt("123455666");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(
  typeof a,
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof f,
  typeof g
);

const item = {
  name: "Paasta",
  price: 150,
  expiry: undefined,
  baken: false,
  itemId: BigInt("1501519832"),
  quantity: 10,
  totalAmount: function () {
    return this.price * this.quantity;
  },
};
// console.log(item);
console.log(item["name"]);

// const variable aik object ko refer kar rha hai... us object k andr change kar skte hain but variable ko ni kar skte hain
// item = {}  // not allowed
// item = "Hello" // not allowed

item["expiry"] = "12-12-24";
console.log(item["expiry"]);
console.log(item.expiry);

item["arrived"] = "10-12-24";
console.log(item["arrived"]);
console.log(item.arrived);

console.log(item.totalAmount());
