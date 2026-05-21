import { NavLink } from 'react-router-dom';

const navItems = [
  ['Home', '/dashboard'],
  ['News', '/announcements'],
  ['Calendar', '/calendar'],
  ['Vote', '/voting'],
  ['More', '/contact'],
];

export default function MobileNav() {
  return (
    <nav className="mobile-nav">
      {navItems.map(([label, path]) => (
        <NavLink
          className={({ isActive }) => `mobile-nav__link ${isActive ? 'is-active' : ''}`.trim()}
          key={path}
          to={path}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
