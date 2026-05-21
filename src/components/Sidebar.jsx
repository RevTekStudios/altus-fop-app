import { NavLink } from 'react-router-dom';
import FopLogo from './FopLogo.jsx';

const navItems = [
  ['Dashboard', '/dashboard'],
  ['Announcements', '/announcements'],
  ['Calendar', '/calendar'],
  ['Agenda', '/agenda'],
  ['Resources', '/resources'],
  ['Videos', '/videos'],
  ['Gallery', '/gallery'],
  ['Voting', '/voting'],
  ['Messages', '/messages'],
  ['Contact', '/contact'],
  ['Admin', '/admin'],
];

export default function Sidebar({ role }) {
  return (
    <aside className="sidebar">
      <FopLogo size="small" />
      <nav className="sidebar__nav">
        {navItems
          .filter(([label]) => role === 'admin' || label !== 'Admin')
          .map(([label, path]) => (
            <NavLink
              className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`.trim()}
              key={path}
              to={path}
            >
              <span>{label}</span>
            </NavLink>
          ))}
      </nav>
    </aside>
  );
}
