'use strict';

describe('checkmark', function() {
    beforeEach(module('core'));

    it('should convert boolean values to unicode checkmark or cross',
        inject(function(uppercaseFilter) {
            expect(uppercaseFilter('ASA')).toBe('ASA');
        })
    );
})