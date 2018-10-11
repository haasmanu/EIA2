function Funktion(): void {
var ERGEBNIS: string = prompt("Sag mir deinen Namen");

if (ERGEBNIS != null) {
    document.getElementById("solution").innerHTML =
    "Uhhhh "  +  ERGEBNIS + " na wie geht's dir? Lange nicht gesehen";
    }

    console.log(ERGEBNIS + " schoen dich hier zu sehen.");
}
