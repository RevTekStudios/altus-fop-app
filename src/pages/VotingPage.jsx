import { useOutletContext } from 'react-router-dom';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import DemoNotice from '../components/DemoNotice.jsx';
import { mockVotes } from '../data/mockVotes.js';

export default function VotingPage() {
  const { role, openAction, showToast } = useOutletContext();
  const activeVote = mockVotes[0];

  return (
    <div className="stack">
      <DemoNotice
        items={[
          'Production voting requires voter eligibility rules, audit logging, one-vote-per-member enforcement, vote locking, and decisions about anonymous vs tracked ballots.',
        ]}
        title="Voting Development Note"
      />

      <Card>
        <div className="section-title">
          <h2>Active Vote</h2>
          <Badge tone="highlight">{activeVote.status}</Badge>
        </div>
        <div className="stack">
          <strong>{activeVote.title}</strong>
          <p className="hero-copy">{activeVote.description}</p>
          <p className="hero-copy">{activeVote.deadline}</p>
          <p className="hero-copy">Eligibility: {activeVote.eligibility}</p>
          <div className="inline-actions">
            {activeVote.options.map((option) => (
              <Button key={option} onClick={() => showToast(`Mock vote recorded for "${option}".`)}>
                {option}
              </Button>
            ))}
          </div>
          <Badge tone="danger">Results locked until voting closes</Badge>
        </div>
      </Card>

      <Card>
        <div className="section-title">
          <h3>Other Vote Items</h3>
          {role === 'admin' ? (
            <div className="inline-actions">
              <Button onClick={() => openAction('Create Vote', 'Vote setup is mocked and ready for a future Firestore-backed form.')}>
                Create Vote
              </Button>
              <Button onClick={() => showToast('Vote closed in prototype preview.')}>Close Vote</Button>
              <Button onClick={() => openAction('Export Results', 'Export results is a placeholder for future admin reporting.')}>
                Export Results
              </Button>
            </div>
          ) : null}
        </div>

        {mockVotes.slice(1).map((vote) => (
          <div className="list-item" key={vote.id}>
            <strong>{vote.title}</strong>
            <p className="hero-copy">{vote.description}</p>
            <p className="hero-copy">{vote.deadline}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}
