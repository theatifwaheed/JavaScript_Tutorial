const item = {
    name: "Paasta",
    price: 150,
    expiry: undefined,
    baken: false,
    itemId: BigInt("1501519832"),
    quantity: 50,
    totalAmount: function() {
        return this.price * this.quantity;
    },
    set setQuantity(quantity) {
        this.quantity = quantity;
    },
    get getQuantity() {
        return this.quantity;
    },
};

console.log("Baken: " + item.baken);
console.log("Baken: " + item["baken"]);

console.log("Quantity: " + item.getQuantity);
item.setQuantity = 10;
console.log("Quantity: " + item.getQuantity);