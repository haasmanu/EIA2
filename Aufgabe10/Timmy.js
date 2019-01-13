var A10Canvas;
(function (A10Canvas) {
    class Timmy {
        draw() {
            A10Canvas.crc2.fillStyle = this.colorTimmy;
            A10Canvas.crc2.strokeStyle = this.colorTimmy;
            A10Canvas.crc2.lineWidth = 1;
            A10Canvas.crc2.moveTo(this.x + 200, this.y + 250);
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.arc(this.x + 195, this.y + 250, 5, 0, 2 * Math.PI);
            A10Canvas.crc2.lineTo(this.x + 195, this.y + 280);
            A10Canvas.crc2.lineTo(this.x + 195, this.y + 280);
            A10Canvas.crc2.moveTo(this.x + 195, this.y + 260);
            A10Canvas.crc2.lineTo(this.x + 185, this.y + 260);
            A10Canvas.crc2.moveTo(this.x + 195, this.y + 280);
            A10Canvas.crc2.lineTo(this.x + 185, this.y + 286);
            A10Canvas.crc2.closePath();
            A10Canvas.crc2.stroke();
            A10Canvas.crc2.fill();
            
            //Sled
            A10Canvas.crc2.fillStyle = this.colorSled;
            A10Canvas.crc2.strokeStyle = this.colorSled;
            A10Canvas.crc2.lineWidth = 2;
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(this.x + 205, this.y + 282);
            A10Canvas.crc2.lineTo(this.x + 190, this.y + 288);
            A10Canvas.crc2.moveTo(this.x + 200, this.y + 283);
            A10Canvas.crc2.lineTo(this.x + 190, this.y + 295);
            A10Canvas.crc2.moveTo(this.x + 180, this.y + 286);
            A10Canvas.crc2.lineTo(this.x + 165, this.y + 299);
            A10Canvas.crc2.moveTo(this.x + 205, this.y + 293);
            A10Canvas.crc2.lineTo(this.x + 160, this.y + 300);
            A10Canvas.crc2.moveTo(this.x + 170, this.y + 285);
            A10Canvas.crc2.stroke();
        }
        move() {
            if (this.x < -150) {
                this.y = 30 + this.dy;
                this.x = 820;
            }
            this.x += -6;
            this.y += 2;
            this.draw();
        }
    }
    A10Canvas.Timmy = Timmy;
})(A10Canvas || (A10Canvas = {}));
//# sourceMappingURL=Timmy.js.map