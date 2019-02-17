namespace terminator {
    window.addEventListener("load", preInit);
    export let crc2: CanvasRenderingContext2D;
    
    let imgData: ImageData;
    let fps: number = 25;
    let score: number = 0;
    let timer: number = 60;
    let snowFlakes: Everything[] = [];
    let trees: Everything[] = [];
    let sarahs: Sarah[] = [];
    let snowballs: Snowball[] = [];
    let snowballsLeft: number = 15;
    let ended: boolean = false;
    let timercanceller: NodeJS.Timer;
    
    function preInit(): void {
        document.getElementById("start").addEventListener("click", init);
        document.getElementById("restart").addEventListener("click", init);

    }
    
    function init(_event: Event): void {
            
        fps = 25;
        score = 0;
        timer = 60;
        snowFlakes = [];
        trees = [];
        sarahs = [];
        snowballs = [];
        snowballsLeft = 15;
        ended = false;
            
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("overlay").style.display = "block";
        document.getElementsByTagName("canvas")[0].style.display = "block";

        ended = false;
        timercanceller = setInterval(decreaseTimer, 1000);
        
        document.getElementById("timer").innerHTML = "Timer: " + timer + "sec";
        document.getElementById("snowballs").innerHTML = snowballsLeft + " Snowballs left";
        document.getElementById("score").innerHTML = "Score: " + score;
        
        document.getElementsByTagName("canvas")[0].addEventListener("click", createSnowball);

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        drawSky();
        drawSun();
        drawCloud();
        drawCloud2();
        drawCloud3();
        
        
        imgData = crc2.getImageData(0, 0, 820, 840);
        
        for (let i: number = 0; i < 10; i++) {
            let sarah: Sarah = new Sarah();
            sarah.state = "down";
            sarah.x = (Math.random() * 300 + 0);
            sarah.y = (Math.random() * 300 + 490);
            sarah.speed = Math.random() + 0.5;
            sarahs.push(sarah);
        }
        
        
        for (let i: number = 0; i < 150; i++) {
            let snowFlake: Moving = new SnowFlake();
            snowFlake.x = Math.random() * crc2.canvas.width;
            snowFlake.y = Math.random() * crc2.canvas.height;
            snowFlake.speed = Math.random() * 2 + 4;  
            snowFlakes.push(snowFlake);
        }
        
        for (let i: number = 0; i < 8; i++) {
            let tree: Everything = new Tree();
            tree.x = (Math.random() * 300 + 300);
            tree.y = (Math.random() * 300 + 550);
            trees.push(tree);
        }
        update();
    }
    
    function endScreen(): void {
        ended = true;
        clearInterval(timercanceller);
        let scoreinput: HTMLInputElement = document.getElementById("scoreinput") as HTMLInputElement;
        scoreinput.value = String(score);
        document.getElementById("overlay").style.display = "none";
        document.getElementById("endscreen").style.display = "block";
        document.getElementsByTagName("canvas")[0].style.display = "none";
    }
    
    function decreaseTimer(): void {
        
        document.getElementById("timer").innerHTML = "Timer: " + timer + "sec";
        if (timer <= 0) {
            endScreen();    
        } else {
            timer--;
        }
    }
    
    function createSnowball(e: MouseEvent): void {
        if (snowballsLeft == 0) {
            if ( snowballs.length == 0)
                endScreen();
            return;
        }
        snowballsLeft--;
        document.getElementById("snowballs").innerHTML = snowballsLeft + " Snowballs left";
        
        let snowball: Snowball = new Snowball();
        snowball.x = e.offsetX;
        snowball.y = e.offsetY;
        snowball.updatesTillImpact = 10;
        snowballs.push(snowball);
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
        if (ended == true)
            return;
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);
        
        for (let i: number = 0; i < snowballs.length; i++) {
            let snowball: Snowball = snowballs[i];
            snowball.move();
            if (snowball.updatesTillImpact < 0) {
                snowballs.splice(i);
                return;
            }
            snowball.draw();   
        }
        for (let i: number = 0; i < 10; i++) {
            let sarah: Sarah = sarahs[i];
            sarah.move();
            for (let i: number = 0; i < snowballs.length; i++) {
                let snowball: Snowball = snowballs[i];
                if (snowball.hasHit(sarah)) {
                    sarah.state = "terminated";
                    score += Math.floor(sarah.speed * 150);
                    document.getElementById("score").innerHTML = "Score: " + score;
                    if (sarahs.every(isTerminated)) {
                        endScreen();   
                    }
                }
            }
            sarah.draw();   
        }
                    
        for (let i: number = 0; i < 150; i++) {
            let snowFlake: Everything = snowFlakes[i];
            snowFlake.move();
            snowFlake.draw();
        }
        
        for (let k: number = 0; k < 8; k++) {
            let tree: Tree = trees[k];
            tree.draw();    
        }
    }
    function isTerminated(s: Sarah): boolean {
        return s.state == "terminated";
    }
}