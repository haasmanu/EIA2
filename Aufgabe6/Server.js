"use strict";
const Http = require("http"); //Daten werden von der referenzierten Website importiert
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server");
    let port = process.env.PORT; // Variable port ist vom typ Number, was den Heroku-Server als Port zugewiesen bekommt
    if (port == undefined)
        port = 8100; // wird ihm der 8100 (EIA2 Heroku) zugewiesen
    let server = Http.createServer(); // Computer wird als HTTP-Server gehandhabt und erstellt ein HTTP-Server-Objekt
    server.addListener("request", handleRequest); // EventListner wird erstellt verweist auf Funktion handleRequest
    server.addListener("listening", handleListen); // EventListner wird erstellt verweist auf Funktion handleListen
    server.listen(port); // EventListener auf Port
    function handleListen() {
        console.log("Listening"); // Konsole zeigt "Listening" an
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Konsole zeigt "I hear voices" an
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); // erstellt Header im HTML
        _response.setHeader("Access-Control-Allow-Origin", "*"); // zweiter Header wir erzeugt
        let articles = [];
        let url = _request.url;
        if (url != "/favicon.ico") {
            let urlInfo = Url.parse(url).search.substr(1);
            let childNodeHTML = "<br>";
            for (let i = 0; i < urlInfo.length; i++) {
                if (urlInfo[i] == "&") {
                    articles.push(childNodeHTML);
                    childNodeHTML = "<br>";
                }
                else {
                    childNodeHTML += urlInfo[i];
                }
            }
            articles.push(childNodeHTML);
            for (let i = 0; i < articles.length; i++) {
                _response.write(articles[i]);
            }
            console.log(articles);
        }
        _response.end(); // _response wird beendet 
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map