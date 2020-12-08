const assert = require("assert");
const Paint = require("../paint.js");

describe("Paint", function () {
    let teal;
    let burntOrange;

    beforeEach(function() {
        teal = new Paint(10);
        burntOrange = new Paint(0);
    });

    it("should have a number of litres", function() {
        const actual = teal.litre;
        assert.strictEqual(actual, 10);
    })
})