**Dieses Projekt ist eine Webanwendung, die ein Freundebuch mit einem interaktiven Buchdesign darstellt. 
Es ermöglicht Benutzern, durch eine Liste von Freunden zu blättern und deren Profile anzusehen. 
Die Anwendung ist responsiv gestaltet und passt sich verschiedenen Bildschirmgrößen an.**
<br>
<br>
_____
# Diese Anleitung richtet sich an Entwickler, die das Projekt installieren, konfigurieren und betreiben möchten.

_____
# Deployment Anleitung
## Installation und Start

Lokale Installation

Klone im Terminal das Repository: 
**git clone https://github.com/Projekt-3-Tage/3-WOCHEN-PROJEKT.git**

**In das Projektverzeichnis wechseln:**
cd 3-WOCHEN-PROJEKT

Abhängigkeiten installieren:
bash
Copy code
npm install
Anwendung starten:
bash
Copy code
npm start
Hosting auf AWS
AWS EC2 Instanz einrichten:
Eine neue EC2 Instanz erstellen.
Node.js und npm auf der Instanz installieren.
Projekt auf die Instanz kopieren:
Mit SCP oder einem anderen Tool das Projekt auf die Instanz hochladen.
Abhängigkeiten installieren und Anwendung starten:
bash
Copy code
npm install
npm start
Sicherstellen, dass der Port 80 (HTTP) offen ist.
Allgemeines Hosting
Das Projekt kann auf jedem Server gehostet werden, der Node.js unterstützt.
Für die Konfiguration und den Start sind die gleichen Schritte wie bei der lokalen Installation zu befolgen.
Optische Gestaltung

Techstack
Frontend: React
Backend: Node.js
Styling: CSS
Lizenzierung und Copyright
Dieses Projekt steht unter der MIT-Lizenz. Weitere Informationen finden Sie in der LICENSE Datei.

User-Dokumentation
Die Anwenderdokumentation finden Sie hier.

User-Dokumentation (tutorial.md)
Anleitung für Endnutzer
Einleitung
Willkommen bei unserer Anwendung! Diese Anleitung hilft Ihnen dabei, die grundlegenden Funktionen unserer Freundesliste zu verstehen und zu nutzen.

Funktionen
Freundesliste anzeigen: Blättern Sie durch Ihre Freunde und sehen Sie sich deren Profile an.
Responsives Design: Die Anwendung passt sich automatisch an verschiedene Bildschirmgrößen an.
So funktioniert's
Starten Sie die Anwendung: Öffnen Sie die Webanwendung in Ihrem Browser.
Freunde ansehen: Nutzen Sie die Navigationsknöpfe, um durch die Freundesliste zu blättern.
Profil ansehen: Klicken Sie auf ein Freundesbild, um das Profil des Freundes anzuzeigen.

Häufige Fragen
Wie kann ich meine Freunde hinzufügen?

Aktuell werden die Freunde statisch in der Anwendung geladen. Für dynamisches Hinzufügen von Freunden ist eine zukünftige Version geplant.
Warum sehe ich keine Profilbilder?

Stellen Sie sicher, dass die Bilddateien im richtigen Verzeichnis gespeichert sind und die Pfade korrekt angegeben sind.
Support
Wenn Sie weitere Fragen haben, wenden Sie sich bitte an unseren Support.

Planungs- und Erstellungsprozess
Planen:

Skizze der Dokumentationsstruktur
Festlegung der Inhalte für README.md und tutorial.md
Erstellen:

Schreiben und Formatieren der README.md
Verfassen und Verlinken der User-Dokumentation
Entwickeln der Deployment-Anleitung
Hinzufügen visueller Hilfsmittel (Diagramme, Screenshots)
Überprüfen:

Überprüfung auf Verständlichkeit und Vollständigkeit
Feedback einholen und Anpassungen vornehmen
Veröffentlichen:

Sicherstellen, dass alle Links funktionieren
Platzieren der README.md im Hauptverzeichnis des Projekts
Viel Erfolg mit Ihrem Projekt! Besuchen Sie unser GitHub Repository für den Quellcode und weitere Informationen.
