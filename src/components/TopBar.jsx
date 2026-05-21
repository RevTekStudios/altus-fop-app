import Badge from './Badge.jsx';
import Button from './Button.jsx';

export default function TopBar({ currentUser, onOpenAction, onRoleChange, pageTitle, role }) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Altus FOP Lodge 120</p>
        <h1>{pageTitle}</h1>
      </div>

      <div className="topbar__actions">
        <button
          aria-label="Open notifications"
          className="icon-button"
          onClick={() =>
            onOpenAction(
              'Mock Notifications',
              'Push notifications are represented in this prototype. Firebase Cloud Messaging will plug into this action later.',
            )
          }
          type="button"
        >
          <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
            <path
              d="M12 4a4 4 0 0 0-4 4v2.1c0 .7-.2 1.3-.6 1.8L6 13.8V15h12v-1.2l-1.4-1.9c-.4-.5-.6-1.1-.6-1.8V8a4 4 0 0 0-4-4Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <path
              d="M10 18a2 2 0 0 0 4 0"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
        </button>

        <Badge tone="highlight">{currentUser.displayName}</Badge>

        <div aria-label="Demo role toggle" className="role-toggle" role="group">
          <Button
            className={role === 'member' ? 'is-selected' : ''}
            onClick={() => onRoleChange('member')}
            variant="ghost"
          >
            Member
          </Button>
          <Button
            className={role === 'admin' ? 'is-selected' : ''}
            onClick={() => onRoleChange('admin')}
            variant="ghost"
          >
            Admin
          </Button>
        </div>
      </div>
    </header>
  );
}
