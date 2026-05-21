import { Link, useOutletContext } from 'react-router-dom';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import { mockAnnouncements } from '../data/mockAnnouncements.js';
import { mockEvents } from '../data/mockEvents.js';
import { mockVotes } from '../data/mockVotes.js';

const tiles = [
  ['Announcements', '/announcements'],
  ['Calendar', '/calendar'],
  ['Agenda', '/agenda'],
  ['Resources', '/resources'],
  ['Videos', '/videos'],
  ['Gallery', '/gallery'],
  ['Voting', '/voting'],
  ['Messages', '/messages'],
];

export default function DashboardPage() {
  const { currentUser, role, openAction, showToast } = useOutletContext();
  const announcement = mockAnnouncements[0];
  const event = mockEvents[0];
  const vote = mockVotes[0];

  return (
    <div className="stack">
      <div className="hero-grid">
        <Card className="card--hero">
          <div className="stack">
            <div className="meta-row">
              <Badge tone="highlight">Member Portal Prototype</Badge>
              <Badge tone="info">{role === 'admin' ? 'Admin Preview' : 'Member Preview'}</Badge>
            </div>
            <h2 className="hero-title">Altus FOP Lodge 120</h2>
            <p className="hero-copy">
              A polished PWA foundation designed for announcements, lodge operations, resources,
              internal communications, and future Firebase-backed workflows.
            </p>
            <div className="inline-actions">
              <Button
                onClick={() =>
                  openAction(
                    'Installable PWA Preview',
                    'This build includes a manifest and service worker placeholder so install prompts and offline behavior can be added cleanly in the next phase.',
                  )
                }
                variant="primary"
              >
                View PWA Status
              </Button>
              <Button onClick={() => showToast('Prototype notification preview refreshed.')}>
                Refresh Preview
              </Button>
            </div>
          </div>
        </Card>

        <Card>
          <div className="stack">
            <div className="avatar-row">
              <div className="avatar-badge">120</div>
              <div>
                <strong>{currentUser.displayName}</strong>
                <p className="hero-copy">{currentUser.email}</p>
              </div>
            </div>
            <div className="page-grid page-grid--two">
              <div className="metric">
                <strong>4</strong>
                <span className="hero-copy">Active announcements</span>
              </div>
              <div className="metric">
                <strong>3</strong>
                <span className="hero-copy">Unread messages</span>
              </div>
              <div className="metric">
                <strong>1</strong>
                <span className="hero-copy">Open vote</span>
              </div>
              <div className="metric">
                <strong>2</strong>
                <span className="hero-copy">Pending alerts</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="section-title">
          <h3>Quick Actions</h3>
          <Badge tone="highlight">Mobile-ready navigation</Badge>
        </div>
        <div className="tile-grid">
          {tiles.map(([label, path]) => (
            <Link className="quick-tile" key={path} to={path}>
              <strong>{label}</strong>
              <span className="hero-copy">Open the {label.toLowerCase()} workspace.</span>
            </Link>
          ))}
        </div>
      </Card>

      <div className="page-grid page-grid--three">
        <Card>
          <div className="section-title">
            <h3>Latest Announcement</h3>
            <Badge tone="success">{announcement.category}</Badge>
          </div>
          <strong>{announcement.title}</strong>
          <p className="hero-copy">{announcement.body}</p>
        </Card>

        <Card>
          <div className="section-title">
            <h3>Upcoming Event</h3>
            <Badge tone="info">{event.date}</Badge>
          </div>
          <strong>{event.title}</strong>
          <p className="hero-copy">
            {event.time} at {event.location}
          </p>
          <p className="hero-copy">{event.description}</p>
        </Card>

        <Card>
          <div className="section-title">
            <h3>Active Vote</h3>
            <Badge tone="highlight">{vote.status}</Badge>
          </div>
          <strong>{vote.title}</strong>
          <p className="hero-copy">{vote.deadline}</p>
          <div className="inline-actions">
            <Button onClick={() => showToast('Vote preview opened.')}>Preview</Button>
            <Button onClick={() => openAction('Notifications', 'Mock member alerts are ready to connect to Firebase Cloud Messaging.')}>
              Alerts
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
