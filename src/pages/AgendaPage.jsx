import { useOutletContext } from 'react-router-dom';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

const agendaItems = [
  'Call to order',
  'Roll call',
  'Reading of minutes',
  'Treasurer report',
  'Committee reports',
  'Old business',
  'New business',
  'Good of the order',
  'Adjournment',
];

const attachments = ['Agenda PDF', 'Treasurer report', 'Minutes'];

export default function AgendaPage() {
  const { role, openAction, showToast } = useOutletContext();

  return (
    <div className="stack">
      <Card>
        <div className="section-title">
          <h2>Monthly Meeting Agenda</h2>
          <Badge tone="highlight">May 2026</Badge>
        </div>
        <div className="page-grid page-grid--two">
          <Card>
            <div className="stack">
              {agendaItems.map((item, index) => (
                <div className="meta-row" key={item}>
                  <Badge tone="info">{index + 1}</Badge>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div className="stack">
              <h3>Attachments</h3>
              {attachments.map((item) => (
                <div className="section-title" key={item}>
                  <span>{item}</span>
                  <Button onClick={() => showToast(`${item} opened as a prototype preview.`)}>Open</Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {role === 'admin' ? (
          <div className="inline-actions" style={{ marginTop: '1rem' }}>
            <Button onClick={() => openAction('Upload Agenda', 'Agenda upload is mocked until Firebase Storage is connected.')}>
              Upload Agenda
            </Button>
            <Button onClick={() => openAction('Add Agenda Item', 'Agenda item editing is mocked for the prototype.')}>
              Add Agenda Item
            </Button>
            <Button onClick={() => openAction('Attach File', 'Attachments will route through Firebase Storage later.')} variant="primary">
              Attach File
            </Button>
          </div>
        ) : null}
      </Card>
    </div>
  );
}
