var Aufgabe7Shop;
(function (Aufgabe7Shop) {
    document.addEventListener("DOMContentLoaded", createFieldset);
    document.addEventListener("DOMContentLoaded", decisionChanger);
    document.addEventListener("DOMContentLoaded", init);
    function decisionChanger(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    let address = "https://eia2-manu.herokuapp.com/";
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
        childNodeHTML += "<legend>Christams Tree Top</legend>";
        childNodeHTML += "<select name='Select' id='treeTop'>";
        for (let i = 0; i < Aufgabe7Shop.additional.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe7Shop.additional[i].name + " " + Aufgabe7Shop.additional[i].price + " Euro'>" + Aufgabe7Shop.additional[i].name + " " + Aufgabe7Shop.additional[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        //Tree Stand
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Tree Stand</legend>";
        childNodeHTML += "<select name=name='Select' id='treeStand'>";
        for (let i = 0; i < Aufgabe7Shop.treeStand.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe7Shop.treeStand[i].name + " " + Aufgabe7Shop.treeStand[i].price + " Euro'>" + Aufgabe7Shop.treeStand[i].name + " " + Aufgabe7Shop.treeStand[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        //Shipping
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Shipping Methode</legend>";
        childNodeHTML += "<select name=name='Select' id='Shippment'>";
        for (let i = 0; i < Aufgabe7Shop.shipment.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe7Shop.shipment[i].name + " " + Aufgabe7Shop.shipment[i].price + " Euro'>" + Aufgabe7Shop.shipment[i].name + " " + Aufgabe7Shop.shipment[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        //Adresse
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<textarea id='adresseTS' name='Text' cols='30' rows='4' placeholder='enter adress here' >";
        childNodeHTML += "</textarea>";
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
        if (target.name == "treeStand") {
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
        if (target.name == "treeTop") {
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
        if (target.name == "Shippment") {
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
    //Progress. Wurde schon alles ausgew�hlt? Wenn ja--> nichts, wenn nein--> I'm sorry....
    function checkProgress(_event) {
        if (adress == "" || priceTree == 0 || priceBalls == 0 || priceShipping == 0 || priceCandle == 0 || priceLametta == 0 || priceAdditional == 0 || priceTreeStand == 0 || numberOfBalls == 0 || numberOfCandle == 0 || numberOfLametta == 0) {
            document.getElementById("notSelectedYet").innerHTML = "I'm sorry, you need to fill out a few more things!";
        }
        else {
            document.getElementById("notSelectedYet").innerHTML = "All done, thank you for your order!";
        }
    }
    //7.2
    function init(_event) {
        document.getElementById("button").addEventListener("click", checkProgress);
        setupAsyncForm();
    }
    function setupAsyncForm() {
        let button = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event) {
        let checkout = [];
        let items = document.getElementsByTagName("input");
        //trees 
        let selectedTree = document.getElementById("trees");
        let color1 = "Your order:    Tree: " + selectedTree.value.substr(1);
        sendRequestWithCustomData(color1);
        checkout.push(color1);
        //balls
        let selectedBalls = document.getElementById("balls");
        let color2 = "Balls: " + selectedBalls.value.substr(1);
        sendRequestWithCustomData(color2);
        checkout.push(color2);
        let selectedBallsAmount = document.getElementById("Many1");
        let color3 = "Ball amount: " + selectedBallsAmount.value.substr(1);
        sendRequestWithCustomData(color3);
        checkout.push(color3);
        let selectedBalls1 = document.getElementById("balls2");
        let color4 = "Additional Balls 1: " + selectedBalls1.value.substr(1);
        sendRequestWithCustomData(color4);
        checkout.push(color4);
        let selectedBallsAmount1 = document.getElementById("Many2");
        let color5 = "Balls amount 1: " + selectedBallsAmount1.value.substr(1);
        sendRequestWithCustomData(color5);
        checkout.push(color5);
        //candles
        let selectedCandles = document.getElementById("candles");
        let color6 = "Candles: " + selectedCandles.value.substr(1);
        sendRequestWithCustomData(color6);
        checkout.push(color6);
        let selectedCandlesAmount = document.getElementById("Many3");
        let color7 = "Candles amount: " + selectedCandlesAmount.value.substr(1);
        sendRequestWithCustomData(color7);
        checkout.push(color7);
        let selectedCandles1 = document.getElementById("candles2");
        let color8 = "Additional Candles 1: " + selectedCandles1.value.substr(1);
        sendRequestWithCustomData(color8);
        checkout.push(color8);
        let selectedCandlesAmount1 = document.getElementById("Many4");
        let color9 = "Candles amount 1: " + selectedCandlesAmount1.value.substr(1);
        sendRequestWithCustomData(color9);
        checkout.push(color9);
        //lametta
        let selectedLametta = document.getElementById("lamettas");
        let color10 = "Lametta: " + selectedLametta.value.substr(1);
        sendRequestWithCustomData(color10);
        checkout.push(color10);
        let selectedLamettaAmount = document.getElementById("Many5");
        let color11 = "Lametta amount: " + selectedLamettaAmount.value.substr(1);
        sendRequestWithCustomData(color11);
        checkout.push(color11);
        let selectedLametta1 = document.getElementById("lamettas2");
        let color12 = "Additional Lametta 1: " + selectedLametta1.value.substr(1);
        sendRequestWithCustomData(color12);
        checkout.push(color12);
        let selectedLamettaAmount1 = document.getElementById("Many6");
        let color13 = "Lametta amount 1: " + selectedLamettaAmount1.value.substr(1);
        sendRequestWithCustomData(color13);
        checkout.push(color13);
        //Top
        let selectedTreeTop = document.getElementById("treeTop");
        let color14 = "Top: " + selectedTreeTop.value.substr(1);
        sendRequestWithCustomData(color14);
        checkout.push(color14);
        //stand
        let selectedTreeStand = document.getElementById("treeStand");
        let color15 = "Stand: " + selectedTreeStand.value.substr(1);
        sendRequestWithCustomData(color15);
        checkout.push(color15);
        //shipping
        let selectedShip = document.getElementById("Shippment");
        let color16 = "Shipping: " + selectedShip.value.substr(1);
        sendRequestWithCustomData(color16);
        checkout.push(color16);
        //adress
        /* let selectedAdress: HTMLOptionElement = <HTMLOptionElement>document.getElementById("adress");
         let color17: string = "Adress: " + selectedAdress.value.substr(1);
         sendRequestWithCustomData(color17);
         checkout.push(color17);*/
        for (let i = 0; i < items.length; i++) {
            let article = items[i];
            if (Number(article.value) > 0) {
                let color = article.name + " " + article.value + " " + article.title + " " + (Number(article.getAttribute("price")) * Number(article.value)) + " Euro";
                sendRequestWithCustomData(color);
                checkout.push(color);
            }
        }
        alert(checkout);
    }
    function sendRequestWithCustomData(_color) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?article=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
})(Aufgabe7Shop || (Aufgabe7Shop = {}));
//# sourceMappingURL=Formular.js.map