var A10Canvas;
(function (A10Canvas) {
    class Jimmy {
        draw() {
            A10Canvas.crc2.fillStyle = this.colorJimmy;
            A10Canvas.crc2.strokeStyle = this.colorJimmy;
            A10Canvas.crc2.lineWidth = 1;
            A10Canvas.crc2.moveTo(this.x, this.y);
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            A10Canvas.crc2.lineTo(this.x - 5, this.y + 30);
            A10Canvas.crc2.lineTo(this.x - 5, this.y + 30);
            A10Canvas.crc2.moveTo(this.x - 5, this.y + 10);
            A10Canvas.crc2.lineTo(this.x - 10, this.y + 10);
            A10Canvas.crc2.moveTo(this.x - 5, this.y + 30);
            A10Canvas.crc2.lineTo(this.x - 10, this.y + 36);
            A10Canvas.crc2.closePath();
            A10Canvas.crc2.stroke();
            A10Canvas.crc2.fill();
            //Sled
            A10Canvas.crc2.fillStyle = this.colorSled;
            A10Canvas.crc2.strokeStyle = this.colorSled;
            A10Canvas.crc2.lineWidth = 2;
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(this.x - 15, this.y + 28);
            A10Canvas.crc2.lineTo(this.x - 15, this.y + 28);
            A10Canvas.crc2.moveTo(this.x - 5, this.y + 23);
            A10Canvas.crc2.lineTo(this.x - 15, this.y + 35);
            A10Canvas.crc2.moveTo(this.x - 25, this.y + 26);
            A10Canvas.crc2.lineTo(this.x - 40, this.y + 39);
            A10Canvas.crc2.moveTo(this.x - 5, this.y + 33);
            A10Canvas.crc2.lineTo(this.x - 45, this.y + 40);
            A10Canvas.crc2.moveTo(this.x - 35, this.y + 25);
            A10Canvas.crc2.stroke();
        }
        move() {
            if (this.y > 800) {
                this.y = 0;
                this.x = 0;
            }
            this.x += 4;
            this.y += -2;
            this.draw();
        }
    }
    A10Canvas.Jimmy = Jimmy;
})(A10Canvas || (A10Canvas = {}));
//# sourceMappingURL=Jimmy.js.map