namespace A10Canvas {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let snowFlakes: Snow[] = [];
    let timmysAndSleds: Timmy[] = [];
    let jimmysTheKids: Jimmy[] = [];
    let trees: Tree[] = [];
    let fps: number = 25;
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
        
        for (let i: number = 0; i < 150; i++) {
            let snowFlake: Snow = new Snow();  
            snowFlake.x = Math.random() * crc2.canvas.width;
            snowFlake.y = Math.random() * crc2.canvas.height;
            snowFlake.dy = Math.random() * 2 + 4;
            snowFlake.color = "#ffffff";  
            snowFlakes.push(snowFlake);
        }
        
        for (let i: number = 0; i < 7; i++) {
            let jimmyTheKid: Jimmy = new Jimmy();
            jimmyTheKid.x = (Math.random() * 300 + 0);
            jimmyTheKid.y = (Math.random() * 300 + 450);
            jimmyTheKid.dx = Math.random() * 2 - 4;
            jimmyTheKid.dy = Math.random() * 2 + 4;
            
            jimmyTheKid.colorJimmy = "#000000";
            jimmyTheKid.colorSled = "#9d4e15";
            jimmysTheKids.push(jimmyTheKid);
        }
                
        for (let j: number = 0; j < 6; j++) {
            let timmyAndSled: Timmy = new Timmy();
            timmyAndSled.x = Math.random() * crc2.canvas.width;
            timmyAndSled.y = Math.random() * crc2.canvas.height;
            timmyAndSled.dx = Math.random() * 2 - 4;
            timmyAndSled.dy = Math.random() * 2 + 4;
            timmyAndSled.colorTimmy = "#000000";
            timmyAndSled.colorSled = "#9d4e15";  
            timmysAndSleds.push(timmyAndSled);
        }
        
        for (let i: number = 0; i < 8; i++) {
            let tree: Tree = new Tree();
            tree.x = (Math.random() * 300 + 300);
            tree.y = (Math.random() * 300 + 550);
            
            tree.colorTree = "#008000";
            tree.colorWood = "#9d4e15";
            trees.push(tree);
        }
        
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
    
    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);
                
        for (let i: number = 0; i < 150; i++) {
            let snowFlake: Snow = snowFlakes[i];
            snowFlake.move();
            snowFlake.draw();    
        }
        
        for (let l: number = 0; l < 7; l++) {
            let jimmyTheKid: Jimmy = jimmysTheKids[l];
            jimmyTheKid.move();
            jimmyTheKid.draw(); 
               
        }
        
        for (let k: number = 0; k < 8; k++) {
            let tree: Tree = trees[k];
            tree.draw();    
        }
        
        for (let j: number = 0; j < 6; j++) {
            let timmyAndSled: Timmy = timmysAndSleds[j];
            timmyAndSled.move();
            timmyAndSled.draw();   
        }
    }
}