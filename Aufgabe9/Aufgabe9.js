var A9Canvas;
(function (A9Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        drawCloud();
        drawCloud2();
        drawCloud3();
        randomTrees();
        drawTimmy();
        drawSledTimmy();
        drawJimmy();
        drawSledJimmy();
        for (let i = 0; i < 100; i++) {
            let a = Math.floor(Math.random() * crc2.canvas.width);
            let b = Math.floor(Math.random() * crc2.canvas.height);
            drawSnow(a, b);
        }
    }
    function drawSky() {
        crc2.fillStyle = "#00BFFF";
        crc2.beginPath();
        crc2.moveTo(0, 530);
        crc2.bezierCurveTo(180, 450, 180, 310, 360, 330);
        crc2.lineTo(320, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }
    function drawSun() {
        console.log("sun");
        crc2.fillStyle = "#ffff66";
        crc2.beginPath();
        crc2.arc(30, 30, 80, 0, 2 * Math.PI);
        crc2.fill();
    }
    function drawCloud() {
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
    function drawCloud2() {
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
    function drawCloud3() {
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
    function drawSnow(_a, _b) {
        crc2.beginPath();
        crc2.arc(_a, _b, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function randomTrees() {
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            crc2.beginPath();
            crc2.moveTo(0, 600);
            crc2.bezierCurveTo(180, 450, 180, 310, 360, 330);
            if (crc2.isPointInPath(x, y)) {
                drawTrees(x, y);
            }
            else {
                i--;
            }
        }
    }
    function drawTrees(_x, _y) {
        console.log("Trees", _x, _y);
        crc2.fillStyle = "#9d4e15";
        crc2.strokeStyle = "#9d4e15";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y + 7.5);
        crc2.lineTo(_x - 5, _y + 7.5);
        crc2.lineTo(_x - 5, _y - 12.5);
        crc2.lineTo(_x + 5, _y - 12.5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#008000";
        crc2.strokeStyle = "#004d00";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x - 30, _y - 10);
        crc2.lineTo(_x, _y - 55);
        crc2.lineTo(_x + 30, _y - 10);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#008000";
        crc2.strokeStyle = "#004d00";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x - 27, _y - 27.5);
        crc2.lineTo(_x, _y - 75);
        crc2.lineTo(_x + 27, _y - 27.5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#008000";
        crc2.strokeStyle = "#004d00";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x - 24, _y - 42);
        crc2.lineTo(_x, _y - 95);
        crc2.lineTo(_x + 24, _y - 42);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawTimmy() {
        crc2.moveTo(200, 550);
        crc2.beginPath();
        crc2.arc(195, 550, 5, 0, 2 * Math.PI);
        crc2.lineTo(195, 580);
        crc2.lineTo(195, 580);
        crc2.moveTo(195, 560);
        crc2.lineTo(185, 560);
        crc2.moveTo(195, 580);
        crc2.lineTo(185, 586);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }
    function drawSledTimmy() {
        crc2.strokeStyle = "#9d4e15";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(205, 582);
        crc2.lineTo(190, 588);
        crc2.moveTo(200, 583);
        crc2.lineTo(190, 595);
        crc2.moveTo(180, 586);
        crc2.lineTo(165, 599);
        crc2.moveTo(205, 593);
        crc2.lineTo(160, 600);
        crc2.moveTo(170, 585);
        crc2.stroke();
    }
    function drawJimmy() {
        crc2.moveTo(260, 450);
        crc2.beginPath();
        crc2.arc(255, 450, 5, 0, 2 * Math.PI);
        crc2.lineTo(255, 480);
        crc2.lineTo(255, 480);
        crc2.moveTo(255, 460);
        crc2.lineTo(245, 460);
        crc2.moveTo(255, 480);
        crc2.lineTo(245, 486);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }
    function drawSledJimmy() {
        crc2.strokeStyle = "#9d4e15";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(265, 482);
        crc2.lineTo(230, 488);
        crc2.moveTo(260, 483);
        crc2.lineTo(250, 495);
        crc2.moveTo(240, 486);
        crc2.lineTo(225, 499);
        crc2.moveTo(265, 493);
        crc2.lineTo(220, 500);
        crc2.moveTo(230, 485);
        crc2.stroke();
    }
})(A9Canvas || (A9Canvas = {}));
//# sourceMappingURL=Aufgabe9.js.map