namespace Aufgabe7Shop {
    
    document.addEventListener("DOMContentLoaded", createFieldset);
    document.addEventListener("DOMContentLoaded", decisionChanger);
    document.addEventListener("DOMContentLoaded", init);

    function decisionChanger(_event: Event): void {
        let fieldset: HTMLElement = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    
    let address: string = "https://eia2-manu.herokuapp.com/";
    
    let priceTree: number = 0;
    let priceBalls: number = 0;
    let priceBalls2: number = 0;
    let priceCandle: number = 0;
    let priceCandle2: number = 0;
    let priceLametta: number = 0;
    let priceLametta2: number = 0;
    let priceAdditional: number = 0;
    let priceTreeStand: number = 0;
    let priceShipping: number = 0;

    let adress: string = "";
    
    let numberOfBalls: number = 0;
    let numberOfBalls2: number = 0;
    let numberOfCandle: number = 0;
    let numberOfCandle2: number = 0;
    let numberOfLametta: number = 0;
    let numberOfLametta2: number = 0;


    function createFieldset(): void {
            let node: HTMLElement = document.getElementById("fieldset");
            let childNodeHTML: string;
       
        //Trees
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Trees</legend>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (let i: number = 0; i < tree.length; i++) {

            childNodeHTML += "<option value='" + i + tree[i].name + " " + tree[i].price + " Euro'>" + tree[i].name + " " + tree[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        
        //Balls
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Christmas Balls</legend>";
        childNodeHTML += "<select name='Select' id='balls'>";
        for (let i: number = 0; i < treeBall.length; i++) {

            childNodeHTML += "<option value='" + i + treeBall[i].name + " " + treeBall[i].price + " Euro'>" + treeBall[i].name + " " + treeBall[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many1'>";
        for (let i: number = 0; i < 39; i++) {

            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        
        //Balls
        childNodeHTML += "<legend>Christmas Balls Additional</legend>";
        childNodeHTML += "<select name='Select' id='balls2'>";
        for (let i: number = 0; i < treeBall.length; i++) {

            childNodeHTML += "<option value='" + i + treeBall[i].name + " " + treeBall[i].price + " Euro'>" + treeBall[i].name + " " + treeBall[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many2'>";
        for (let i: number = 0; i < 39; i++) {

            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";

        //Candles
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Candles</legend>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (let i: number = 0; i < candle.length; i++) {

            childNodeHTML += "<option value='" + i + candle[i].name + " " + candle[i].price + " Euro'>" + candle[i].name + " " + candle[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many3'>";
        for (let i: number = 0; i < 39; i++) {

            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        
        //Candles Additional
        childNodeHTML += "<legend>Candles Additional</legend>";
        childNodeHTML += "<select name='Select' id='candles2'>";
        for (let i: number = 0; i < candle.length; i++) {

            childNodeHTML += "<option value='" + i + candle[i].name + " " + candle[i].price + " Euro'>" + candle[i].name + " " + candle[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many4'>";
        for (let i: number = 0; i < 39; i++) {

            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>"; 
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        
        //Lametta
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Lametta 1.5m</legend>";
        childNodeHTML += "<select name='Select' id='lamettas'>";
        for (let i: number = 0; i < lametta.length; i++) {
            childNodeHTML += "<option value='" + i + lametta[i].name + " " + lametta[i].price + " Euro'>" + lametta[i].name + " " + lametta[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many5'>";
        for (let i: number = 0; i < 39; i++) {

            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        
        childNodeHTML += "<legend>Additional Lametta 1.5m</legend>";
        childNodeHTML += "<select name='Select' id='lamettas2'>";
        for (let i: number = 0; i < lametta.length; i++) {
            childNodeHTML += "<option value='" + i + lametta[i].name + " " + lametta[i].price + " Euro'>" + lametta[i].name + " " + lametta[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        
        childNodeHTML += "<h3>How many?</h3>";
        childNodeHTML += "<select name='Select' id='Many6'>";
        for (let i: number = 0; i < 39; i++) {

            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";

        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        
        //Tree Top
        
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Christams Tree Top</legend>";
        childNodeHTML += "<select name='Select' id='treeTop'>";
        for (let i: number = 0; i < additional.length; i++) {
            childNodeHTML += "<option value='" + i + additional[i].name + " " + additional[i].price + " Euro'>" + additional[i].name + " " + additional[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";

        //Tree Stand
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Tree Stand</legend>";
        childNodeHTML += "<select name=name='Select' id='treeStand'>";
        for (let i: number = 0; i < treeStand.length; i++) {
           childNodeHTML += "<option value='" + i + treeStand[i].name + " " + treeStand[i].price + " Euro'>" + treeStand[i].name + " " + treeStand[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        
        //Shipping
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Shipping Methode</legend>";
        childNodeHTML += "<select name=name='Select' id='Shippment'>";
        for (let i: number = 0; i < shipment.length; i++) {
            childNodeHTML += "<option value='" + i + shipment[i].name + " " + shipment[i].price + " Euro'>" + shipment[i].name + " " + shipment[i].price + " Euro</option>";
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
    
    function handleChange(_event: Event): void {
  

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        
        //trees
        if (target.id == "trees") {
            let node: HTMLElement = document.getElementById("treeHTML");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceTree = tree[priceIndex].price;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        //Balls
        if (target.id == "balls") {
            let node: HTMLElement = document.getElementById("ballsHTML");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceBalls = treeBall[priceIndex].price;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "Many1") {
            let node: HTMLElement = document.getElementById("ballMany");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            numberOfBalls = numIndex;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        //Balls
        if (target.id == "balls2") {
            let node: HTMLElement = document.getElementById("balls2HTML");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceBalls2 = treeBall[priceIndex].price;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "Many2") {
            let node: HTMLElement = document.getElementById("ball2Many");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            numberOfBalls2 = numIndex;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        //Candles
        if (target.id == "candles") {
            let node: HTMLElement = document.getElementById("candleHTML");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceCandle = candle[priceIndex].price;
            console.log(priceCandle);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "Many3") {
            let node: HTMLElement = document.getElementById("candleMany");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            numberOfCandle = numIndex;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "candles2") {
            let node: HTMLElement = document.getElementById("candles2HTML");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceCandle2 = candle[priceIndex].price;
            console.log(priceCandle2);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "Many4") {
            let node: HTMLElement = document.getElementById("candle2Many");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            numberOfCandle2 = numIndex;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        //Lametta
        if (target.name == "lamettas") {
            let node: HTMLElement = document.getElementById("lamettaHTML");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceLametta = lametta[priceIndex].price;
            console.log(priceLametta);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "Many5") {
            let node: HTMLElement = document.getElementById("lamettaMany");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            numberOfLametta = numIndex;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        if (target.name == "lamettas2") {
            let node: HTMLElement = document.getElementById("lametta2HTML");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceLametta2 = lametta[priceIndex].price;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "Many6") {
            let node: HTMLElement = document.getElementById("lametta2Many");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            numberOfLametta2 = numIndex;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        //Tree Stand
        if (target.name == "treeStand") {
            let node: HTMLElement = document.getElementById("treeStandHTML");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceTreeStand = treeStand[priceIndex].price;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
         //Tree top
        if (target.name == "treeTop") {
            let node: HTMLElement = document.getElementById("treeTopHTML");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceAdditional = additional[priceIndex].price;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
         //Shipping
        if (target.name == "Shippment") {
            let node: HTMLElement = document.getElementById("shippingHTML");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceShipping = shipment[priceIndex].price;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        //Adresse
        if (target.id == "adresseTS") {
            let node: HTMLElement = document.getElementById("adressHTML");
            adress = target.value;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        //Price
        let node: HTMLElement = document.getElementById("price");
        let childNodeHTML: string;

        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (priceTree + (priceBalls * numberOfBalls) + (priceBalls2 * numberOfBalls2) + (priceCandle * numberOfCandle) + (priceCandle2 * numberOfCandle2) + (priceLametta * numberOfLametta) + (priceLametta2 * numberOfLametta2) + priceTreeStand + priceAdditional + priceShipping);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
    
    //Progress. Wurde schon alles ausgewählt? Wenn ja--> nichts, wenn nein--> I'm sorry....
    function checkProgress(_event: Event): void {
        if (adress == "" || priceTree == 0 || priceBalls == 0 || priceShipping == 0 || priceCandle == 0 || priceLametta == 0 || priceAdditional == 0 || priceTreeStand == 0 || numberOfBalls == 0 || numberOfCandle == 0 || numberOfLametta == 0) {
            document.getElementById("notSelectedYet").innerHTML = "I'm sorry, you need to fill out a few more things!";
        }

        else {
            document.getElementById("notSelectedYet").innerHTML = "All done, thank you for your order!";
        }
    }
    
    //7.2
    function init(_event: Event): void {
        document.getElementById("button").addEventListener("click", checkProgress);
        setupAsyncForm();
    }
    function setupAsyncForm(): void {
        let button: Element = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event: Event): void {
        let checkout: string[] = [];
        let items: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");


        //trees 
        let selectedTree: HTMLOptionElement = <HTMLOptionElement>document.getElementById("trees");
        let color1: string = "Your order:    Tree: " + selectedTree.value.substr(1);
        sendRequestWithCustomData(color1);
        checkout.push(color1);

        //balls
        let selectedBalls: HTMLOptionElement = <HTMLOptionElement>document.getElementById("balls");
        let color2: string = "Balls: " + selectedBalls.value.substr(1);
        sendRequestWithCustomData(color2);
        checkout.push(color2);
        
        let selectedBallsAmount: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Many1");
        let color3: string = "Ball amount: " + selectedBallsAmount.value.substr(1);
        sendRequestWithCustomData(color3);
        checkout.push(color3);
        
        let selectedBalls1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("balls2");
        let color4: string = "Additional Balls 1: " + selectedBalls1.value.substr(1);
        sendRequestWithCustomData(color4);
        checkout.push(color4);
        
        let selectedBallsAmount1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Many2");
        let color5: string = "Balls amount 1: " + selectedBallsAmount1.value.substr(1);
        sendRequestWithCustomData(color5);
        checkout.push(color5);
        
        //candles
        let selectedCandles: HTMLOptionElement = <HTMLOptionElement>document.getElementById("candles");
        let color6: string = "Candles: " + selectedCandles.value.substr(1);
        sendRequestWithCustomData(color6);
        checkout.push(color6);
        
        let selectedCandlesAmount: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Many3");
        let color7: string = "Candles amount: " + selectedCandlesAmount.value.substr(1);
        sendRequestWithCustomData(color7);
        checkout.push(color7);
        
        let selectedCandles1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("candles2");
        let color8: string = "Additional Candles 1: " + selectedCandles1.value.substr(1);
        sendRequestWithCustomData(color8);
        checkout.push(color8);
        
        let selectedCandlesAmount1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Many4");
        let color9: string = "Candles amount 1: " + selectedCandlesAmount1.value.substr(1);
        sendRequestWithCustomData(color9);
        checkout.push(color9);

        //lametta
        let selectedLametta: HTMLOptionElement = <HTMLOptionElement>document.getElementById("lamettas");
        let color10: string = "Lametta: " + selectedLametta.value.substr(1);
        sendRequestWithCustomData(color10);
        checkout.push(color10);
        
        let selectedLamettaAmount: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Many5");
        let color11: string = "Lametta amount: " + selectedLamettaAmount.value.substr(1);
        sendRequestWithCustomData(color11);
        checkout.push(color11);
        
        let selectedLametta1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("lamettas2");
        let color12: string = "Additional Lametta 1: " + selectedLametta1.value.substr(1);
        sendRequestWithCustomData(color12);
        checkout.push(color12);
        
        let selectedLamettaAmount1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Many6");
        let color13: string = "Lametta amount 1: " + selectedLamettaAmount1.value.substr(1);
        sendRequestWithCustomData(color13);
        checkout.push(color13);

        //Top
        let selectedTreeTop: HTMLOptionElement = <HTMLOptionElement>document.getElementById("treeTop");
        let color14: string = "Top: " + selectedTreeTop.value.substr(1);
        sendRequestWithCustomData(color14);
        checkout.push(color14);
        
        //stand
        let selectedTreeStand: HTMLOptionElement = <HTMLOptionElement>document.getElementById("treeStand");
        let color15: string = "Stand: " + selectedTreeStand.value.substr(1);
        sendRequestWithCustomData(color15);
        checkout.push(color15);
        
        //shipping
        let selectedShip: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Shippment");
        let color16: string = "Shipping: " + selectedShip.value.substr(1);
        sendRequestWithCustomData(color16);
        checkout.push(color16);

        //adress
       /* let selectedAdress: HTMLOptionElement = <HTMLOptionElement>document.getElementById("adress");
        let color17: string = "Adress: " + selectedAdress.value.substr(1);
        sendRequestWithCustomData(color17);
        checkout.push(color17);*/

       

        for (let i: number = 0; i < items.length; i++) {
            let article: HTMLInputElement = items[i];
            if (Number(article.value) > 0) {
                let color: string = article.name + " " + article.value + " " + article.title + " " + (Number(article.getAttribute("price")) * Number(article.value)) + " Euro";
                sendRequestWithCustomData(color);
                checkout.push(color);

            }
        }

        alert(checkout);

    }

    function sendRequestWithCustomData(_color: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?article=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
}