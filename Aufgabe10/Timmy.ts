namespace A10Canvas {
    export class Timmy {
        x: number;
        y: number;
        dx: number;
        dy: number;
        colorTimmy: string;
        colorSled: string;
        
        move(): void {
            this.y = Math.random() * (-2);
            this.x = Math.random() * (+4);
            this.x += this.dx;
            this.y += this.dy;
            
            if (this.x < - 10) {
                this.x = 400;
                this.y = Math.random() * 250 + 400;
            }

            
        }
        
        draw(): void {
            crc2.fillStyle = this.colorTimmy;
            crc2.strokeStyle = this.colorTimmy;
            crc2.lineWidth = 1;
            
            crc2.moveTo(this.x + 200, this.y + 550);
            crc2.beginPath();
            crc2.arc(this.x + 195, this.y + 550, 5, 0, 2 * Math.PI);
            crc2.lineTo(this.x + 195, this.y + 580);
            crc2.lineTo(this.x + 195, this.y + 580);
            crc2.moveTo(this.x + 195, this.y + 560);
            crc2.lineTo(this.x + 185, this.y + 560);
            crc2.moveTo(this.x + 195, this.y + 580);
            crc2.lineTo(this.x + 185, this.y + 586);
            crc2.closePath();
            
            crc2.stroke();
            crc2.fill();
            
            //Sled
            crc2.fillStyle = this.colorSled;
            crc2.strokeStyle = this.colorSled;
            crc2.lineWidth = 2;
            
            crc2.beginPath();
            crc2.moveTo(this.x + 205, this.y + 582);
            crc2.lineTo(this.x + 190, this.y + 588);
            crc2.moveTo(this.x + 200, this.y + 583);
            crc2.lineTo(this.x + 190, this.y + 595);
            crc2.moveTo(this.x + 180, this.y + 586);
            crc2.lineTo(this.x + 165, this.y + 599);
            crc2.moveTo(this.x + 205, this.y + 593);
            crc2.lineTo(this.x + 160, this.y + 600);
            crc2.moveTo(this.x + 170, this.y + 585);
            crc2.stroke();
        }
    }
}