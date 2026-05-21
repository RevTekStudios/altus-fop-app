import { Link, useOutletContext } from 'react-router-dom';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import { mockAnnouncements } from '../data/mockAnnouncements.js';
import { mockEvents } from '../data/mockEvents.js';
import { mockVotes } from '../data/mockVotes.js';

function TileIcon({ children }) {
  return (
    <span aria-hidden="true" className="quick-tile__icon">
      <svg fill="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </span>
  );
}

const tiles = [
  [
    'Announcements',
    '/announcements',
    <TileIcon key="announcements">
      <path
        d="M5 13.5V10.8c0-.5.4-.9.9-.9H8l5.9-2.9c.6-.3 1.3.1 1.3.8v8.4c0 .7-.7 1.1-1.3.8L8 14.1H5.9c-.5 0-.9-.4-.9-.9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="M8.2 14.1 9.4 17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M17 9.5c.9.6 1.5 1.5 1.5 2.5s-.6 1.9-1.5 2.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </TileIcon>,
  ],
  [
    'Calendar',
    '/calendar',
    <TileIcon key="calendar">
      <rect height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" width="14" x="5" y="7" />
      <path d="M8 4.5v5M16 4.5v5M5 10.5h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </TileIcon>,
  ],
  [
    'Agenda',
    '/agenda',
    <TileIcon key="agenda">
      <path
        d="M8 7h8M8 12h8M8 17h5M5.5 7h.01M5.5 12h.01M5.5 17h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </TileIcon>,
  ],
  [
    'Resources',
    '/resources',
    <TileIcon key="resources">
      <path
        d="M7 6.5A2.5 2.5 0 0 1 9.5 4H18v14h-8.5A2.5 2.5 0 0 0 7 20.5m0-14v14m0-14A2.5 2.5 0 0 0 4.5 9H15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </TileIcon>,
  ],
  [
    'Videos',
    '/videos',
    <TileIcon key="videos">
      <rect height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" width="14" x="4" y="6" />
      <path d="m11 10 4 2-4 2v-4Z" fill="currentColor" />
    </TileIcon>,
  ],
  [
    'Gallery',
    '/gallery',
    <TileIcon key="gallery">
      <rect height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" width="14" x="5" y="6" />
      <path
        d="m8 15 2.5-2.5 2 2 2.5-3 2 3.5M10 10.5h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </TileIcon>,
  ],
  [
    'Voting',
    '/voting',
    <TileIcon key="voting">
      <path
        d="M7 8h10l-1 11H8L7 8Zm2-3h6l1 3H8l1-3Zm1.5 7 1.5 1.5 3-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </TileIcon>,
  ],
  [
    'Messages',
    '/messages',
    <TileIcon key="messages">
      <path
        d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6A2.5 2.5 0 0 1 16.5 16H10l-4 3v-3.5A2.5 2.5 0 0 1 5 13V7.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </TileIcon>,
  ],
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
          {tiles.map(([label, path, icon]) => (
            <Link className="quick-tile" key={path} to={path}>
              {icon}
              <strong>{label}</strong>
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
