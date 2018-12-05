import * as Http from "http";  //Daten werden von der referenzierten Website importiert
import * as Url from "url";

namespace L06_SendData {
    console.log("Starting server");
    let port: number = process.env.PORT;  // Variable port ist vom typ Number, was den Heroku-Server als Port zugewiesen bekommt
    if (port == undefined)  // wenn der port undefiniert ist...
        port = 8100;  // wird ihm der 8100 (EIA2 Heroku) zugewiesen

    let server: Http.Server = Http.createServer();  // Computer wird als HTTP-Server gehandhabt und erstellt ein HTTP-Server-Objekt
    server.addListener("request", handleRequest);  // EventListner wird erstellt verweist auf Funktion handleRequest
    server.addListener("listening", handleListen);  // EventListner wird erstellt verweist auf Funktion handleListen
    server.listen(port); // EventListener auf Port
 
    function handleListen(): void {  // Funktion handleRequest vom typ void
        console.log("Listening"); // Konsole zeigt "Listening" an
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Funktion handleRequest vom Typ void. Parameter _request:HTTP.IncomingMessage....ganz ehrlich gute Frage was da passiert
        console.log("I hear voices!"); // Konsole zeigt "I hear voices" an
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8"); // erstellt Header im HTML
        _response.setHeader("Access-Control-Allow-Origin", "*"); // zweiter Header wir erzeugt

let articles: string[] = [];
        let url: string = _request.url;
        
        if (url != "/favicon.ico") {
            let urlInfo: string = Url.parse(url).search.substr(1);
            let childNodeHTML: string = "<br>";
            for (let i: number = 0; i < urlInfo.length; i++) {
                if (urlInfo[i] == "&") {
                    articles.push(childNodeHTML);
                    childNodeHTML = "<br>";
                }
                else {
                    childNodeHTML += urlInfo[i];
                }
            }
            articles.push(childNodeHTML);

            for (let i: number = 0; i < articles.length; i++) {
                _response.write(articles[i]);
            }
            console.log(articles);
        }
        
        _response.end(); // _response wird beendet 
    }
}