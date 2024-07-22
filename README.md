# 3-WOCHEN-PROJEKT

![Project Logo](https://github.com/Projekt-3-Tage/3-WOCHEN-PROJEKT/blob/ed7213daefbae702a0fe53b2d9558d4b737c489f/React_Frontend/public/img/faviconNew.jpg)

## Einleitung
Dieses Projekt ist eine Webanwendung, die eine Freundesliste mit einem interaktiven Buchdesign darstellt. Es ermöglicht Benutzern, durch eine Liste von Freunden zu blättern und deren Profile anzusehen. Die Anwendung ist responsiv gestaltet und passt sich verschiedenen Bildschirmgrößen an.

## Zielgruppe
Diese Anleitung richtet sich an Entwickler, die das Projekt installieren, konfigurieren und betreiben möchten.



# Deployment Anleitung
## Installation und Start
### Lokale Installation
1. **Repository klonen**:
   ```
   Klone im Terminal das Github Repository: 
   git clone https://github.com/Projekt-3-Tage/3-WOCHEN-PROJEKT.git
   ```
   
2. **In das Projektverzeichnis wechseln**:
   ```bash
   cd 3-WOCHEN-PROJEKT
   ```
   
3. **Abhängigkeiten installieren**:
   ```bash
   cd React_Frontend
   ```
   ```bash
   npm install
   ``` 
4. **Anwendung starten**:
   ```bash
   npm start
   ```
   ```bash
   node server.js
   ```



<!-- DAS IST BACKEND ARBEIT FÜR STEFAN UND CHRISTOPHER -->
#### Hosting auf AWS
1. **AWS EC2 Instanz einrichten**:
   - Eine neue EC2 Instanz erstellen.
   - Node.js und npm auf der Instanz installieren.
2. **Projekt auf die Instanz kopieren**:
   - Mit SCP oder einem anderen Tool das Projekt auf die Instanz hochladen.
3. **Abhängigkeiten installieren und Anwendung starten**:
   ```bash
   npm install
   npm start
   ```
4. **Sicherstellen, dass der Port 80 (HTTP) offen ist**.

____

#### Allgemeines Hosting
- Das Projekt kann auf jedem Server gehostet werden, der Node.js unterstützt.
- Für die Konfiguration und den Start sind die gleichen Schritte wie bei der lokalen Installation zu befolgen.


### Techstack
- **Frontend**: React
- **Styling**: CSS

- **Backend**: Node.js
  

## Lizenzierung und Copyright
Zukunft geplant.


## User-Dokumentation
Die Anwenderdokumentation finden Sie [hier](tutorial.md).

---

## User-Dokumentation (tutorial.md)

# Anleitung für Endnutzer

## Einleitung
Willkommen bei unserer Anwendung! Diese Anleitung hilft Ihnen dabei, die grundlegenden Funktionen unserer Freundesliste zu verstehen und zu nutzen.


## Funktionen
- **Freundesliste anzeigen**: Blättern Sie durch Ihre Freunde und sehen Sie sich deren Profile an.
- **Responsives Design**: Die Anwendung passt sich automatisch an verschiedene Bildschirmgrößen an.


## So funktioniert's
1. **Starten Sie die Anwendung**: Öffnen Sie die Webanwendung in Ihrem Browser mit diesem [Link]( http://3.70.29.185:3000/)
2. **Registriere dich**: Klicke auf den Registrierungsknopf und Registriere dich.
3. **Gebe den 6stelligen Code ein**: Gebe jetzt den 6stelligen Code ein, den wir an deine E-Mail verschickt haben.
4. **Logge dich ein**: Gebe deinen Benutzernamen und dein Passwort ein. 

![Homeseite](https://github.com/Projekt-3-Tage/3-WOCHEN-PROJEKT/blob/755f03e61d9a5e5ec9a82ee8a112bab36f365dec/React_Frontend/public/img/Homeseite.png)

## Häufige Fragen
**Wie kann ich meine Freunde hinzufügen?**
- Aktuell werden die Freunde statisch in der Anwendung geladen. Für dynamisches Hinzufügen von Freunden ist eine zukünftige Version geplant.

**Warum sehe ich keine Profilbilder?**
- Stellen Sie sicher, dass die Bilddateien im richtigen Verzeichnis gespeichert sind und die Pfade korrekt angegeben sind.

## Support
Wenn Sie weitere Fragen haben, wenden Sie sich bitte an unseren [Support](mailto:support@example.com).

---

### Planungs- und Erstellungsprozess

1. **Planen**:
   - Skizze der Dokumentationsstruktur
   - Festlegung der Inhalte für README.md und tutorial.md

2. **Erstellen**:
   - Schreiben und Formatieren der README.md
   - Verfassen und Verlinken der User-Dokumentation
   - Entwickeln der Deployment-Anleitung
   - Hinzufügen visueller Hilfsmittel (Diagramme, Screenshots)

3. **Überprüfen**:
   - Überprüfung auf Verständlichkeit und Vollständigkeit
   - Feedback einholen und Anpassungen vornehmen

4. **Veröffentlichen**:
   - Sicherstellen, dass alle Links funktionieren
   - Platzieren der README.md im Hauptverzeichnis des Projekts

Viel Erfolg mit Ihrem Projekt! Besuchen Sie unser [GitHub Repository](https://github.com/Projekt-3-Tage/3-WOCHEN-PROJEKT.git) für den Quellcode und weitere Informationen.
