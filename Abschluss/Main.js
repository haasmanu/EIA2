var terminator;
(function (terminator) {
    window.addEventListener("load", preInit);
    let imgData;
    let fps = 25;
    let score = 0;
    let timer = 60;
    let snowFlakes = [];
    let trees = [];
    let sarahs = [];
    let snowballs = [];
    let snowballsLeft = 15;
    let ended = false;
    let timercanceller;
    function preInit() {
        document.getElementById("start").addEventListener("click", init);
        document.getElementById("restart").addEventListener("click", init);
    }
    function init(_event) {
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
        let canvas = document.getElementsByTagName("canvas")[0];
        terminator.crc2 = canvas.getContext("2d");
        terminator.crc2.clearRect(0, 0, canvas.width, canvas.height);
        drawSky();
        drawSun();
        drawCloud();
        drawCloud2();
        drawCloud3();
        imgData = terminator.crc2.getImageData(0, 0, 820, 840);
        for (let i = 0; i < 10; i++) {
            let sarah = new terminator.Sarah();
            sarah.state = "down";
            sarah.x = (Math.random() * 300 + 0);
            sarah.y = (Math.random() * 300 + 490);
            sarah.speed = Math.random() + 0.5;
            sarahs.push(sarah);
        }
        for (let i = 0; i < 150; i++) {
            let snowFlake = new terminator.SnowFlake();
            snowFlake.x = Math.random() * terminator.crc2.canvas.width;
            snowFlake.y = Math.random() * terminator.crc2.canvas.height;
            snowFlake.speed = Math.random() * 2 + 4;
            snowFlakes.push(snowFlake);
        }
        for (let i = 0; i < 8; i++) {
            let tree = new terminator.Tree();
            tree.x = (Math.random() * 300 + 300);
            tree.y = (Math.random() * 300 + 550);
            trees.push(tree);
        }
        update();
    }
    function endScreen() {
        ended = true;
        clearInterval(timercanceller);
        let scoreinput = document.getElementById("scoreinput");
        scoreinput.value = String(score);
        document.getElementById("overlay").style.display = "none";
        document.getElementById("endscreen").style.display = "block";
        document.getElementsByTagName("canvas")[0].style.display = "none";
    }
    function decreaseTimer() {
        document.getElementById("timer").innerHTML = "Timer: " + timer + "sec";
        if (timer <= 0) {
            endScreen();
        }
        else {
            timer--;
        }
    }
    function createSnowball(e) {
        if (snowballsLeft == 0) {
            if (snowballs.length == 0)
                endScreen();
            return;
        }
        snowballsLeft--;
        document.getElementById("snowballs").innerHTML = snowballsLeft + " Snowballs left";
        let snowball = new terminator.Snowball();
        snowball.x = e.offsetX;
        snowball.y = e.offsetY;
        snowball.updatesTillImpact = 10;
        snowballs.push(snowball);
    }
    function drawSky() {
        console.log("landscape");
        terminator.crc2.fillStyle = "#00BFFF";
        terminator.crc2.beginPath();
        terminator.crc2.moveTo(0, 520);
        terminator.crc2.bezierCurveTo(180, 450, 280, 210, 860, 230);
        terminator.crc2.lineTo(820, 0);
        terminator.crc2.lineTo(0, 0);
        terminator.crc2.closePath();
        terminator.crc2.lineWidth = 2;
        terminator.crc2.stroke();
        terminator.crc2.fill();
    }
    function drawSun() {
        console.log("sun");
        terminator.crc2.fillStyle = "#ffff66";
        terminator.crc2.beginPath();
        terminator.crc2.arc(30, 30, 80, 0, 2 * Math.PI);
        terminator.crc2.fill();
    }
    function drawCloud() {
        terminator.crc2.beginPath();
        terminator.crc2.moveTo(35, 170);
        terminator.crc2.arc(35, 170, 20, 0, 2 * Math.PI);
        terminator.crc2.arc(50, 160, 20, 0, 2 * Math.PI);
        terminator.crc2.arc(50, 180, 20, 0, 2 * Math.PI);
        terminator.crc2.moveTo(65, 170);
        terminator.crc2.arc(65, 170, 20, 0, 2 * Math.PI);
        terminator.crc2.fillStyle = "#ffffff";
        terminator.crc2.fill();
    }
    function drawCloud2() {
        terminator.crc2.beginPath();
        terminator.crc2.moveTo(135, 250);
        terminator.crc2.arc(135, 250, 20, 0, 2 * Math.PI);
        terminator.crc2.arc(150, 240, 20, 0, 2 * Math.PI);
        terminator.crc2.arc(150, 260, 20, 0, 2 * Math.PI);
        terminator.crc2.moveTo(165, 250);
        terminator.crc2.arc(165, 250, 20, 0, 2 * Math.PI);
        terminator.crc2.fillStyle = "#ffffff";
        terminator.crc2.fill();
    }
    function drawCloud3() {
        terminator.crc2.beginPath();
        terminator.crc2.moveTo(250, 80);
        terminator.crc2.arc(250, 80, 20, 0, 2 * Math.PI);
        terminator.crc2.arc(265, 70, 20, 0, 2 * Math.PI);
        terminator.crc2.arc(265, 90, 20, 0, 2 * Math.PI);
        terminator.crc2.moveTo(280, 80);
        terminator.crc2.arc(280, 80, 20, 0, 2 * Math.PI);
        terminator.crc2.fillStyle = "#ffffff";
        terminator.crc2.fill();
    }
    function update() {
        if (ended == true)
            return;
        window.setTimeout(update, 1000 / fps);
        terminator.crc2.clearRect(0, 0, terminator.crc2.canvas.width, terminator.crc2.canvas.height);
        terminator.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < snowballs.length; i++) {
            let snowball = snowballs[i];
            snowball.move();
            if (snowball.updatesTillImpact < 0) {
                snowballs.splice(i);
                return;
            }
            snowball.draw();
        }
        for (let i = 0; i < 10; i++) {
            let sarah = sarahs[i];
            sarah.move();
            for (let i = 0; i < snowballs.length; i++) {
                let snowball = snowballs[i];
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
        for (let i = 0; i < 150; i++) {
            let snowFlake = snowFlakes[i];
            snowFlake.move();
            snowFlake.draw();
        }
        for (let k = 0; k < 8; k++) {
            let tree = trees[k];
            tree.draw();
        }
    }
    function isTerminated(s) {
        return s.state == "terminated";
    }
})(terminator || (terminator = {}));
//# sourceMappingURL=Main.js.map