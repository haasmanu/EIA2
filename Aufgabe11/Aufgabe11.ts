namespace A11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let objekts: MovingObjekts[] = [];
    
    let snowFlakes: number = 150;
    let jimmyTimmy: number = 20;
    //let trees: Tree[] = [];
    let imgData: ImageData;

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        drawSky();
        drawSun();
        drawCloud();
        drawCloud2();
        drawCloud3();
        
        
        imgData = crc2.getImageData(0, 0, 820, 840);
        
        for (let i: number = 0; i < snowFlakes; i++) {
           
            let sF = new SnowInfo(5 + Math.random() * 300,
                                  20 + Math.random() * 480);  
              
            objekts.push(sF);
        }
        
        for (let i: number = 0; i < jimmyTimmy; i++) {
            let jiti = new JiTiInfo (0, 230,
                                          "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                                          "hsl(" + Math.random() * 360 + ", 100%, 50%)");
           objekts.push(jiti);  
                                         
            }
        
        /*for (let i: number = 0; i < 7; i++) {
            let jimmyTheKid: Jimmy = new Jimmy();
            jimmyTheKid.x = (Math.random() * 300 + 0);
            jimmyTheKid.y = (Math.random() * 300 + 490);
            jimmyTheKid.dx = Math.random() * 2 - 4;
            jimmyTheKid.dy = Math.random() * 2 - 4;
            
            jimmyTheKid.colorJimmy = "#9932CC";
            jimmyTheKid.colorSled = "#9d4e15";
            jimmysTheKids.push(jimmyTheKid);
        }*/
                
        /*for (let j: number = 0; j < 8; j++) {
            let timmyAndSled: Timmy = new Timmy();
            timmyAndSled.x = Math.random() * crc2.canvas.width;
            timmyAndSled.y = Math.random() * crc2.canvas.height;
            timmyAndSled.dx = Math.random() * 2 - 4;
            timmyAndSled.dy = Math.random() * 2 + 4;
            timmyAndSled.colorTimmy = "#1E90FF";
            timmyAndSled.colorSled = "#9d4e15";  
            timmysAndSleds.push(timmyAndSled);
        }*/
        
        /*for (let i: number = 0; i < 8; i++) {
            let tree: Tree = new Tree();
            tree.x = (Math.random() * 300 + 300);
            tree.y = (Math.random() * 300 + 550);
            
            tree.colorTree = "#008000";
            tree.colorWood = "#9d4e15";
            trees.push(tree);
        }*/
        
        update();
        }
    
   function drawSky(): void {
        console.log("landscape");
        crc2.fillStyle = "#00BFFF";
        crc2.beginPath();
        crc2.moveTo(0, 520);
        crc2.bezierCurveTo(180, 450, 280, 210, 860, 230);
        crc2.lineTo(820, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();

    }
    
    function drawSun(): void {
        console.log("sun");
        crc2.fillStyle = "#ffff66";
        crc2.beginPath();
        crc2.arc(30, 30, 80, 0, 2 * Math.PI);
        crc2.fill();
    }
    
    function drawCloud(): void {
        crc2.beginPath();
        crc2.moveTo(35, 170);
        crc2.arc(35, 170, 20, 0, 2 * Math.PI);
        crc2.arc(50, 160, 20, 0, 2 * Math.PI);
        crc2.arc(50, 180, 20, 0, 2 * Math.PI);
        crc2.moveTo(65, 170);
        crc2.arc(65, 170, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    
    function drawCloud2(): void {
        crc2.beginPath();
        crc2.moveTo(135, 250);
        crc2.arc(135, 250, 20, 0, 2 * Math.PI);
        crc2.arc(150, 240, 20, 0, 2 * Math.PI);
        crc2.arc(150, 260, 20, 0, 2 * Math.PI);
        crc2.moveTo(165, 250);
        crc2.arc(165, 250, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();        
    }
    
    function drawCloud3(): void {
        crc2.beginPath();
        crc2.moveTo(250, 80);
        crc2.arc(250, 80, 20, 0, 2 * Math.PI);
        crc2.arc(265, 70, 20, 0, 2 * Math.PI);
        crc2.arc(265, 90, 20, 0, 2 * Math.PI);
        crc2.moveTo(280, 80);
        crc2.arc(280, 80, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();    
    }
    function drawTree (x: number, y: number): void {
        crc2.fillStyle = this.colorWood;
        crc2.strokeStyle = this.colorWood;
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(x + 5, y + 7.5);
        crc2.lineTo(x - 5, y + 7.5);
        crc2.lineTo(x - 5, y - 12.5);
        crc2.lineTo(x + 5, y - 12.5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = this.colorTree;
        crc2.strokeStyle = "#004d00";
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(x - 30, y - 10);
        crc2.lineTo(x, y - 55);
        crc2.lineTo(x + 30, y - 10);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = this.colorTree;
        crc2.strokeStyle = "#004d00";
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(x - 27, y - 27.5);
        crc2.lineTo(x, y - 75);
        crc2.lineTo(x + 27, y - 27.5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        crc2.fillStyle = this.colorTree;
        crc2.strokeStyle = "#004d00";
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(x - 24, y - 42);
        crc2.lineTo(x, y - 95);
        crc2.lineTo(x + 24, y - 42);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    
    function update(): void {
        console.log("Updated");
        crc2.putImageData(imgData, 0, 0);
   
       
    for (let i: number = 0; i < objekts.length; i++) {
        let o: MovingObjekts = objekts[i];
            o.move();
    }
       
        window.setTimeout(update, 10);
        }
}