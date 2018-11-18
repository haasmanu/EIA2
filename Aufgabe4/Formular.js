var Aufgabe4Shop;
(function (Aufgabe4Shop) {
    document.addEventListener("DOMContentLoaded", createFieldset);
    document.addEventListener("DOMContentLoaded", decisionChanger);
    function decisionChanger(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    let priceTree = 0;
    let priceBalls = 0;
    let priceCandle = 0;
    let priceLametta = 0;
    let priceAdditional = 0;
    let priceTreeStand = 0;
    let priceShipping = 0;
    let numberOfBalls = 0;
    let numberOfCandle = 0;
    let adress = "";
    function createFieldset() {
        let node = document.getElementById("fieldset");
        let childNodeHTML;
        //Trees
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Trees</legend>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (let i = 0; i < Aufgabe4Shop.tree.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4Shop.tree[i].name + " " + Aufgabe4Shop.tree[i].price + " Euro'>" + Aufgabe4Shop.tree[i].name + " " + Aufgabe4Shop.tree[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Balls
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Christmas Balls</legend>";
        childNodeHTML += "<select name='Select' id='balls'>";
        for (let i = 0; i < Aufgabe4Shop.treeBall.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4Shop.treeBall[i].name + " " + Aufgabe4Shop.treeBall[i].price + " Euro'>" + Aufgabe4Shop.treeBall[i].name + " " + Aufgabe4Shop.treeBall[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many1'>";
        for (let i = 0; i < 39; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<br>";
        //Candles
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Candels</legend>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (let i = 0; i < Aufgabe4Shop.candle.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4Shop.candle[i].name + " " + Aufgabe4Shop.candle[i].price + " Euro'>" + Aufgabe4Shop.candle[i].name + " " + Aufgabe4Shop.candle[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many2'>";
        for (let i = 0; i < 23; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<br>";
        //Lametta
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Lametta</legend>";
        for (let i = 0; i < Aufgabe4Shop.lametta.length; i++) {
            childNodeHTML += "<input type= 'radio' name= 'Radiogroup1' value='" + i + Aufgabe4Shop.lametta[i].name + " " + Aufgabe4Shop.lametta[i].price + " Euro' id='lamettas" + i + "' />";
            childNodeHTML += "<label for= 'check" + i + "'>" + Aufgabe4Shop.lametta[i].name + " " + Aufgabe4Shop.lametta[i].price + "Euro</label>";
        }
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<br>";
        //Tree Top
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Christmas Tree Top</legend>";
        for (let i = 0; i < Aufgabe4Shop.additional.length; i++) {
            childNodeHTML += "<input type= 'radio' name= 'Radiogroup2' value='" + i + Aufgabe4Shop.additional[i].name + " " + Aufgabe4Shop.additional[i].price + " Euro' id='treeTop" + i + "' />";
            childNodeHTML += "<label for= 'check" + i + "'>" + Aufgabe4Shop.additional[i].name + " " + Aufgabe4Shop.additional[i].price + "Euro</label>";
        }
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<br>";
        //Tree Stand
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Tree Stand</legend>";
        for (let i = 0; i < Aufgabe4Shop.treeStand.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup3' value='" + i + Aufgabe4Shop.treeStand[i].name + " " + Aufgabe4Shop.treeStand[i].price + " Euro'  id='treeStand" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + Aufgabe4Shop.treeStand[i].name + " " + Aufgabe4Shop.treeStand[i].price + " Euro</label>";
        }
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        //Shipping
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Shipping Methode</legend>";
        for (let i = 0; i < Aufgabe4Shop.shipment.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup4' value='" + i + Aufgabe4Shop.shipment[i].name + " " + Aufgabe4Shop.shipment[i].price + " Euro'  id='shipping" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + Aufgabe4Shop.shipment[i].name + " " + Aufgabe4Shop.shipment[i].price + " Euro</label>";
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
            priceTree = Aufgabe4Shop.tree[priceIndex].price;
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
            priceBalls = Aufgabe4Shop.treeBall[priceIndex].price;
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
        //Candles
        if (target.id == "candles") {
            let node = document.getElementById("candleHTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceCandle = Aufgabe4Shop.candle[priceIndex].price;
            console.log(priceCandle);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Many2") {
            let node = document.getElementById("candleMany");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfCandle = numIndex;
            console.log(numberOfCandle);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Lametta
        if (target.name == "Radiogroup1") {
            let node = document.getElementById("lamettaHTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceLametta = Aufgabe4Shop.lametta[priceIndex].price;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Tree Stand
        if (target.name == "Radiogroup3") {
            let node = document.getElementById("treeStandHTML");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTreeStand = Aufgabe4Shop.treeStand[priceIndex].price;
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
            priceAdditional = Aufgabe4Shop.additional[priceIndex].price;
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
            priceShipping = Aufgabe4Shop.shipment[priceIndex].price;
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
        childNodeHTML += (priceTree + (priceBalls * numberOfBalls) + (priceCandle * numberOfCandle) + priceLametta + priceTreeStand + priceAdditional + priceShipping);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
})(Aufgabe4Shop || (Aufgabe4Shop = {}));
//# sourceMappingURL=Formular.js.map