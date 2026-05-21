import { useState } from 'react';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import DemoNotice from '../components/DemoNotice.jsx';
import FopLogo from '../components/FopLogo.jsx';
import { mockLogin } from '../services/authService.js';

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
