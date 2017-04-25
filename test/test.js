import lib from '..';
import chai from 'chai';

var assert =  chai.assert;

describe('Math', function() {
    describe('plus()', function() {
        it('equal 2+2 = 4', function() {
            assert.equal(4, lib.plus(2,2));
        });

        it('not equal 2+2 = 5', function() {
            assert.notEqual(5, lib.plus(2,2));
        });
    });
});


it('should complete this test', function () {
    return new Promise(function (resolve) {
        assert(true);
        resolve();
    })
        .then();
});



describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            lib.save(function(err) {
                if (err) done(err);
                else done();
            });
        });
    });
});