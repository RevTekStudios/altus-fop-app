# Altus FOP Lodge 120 Member Portal

Phase 1 prototype foundation for a polished, mobile-first Progressive Web App experience built specifically for Altus FOP Lodge 120.

## What This Is

- React + Vite prototype app
- Visual login only
- Firestore-backed sections represented with mock data
- Firebase-ready service abstraction files for Auth, Firestore, Storage, and Notifications
- Installable PWA foundation with a manifest and placeholder service worker

## What Is Mocked

- Authentication and role access
- Announcements, events, resources, videos, votes, and messages
- Admin-only actions
- Push notifications
- File uploads and downloads
- Voting persistence and message persistence

## Project Goals in This Phase

- Demonstrate the Altus FOP Lodge 120 portal experience
- Preserve a clean project structure for later Firebase integration
- Avoid live credentials or backend dependencies until the Firebase project exists

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Main Future Integration Steps

1. Create the Firebase project.
2. Add Firebase config.
3. Enable Auth.
4. Enable Firestore.
5. Enable Storage.
6. Configure Firebase Cloud Messaging.
7. Replace mock service functions with real Firebase calls.
8. Add Firestore security rules.
9. Deploy as a PWA.

## Prototype Notes

- Login routes directly into the dashboard and does not validate credentials.
- Member/Admin switching is a prototype-only UI role toggle.
- All complex actions open mock modals or show fake success states.
- The proposed Firestore shape is documented in [docs/FIREBASE_PLAN.md](/D:/RevTek%20Studios/altus-fop-app/docs/FIREBASE_PLAN.md).
