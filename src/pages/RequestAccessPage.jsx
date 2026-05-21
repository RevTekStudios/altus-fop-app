import { useState } from 'react';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

export default function RequestAccessPage({ onBack, onSubmit }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    agency: '',
    email: '',
    fullName: '',
    notes: '',
    phone: '',
  });

  const handleChange = (field) => (event) => {
    setForm((previous) => ({ ...previous, [field]: event.target.value }));
  };

  return (
    <div className="auth-shell">
      <Card className="auth-card">
        <div className="stack">
          <div>
            <p className="eyebrow">Altus FOP Lodge 120</p>
            <h1>Request Member Portal Access</h1>
            <p className="hero-copy">
              Submit a prototype access request to demonstrate the future onboarding flow.
            </p>
          </div>

          <form
            className="form-grid"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
              onSubmit(form);
            }}
          >
            <input className="input" onChange={handleChange('fullName')} placeholder="Full name" />
            <input className="input" onChange={handleChange('email')} placeholder="Email" type="email" />
            <input className="input" onChange={handleChange('phone')} placeholder="Phone" />
            <input className="input" onChange={handleChange('agency')} placeholder="Agency / department" />
            <textarea className="textarea" onChange={handleChange('notes')} placeholder="Notes" />
            <div className="inline-actions">
              <Button type="submit" variant="primary">
                Submit Request
              </Button>
              <Button onClick={onBack} variant="secondary">
                Back to Login
              </Button>
            </div>
          </form>

          {submitted ? (
            <Card>
              <strong>Prototype success</strong>
              <p className="hero-copy">
                Your request has been queued visually. In production this form will create an
                `accessRequests` record in Firestore for admin review.
              </p>
            </Card>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
