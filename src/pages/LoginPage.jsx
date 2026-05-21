import { useState } from 'react';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import DemoNotice from '../components/DemoNotice.jsx';
import FopLogo from '../components/FopLogo.jsx';
import { mockLogin } from '../services/authService.js';

const trustItems = [
  {
    code: '120',
    title: 'Lodge Communications',
    description: 'Announcements, meeting updates, and lodge notices in one secure member space.',
  },
  {
    code: 'FOP',
    title: 'Resources And Voting',
    description: 'A polished prototype for files, ballots, and future Firebase-backed workflows.',
  },
  {
    code: 'OK',
    title: 'Professional Mobile UX',
    description: 'Designed to feel official, trustworthy, and easy to use on phones or desktops.',
  },
];

export default function LoginPage({ onRequestAccess, onSignIn }) {
  const [form, setForm] = useState({ email: '', password: '' });

  return (
    <div className="auth-shell">
      <Card className="auth-card card--hero">
        <div className="stack">
          <FopLogo />
          <div className="stack auth-panel__lead">
            <h1 className="hero-title">Altus FOP Lodge 120 Member Portal</h1>
            <p className="hero-copy">
              A mobile-first prototype foundation for announcements, meetings, resources, voting,
              and member communication.
            </p>
            <div className="auth-trust-list">
              {trustItems.map((item) => (
                <div className="auth-trust-item" key={item.title}>
                  <span className="auth-trust-item__seal">{item.code}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            className="auth-form"
            onSubmit={async (event) => {
              event.preventDefault();
              await mockLogin(form.email);
              onSignIn();
            }}
          >
            <input
              className="input"
              onChange={(event) => setForm((previous) => ({ ...previous, email: event.target.value }))}
              placeholder="Email"
              type="email"
              value={form.email}
            />
            <input
              className="input"
              onChange={(event) =>
                setForm((previous) => ({ ...previous, password: event.target.value }))
              }
              placeholder="Password"
              type="password"
              value={form.password}
            />
            <div className="inline-actions">
              <Button type="submit" variant="primary">
                Sign In
              </Button>
              <Button onClick={onRequestAccess} variant="secondary">
                Request Access
              </Button>
            </div>
          </form>

          <DemoNotice
            items={[
              'Login is visual only for this prototype and does not validate credentials.',
              'Firebase Auth will replace this flow once the Altus FOP project is created.',
            ]}
            title="Authentication Not Connected"
          />
        </div>
      </Card>
    </div>
  );
}
