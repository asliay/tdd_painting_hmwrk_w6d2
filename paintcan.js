const PaintCan = function (litre, isEmpty=false) {
    this.litre = litre;
    this.isEmpty = isEmpty
}

PaintCan.prototype.checkEmpty = function() {
    if (this.litre === 0){
        this.isEmpty = true;
    }
}


module.exports = PaintCan;