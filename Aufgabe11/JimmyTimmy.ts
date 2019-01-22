namespace A11 {
    
    export class JiTiInfo extends MovingObjekts {
        
        colorJiTi: string;
        colorSled: string;
        md: boolean;
        
        constructor (_x: number, _y: number, _headcolor: string, _bodycolor: string) {
        super(_x, _y);
        this.x = Math.random() * 60 + 15;
        this.y = Math.random() * 60 + 290;
        this.colorJiTi = _headcolor;
        this.colorSled = _bodycolor;
            }
        
        draw(): void {
            crc2.fillStyle = this.colorJiTi;
            crc2.strokeStyle = this.colorJiTi;
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
            if (this.md == true)
                this.moveDown();

            else {
                this.moveUp();
            }
        }
        
        moveDown(): void {
            if (this.x > 800) {
                this.md = false;
               // this.x = 0;
               // this.y = 200;
               
                
                this.colorJiTi = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                }
            
            
            
            //Richtung
            this.x += Math.random() * (- 6);
            this.y += Math.random() * (2);
            
            this.draw();
           
        }
      
    
        moveUp(): void {

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
        
        
        
        }}}