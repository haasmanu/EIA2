var A10Canvas;
(function (A10Canvas) {
    class Jimmy {
        draw() {
            A10Canvas.crc2.fillStyle = this.colorJimmy;
            A10Canvas.crc2.strokeStyle = this.colorJimmy;
            A10Canvas.crc2.lineWidth = 1;
            A10Canvas.crc2.moveTo(this.x + 200, this.y + 550);
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.arc(this.x + 195, this.y + 550, 5, 0, 2 * Math.PI);
            A10Canvas.crc2.lineTo(this.x + 195, this.y + 580);
            A10Canvas.crc2.lineTo(this.x + 195, this.y + 580);
            A10Canvas.crc2.moveTo(this.x + 195, this.y + 560);
            A10Canvas.crc2.lineTo(this.x + 185, this.y + 560);
            A10Canvas.crc2.moveTo(this.x + 195, this.y + 580);
            A10Canvas.crc2.lineTo(this.x + 185, this.y + 586);
            A10Canvas.crc2.closePath();
            A10Canvas.crc2.stroke();
            A10Canvas.crc2.fill();
        }
    }
    A10Canvas.Jimmy = Jimmy;
})(A10Canvas || (A10Canvas = {}));
//# sourceMappingURL=Jimmy.js.map