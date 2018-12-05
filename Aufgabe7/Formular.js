var Aufgabe7Shop;
(function (Aufgabe7Shop) {
    document.addEventListener("DOMContentLoaded", createFieldset);
    document.addEventListener("DOMContentLoaded", decisionChanger);
    function decisionChanger(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    let priceTree = 0;
    let priceBalls = 0;
    let priceBalls2 = 0;
    let priceCandle = 0;
    let priceCandle2 = 0;
    let priceLametta = 0;
    let priceLametta2 = 0;
    let priceAdditional = 0;
    let priceTreeStand = 0;
    let priceShipping = 0;
    let adress = "";
    let numberOfBalls = 0;
    let numberOfBalls2 = 0;
    let numberOfCandle = 0;
    let numberOfCandle2 = 0;
    let numberOfLametta = 0;
    let numberOfLametta2 = 0;
    function createFieldset() {
        let node = document.getElementById("fieldset");
        let childNodeHTML;
        //Trees
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Trees</legend>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (let i = 0; i < Aufgabe7Shop.tree.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe7Shop.tree[i].name + " " + Aufgabe7Shop.tree[i].price + " Euro'>" + Aufgabe7Shop.tree[i].name + " " + Aufgabe7Shop.tree[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Balls
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Christmas Balls</legend>";
        childNodeHTML += "<select name='Select' id='balls'>";
        for (let i = 0; i < Aufgabe7Shop.treeBall.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe7Shop.treeBall[i].name + " " + Aufgabe7Shop.treeBall[i].price + " Euro'>" + Aufgabe7Shop.treeBall[i].name + " " + Aufgabe7Shop.treeBall[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many1'>";
        for (let i = 0; i < 39; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        //Balls
        childNodeHTML += "<legend>Christmas Balls Additional</legend>";
        childNodeHTML += "<select name='Select' id='balls2'>";
        for (let i = 0; i < Aufgabe7Shop.treeBall.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe7Shop.treeBall[i].name + " " + Aufgabe7Shop.treeBall[i].price + " Euro'>" + Aufgabe7Shop.treeBall[i].name + " " + Aufgabe7Shop.treeBall[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many2'>";
        for (let i = 0; i < 39; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        //Candles
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Candles</legend>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (let i = 0; i < Aufgabe7Shop.candle.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe7Shop.candle[i].name + " " + Aufgabe7Shop.candle[i].price + " Euro'>" + Aufgabe7Shop.candle[i].name + " " + Aufgabe7Shop.candle[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many3'>";
        for (let i = 0; i < 39; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        //Candles Additional
        childNodeHTML += "<legend>Candles Additional</legend>";
        childNodeHTML += "<select name='Select' id='candles2'>";
        for (let i = 0; i < Aufgabe7Shop.candle.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe7Shop.candle[i].name + " " + Aufgabe7Shop.candle[i].price + " Euro'>" + Aufgabe7Shop.candle[i].name + " " + Aufgabe7Shop.candle[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many4'>";
        for (let i = 0; i < 39; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        //Lametta
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Lametta 1.5m</legend>";
        childNodeHTML += "<select name='Select' id='lamettas'>";
        for (let i = 0; i < Aufgabe7Shop.lametta.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe7Shop.lametta[i].name + " " + Aufgabe7Shop.lametta[i].price + " Euro'>" + Aufgabe7Shop.lametta[i].name + " " + Aufgabe7Shop.lametta[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many5'>";
        for (let i = 0; i < 39; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<legend>Additional Lametta 1.5m</legend>";
        childNodeHTML += "<select name='Select' id='lamettas2'>";
        for (let i = 0; i < Aufgabe7Shop.lametta.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe7Shop.lametta[i].name + " " + Aufgabe7Shop.lametta[i].price + " Euro'>" + Aufgabe7Shop.lametta[i].name + " " + Aufgabe7Shop.lametta[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many6'>";
        for (let i = 0; i < 39; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        //Tree Top
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Christmas Tree Top</legend>";
        for (let i = 0; i < Aufgabe7Shop.additional.length; i++) {
            childNodeHTML += "<input type= 'radio' name= 'Radiogroup2' value='" + i + Aufgabe7Shop.additional[i].name + " " + Aufgabe7Shop.additional[i].price + " Euro' id='treeTop" + i + "' />";
            childNodeHTML += "<label for= 'check" + i + "'>" + Aufgabe7Shop.additional[i].name + " " + Aufgabe7Shop.additional[i].price + "Euro</label>";
        }
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        //Tree Stand
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Tree Stand</legend>";
        for (let i = 0; i < Aufgabe7Shop.treeStand.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup3' value='" + i + Aufgabe7Shop.treeStand[i].name + " " + Aufgabe7Shop.treeStand[i].price + " Euro'  id='treeStand" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + Aufgabe7Shop.treeStand[i].name + " " + Aufgabe7Shop.treeStand[i].price + " Euro</label>";
        }
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        //Shipping
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Shipping Methode</legend>";
        for (let i = 0; i < Aufgabe7Shop.shipment.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup4' value='" + i + Aufgabe7Shop.shipment[i].name + " " + Aufgabe7Shop.shipment[i].price + " Euro'  id='shipping" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + Aufgabe7Shop.shipment[i].name + " " + Aufgabe7Shop.shipment[i].price + " Euro</label>";
        }
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        //Adresse
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='adresseTS' type='text' name='Text' placeholder='enter adress here' required/>";
        childNodeHTML += "</fieldset>";
        node.innerHTML += childNodeHTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        //trees
        if (target.id == "trees") {
            let node = document.getElementById("treeHTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTree = Aufgabe7Shop.tree[priceIndex].price;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Balls
        if (target.id == "balls") {
            let node = document.getElementById("ballsHTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceBalls = Aufgabe7Shop.treeBall[priceIndex].price;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Many1") {
            let node = document.getElementById("ballMany");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfBalls = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Balls
        if (target.id == "balls2") {
            let node = document.getElementById("balls2HTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceBalls2 = Aufgabe7Shop.treeBall[priceIndex].price;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Many2") {
            let node = document.getElementById("ball2Many");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfBalls2 = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Candles
        if (target.id == "candles") {
            let node = document.getElementById("candleHTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceCandle = Aufgabe7Shop.candle[priceIndex].price;
            console.log(priceCandle);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Many3") {
            let node = document.getElementById("candleMany");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfCandle = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "candles2") {
            let node = document.getElementById("candles2HTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceCandle2 = Aufgabe7Shop.candle[priceIndex].price;
            console.log(priceCandle2);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Many4") {
            let node = document.getElementById("candle2Many");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfCandle2 = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Lametta
        if (target.name == "lamettas") {
            let node = document.getElementById("lamettaHTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceLametta = Aufgabe7Shop.lametta[priceIndex].price;
            console.log(priceLametta);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Many5") {
            let node = document.getElementById("lamettaMany");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfLametta = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.name == "lamettas2") {
            let node = document.getElementById("lametta2HTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceLametta2 = Aufgabe7Shop.lametta[priceIndex].price;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Many6") {
            let node = document.getElementById("lametta2Many");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfLametta2 = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Tree Stand
        if (target.name == "Radiogroup3") {
            let node = document.getElementById("treeStandHTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTreeStand = Aufgabe7Shop.treeStand[priceIndex].price;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Tree top
        if (target.name == "Radiogroup2") {
            let node = document.getElementById("treeTopHTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceAdditional = Aufgabe7Shop.additional[priceIndex].price;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Shipping
        if (target.name == "Radiogroup4") {
            let node = document.getElementById("shippingHTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceShipping = Aufgabe7Shop.shipment[priceIndex].price;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Adresse
        if (target.id == "adresseTS") {
            let node = document.getElementById("adressHTML");
            adress = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Price
        let node = document.getElementById("price");
        let childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (priceTree + (priceBalls * numberOfBalls) + (priceBalls2 * numberOfBalls2) + (priceCandle * numberOfCandle) + (priceCandle2 * numberOfCandle2) + (priceLametta * numberOfLametta) + (priceLametta2 * numberOfLametta2) + priceTreeStand + priceAdditional + priceShipping);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
})(Aufgabe7Shop || (Aufgabe7Shop = {}));
//# sourceMappingURL=Formular.js.map