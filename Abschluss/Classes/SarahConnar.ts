namespace terminator {
    export class Sarah extends Moving {
        
        state: string;
        
        draw(): void {
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
        
        move(): void {
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
            
            moveDown(): void {
                
                this.x +=  - 6;
                this.y += 2;
                
                if (this.x < 0) {
                    this.state = "up";    
                }
                
            }
        
            moveUp(): void {
                
                this.x += 6;
                this.y += - 2;
                
                if (this.x > 820) {
                    this.state = "down";    
                }
                
            }
        
            moveDownSled(): void {
                
                this.x +=  - 6;
                this.y += 2;
                
            }
            
        
        
        drawSarahUp(): void {
            crc2.fillStyle = "#1E90FF";
            crc2.strokeStyle = "#1E90FF";
            crc2.lineWidth = 1;

            crc2.moveTo(this.x, this.y);
            crc2.beginPath();
            crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            crc2.lineTo(this.x - 5, this.y + 30);
            crc2.lineTo(this.x - 5, this.y + 30);
            crc2.moveTo(this.x - 5, this.y + 10);
            crc2.lineTo(this.x - 10, this.y + 10);
            crc2.moveTo(this.x - 5, this.y + 30);
            crc2.lineTo(this.x - 10, this.y + 36);
            crc2.closePath();
            
            crc2.stroke();
            crc2.fill();
            
            //Sled
            crc2.fillStyle = "#9d4e15";
            crc2.strokeStyle = "#9d4e15";
            crc2.lineWidth = 2;
            
            crc2.beginPath();
            crc2.moveTo(this.x - 15, this.y + 28);
            crc2.lineTo(this.x - 15, this.y + 28);
            crc2.moveTo(this.x - 5, this.y + 23);
            crc2.lineTo(this.x - 15, this.y + 35);
            crc2.moveTo(this.x - 25, this.y + 26);
            crc2.lineTo(this.x - 40, this.y + 39);
            crc2.moveTo(this.x - 5, this.y + 33);
            crc2.lineTo(this.x - 45, this.y + 40);
            crc2.moveTo(this.x - 35, this.y + 25);
            crc2.stroke();            
        }
        
        drawTerminated(): void {
            
            crc2.fillStyle = "#9d4e15";
            crc2.strokeStyle = "#9d4e15";
            crc2.lineWidth = 2;
            
            crc2.beginPath();
            crc2.moveTo(this.x - 15, this.y + 28);
            crc2.lineTo(this.x - 15, this.y + 28);
            crc2.moveTo(this.x - 5, this.y + 23);
            crc2.lineTo(this.x - 15, this.y + 35);
            crc2.moveTo(this.x - 25, this.y + 26);
            crc2.lineTo(this.x - 40, this.y + 39);
            crc2.moveTo(this.x - 5, this.y + 33);
            crc2.lineTo(this.x - 45, this.y + 40);
            crc2.moveTo(this.x - 35, this.y + 25);
            crc2.stroke();
        }
        
        drawSarah(): void {
            crc2.fillStyle = "#1E90FF";
            crc2.strokeStyle = "#1E90FF";
            crc2.lineWidth = 1;

            crc2.moveTo(this.x, this.y);
            crc2.beginPath();
            crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            crc2.lineTo(this.x - 5, this.y + 30);
            crc2.lineTo(this.x - 5, this.y + 30);
            crc2.moveTo(this.x - 5, this.y + 10);
            crc2.lineTo(this.x - 10, this.y + 10);
            crc2.moveTo(this.x - 5, this.y + 30);
            crc2.lineTo(this.x - 10, this.y + 36);
            crc2.closePath();
            
            crc2.stroke();
            crc2.fill();
            
            //Sled
            crc2.fillStyle = "#9d4e15";
            crc2.strokeStyle = "#9d4e15";
            crc2.lineWidth = 2;
            
            crc2.beginPath();
            crc2.moveTo(this.x - 15, this.y + 28);
            crc2.lineTo(this.x - 15, this.y + 28);
            crc2.moveTo(this.x - 5, this.y + 23);
            crc2.lineTo(this.x - 15, this.y + 35);
            crc2.moveTo(this.x - 25, this.y + 26);
            crc2.lineTo(this.x - 40, this.y + 39);
            crc2.moveTo(this.x - 5, this.y + 33);
            crc2.lineTo(this.x - 45, this.y + 40);
            crc2.moveTo(this.x - 35, this.y + 25);
            crc2.stroke();
        }
    }
}