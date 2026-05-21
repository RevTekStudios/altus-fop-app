import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

export default function NotFoundPage() {
  return (
    <div className="auth-shell">
      <Card className="auth-card">
        <div className="stack">
          <h1>Page Not Found</h1>
          <p className="hero-copy">The requested page is not part of this prototype route map.</p>
          <Link to="/dashboard">
            <Button variant="primary">Return to Dashboard</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
