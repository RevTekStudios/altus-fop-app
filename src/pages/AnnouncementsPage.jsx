import { useOutletContext } from 'react-router-dom';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import DemoNotice from '../components/DemoNotice.jsx';
import { mockAnnouncements } from '../data/mockAnnouncements.js';

export default function AnnouncementsPage() {
  const { role, openAction, showToast } = useOutletContext();

  return (
    <div className="stack">
      <DemoNotice
        items={[
          'Announcements are using mock content through a Firestore service abstraction.',
          'Admin actions below are visual placeholders until Firestore write access is connected.',
        ]}
        title="Firestore Mock"
      />

      <Card>
        <div className="section-title">
          <h2>Announcements</h2>
          {role === 'admin' ? (
            <div className="inline-actions">
              <Button
                onClick={() =>
                  openAction('New Announcement', 'This prototype action will become a Firestore create flow later.')
                }
                variant="primary"
              >
                New Announcement
              </Button>
              <Button onClick={() => showToast('Mock push notification sent for announcements.')}>
                Send Push Notification
              </Button>
            </div>
          ) : null}
        </div>

        {mockAnnouncements.map((announcement) => (
          <div className="list-item" key={announcement.id}>
            <div className="section-title">
              <div>
                <strong>{announcement.title}</strong>
                <div className="meta-row">
                  <span className="hero-copy">{announcement.date}</span>
                  <span className="hero-copy">By {announcement.author}</span>
                </div>
              </div>
              <div className="meta-row">
                <Badge tone="info">{announcement.category}</Badge>
                {announcement.pinned ? <Badge tone="highlight">Pinned</Badge> : null}
                {announcement.isNew ? <Badge tone="success">New</Badge> : null}
              </div>
            </div>
            <p className="hero-copy">{announcement.body}</p>
            {role === 'admin' ? (
              <div className="inline-actions">
                <Button onClick={() => openAction('Edit Announcement', `Editing "${announcement.title}" is mocked for this phase.`)}>
                  Edit
                </Button>
                <Button onClick={() => showToast(`Mock member notification sent for "${announcement.title}".`)}>
                  Notify Members
                </Button>
              </div>
            ) : null}
          </div>
        ))}
      </Card>
    </div>
  );
}
