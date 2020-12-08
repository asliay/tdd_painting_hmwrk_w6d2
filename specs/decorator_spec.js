const assert = require("assert");
const Decorator = require("../decorator.js");
const PaintCan = require("../paintcan")
const Room = require("../room")

describe("Decorator", function() {

    let decorator;
    let teal;
    let bedroom;

    beforeEach(function() {
        decorator = new Decorator();
        teal = new PaintCan(10)
        bedroom = new Room(15)
    });

    it("should start with an empty stock of paint", function() {
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    })

    it("should be able to add paint can to stock", function() {
        decorator.addPaint(teal);
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [teal]);

    })


})