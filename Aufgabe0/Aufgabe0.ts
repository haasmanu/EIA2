function Funktion(): void {
var Ergebnis : string = prompt("Sag mir deinen Namen");

if (Ergebnis != null) {
    document.getElementById("solution").innerHTML =
    "Uhhhh "  +  Ergebnis + " na wie geht's dir?";
    }
    
    console.log(Ergebnis + " schoen dich hier zu sehen.")
}