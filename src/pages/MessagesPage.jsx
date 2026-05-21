import { useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import DemoNotice from '../components/DemoNotice.jsx';
import { mockMessages } from '../data/mockMessages.js';

export default function MessagesPage() {
  const { role, openAction, showToast } = useOutletContext();
  const [selectedId, setSelectedId] = useState(mockMessages[0].id);
  const selected = useMemo(
    () => mockMessages.find((message) => message.id === selectedId) ?? mockMessages[0],
    [selectedId],
  );

  return (
    <div className="stack">
      <DemoNotice
        items={[
          'Production messaging requires database-backed message storage, notification routing, permissions, moderation tools, and retention settings.',
        ]}
        title="Messaging Development Note"
      />

      <div className="split-panel">
        <Card>
          <div className="section-title">
            <h2>Inbox</h2>
            {role === 'admin' ? (
              <div className="inline-actions">
                <Button onClick={() => openAction('Send Message', 'Compose flow is mocked for the prototype.')}>
                  Send Message
                </Button>
                <Button onClick={() => openAction('Select Recipients', 'Recipient targeting will be Firestore-backed later.')}>
                  Select Recipients
                </Button>
              </div>
            ) : null}
          </div>

          {mockMessages.map((message) => (
            <button
              className="list-item"
              key={message.id}
              onClick={() => setSelectedId(message.id)}
              style={{
                background: 'transparent',
                border: 0,
                color: 'inherit',
                cursor: 'pointer',
                textAlign: 'left',
              }}
              type="button"
            >
              <div className="section-title">
                <strong>{message.subject}</strong>
                {message.unread ? <Badge tone="highlight">Unread</Badge> : null}
              </div>
              <p className="hero-copy">{message.preview}</p>
              <p className="hero-copy">{message.timestamp}</p>
            </button>
          ))}
        </Card>

        <Card>
          <div className="stack">
            <div className="section-title">
              <h3>{selected.subject}</h3>
              <Badge tone="info">{selected.sender}</Badge>
            </div>
            <p className="hero-copy">{selected.timestamp}</p>
            <p>
              {selected.preview} This panel represents the future message detail view where
              Firestore-backed threads, attachments, and notification delivery statuses will be
              shown.
            </p>
            <div className="inline-actions">
              <Button onClick={() => showToast(`Reply preview opened for "${selected.subject}".`)}>
                Reply
              </Button>
              {role === 'admin' ? (
                <Button onClick={() => showToast('Mock notification sent to selected recipients.')} variant="primary">
                  Send Notification
                </Button>
              ) : null}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
