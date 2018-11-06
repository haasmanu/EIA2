var Aufgabe2UNO;
(function (Aufgabe2UNO) {
    document.addEventListener("DOMContentLoaded", main);
    let hand = [];
    let deck = [
        { value: "0", color: "red" }, { value: "1", color: "red" }, { value: "1", color: "red" }, { value: "2", color: "red" }, { value: "2", color: "red" }, { value: "3", color: "red" }, { value: "3", color: "red" }, { value: "4", color: "red" }, { value: "4", color: "red" }, { value: "5", color: "red" }, { value: "5", color: "red" },
        { value: "6", color: "red" }, { value: "6", color: "red" }, { value: "7", color: "red" }, { value: "7", color: "red" }, { value: "8", color: "red" }, { value: "8", color: "red" }, { value: "9", color: "red" }, { value: "9", color: "red" }, { value: "Aussetzen", color: "red" }, { value: "Aussetzen", color: "red" }, { value: "2 mehr", color: "red" }, { value: "2 mehr", color: "red" }, { value: "Wechsel", color: "red" }, { value: "Wechsel", color: "red" },
        { value: "0", color: "green" }, { value: "1", color: "green" }, { value: "1", color: "green" }, { value: "2", color: "green" }, { value: "2", color: "green" }, { value: "3", color: "green" }, { value: "3", color: "green" }, { value: "4", color: "green" }, { value: "4", color: "green" }, { value: "5", color: "green" }, { value: "5", color: "green" },
        { value: "6", color: "green" }, { value: "6", color: "green" }, { value: "7", color: "green" }, { value: "7", color: "green" }, { value: "8", color: "green" }, { value: "8", color: "green" }, { value: "9", color: "green" }, { value: "9", color: "green" }, { value: "Aussetzen", color: "green" }, { value: "Aussetzen", color: "green" }, { value: "2 mehr", color: "green" }, { value: "2 mehr", color: "green" }, { value: "Wechsel", color: "green" }, { value: "Wechsel", color: "green" },
        { value: "0", color: "blue" }, { value: "1", color: "blue" }, { value: "1", color: "blue" }, { value: "2", color: "blue" }, { value: "2", color: "blue" }, { value: "3", color: "blue" }, { value: "3", color: "blue" }, { value: "4", color: "blue" }, { value: "4", color: "blue" }, { value: "5", color: "blue" }, { value: "5", color: "blue" },
        { value: "6", color: "blue" }, { value: "6", color: "blue" }, { value: "7", color: "blue" }, { value: "7", color: "blue" }, { value: "8", color: "blue" }, { value: "8", color: "blue" }, { value: "9", color: "blue" }, { value: "9", color: "blue" }, { value: "Aussetzen", color: "blue" }, { value: "Aussetzen", color: "blue" }, { value: "2 mehr", color: "blue" }, { value: "2 mehr", color: "blue" }, { value: "Wechsel", color: "blue" }, { value: "Wechsel", color: "blue" },
        { value: "0", color: "yellow" }, { value: "1", color: "yellow" }, { value: "1", color: "yellow" }, { value: "2", color: "yellow" }, { value: "2", color: "yellow" }, { value: "3", color: "yellow" }, { value: "3", color: "yellow" }, { value: "4", color: "yellow" }, { value: "4", color: "yellow" }, { value: "5", color: "yellow" }, { value: "5", color: "yellow" },
        { value: "6", color: "yellow" }, { value: "6", color: "yellow" }, { value: "7", color: "yellow" }, { value: "7", color: "yellow" }, { value: "8", color: "yellow" }, { value: "8", color: "yellow" }, { value: "9", color: "yellow" }, { value: "9", color: "yellow" }, { value: "Aussetzen", color: "yellow" }, { value: "Aussetzen", color: "yellow" }, { value: "2 mehr", color: "yellow" }, { value: "2 mehr", color: "yellow" }, { value: "Wechsel", color: "yellow" }, { value: "Wechsel", color: "yellow" },
        { value: "Wish Card", color: "black" }, { value: "Wish Card", color: "black" }, { value: "Wish Card", color: "black" }, { value: "Wish Card", color: "black" }, { value: "4 mehr", color: "black" }, { value: "4 mehr", color: "black" }, { value: "4 mehr", color: "black" }, { value: "4 mehr", color: "black" }];
    function main() {
        let y = prompt("Gib Anzahl der Karten an");
        let wantedCards;
        wantedCards = Number(y);
        for (let i = 0; i < wantedCards; i++) {
            let r = Math.floor(Math.random() * deck.length);
            let randomCard = deck[r];
            console.log(randomCard);
            hand[i] = randomCard;
            deck.splice(r, 1);
        }
        displayCards();
    }
    function displayCards() {
        for (let j = 0; j < hand.length; j++) {
            placeCards(hand[j].value, hand[j].color);
        }
    }
    function placeCards(_wert, _farbe) {
        let div = document.createElement("div");
        div.innerHTML = _wert;
        div.setAttribute("class", "Hand");
        document.body.appendChild(div);
        let s = div.style;
        s.backgroundColor = _farbe;
        if (_farbe == "black") {
            s.color = "white";
        }
    }
})(Aufgabe2UNO || (Aufgabe2UNO = {}));
//# sourceMappingURL=Aufgabe2UNO.js.map