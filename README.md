# 3-WOCHEN-PROJEKT

![Project Logo](https://github.com/Projekt-3-Tage/3-WOCHEN-PROJEKT/blob/a4b8f03b214de8c4ab0714bd0d6a2b747cdb33c5/React_Frontend/public/img/LogoTeamforce.png)

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
Die Anwenderdokumentation finden Sie [hier](https://github.com/Projekt-3-Tage/3-WOCHEN-PROJEKT/blob/f8806150b5583e87df476e7857c2dce3fb3206be/tutorial.md).

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
Wenn Sie weitere Fragen haben, wenden Sie sich bitte an unseren [Support](mailto:teamforceone2024@gmail.com).

---
