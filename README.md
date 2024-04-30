# Webprog Projekt

Dies ist ein Node.js-Projekt, das Express.js verwendet, um eine Webanwendung zu erstellen, die verschiedene Routen für die Verarbeitung von HTTP-Anfragen bereitstellt. Das Projekt ermöglicht das Hochladen von Dateien auf den Server sowie das Abrufen und Verarbeiten von Daten über URL-Parameter und Formulareingaben.

## Funktionen

- **Hauptseite**: Die Hauptseite zeigt eine einfache HTML-Seite mit dem Titel "Webprog" und dem Namen "Fabian" an.

- **Dateidrop-Seite**: Eine spezielle Route ermöglicht das Hochladen von Dateien auf den Server. Die hochgeladene Datei wird im Ordner "uploads/" gespeichert.

- **Datenabruf über URL-Parameter**: Die Route `/year/month/day` ermöglicht es, das Jahr, den Monat und den Tag aus den URL-Parametern abzurufen und als JSON-Antwort zurückzugeben.

- **Datenabruf über URL-Parameter und Query-Parameter**: Die Route `/:year/:month/:day/names` ermöglicht es, das Jahr, den Monat und den Tag aus den URL-Parametern abzurufen und zusätzlich Namen und Nachnamen aus den Query-Parametern. Die Daten werden als JSON-Antwort zurückgegeben.

- **Datenempfang über POST-Anfrage**: Die Route `/` erwartet einen POST-Request mit Namen, Nachnamen und Jahr im Request-Body. Die empfangenen Daten werden als JSON-Antwort zurückgegeben.

## Installation und Verwendung

1. Klone das Repository:
  https://github.com/shimizu189/WebProg.git

2. Installiere die Abhängigkeiten:
  cd webprog-projekt
  npm install

3. Starte den Server:
  npm start

4. Öffne einen Webbrowser und navigiere zur Adresse `http://localhost:3000`, um die Anwendung zu sehen.

## Abhängigkeiten

- Express.js: Webanwendungs-Framework für Node.js.
- Multer: Middleware für die Verarbeitung von Dateiuploads in Express.js.

## Autor

Fabian L
