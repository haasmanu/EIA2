namespace A10Canvas {
    export class Jimmy {
        x: number;
        y: number;
        colorJimmy: string;
        
        draw(): void {
            crc2.fillStyle = this.colorJimmy;
            crc2.strokeStyle = this.colorJimmy;
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
        }
    }
}