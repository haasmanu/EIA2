var A11;
(function (A11) {
    class JiTiInfo extends A11.MovingObjekts {
        constructor(_x, _y, _headcolor, _bodycolor) {
            super(_x, _y);
            this.x = Math.random() * 60 + 15;
            this.y = Math.random() * 60 + 290;
            this.colorJiTi = _headcolor;
            this.colorSled = _bodycolor;
        }
        draw() {
            A11.crc2.fillStyle = this.colorJiTi;
            A11.crc2.strokeStyle = this.colorJiTi;
            A11.crc2.lineWidth = 1;
            A11.crc2.moveTo(this.x + 200, this.y + 250);
            A11.crc2.beginPath();
            A11.crc2.arc(this.x + 195, this.y + 250, 5, 0, 2 * Math.PI);
            A11.crc2.lineTo(this.x + 195, this.y + 280);
            A11.crc2.lineTo(this.x + 195, this.y + 280);
            A11.crc2.moveTo(this.x + 195, this.y + 260);
            A11.crc2.lineTo(this.x + 185, this.y + 260);
            A11.crc2.moveTo(this.x + 195, this.y + 280);
            A11.crc2.lineTo(this.x + 185, this.y + 286);
            A11.crc2.closePath();
            A11.crc2.stroke();
            A11.crc2.fill();
            //Sled
            A11.crc2.fillStyle = this.colorSled;
            A11.crc2.strokeStyle = this.colorSled;
            A11.crc2.lineWidth = 2;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x + 205, this.y + 282);
            A11.crc2.lineTo(this.x + 190, this.y + 288);
            A11.crc2.moveTo(this.x + 200, this.y + 283);
            A11.crc2.lineTo(this.x + 190, this.y + 295);
            A11.crc2.moveTo(this.x + 180, this.y + 286);
            A11.crc2.lineTo(this.x + 165, this.y + 299);
            A11.crc2.moveTo(this.x + 205, this.y + 293);
            A11.crc2.lineTo(this.x + 160, this.y + 300);
            A11.crc2.moveTo(this.x + 170, this.y + 285);
            A11.crc2.stroke();
        }
        move() {
            if (this.md == true)
                this.moveDown();
            else {
                this.moveUp();
            }
        }
        moveDown() {
            if (this.x > 800) {
                this.md = false;
                // this.x = 0;
                // this.y = 200;
                this.colorJiTi = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            //Richtung
            this.x += Math.random() * (-6);
            this.y += Math.random() * (2);
            this.draw();
        }
        moveUp() {
            if (this.x < 30) {
                this.md = true;
                // this.x = Math.random() * 100 + 50;
                // this.x = 300;
                // this.y = 450;
                this.colorJiTi = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            //Richtung
            this.x += Math.random() * (4);
            this.y += Math.random() * (-2);
            this.draw();
        }
    }
    A11.JiTiInfo = JiTiInfo;
})(A11 || (A11 = {}));
//# sourceMappingURL=JimmyTimmy.js.map