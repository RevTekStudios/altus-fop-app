import { NavLink } from 'react-router-dom';

function NavIcon({ children }) {
  return (
    <span aria-hidden="true" className="mobile-nav__icon">
      <svg fill="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </span>
  );
}

const navItems = [
  [
    'Dashboard',
    '/dashboard',
    <NavIcon key="dashboard">
      <path
        d="M4.5 10.5 12 4l7.5 6.5V19a1 1 0 0 1-1 1h-4.5v-5h-4v5H5.5a1 1 0 0 1-1-1v-8.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </NavIcon>,
  ],
  [
    'Announcements',
    '/announcements',
    <NavIcon key="announcements">
      <path
        d="M5 13.5V10.8c0-.5.4-.9.9-.9H8l5.9-2.9c.6-.3 1.3.1 1.3.8v8.4c0 .7-.7 1.1-1.3.8L8 14.1H5.9c-.5 0-.9-.4-.9-.9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="M8.2 14.1 9.4 17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M17 9.5c.9.6 1.5 1.5 1.5 2.5s-.6 1.9-1.5 2.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </NavIcon>,
  ],
  [
    'Calendar',
    '/calendar',
    <NavIcon key="calendar">
      <rect height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" width="14" x="5" y="7" />
      <path d="M8 4.5v5M16 4.5v5M5 10.5h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </NavIcon>,
  ],
  [
    'Resources',
    '/resources',
    <NavIcon key="resources">
      <path
        d="M7 6.5A2.5 2.5 0 0 1 9.5 4H18v14h-8.5A2.5 2.5 0 0 0 7 20.5m0-14v14m0-14A2.5 2.5 0 0 0 4.5 9H15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </NavIcon>,
  ],
  [
    'Agenda',
    '/agenda',
    <NavIcon key="agenda">
      <path
        d="M8 7h8M8 12h8M8 17h5M5.5 7h.01M5.5 12h.01M5.5 17h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </NavIcon>,
  ],
  [
    'Voting',
    '/voting',
    <NavIcon key="voting">
      <path
        d="M7 8h10l-1 11H8L7 8Zm2-3h6l1 3H8l1-3Zm1.5 7 1.5 1.5 3-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </NavIcon>,
  ],
  [
    'Messages',
    '/messages',
    <NavIcon key="messages">
      <path
        d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6A2.5 2.5 0 0 1 16.5 16H10l-4 3v-3.5A2.5 2.5 0 0 1 5 13V7.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </NavIcon>,
  ],
];

export default function MobileNav() {
  return (
    <nav aria-label="Mobile navigation" className="mobile-nav">
      {navItems.map(([label, path, icon]) => (
        <NavLink
          aria-label={label}
          className={({ isActive }) => `mobile-nav__link ${isActive ? 'is-active' : ''}`.trim()}
          key={path}
          to={path}
        >
          {icon}
        </NavLink>
      ))}
    </nav>
  );
}
