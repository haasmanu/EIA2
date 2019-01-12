var A10Canvas;
(function (A10Canvas) {
    class Tree {
        draw() {
            A10Canvas.crc2.fillStyle = this.colorWood;
            A10Canvas.crc2.strokeStyle = this.colorWood;
            A10Canvas.crc2.lineWidth = 1;
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(this.x + 5, this.y + 7.5);
            A10Canvas.crc2.lineTo(this.x - 5, this.y + 7.5);
            A10Canvas.crc2.lineTo(this.x - 5, this.y - 12.5);
            A10Canvas.crc2.lineTo(this.x + 5, this.y - 12.5);
            A10Canvas.crc2.closePath();
            A10Canvas.crc2.fill();
            A10Canvas.crc2.stroke();
            A10Canvas.crc2.fillStyle = this.colorTree;
            A10Canvas.crc2.strokeStyle = "#004d00";
            A10Canvas.crc2.lineWidth = 1;
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(this.x - 30, this.y - 10);
            A10Canvas.crc2.lineTo(this.x, this.y - 55);
            A10Canvas.crc2.lineTo(this.x + 30, this.y - 10);
            A10Canvas.crc2.closePath();
            A10Canvas.crc2.fill();
            A10Canvas.crc2.stroke();
            A10Canvas.crc2.fillStyle = this.colorTree;
            A10Canvas.crc2.strokeStyle = "#004d00";
            A10Canvas.crc2.lineWidth = 1;
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(this.x - 27, this.y - 27.5);
            A10Canvas.crc2.lineTo(this.x, this.y - 75);
            A10Canvas.crc2.lineTo(this.x + 27, this.y - 27.5);
            A10Canvas.crc2.closePath();
            A10Canvas.crc2.fill();
            A10Canvas.crc2.stroke();
            A10Canvas.crc2.fillStyle = this.colorTree;
            A10Canvas.crc2.strokeStyle = "#004d00";
            A10Canvas.crc2.lineWidth = 1;
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(this.x - 24, this.y - 42);
            A10Canvas.crc2.lineTo(this.x, this.y - 95);
            A10Canvas.crc2.lineTo(this.x + 24, this.y - 42);
            A10Canvas.crc2.closePath();
            A10Canvas.crc2.fill();
            A10Canvas.crc2.stroke();
        }
    }
    A10Canvas.Tree = Tree;
})(A10Canvas || (A10Canvas = {}));
//# sourceMappingURL=Tree.js.map