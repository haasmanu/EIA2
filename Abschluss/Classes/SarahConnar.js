var terminator;
(function (terminator) {
    class Sarah extends terminator.Moving {
        draw() {
            if (this.state == "down") {
                this.drawSarah();
            }
            if (this.state == "terminated") {
                this.drawTerminated();
            }
            if (this.state == "up") {
                this.drawSarahUp();
            }
        }
        move() {
            if (this.state == "down") {
                this.moveDown();
            }
            else if (this.state == "up") {
                this.moveUp();
            }
            else {
                this.moveDownSled();
            }
        }
        moveDown() {
            this.x -= this.speed * 6;
            this.y += this.speed * 2;
            if (this.x < 0) {
                this.state = "up";
            }
        }
        moveUp() {
            this.x += this.speed * 6;
            this.y -= this.speed * 2;
            if (this.x > 820) {
                this.state = "down";
            }
        }
        moveDownSled() {
            this.x -= this.speed * 6;
            this.y += this.speed * 2;
        }
        drawSarahUp() {
            terminator.crc2.fillStyle = "#1E90FF";
            terminator.crc2.strokeStyle = "#1E90FF";
            terminator.crc2.lineWidth = 1;
            terminator.crc2.moveTo(this.x, this.y);
            terminator.crc2.beginPath();
            terminator.crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            terminator.crc2.lineTo(this.x - 5, this.y + 30);
            terminator.crc2.lineTo(this.x - 5, this.y + 30);
            terminator.crc2.moveTo(this.x - 5, this.y + 10);
            terminator.crc2.lineTo(this.x - 10, this.y + 10);
            terminator.crc2.moveTo(this.x - 5, this.y + 30);
            terminator.crc2.lineTo(this.x - 10, this.y + 36);
            terminator.crc2.closePath();
            terminator.crc2.stroke();
            terminator.crc2.fill();
            //Sled
            terminator.crc2.fillStyle = "#9d4e15";
            terminator.crc2.strokeStyle = "#9d4e15";
            terminator.crc2.lineWidth = 2;
            terminator.crc2.beginPath();
            terminator.crc2.moveTo(this.x - 15, this.y + 28);
            terminator.crc2.lineTo(this.x - 15, this.y + 28);
            terminator.crc2.moveTo(this.x - 5, this.y + 23);
            terminator.crc2.lineTo(this.x - 15, this.y + 35);
            terminator.crc2.moveTo(this.x - 25, this.y + 26);
            terminator.crc2.lineTo(this.x - 40, this.y + 39);
            terminator.crc2.moveTo(this.x - 5, this.y + 33);
            terminator.crc2.lineTo(this.x - 45, this.y + 40);
            terminator.crc2.moveTo(this.x - 35, this.y + 25);
            terminator.crc2.stroke();
        }
        drawTerminated() {
            terminator.crc2.fillStyle = "#9d4e15";
            terminator.crc2.strokeStyle = "#9d4e15";
            terminator.crc2.lineWidth = 2;
            terminator.crc2.beginPath();
            terminator.crc2.moveTo(this.x - 15, this.y + 28);
            terminator.crc2.lineTo(this.x - 15, this.y + 28);
            terminator.crc2.moveTo(this.x - 5, this.y + 23);
            terminator.crc2.lineTo(this.x - 15, this.y + 35);
            terminator.crc2.moveTo(this.x - 25, this.y + 26);
            terminator.crc2.lineTo(this.x - 40, this.y + 39);
            terminator.crc2.moveTo(this.x - 5, this.y + 33);
            terminator.crc2.lineTo(this.x - 45, this.y + 40);
            terminator.crc2.moveTo(this.x - 35, this.y + 25);
            terminator.crc2.stroke();
        }
        drawSarah() {
            terminator.crc2.fillStyle = "#1E90FF";
            terminator.crc2.strokeStyle = "#1E90FF";
            terminator.crc2.lineWidth = 1;
            terminator.crc2.moveTo(this.x, this.y);
            terminator.crc2.beginPath();
            terminator.crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            terminator.crc2.lineTo(this.x - 5, this.y + 30);
            terminator.crc2.lineTo(this.x - 5, this.y + 30);
            terminator.crc2.moveTo(this.x - 5, this.y + 10);
            terminator.crc2.lineTo(this.x - 10, this.y + 10);
            terminator.crc2.moveTo(this.x - 5, this.y + 30);
            terminator.crc2.lineTo(this.x - 10, this.y + 36);
            terminator.crc2.closePath();
            terminator.crc2.stroke();
            terminator.crc2.fill();
            //Sled
            terminator.crc2.fillStyle = "#9d4e15";
            terminator.crc2.strokeStyle = "#9d4e15";
            terminator.crc2.lineWidth = 2;
            terminator.crc2.beginPath();
            terminator.crc2.moveTo(this.x - 15, this.y + 28);
            terminator.crc2.lineTo(this.x - 15, this.y + 28);
            terminator.crc2.moveTo(this.x - 5, this.y + 23);
            terminator.crc2.lineTo(this.x - 15, this.y + 35);
            terminator.crc2.moveTo(this.x - 25, this.y + 26);
            terminator.crc2.lineTo(this.x - 40, this.y + 39);
            terminator.crc2.moveTo(this.x - 5, this.y + 33);
            terminator.crc2.lineTo(this.x - 45, this.y + 40);
            terminator.crc2.moveTo(this.x - 35, this.y + 25);
            terminator.crc2.stroke();
        }
    }
    terminator.Sarah = Sarah;
})(terminator || (terminator = {}));
//# sourceMappingURL=SarahConnar.js.map