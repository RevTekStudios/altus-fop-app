import { useOutletContext } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import DemoNotice from '../components/DemoNotice.jsx';
import { mockEvents } from '../data/mockEvents.js';

export default function CalendarPage() {
  const { role, openAction, showToast } = useOutletContext();

  return (
    <div className="stack">
      <DemoNotice
        items={[
          'Calendar records are mocked now and can later map directly to a Firestore `events` collection.',
        ]}
        title="Calendar Prototype"
      />

      <Card>
        <div className="section-title">
          <h2>Calendar</h2>
          {role === 'admin' ? (
            <div className="inline-actions">
              <Button onClick={() => openAction('Add Event', 'This will become a Firestore event creation form.')}>
                Add Event
              </Button>
              <Button onClick={() => showToast('Mock event notification sent to members.')} variant="primary">
                Notify Members
              </Button>
            </div>
          ) : null}
        </div>

        {mockEvents.map((event) => (
          <div className="list-item" key={event.id}>
            <div className="section-title">
              <div>
                <strong>{event.title}</strong>
                <p className="hero-copy">
                  {event.date} at {event.time}
                </p>
              </div>
              <span className="hero-copy">{event.location}</span>
            </div>
            <p className="hero-copy">{event.description}</p>
            {role === 'admin' ? (
              <div className="inline-actions">
                <Button onClick={() => openAction('Edit Event', `Mock editing for "${event.title}".`)}>Edit Event</Button>
              </div>
            ) : null}
          </div>
        ))}
      </Card>
    </div>
  );
}
