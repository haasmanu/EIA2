var A10Canvas;
(function (A10Canvas) {
    class Snow {
        move() {
            this.y += this.dy;
            if (this.y > A10Canvas.crc2.canvas.height + 2) {
                this.y = -2;
            }
        }
        draw() {
            A10Canvas.crc2.fillStyle = this.color;
            A10Canvas.crc2.strokeStyle = "#000000";
            A10Canvas.crc2.lineWidth = 1;
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            A10Canvas.crc2.fillStyle = "#ffffff";
            A10Canvas.crc2.fill();
            A10Canvas.crc2.closePath();
            A10Canvas.crc2.fill();
            A10Canvas.crc2.stroke();
        }
    }
    A10Canvas.Snow = Snow;
})(A10Canvas || (A10Canvas = {}));
//# sourceMappingURL=Snow.js.map