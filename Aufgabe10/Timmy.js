var A10Canvas;
(function (A10Canvas) {
    class Timmy {
        move() {
            this.y = Math.random() * (-2);
            this.x = Math.random() * (+4);
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < -150) {
                this.x = Math.random() * 100 + 750; //random * streubreite + startposition
                this.y = 1150;
            }
        }
        draw() {
            A10Canvas.crc2.fillStyle = this.colorTimmy;
            A10Canvas.crc2.strokeStyle = this.colorTimmy;
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
            //Sled
            A10Canvas.crc2.fillStyle = this.colorSled;
            A10Canvas.crc2.strokeStyle = this.colorSled;
            A10Canvas.crc2.lineWidth = 2;
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(this.x + 205, this.y + 582);
            A10Canvas.crc2.lineTo(this.x + 190, this.y + 588);
            A10Canvas.crc2.moveTo(this.x + 200, this.y + 583);
            A10Canvas.crc2.lineTo(this.x + 190, this.y + 595);
            A10Canvas.crc2.moveTo(this.x + 180, this.y + 586);
            A10Canvas.crc2.lineTo(this.x + 165, this.y + 599);
            A10Canvas.crc2.moveTo(this.x + 205, this.y + 593);
            A10Canvas.crc2.lineTo(this.x + 160, this.y + 600);
            A10Canvas.crc2.moveTo(this.x + 170, this.y + 585);
            A10Canvas.crc2.stroke();
        }
    }
    A10Canvas.Timmy = Timmy;
})(A10Canvas || (A10Canvas = {}));
//# sourceMappingURL=Timmy.js.map