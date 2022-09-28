const searchCandies = require('./searchCandies');

describe ( 'searchCandies', () => {
    it ('returns Mars and Maltesers', () => {
        result = searchCandies('Ma', 10);
        expect(result).toEqual([ 'Mars', 'Maltesers' ]);
    });

    it ('returns Mars', () => {
        result = searchCandies('Ma', 2);
        expect(result).toEqual([ 'Mars' ]);
    });

    it ('returns Skitties, Skittles, Starburst', () => {
        result = searchCandies('S', 10);
        expect(result).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    });

    it ('returns Skitties, Skittles', () => {
        result = searchCandies('S', 4);
        expect(result).toEqual([ 'Skitties', 'Skittles' ]);
    });

    it ('returns Mars and Maltesers', () => {
        result = searchCandies('ma', 10);
        expect(result).toEqual([ 'Mars', 'Maltesers' ]);
    });

});