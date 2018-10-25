namespace Aufgabe2UNO {

    interface Cards {
        wert: string;
        farbe: string;
    }
    /* Sorry fuer das lange Interface, mir ist ein besserer Weg eingefallen, ab Zeile 664 wird es wieder spannend*/



    let stapel: Cards[] = [
        { wert: "0", farbe: "red" }, { wert: "1", farbe: "red" }, { wert: "1", farbe: "red" }, { wert: "2", farbe: "red" }, { wert: "2", farbe: "red" }, { wert: "3", farbe: "red" }, { wert: "3", farbe: "red" }, { wert: "4", farbe: "red" }, { wert: "4", farbe: "red" }, { wert: "5", farbe: "red" }, { wert: "5", farbe: "red" },
        { wert: "6", farbe: "red" }, { wert: "6", farbe: "red" }, { wert: "7", farbe: "red" }, { wert: "7", farbe: "red" }, { wert: "8", farbe: "red" }, { wert: "8", farbe: "red" }, { wert: "9", farbe: "red" }, { wert: "9", farbe: "red" }, { wert: "Aussetzen", farbe: "red" }, { wert: "Aussetzen", farbe: "red" }, { wert: "2 mehr", farbe: "red" }, { wert: "2 mehr", farbe: "red" }, { wert: "Wechsel", farbe: "red" }, { wert: "Wechsel", farbe: "red" },
        { wert: "0", farbe: "green" }, { wert: "1", farbe: "green" }, { wert: "1", farbe: "green" }, { wert: "2", farbe: "green" }, { wert: "2", farbe: "green" }, { wert: "3", farbe: "green" }, { wert: "3", farbe: "green" }, { wert: "4", farbe: "green" }, { wert: "4", farbe: "green" }, { wert: "5", farbe: "green" }, { wert: "5", farbe: "green" },
        { wert: "6", farbe: "green" }, { wert: "6", farbe: "green" }, { wert: "7", farbe: "green" }, { wert: "7", farbe: "green" }, { wert: "8", farbe: "green" }, { wert: "8", farbe: "green" }, { wert: "9", farbe: "green" }, { wert: "9", farbe: "green" }, { wert: "Aussetzen", farbe: "green" }, { wert: "Aussetzen", farbe: "green" }, { wert: "2 mehr", farbe: "green" }, { wert: "2 mehr", farbe: "green" }, { wert: "Wechsel", farbe: "green" }, { wert: "Wechsel", farbe: "green" },
        { wert: "0", farbe: "blue" }, { wert: "1", farbe: "blue" }, { wert: "1", farbe: "blue" }, { wert: "2", farbe: "blue" }, { wert: "2", farbe: "blue" }, { wert: "3", farbe: "blue" }, { wert: "3", farbe: "blue" }, { wert: "4", farbe: "blue" }, { wert: "4", farbe: "blue" }, { wert: "5", farbe: "blue" }, { wert: "5", farbe: "blue" },
        { wert: "6", farbe: "blue" }, { wert: "6", farbe: "blue" }, { wert: "7", farbe: "blue" }, { wert: "7", farbe: "blue" }, { wert: "8", farbe: "blue" }, { wert: "8", farbe: "blue" }, { wert: "9", farbe: "blue" }, { wert: "9", farbe: "blue" }, { wert: "Aussetzen", farbe: "blue" }, { wert: "Aussetzen", farbe: "blue" }, { wert: "2 mehr", farbe: "blue" }, { wert: "2 mehr", farbe: "blue" }, { wert: "Wechsel", farbe: "blue" }, { wert: "Wechsel", farbe: "blue" },
        { wert: "0", farbe: "yellow" }, { wert: "1", farbe: "yellow" }, { wert: "1", farbe: "yellow" }, { wert: "2", farbe: "yellow" }, { wert: "2", farbe: "yellow" }, { wert: "3", farbe: "yellow" }, { wert: "3", farbe: "yellow" }, { wert: "4", farbe: "yellow" }, { wert: "4", farbe: "yellow" }, { wert: "5", farbe: "yellow" }, { wert: "5", farbe: "yellow" },
        { wert: "6", farbe: "yellow" }, { wert: "6", farbe: "yellow" }, { wert: "7", farbe: "yellow" }, { wert: "7", farbe: "yellow" }, { wert: "8", farbe: "yellow" }, { wert: "8", farbe: "yellow" }, { wert: "9", farbe: "yellow" }, { wert: "9", farbe: "yellow" }, { wert: "Aussetzen", farbe: "yellow" }, { wert: "Aussetzen", farbe: "yellow" }, { wert: "2 mehr", farbe: "yellow" }, { wert: "2 mehr", farbe: "yellow" }, { wert: "Wechsel", farbe: "yellow" }, { wert: "Wechsel", farbe: "yellow" },
        { wert: "Wish Card", farbe: "black" }, { wert: "Wish Card", farbe: "black" }, { wert: "Wish Card", farbe: "black" }, { wert: "Wish Card", farbe: "black" }, { wert: "4 mehr", farbe: "black" }, { wert: "4 mehr", farbe: "black" }, { wert: "4 mehr", farbe: "black" }, { wert: "4 mehr", farbe: "black" }];

    function main(): void {
        let y: string = prompt("Gib Anzahl der Karten an");
        let x: number;
        x = Number(y);
        let hand: Cards[] = [];

        for (let i: number = 0; i < x; i++) {
            let randCard: Cards = stapel[Math.floor(Math.random() * stapel.length)];
            console.log(randCard);
            hand[i] = randCard;
        }
        
        displayCards();

        function displayCards(): void {
            for (let j: number = 0; j < hand.length; j++) {
                PlaceDiv(hand[j].wert, hand[j].farbe);
            }
        }


        function PlaceDiv(_wert: string, _farbe: string): void {
            let div: HTMLDivElement = document.createElement("div");
            div.innerHTML = _wert;
            div.setAttribute("class", "Hand");
            document.body.appendChild(div);
            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid black";
            s.backgroundColor = _farbe;
            s.top = "600px";
            s.height = "200px";
            s.margin = "5px";
            

            if (_farbe == "black") { s.color = "white"; }
        }


     /*   function PlaceDiv(_wert: string, _farbe: string): void {
            let element: HTMLDivElement = document.createElement("div");
            document.getElementById("Hand").appendChild(element);
            let s: CSSStyleDeclaration = element.style;
            s.border = "thin solid black";
            s.backgroundColor = _farbe;
            s.top = "600px";
            s.width = "100px";
            s.height = "200px";
            s.margin = "5px";

            if (_farbe == "black") { s.color = "white"; }
        }*/

        function Ablage(): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage");

            document.getElementById("Ablage").innerHTML += "Ablage";

            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "white";
            s.width = "100px";
            s.height = "200px";
            s.right = "50px";
            s.top = "20px";
        }
        Ablage();

        function RestKarten(): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "RestKarten");

            document.getElementById("RestKarten").innerHTML += "Rest Karten";

            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "white";
            s.width = "100px";
            s.height = "200px";
            s.left = "50px";
            s.top = "20px";
        }
        RestKarten();

    }

    document.addEventListener("DOMContentLoaded", main);
}
