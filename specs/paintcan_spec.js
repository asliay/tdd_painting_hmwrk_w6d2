const assert = require("assert");
const PaintCan = require("../paintcan.js");

describe("PaintCan", function () {
    let teal;
    let burntOrange;

    beforeEach(function() {
        teal = new PaintCan(10);
        burntOrange = new PaintCan(0);
    });

    it("should have a number of litres", function() {
        const actual = teal.litre;
        assert.strictEqual(actual, 10);
    })

    it("should be able to check if empty", function() {
        teal.checkEmpty();
        const actual = teal.isEmpty;
        assert.strictEqual(actual, false);
        burntOrange.checkEmpty();
        assert.strictEqual(burntOrange.isEmpty, true);
    })

    xit("should be able to empty itself", function() {
        
    })
})