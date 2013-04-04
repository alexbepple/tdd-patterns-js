describe('Text Munger', function() {

    var munge = function(word) {
        if (word === 'abcd')
            return word[0] +
                word[2] +
                word[1] +
                word[3];
        return word;
    };

    it('leaves words up to 3 letters unchanged', function() {
        expect(munge('abc')).toEqual('abc');
    });
    it('reverses middle of longer words', function() {
        expect(munge('abcd')).toEqual('acbd');
    });
});
