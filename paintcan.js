const PaintCan = function (litre) {
    this.litre = litre;
}

PaintCan.prototype.checkEmpty = function() {
   return !this.litre // this returns the opposite of the truthiness of this value
}

PaintCan.prototype.emptyCan = function() {
    this.litre = 0;
}


module.exports = PaintCan;