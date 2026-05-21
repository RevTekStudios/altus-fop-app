import { useState } from 'react';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import DemoNotice from '../components/DemoNotice.jsx';
import FopLogo from '../components/FopLogo.jsx';
import { mockLogin } from '../services/authService.js';

function PreviewIcon({ children }) {
  return (
    <span aria-hidden="true" className="portal-preview__icon">
      <svg fill="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </span>
  );
}

const previewItems = [
  [
    'Announcements',
    <PreviewIcon key="announcements">
      <path
        d="M5 13.5V10.8c0-.5.4-.9.9-.9H8l5.9-2.9c.6-.3 1.3.1 1.3.8v8.4c0 .7-.7 1.1-1.3.8L8 14.1H5.9c-.5 0-.9-.4-.9-.9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="M8.2 14.1 9.4 17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M17 9.5c.9.6 1.5 1.5 1.5 2.5s-.6 1.9-1.5 2.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </PreviewIcon>,
  ],
  [
    'Calendar',
    <PreviewIcon key="calendar">
      <rect height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" width="14" x="5" y="7" />
      <path d="M8 4.5v5M16 4.5v5M5 10.5h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </PreviewIcon>,
  ],
  [
    'Agenda',
    <PreviewIcon key="agenda">
      <path
        d="M8 7h8M8 12h8M8 17h5M5.5 7h.01M5.5 12h.01M5.5 17h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </PreviewIcon>,
  ],
  [
    'Resources',
    <PreviewIcon key="resources">
      <path
        d="M7 6.5A2.5 2.5 0 0 1 9.5 4H18v14h-8.5A2.5 2.5 0 0 0 7 20.5m0-14v14m0-14A2.5 2.5 0 0 0 4.5 9H15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </PreviewIcon>,
  ],
  [
    'Gallery',
    <PreviewIcon key="gallery">
      <rect height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" width="14" x="5" y="6" />
      <path
        d="m8 15 2.5-2.5 2 2 2.5-3 2 3.5M10 10.5h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </PreviewIcon>,
  ],
  [
    'Videos',
    <PreviewIcon key="videos">
      <rect height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" width="14" x="4" y="6" />
      <path d="m11 10 4 2-4 2v-4Z" fill="currentColor" />
    </PreviewIcon>,
  ],
  [
    'Messages',
    <PreviewIcon key="messages">
      <path
        d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6A2.5 2.5 0 0 1 16.5 16H10l-4 3v-3.5A2.5 2.5 0 0 1 5 13V7.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </PreviewIcon>,
  ],
  [
    'Contact',
    <PreviewIcon key="contact">
      <path
        d="M8.5 6.5c.4-1 1.7-1.4 2.6-.8l1.4 1c.7.5 1 1.4.6 2.2l-.7 1.4a12.4 12.4 0 0 0 1.5 1.8 12.4 12.4 0 0 0 1.8 1.5l1.4-.7c.8-.4 1.8-.1 2.2.6l1 1.4c.6.9.2 2.2-.8 2.6l-1.6.6c-1 .4-2 .3-2.9-.2-2.1-1.2-4-2.7-5.7-4.4-1.7-1.7-3.2-3.6-4.4-5.7-.5-.9-.6-1.9-.2-2.9l.6-1.6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </PreviewIcon>,
  ],
];

export default function LoginPage({ onRequestAccess, onSignIn }) {
  const [form, setForm] = useState({ email: '', password: '' });

  return (
    <div className="auth-shell">
      <Card className="auth-card card--hero">
        <div className="auth-layout">
          <section className="auth-brand">
            <FopLogo showText={false} />
            <div className="auth-wordmark">
              <h1>ALTUS</h1>
              <p className="auth-wordmark__subhead">FOP LODGE 120</p>
              <p className="auth-wordmark__portal">MEMBER PORTAL</p>
            </div>
            <div className="auth-divider">
              <span />
              <strong>PROTECTING THOSE WHO PROTECT US</strong>
              <span />
            </div>
            <div className="portal-preview-grid">
              {previewItems.map(([label, icon]) => (
                <div className="portal-preview" key={label}>
                  {icon}
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
            <p className="auth-values">STRENGTH • UNITY • BROTHERHOOD</p>
          </section>

          <section className="auth-panel">
            <div className="phone-frame">
              <div className="phone-frame__screen">
                <div className="auth-panel__header">
                  <FopLogo showText={false} size="small" />
                  <div className="auth-panel__titles">
                    <strong>ALTUS</strong>
                    <span>FOP LODGE 120</span>
                    <small>Member Portal</small>
                  </div>
                </div>

                <form
                  className="auth-form auth-form--card"
                  onSubmit={async (event) => {
                    event.preventDefault();
                    await mockLogin(form.email);
                    onSignIn();
                  }}
                >
                  <label className="auth-input-row">
                    <span className="auth-input-row__icon" aria-hidden="true">
                      <svg fill="none" viewBox="0 0 24 24">
                        <path
                          d="M4.5 7.5h15a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-7a1 1 0 0 1 1-1Z"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="1.7"
                        />
                        <path
                          d="m5.5 9 6.5 4.5L18.5 9"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.7"
                        />
                      </svg>
                    </span>
                    <input
                      className="input input--light"
                      onChange={(event) => setForm((previous) => ({ ...previous, email: event.target.value }))}
                      placeholder="Email"
                      type="email"
                      value={form.email}
                    />
                  </label>
                  <label className="auth-input-row">
                    <span className="auth-input-row__icon" aria-hidden="true">
                      <svg fill="none" viewBox="0 0 24 24">
                        <path
                          d="M8 10V8a4 4 0 1 1 8 0v2M7 10h10a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7a1 1 0 0 1 1-1Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.7"
                        />
                      </svg>
                    </span>
                    <input
                      className="input input--light"
                      onChange={(event) =>
                        setForm((previous) => ({ ...previous, password: event.target.value }))
                      }
                      placeholder="Password"
                      type="password"
                      value={form.password}
                    />
                    <span className="auth-input-row__icon auth-input-row__icon--end" aria-hidden="true">
                      <svg fill="none" viewBox="0 0 24 24">
                        <path
                          d="M2.5 12s3.5-5.5 9.5-5.5S21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.7"
                        />
                        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.7" />
                      </svg>
                    </span>
                  </label>
                  <Button className="auth-submit" type="submit" variant="primary">
                    Sign In
                  </Button>
                  <button className="auth-link" type="button">
                    Forgot Password?
                  </button>
                  <Button className="auth-request" onClick={onRequestAccess} variant="secondary">
                    Request Access
                  </Button>
                </form>

                <div className="auth-panel__building" aria-hidden="true">
                  <div className="building building--left" />
                  <div className="building building--center">
                    <div className="building__sign">ALTUS FOP LODGE 120</div>
                  </div>
                  <div className="building building--right" />
                  <span className="flag flag--one" />
                  <span className="flag flag--two" />
                </div>
              </div>
            </div>

            <DemoNotice
              items={[
                'Login is visual only for this prototype and does not validate credentials.',
                'Firebase Auth will replace this flow once the Altus FOP project is created.',
              ]}
              title="Prototype Preview"
            />
          </section>
        </div>
      </Card>
    </div>
  );
}
