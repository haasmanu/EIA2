namespace A11 {
    
    export class SnowInfo extends MovingObjekts {
        snowX: number;
        snowY: number;
        
        constructor (_x: number, _y: number) {
            super(_x, _y);
         }
  
        
        move(): void {
            if (this.y > 480) {
                this.y = 0;
                }
            this.y += Math.random();
            this.draw();
            
            }
        
        
        draw(): void {
            crc2.fillStyle = "#ffffff";
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