var terminator;
(function (terminator) {
    class Snowball extends terminator.Everything {
        hasHit(sarah) {
            if (this.updatesTillImpact > 0) {
                return;
            }
            if (sarah.x - 25 < this.x - 20) {
                // Sarah left of snowball
                return false;
            }
            if (sarah.x - 25 > this.x + 20) {
                // Sarah right of snowball
                return false;
            }
            if (sarah.y + 20 < this.y - 20) {
                // Sarah over of snowball
                return false;
            }
            if (sarah.y + 20 > this.y + 20) {
                // Sarah under of snowball
                return false;
            }
            return true;
        }
        move() {
            this.updatesTillImpact--;
        }
        draw() {
            terminator.crc2.fillStyle = "#ffffff";
            terminator.crc2.strokeStyle = "#000000";
            terminator.crc2.lineWidth = 1;
            terminator.crc2.beginPath();
            terminator.crc2.arc(this.x, this.y, 10 + (this.updatesTillImpact), 0, 2 * Math.PI);
            terminator.crc2.fillStyle = "#ffffff";
            terminator.crc2.fill();
            terminator.crc2.closePath();
            terminator.crc2.fill();
            terminator.crc2.stroke();
        }
    }
    terminator.Snowball = Snowball;
})(terminator || (terminator = {}));
//# sourceMappingURL=Snowball.js.map