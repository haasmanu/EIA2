namespace A10Canvas {
    export class Snow {
        x: number;
        y: number;
        dy: number;
        color: string;
        
        move(): void {
            this.y += this.dy;
            if (this.y > crc2.canvas.height + 2) {
                this.y = -2;    
            }
        }
        
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;
            
            crc2.beginPath();
            crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }
    }
}