describe('Text Munger', function() {

    var munge = function(word) {
        return word;
    };

    it('leaves words up to 3 letters unchanged', function() {
        expect(munge('abc')).toEqual('abc');
    });
    xit('reverses middle of longer words', function() {
        expect(munge('abcd')).toEqual('acbd');
    });
});
