var A10Canvas;
(function (A10Canvas) {
    window.addEventListener("load", init);
    let snowFlakes = [];
    let timmysAndSleds = [];
    let jimmysTheKids = [];
    let trees = [];
    let fps = 25;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        A10Canvas.crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        drawCloud();
        drawCloud2();
        drawCloud3();
        imgData = A10Canvas.crc2.getImageData(0, 0, 820, 840);
        for (let i = 0; i < 150; i++) {
            let snowFlake = new A10Canvas.Snow();
            snowFlake.x = Math.random() * A10Canvas.crc2.canvas.width;
            snowFlake.y = Math.random() * A10Canvas.crc2.canvas.height;
            snowFlake.dy = Math.random() * 2 + 4;
            snowFlake.color = "#ffffff";
            snowFlakes.push(snowFlake);
        }
        /*for (let i: number = 0; i < 7; i++) {
            let jimmyTheKid: Jimmy = new Jimmy();
            jimmyTheKid.x = (Math.random() * 0 + 100);
            jimmyTheKid.y = (Math.random() * 400 + 450);
            
            jimmyTheKid.colorJimmy = "#000000";
            jimmysTheKids.push(jimmyTheKid);
        }*/
        for (let j = 0; j < 10; j++) {
            let timmyAndSled = new A10Canvas.Timmy();
            timmyAndSled.x = Math.random() * A10Canvas.crc2.canvas.width;
            timmyAndSled.y = Math.random() * A10Canvas.crc2.canvas.height;
            timmyAndSled.dx = Math.random() * 2 - 4;
            timmyAndSled.dy = Math.random() * 2 + 4;
            timmyAndSled.colorTimmy = "#000000";
            timmyAndSled.colorSled = "#9d4e15";
            timmysAndSleds.push(timmyAndSled);
        }
        for (let i = 0; i < 5; i++) {
            let tree = new A10Canvas.Tree();
            tree.x = (Math.random() * 200 + 300);
            tree.y = (Math.random() * 200 + 350);
            tree.colorTree = "#008000";
            tree.colorWood = "#9d4e15";
            trees.push(tree);
        }
        update();
    }
    function drawSky() {
        console.log("landscape");
        A10Canvas.crc2.fillStyle = "#00BFFF";
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.moveTo(0, 520);
        A10Canvas.crc2.bezierCurveTo(180, 450, 280, 210, 860, 330);
        A10Canvas.crc2.lineTo(820, 0);
        A10Canvas.crc2.lineTo(0, 0);
        A10Canvas.crc2.closePath();
        A10Canvas.crc2.lineWidth = 2;
        A10Canvas.crc2.stroke();
        A10Canvas.crc2.fill();
    }
    function drawSun() {
        console.log("sun");
        A10Canvas.crc2.fillStyle = "#ffff66";
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.arc(30, 30, 80, 0, 2 * Math.PI);
        A10Canvas.crc2.fill();
    }
    function drawCloud() {
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.moveTo(35, 170);
        A10Canvas.crc2.arc(35, 170, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.arc(50, 160, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.arc(50, 180, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.moveTo(65, 170);
        A10Canvas.crc2.arc(65, 170, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.fillStyle = "#ffffff";
        A10Canvas.crc2.fill();
    }
    function drawCloud2() {
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.moveTo(135, 250);
        A10Canvas.crc2.arc(135, 250, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.arc(150, 240, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.arc(150, 260, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.moveTo(165, 250);
        A10Canvas.crc2.arc(165, 250, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.fillStyle = "#ffffff";
        A10Canvas.crc2.fill();
    }
    function drawCloud3() {
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.moveTo(250, 80);
        A10Canvas.crc2.arc(250, 80, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.arc(265, 70, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.arc(265, 90, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.moveTo(280, 80);
        A10Canvas.crc2.arc(280, 80, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.fillStyle = "#ffffff";
        A10Canvas.crc2.fill();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        A10Canvas.crc2.clearRect(0, 0, A10Canvas.crc2.canvas.width, A10Canvas.crc2.canvas.height);
        A10Canvas.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < 150; i++) {
            let snowFlake = snowFlakes[i];
            snowFlake.move();
            snowFlake.draw();
        }
        /*for (let l: number = 0; l < 7; l++) {
            let jimmyTheKid: Jimmy = jimmysTheKids[l];
            jimmyTheKid.draw();
        }*/
        for (let k = 0; k < 4; k++) {
            let tree = trees[k];
            tree.draw();
        }
        for (let j = 0; j < 10; j++) {
            let timmyAndSled = timmysAndSleds[j];
            timmyAndSled.move();
            timmyAndSled.draw();
        }
    }
})(A10Canvas || (A10Canvas = {}));
//# sourceMappingURL=Aufgabe10.js.map