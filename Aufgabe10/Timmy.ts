namespace A10Canvas {
    export class Timmy {
        x: number;
        y: number;
        dx: number;
        dy: number;
        colorTimmy: string;
        colorSled: string;
        
        
        
        draw(): void {
            crc2.fillStyle = this.colorTimmy;
            crc2.strokeStyle = this.colorTimmy;
            crc2.lineWidth = 1;
            
            crc2.moveTo(this.x + 200, this.y + 250);
            crc2.beginPath();
            crc2.arc(this.x + 195, this.y + 250, 5, 0, 2 * Math.PI);
            crc2.lineTo(this.x + 195, this.y + 280);
            crc2.lineTo(this.x + 195, this.y + 280);
            crc2.moveTo(this.x + 195, this.y + 260);
            crc2.lineTo(this.x + 185, this.y + 260);
            crc2.moveTo(this.x + 195, this.y + 280);
            crc2.lineTo(this.x + 185, this.y + 286);
            crc2.closePath();
            
            crc2.stroke();
            crc2.fill();
            
            //Sled
            crc2.fillStyle = this.colorSled;
            crc2.strokeStyle = this.colorSled;
            crc2.lineWidth = 2;
            
            crc2.beginPath();
            crc2.moveTo(this.x + 205, this.y + 282);
            crc2.lineTo(this.x + 190, this.y + 288);
            crc2.moveTo(this.x + 200, this.y + 283);
            crc2.lineTo(this.x + 190, this.y + 295);
            crc2.moveTo(this.x + 180, this.y + 286);
            crc2.lineTo(this.x + 165, this.y + 299);
            crc2.moveTo(this.x + 205, this.y + 293);
            crc2.lineTo(this.x + 160, this.y + 300);
            crc2.moveTo(this.x + 170, this.y + 285);
            crc2.stroke();
        }
    
    move(): void {

            if (this.x < - 150) {
                this.y = 30 + this.dy;
                this.x = 820;
            }

            this.x +=  - 6;
            this.y += 2;
            this.draw();
        }

}}