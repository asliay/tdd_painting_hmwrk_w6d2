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

Decorator.prototype.enoughPaint = function(room) {
    totalPaint = this.calculateLitres()
    if (totalPaint >= room.area) {
        return true
    } else {
        return false
    }


}

Decorator.prototype.paintRoom = function(room) {
    if (this.enoughPaint(room)){
        room.isPainted = true
    }

}


module.exports = Decorator;