import { useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AppShell from './components/AppShell.jsx';
import Modal from './components/Modal.jsx';
import { getCurrentUser, setDemoRole } from './services/authService.js';
import LoginPage from './pages/LoginPage.jsx';
import RequestAccessPage from './pages/RequestAccessPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import AnnouncementsPage from './pages/AnnouncementsPage.jsx';
import CalendarPage from './pages/CalendarPage.jsx';
import AgendaPage from './pages/AgendaPage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import VideosPage from './pages/VideosPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import VotingPage from './pages/VotingPage.jsx';
import MessagesPage from './pages/MessagesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const routeTitles = {
  '/dashboard': 'Dashboard',
  '/announcements': 'Announcements',
  '/calendar': 'Calendar',
  '/agenda': 'Meeting Agenda',
  '/resources': 'Resources',
  '/videos': 'Videos',
  '/gallery': 'Gallery',
  '/voting': 'Voting',
  '/messages': 'Messages',
  '/contact': 'Contact',
  '/admin': 'Admin Dashboard',
};

function PrototypeLayout({ role, onRoleChange, onOpenAction, toast, currentUser }) {
  const location = useLocation();
  const pageTitle = routeTitles[location.pathname] ?? 'Altus FOP Lodge 120';

  return (
    <AppShell
      currentUser={currentUser}
      onOpenAction={onOpenAction}
      onRoleChange={onRoleChange}
      pageTitle={pageTitle}
      role={role}
      toast={toast}
    >
      <Outlet
        context={{
          currentUser,
          openAction: onOpenAction,
          role,
          showToast: toast.show,
        }}
      />
    </AppShell>
  );
}

export default function App() {
  const navigate = useNavigate();
  const [role, setRole] = useState('member');
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const [modal, setModal] = useState({ open: false, title: '', message: '' });

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, [role]);

  useEffect(() => {
    if (!toast.message) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setToast((previous) => ({ ...previous, message: '' }));
    }, 2600);

    return () => window.clearTimeout(timer);
  }, [toast]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleRoleChange = (nextRole) => {
    setDemoRole(nextRole);
    setRole(nextRole);
    setCurrentUser(getCurrentUser());
    showToast(`Prototype role switched to ${nextRole === 'admin' ? 'Admin' : 'Member'}.`);
  };

  const handleAction = (title, message, options) => {
    setModal({
      open: true,
      title,
      message,
      confirmLabel: options?.confirmLabel ?? 'Close',
      onConfirm: options?.onConfirm,
    });
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              onRequestAccess={() => navigate('/request-access')}
              onSignIn={() => {
                showToast('Signed in to the Altus FOP prototype dashboard.');
                navigate('/dashboard');
              }}
            />
          }
        />
        <Route
          path="/request-access"
          element={
            <RequestAccessPage
              onBack={() => navigate('/')}
              onSubmit={() => {
                showToast('Access request submitted. This is a prototype confirmation.');
              }}
            />
          }
        />
        <Route
          element={
            <PrototypeLayout
              currentUser={currentUser}
              onOpenAction={handleAction}
              onRoleChange={handleRoleChange}
              role={role}
              toast={toast}
            />
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/voting" element={<VotingPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
        </Route>
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>

      <Modal
        confirmLabel={modal.confirmLabel}
        isOpen={modal.open}
        message={modal.message}
        onClose={() => setModal({ open: false, title: '', message: '' })}
        onConfirm={() => {
          if (modal.onConfirm) {
            modal.onConfirm();
          }
          setModal({ open: false, title: '', message: '' });
        }}
        title={modal.title}
      />
    </>
  );
}
