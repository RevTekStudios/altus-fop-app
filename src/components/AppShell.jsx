import Sidebar from './Sidebar.jsx';
import TopBar from './TopBar.jsx';
import MobileNav from './MobileNav.jsx';

export default function AppShell({
  children,
  currentUser,
  onOpenAction,
  onRoleChange,
  pageTitle,
  role,
  toast,
}) {
  return (
    <div className="app-shell">
      <Sidebar role={role} />
      <div className="app-shell__main">
        <TopBar
          currentUser={currentUser}
          onOpenAction={onOpenAction}
          onRoleChange={onRoleChange}
          pageTitle={pageTitle}
          role={role}
        />
        {toast.message ? <div className={`toast toast--${toast.type}`}>{toast.message}</div> : null}
        <main className="page-content">{children}</main>
        <MobileNav />
      </div>
    </div>
  );
}
