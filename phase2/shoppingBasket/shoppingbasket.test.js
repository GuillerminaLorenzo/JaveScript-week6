const ShoppingBasket = require('./shoppingBasket');

const marsDouble = { getName: () => 'Mars', getPrice: () => 4.99};
const skittleDouble = { getName: () => 'Skittles', getPrice: () => 3.99};



describe('shoppingBasket', () => {
    it('get total price', () => {
        const basket = new ShoppingBasket();
        result = basket.getTotalPrice();
        expect(result).toBe(0);
    });
    it('adds a candy and gets total price', () => {
        const basket = new ShoppingBasket();
        basket.addItem(marsDouble);
        result = basket.getTotalPrice();
        expect(result).toBe(4.99);
    });
    it('adds three candies and gets total price', () => {
        const basket = new ShoppingBasket();
        basket.addItem(marsDouble);
        basket.addItem(skittleDouble);
        basket.addItem(skittleDouble);
        result = basket.getTotalPrice();
        expect(result).toBe(12.97);
    });
});