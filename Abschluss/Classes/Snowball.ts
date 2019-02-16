namespace terminator {
    export class Snowball extends Everything {
        updatesTillImpact: number;
        hasHit(sarah: Everything): boolean {
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
        move(): void {
            this.updatesTillImpact--;
        }
        draw(): void {
            crc2.fillStyle = "#ffffff";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;
            
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10+(this.updatesTillImpact), 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }   
    }
}