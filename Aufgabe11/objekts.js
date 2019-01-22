var A11;
(function (A11) {
    class MovingObjekts {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() { }
        move() {
            this.x += Math.random() * 200;
            this.y += Math.random() * 200;
        }
        moveDown() { }
        moveUp() { }
    }
    A11.MovingObjekts = MovingObjekts;
})(A11 || (A11 = {}));
//# sourceMappingURL=objekts.js.map