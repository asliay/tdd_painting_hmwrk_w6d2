const PaintCan = require("./paintcan.js")

const Decorator = function () {
    this.paintStock = [];
}

Decorator.prototype.addPaint = function(paintCan) {
    this.paintStock.push(paintCan);
}

Decorator.prototype.calculateLitres = function() {
    let totalLitres = 0
    for (paint of this.paintStock) {
        totalLitres += paint.litre 
    }
    return totalLitres
}
module.exports = Decorator;