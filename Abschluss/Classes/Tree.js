var terminator;
(function (terminator) {
    class Tree extends terminator.Everything {
        draw() {
            terminator.crc2.fillStyle = "#9d4e15";
            terminator.crc2.strokeStyle = "#9d4e15";
            terminator.crc2.lineWidth = 1;
            terminator.crc2.beginPath();
            terminator.crc2.moveTo(this.x + 5, this.y + 7.5);
            terminator.crc2.lineTo(this.x - 5, this.y + 7.5);
            terminator.crc2.lineTo(this.x - 5, this.y - 12.5);
            terminator.crc2.lineTo(this.x + 5, this.y - 12.5);
            terminator.crc2.closePath();
            terminator.crc2.fill();
            terminator.crc2.stroke();
            terminator.crc2.fillStyle = "#008000";
            terminator.crc2.strokeStyle = "#004d00";
            terminator.crc2.lineWidth = 1;
            terminator.crc2.beginPath();
            terminator.crc2.moveTo(this.x - 30, this.y - 10);
            terminator.crc2.lineTo(this.x, this.y - 55);
            terminator.crc2.lineTo(this.x + 30, this.y - 10);
            terminator.crc2.closePath();
            terminator.crc2.fill();
            terminator.crc2.stroke();
            terminator.crc2.fillStyle = "#008000";
            terminator.crc2.strokeStyle = "#004d00";
            terminator.crc2.lineWidth = 1;
            terminator.crc2.beginPath();
            terminator.crc2.moveTo(this.x - 27, this.y - 27.5);
            terminator.crc2.lineTo(this.x, this.y - 75);
            terminator.crc2.lineTo(this.x + 27, this.y - 27.5);
            terminator.crc2.closePath();
            terminator.crc2.fill();
            terminator.crc2.stroke();
            terminator.crc2.fillStyle = "#008000";
            terminator.crc2.strokeStyle = "#004d00";
            terminator.crc2.lineWidth = 1;
            terminator.crc2.beginPath();
            terminator.crc2.moveTo(this.x - 24, this.y - 42);
            terminator.crc2.lineTo(this.x, this.y - 95);
            terminator.crc2.lineTo(this.x + 24, this.y - 42);
            terminator.crc2.closePath();
            terminator.crc2.fill();
            terminator.crc2.stroke();
        }
    }
    terminator.Tree = Tree;
})(terminator || (terminator = {}));
//# sourceMappingURL=Tree.js.map