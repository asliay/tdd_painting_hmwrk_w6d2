const assert = require("assert");
const Room = require("../room.js");

describe("Room", function() {

    let bedroom;

    beforeEach(function() {
        bedroom = new Room(15);
    });

    it("should have an area", function() {
        const actual = bedroom.area;
        assert.strictEqual(actual, 15);
    });

    it("should start not painted", function() {
        const actual = bedroom.isPainted;
        assert.strictEqual(actual, false);
    });

    it("should be able to be painted", function() {
        bedroom.paintRoom();
        const actual = bedroom.isPainted;
        assert.strictEqual(actual, true);
    });





})