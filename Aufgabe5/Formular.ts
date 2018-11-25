namespace Aufgabe5Shop {
    
    document.addEventListener("DOMContentLoaded", createFieldset);
    document.addEventListener("DOMContentLoaded", decisionChanger);

    function decisionChanger(_event: Event): void {
        let fieldset: HTMLElement = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    
    
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
        childNodeHTML += "<legend>Christmas Tree Top</legend>";
        for (let i: number = 0; i < additional.length; i++) {

            childNodeHTML += "<input type= 'radio' name= 'Radiogroup2' value='" + i + additional[i].name + " " + additional[i].price + " Euro' id='treeTop" + i + "' />";
            childNodeHTML += "<label for= 'check" + i + "'>" + additional[i].name + " " + additional[i].price + "Euro</label>";
        }
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";

        //Tree Stand
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Tree Stand</legend>";
        for (let i: number = 0; i < treeStand.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup3' value='" + i + treeStand[i].name + " " + treeStand[i].price + " Euro'  id='treeStand" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + treeStand[i].name + " " + treeStand[i].price + " Euro</label>";
        }
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";
        
        //Shipping
        childNodeHTML += "<fieldset>";
        childNodeHTML += "<legend>Shipping Methode</legend>";
        for (let i: number = 0; i < shipment.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup4' value='" + i + shipment[i].name + " " + shipment[i].price + " Euro'  id='shipping" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + shipment[i].name + " " + shipment[i].price + " Euro</label>";
        }
        childNodeHTML += "</fieldset>";
        childNodeHTML += "<hr>";

        //Adresse
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='adresseTS' type='text' name='Text' placeholder='enter adress here' required/>";
        
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
        if (target.name == "Radiogroup3") {
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
        if (target.name == "Radiogroup2") {
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
        if (target.name == "Radiogroup4") {
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
}