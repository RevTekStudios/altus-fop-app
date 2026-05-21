import { mockUsers } from '../data/mockUsers.js';

let demoRole = 'member';

export async function mockLogin(email = 'demo@altusfop120.org') {
  return Promise.resolve({
    user: {
      ...mockUsers.find((user) => user.role === demoRole),
      email,
    },
    authenticated: true,
  });
}

export async function mockLogout() {
  return Promise.resolve({ success: true });
}

export function getCurrentUser() {
  const user = mockUsers.find((entry) => entry.role === demoRole) ?? mockUsers[0];

  return {
    ...user,
    lodge: 'Altus FOP Lodge 120',
  };
}

export function getCurrentRole() {
  return demoRole;
}

export function setDemoRole(role) {
  demoRole = role;
}

// TODO: Replace mockLogin/mockLogout/getCurrentUser with Firebase Auth.
// TODO: Persist auth state using onAuthStateChanged once Firebase is connected.
// TODO: Load role claims or profile roles from Firestore after authentication.
