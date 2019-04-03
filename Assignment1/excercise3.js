const item = {
    "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price": 200
};

console.log(applyCoupon(item)(10).price === 180);

function applyCoupon(item) {
    return function(discount) {
        item.price -= (item.price * discount / 100);
        return item;
    }
} 