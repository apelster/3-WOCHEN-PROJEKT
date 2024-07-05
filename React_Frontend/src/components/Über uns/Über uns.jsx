import React from 'react';
import './App.css';

const teamMembers = [
  {
    name: "Stefan",
    role: "Product Owner und Backend Entwickler",
    description: "Stefan leitet unser Team mit seiner Leidenschaft für Technologie und Produktentwicklung. Er sorgt dafür, dass unsere Vision in konkrete und funktionale Lösungen umgesetzt wird."
  },
  {
    name: "Kevin",
    role: "Scrum Master und Full Stack Entwickler",
    description: "Kevin bringt Struktur und Ordnung in unser kreatives Chaos. Als Scrum Master stellt er sicher, dass unsere Projekte effizient und erfolgreich abgeschlossen werden, während er gleichzeitig als Full Stack Entwickler zur technischen Umsetzung beiträgt."
  },
  {
    name: "Akin",
    role: "Frontend Entwickler",
    description: "Akin hat ein besonderes Talent für Design und Benutzererfahrung. Er gestaltet die Oberflächen unserer Anwendungen so, dass sie intuitiv und ästhetisch ansprechend sind."
  },
  {
    name: "Aiyoub",
    role: "Frontend Entwickler",
    description: "Aiyoub ist ein kreativer Kopf, der sich darauf spezialisiert hat, innovative und benutzerfreundliche Frontend-Lösungen zu entwickeln. Er bringt frische Ideen und kreative Designs in unsere Projekte ein."
  },
  {
    name: "Christopher",
    role: "Backend Entwickler",
    description: "Christopher sorgt im Hintergrund dafür, dass alles reibungslos läuft. Mit seiner Expertise in der Backend-Entwicklung stellt er sicher, dass unsere Systeme stabil und skalierbar sind."
  }
];

const App = () => {
  return (
    <div className="container">
      <h1>Über uns</h1>
      <div id="content">
        <p>
          Willkommen bei Teamforce One! Unsere Reise begann mit der einfachen Idee, die Kommunikation und Verbindung zwischen Freunden und Familien aufrechtzuerhalten. Wir sind ein leidenschaftliches Team, das daran arbeitet, innovative und benutzerfreundliche Lösungen zu entwickeln, die Menschen näher zusammenbringen.
        </p>
        <p>
          Unsere Vision ist es, ein Online-Erlebnis zu schaffen, das über die üblichen sozialen Plattformen hinausgeht. Mit unserem Projekt "Das Online Freundebuch" möchten wir eine Plattform bieten, auf der Freundschaften auf besondere und dauerhafte Weise gepflegt werden können.
        </p>
        <h2>Unser Team</h2>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
        <h2>Unsere Mission</h2>
        <p>
          Bei Teamforce One glauben wir daran, dass Technologie genutzt werden sollte, um Menschen zu verbinden und ihre Beziehungen zu stärken. Unsere Mission ist es, Werkzeuge und Plattformen zu schaffen, die dies auf eine sinnvolle und unterhaltsame Weise ermöglichen.
        </p>
        <p>
          Mit "Das Online Freundebuch" möchten wir eine Brücke zwischen der analogen und der digitalen Welt schlagen. Unsere Plattform ermöglicht es Freunden und Familien, Erinnerungen zu teilen, sich gegenseitig zu inspirieren und ihre Bindungen zu vertiefen – ganz gleich, wo sie sich befinden.
        </p>
        <p>
          Vielen Dank, dass Sie sich die Zeit genommen haben, mehr über uns zu erfahren. Wenn Sie Fragen haben oder weitere Informationen benötigen, zögern Sie bitte nicht, uns zu kontaktieren.
        </p>
      </div>
    </div>
  );
}

export default App;
