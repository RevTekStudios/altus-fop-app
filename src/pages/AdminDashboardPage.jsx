import { Navigate, useOutletContext } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import DemoNotice from '../components/DemoNotice.jsx';

const adminStats = [
  ['Total members', '128'],
  ['Pending access requests', '7'],
  ['Active announcements', '4'],
  ['Upcoming events', '4'],
  ['Open votes', '1'],
  ['Notifications sent', '18'],
];

export default function AdminDashboardPage() {
  const { role, openAction, showToast } = useOutletContext();

  if (role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="stack">
      <DemoNotice
        items={[
          'This admin area is a prototype preview only and does not enforce real authentication yet.',
        ]}
        title="Admin Preview"
      />

      <div className="page-grid page-grid--three">
        {adminStats.map(([label, value]) => (
          <Card key={label}>
            <div className="metric">
              <strong>{value}</strong>
              <span className="hero-copy">{label}</span>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <div className="section-title">
          <h2>Admin Actions</h2>
        </div>
        <div className="tile-grid">
          <Button onClick={() => openAction('Create Announcement', 'Prototype action ready for future Firestore write flow.')}>
            Create Announcement
          </Button>
          <Button onClick={() => openAction('Add Calendar Event', 'Prototype action ready for event creation later.')}>
            Add Calendar Event
          </Button>
          <Button onClick={() => openAction('Upload Resource', 'Prototype action ready for Storage integration.')}>
            Upload Resource
          </Button>
          <Button onClick={() => openAction('Create Vote', 'Prototype action ready for secure voting integration.')}>
            Create Vote
          </Button>
          <Button onClick={() => showToast('Mock admin notification sent.')}>Send Notification</Button>
          <Button onClick={() => openAction('Manage Members', 'Member management will be backed by Firestore and Auth later.')} variant="primary">
            Manage Members
          </Button>
        </div>
      </Card>
    </div>
  );
}
