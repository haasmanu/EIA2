var terminator;
(function (terminator) {
    class SnowFlake extends terminator.Moving {
        /*constructor() {
            super();
        }*/
        move() {
            this.y += this.dy;
            if (this.y > terminator.crc2.canvas.height + 2) {
                this.y = -2;
            }
            this.draw();
        }
        draw() {
            terminator.crc2.fillStyle = "#ffffff";
            terminator.crc2.strokeStyle = "#000000";
            terminator.crc2.lineWidth = 1;
            terminator.crc2.beginPath();
            terminator.crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            terminator.crc2.fillStyle = "#ffffff";
            terminator.crc2.fill();
            terminator.crc2.closePath();
            terminator.crc2.fill();
            terminator.crc2.stroke();
        }
    }
    terminator.SnowFlake = SnowFlake;
})(terminator || (terminator = {}));
//# sourceMappingURL=SnowFlakes.js.map