import Card from '../components/Card.jsx';

export default function ContactPage() {
  return (
    <div className="page-grid page-grid--two">
      <Card>
        <div className="stack">
          <p className="eyebrow">Altus FOP Lodge 120</p>
          <h2>Contact</h2>
          <p>2101 N Main St, Altus, OK 73521</p>
          <p className="hero-copy">Phone: (580) 555-0100</p>
          <p className="hero-copy">Email: info@altusfop120.org</p>
          <p className="hero-copy">Website: altusfop120.org</p>
        </div>
      </Card>

      <Card className="card--hero">
        <div className="stack">
          <h3>Lodge Contact Card</h3>
          <p className="hero-copy">
            This demo card can later be powered by a Firestore-backed `settings/app` document so
            contact details stay editable without redeploying the app.
          </p>
        </div>
      </Card>
    </div>
  );
}
