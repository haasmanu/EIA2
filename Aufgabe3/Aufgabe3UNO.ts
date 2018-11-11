namespace Aufgabe3UNO {

    document.addEventListener("DOMContentLoaded", main);

    let hand: Card[] = [];
    let ablageStapel: Card[] = [];
    
    interface Card {
        value: string;
        color: string;
    }

    let deck: Card[] = [
        { value: "0", color: "red" }, { value: "1", color: "red" }, { value: "1", color: "red" }, { value: "2", color: "red" }, { value: "2", color: "red" }, { value: "3", color: "red" }, { value: "3", color: "red" }, { value: "4", color: "red" }, { value: "4", color: "red" }, { value: "5", color: "red" }, { value: "5", color: "red" },
        { value: "6", color: "red" }, { value: "6", color: "red" }, { value: "7", color: "red" }, { value: "7", color: "red" }, { value: "8", color: "red" }, { value: "8", color: "red" }, { value: "9", color: "red" }, { value: "9", color: "red" }, { value: "Aussetzen", color: "red" }, { value: "Aussetzen", color: "red" }, { value: "2 mehr", color: "red" }, { value: "2 mehr", color: "red" }, { value: "Wechsel", color: "red" }, { value: "Wechsel", color: "red" },
        { value: "0", color: "green" }, { value: "1", color: "green" }, { value: "1", color: "green" }, { value: "2", color: "green" }, { value: "2", color: "green" }, { value: "3", color: "green" }, { value: "3", color: "green" }, { value: "4", color: "green" }, { value: "4", color: "green" }, { value: "5", color: "green" }, { value: "5", color: "green" },
        { value: "6", color: "green" }, { value: "6", color: "green" }, { value: "7", color: "green" }, { value: "7", color: "green" }, { value: "8", color: "green" }, { value: "8", color: "green" }, { value: "9", color: "green" }, { value: "9", color: "green" }, { value: "Aussetzen", color: "green" }, { value: "Aussetzen", color: "green" }, { value: "2 mehr", color: "green" }, { value: "2 mehr", color: "green" }, { value: "Wechsel", color: "green" }, { value: "Wechsel", color: "green" },
        { value: "0", color: "blue" }, { value: "1", color: "blue" }, { value: "1", color: "blue" }, { value: "2", color: "blue" }, { value: "2", color: "blue" }, { value: "3", color: "blue" }, { value: "3", color: "blue" }, { value: "4", color: "blue" }, { value: "4", color: "blue" }, { value: "5", color: "blue" }, { value: "5", color: "blue" },
        { value: "6", color: "blue" }, { value: "6", color: "blue" }, { value: "7", color: "blue" }, { value: "7", color: "blue" }, { value: "8", color: "blue" }, { value: "8", color: "blue" }, { value: "9", color: "blue" }, { value: "9", color: "blue" }, { value: "Aussetzen", color: "blue" }, { value: "Aussetzen", color: "blue" }, { value: "2 mehr", color: "blue" }, { value: "2 mehr", color: "blue" }, { value: "Wechsel", color: "blue" }, { value: "Wechsel", color: "blue" },
        { value: "0", color: "yellow" }, { value: "1", color: "yellow" }, { value: "1", color: "yellow" }, { value: "2", color: "yellow" }, { value: "2", color: "yellow" }, { value: "3", color: "yellow" }, { value: "3", color: "yellow" }, { value: "4", color: "yellow" }, { value: "4", color: "yellow" }, { value: "5", color: "yellow" }, { value: "5", color: "yellow" },
        { value: "6", color: "yellow" }, { value: "6", color: "yellow" }, { value: "7", color: "yellow" }, { value: "7", color: "yellow" }, { value: "8", color: "yellow" }, { value: "8", color: "yellow" }, { value: "9", color: "yellow" }, { value: "9", color: "yellow" }, { value: "Aussetzen", color: "yellow" }, { value: "Aussetzen", color: "yellow" }, { value: "2 mehr", color: "yellow" }, { value: "2 mehr", color: "yellow" }, { value: "Wechsel", color: "yellow" }, { value: "Wechsel", color: "yellow" },
        { value: "Wish Card", color: "black" }, { value: "Wish Card", color: "black" }, { value: "Wish Card", color: "black" }, { value: "Wish Card", color: "black" }, { value: "4 mehr", color: "black" }, { value: "4 mehr", color: "black" }, { value: "4 mehr", color: "black" }, { value: "4 mehr", color: "black" }];

    function main(): void {
        document.getElementById("SortButton").addEventListener("click", sortCards);
        document.addEventListener("keydown", drawCardIfSpace);
        document.getElementById("RestKarten").addEventListener("click", drawCard);

        
        let y: string = prompt("Gib Anzahl der Karten an");
        let wantedCards: number;
        wantedCards = Number(y);

        for (let i: number = 0; i < wantedCards; i++) {
            
            if (!drawCard()) {
                break;
            }
        }
    }


    function displayCards(): void {
        document.getElementById("Hand").innerHTML = "";
        
        for (let j: number = 0; j < hand.length; j++) {
            placeCard(hand[j].value, hand[j].color, j);
        }
    }


    function placeCard(_wert: string, _farbe: string, _handIndex: number): void {
        let div: HTMLDivElement = document.createElement("div");
        div.innerHTML = _wert;
        div.setAttribute("class", "Cards");
        
        document.getElementById("Hand").appendChild(div);
        let s: CSSStyleDeclaration = div.style;
        s.backgroundColor = _farbe;
        if (_farbe == "black") {
            s.color = "white";
        }
        let moveToAblage: () => void = function (): void {
            ablageStapel.push(hand.splice(_handIndex, 1)[0]);
            document.getElementById("Ablage").innerHTML = "";
            document.getElementById("Ablage").appendChild(div);
            displayCards();
            div.removeEventListener("click", moveToAblage);
        };
        div.addEventListener("click", moveToAblage);
    }
    
    function drawCard(): boolean {
        if (deck.length == 0) {
            alert("no more cards!");
            return false;    
        }
        
        let r: number = Math.floor(Math.random() * deck.length);
        let randomCard: Card = deck[r];
        console.log(randomCard);
        hand.push(randomCard);
        deck.splice(r, 1);
        displayCards();
        return true;
    }
    
    function drawCardIfSpace (_event: KeyboardEvent): void {
        var keyCode: number = _event.keyCode;
        if (keyCode == 32) {
            drawCard();
        }
    }
    
    function sortCards(): void {
        hand.sort(function (_a: Card, _b: Card): number {
          return _a.color.localeCompare(_b.color);
        });
        displayCards();
    };
}