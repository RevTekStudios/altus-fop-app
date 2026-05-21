import { Link, useOutletContext } from 'react-router-dom';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import { mockAnnouncements } from '../data/mockAnnouncements.js';
import { mockEvents } from '../data/mockEvents.js';
import { mockVotes } from '../data/mockVotes.js';
import fopLogo from '../assets/reference/FOP_Logo.png';

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
  const event = mockEvents[0];
  const vote = mockVotes[0];
  const orderedAnnouncements = [...mockAnnouncements].sort((a, b) => {
    if (a.isNew !== b.isNew) return a.isNew ? -1 : 1;
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return 0;
  });
  const latestAnnouncement = orderedAnnouncements[0];
  const recentAnnouncements = orderedAnnouncements.slice(1, 4);

  return (
    <div className="stack dashboard-feed">
      <Card className="dashboard-banner">
        <div className="dashboard-banner__image" />
        <div className="dashboard-banner__overlay">
          <div className="dashboard-banner__brand">
            <img alt="Altus FOP badge" src={fopLogo} />
          </div>
          <div className="dashboard-banner__message">
            <p>STAY INFORMED.</p>
            <p>STAY CONNECTED.</p>
            <p>STAY STRONG.</p>
          </div>
        </div>
      </Card>

      <Card className="dashboard-section">
        <div className="section-title section-title--dashboard">
          <h3>Latest Announcement</h3>
          <Link className="dashboard-link" to="/announcements">
            View All
          </Link>
        </div>
        <div className="stack dashboard-latest">
          <strong>{latestAnnouncement.title}</strong>
          <p className="hero-copy">
            {latestAnnouncement.body}
          </p>
          <p className="hero-copy">
            {latestAnnouncement.date} • {latestAnnouncement.author}
          </p>
        </div>
      </Card>

      <Card className="dashboard-section">
        <div className="section-title section-title--dashboard">
          <h3>Recent Announcements</h3>
          <Badge tone="highlight">{orderedAnnouncements.filter((item) => item.isNew).length} New</Badge>
        </div>
        <div className="dashboard-list">
          {recentAnnouncements.map((announcement) => (
            <Link className="dashboard-list-item" key={announcement.id} to="/announcements">
              <div className="dashboard-list-item__icon" aria-hidden="true">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 13.5V10.8c0-.5.4-.9.9-.9H8l5.9-2.9c.6-.3 1.3.1 1.3.8v8.4c0 .7-.7 1.1-1.3.8L8 14.1H5.9c-.5 0-.9-.4-.9-.9Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <div className="dashboard-list-item__body">
                <strong>{announcement.title}</strong>
                <span>{announcement.date}</span>
              </div>
              <span className="dashboard-list-item__chevron" aria-hidden="true">›</span>
            </Link>
          ))}
        </div>
      </Card>

      <Card>
        <div className="section-title section-title--dashboard">
          <h3>Quick Actions</h3>
          <Badge tone="highlight">Portal</Badge>
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

      <div className="page-grid page-grid--two">
        <Card className="dashboard-section">
          <div className="section-title section-title--dashboard">
            <h3>Upcoming Event</h3>
            <Badge tone="info">{event.date}</Badge>
          </div>
          <strong>{event.title}</strong>
          <p className="hero-copy">
            {event.time} at {event.location}
          </p>
          <p className="hero-copy">{event.description}</p>
        </Card>

        <Card className="dashboard-section">
          <div className="section-title section-title--dashboard">
            <h3>Open Vote</h3>
            <Badge tone="highlight">{vote.status}</Badge>
          </div>
          <strong>{vote.title}</strong>
          <p className="hero-copy">{vote.deadline}</p>
          <div className="inline-actions">
            <Button onClick={() => showToast('Vote preview opened.')}>Preview</Button>
            <Button
              onClick={() =>
                openAction('Notifications', 'Mock member alerts are ready to connect to Firebase Cloud Messaging.')
              }
            >
              Alerts
            </Button>
          </div>
        </Card>
      </div>

      <Card className="dashboard-section">
        <div className="avatar-row">
          <div className="avatar-badge">120</div>
          <div>
            <strong>{currentUser.displayName}</strong>
            <p className="hero-copy">{currentUser.email}</p>
          </div>
        </div>
        <div className="page-grid page-grid--two dashboard-metrics">
          <div className="metric">
            <strong>{orderedAnnouncements.length}</strong>
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
            <strong>{role === 'admin' ? 'Admin' : 'Member'}</strong>
            <span className="hero-copy">Status</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
