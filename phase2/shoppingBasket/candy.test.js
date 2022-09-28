const Candy = require('./candy');

describe('candy', () => {
    it ('adds Mars as candy and returns the name', () => {
        const candy = new Candy('Mars', 4.99);
        result = candy.getName();
        expect(result).toEqual('Mars');
    });

    it ('adds Mars as candy and returns the price', () => {
        const candy = new Candy('Mars', 4.99);
        result = candy.getPrice();
        expect(result).toEqual(4.99);
    });
});