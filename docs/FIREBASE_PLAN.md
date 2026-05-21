# Firebase Integration Plan

This Phase 1 app is intentionally mocked so Altus FOP Lodge 120 can review the portal experience before a live Firebase project is created.

## Proposed Services

- Firebase Auth for member and admin sign-in
- Firestore for content, permissions, and activity data
- Firebase Storage for agenda files, documents, and gallery uploads
- Firebase Cloud Messaging for push notifications

## Proposed Collections

```text
users/{uid}
  displayName
  email
  phone
  role
  status
  createdAt
  lastLoginAt

accessRequests/{requestId}
  fullName
  email
  phone
  agency
  notes
  status
  submittedAt
  reviewedBy
  reviewedAt

announcements/{announcementId}
  title
  body
  category
  pinned
  visibleTo
  createdBy
  createdAt
  updatedAt
  sendNotification

events/{eventId}
  title
  description
  location
  startAt
  endAt
  createdBy
  notifyMembers

agendas/{agendaId}
  meetingDate
  title
  items[]
  attachments[]
  createdBy
  createdAt

resources/{resourceId}
  title
  category
  fileUrl
  filePath
  visibleTo
  uploadedBy
  uploadedAt

videos/{videoId}
  title
  description
  videoUrl
  category
  createdBy
  createdAt
  notifyMembers

gallery/{imageId}
  title
  album
  imageUrl
  filePath
  uploadedBy
  uploadedAt

votes/{voteId}
  title
  description
  options[]
  status
  opensAt
  closesAt
  eligibleRoles[]
  anonymous
  createdBy
  createdAt

votes/{voteId}/ballots/{uid or ballotId}
  uid
  selectedOption
  submittedAt

messages/{messageId}
  subject
  body
  recipients[]
  senderId
  sentAt
  notificationSent

notifications/{notificationId}
  title
  body
  type
  target
  sentBy
  sentAt
  status

settings/app
  lodgeName
  lodgeNumber
  theme
  notificationDefaults
  contactInfo
```

## Suggested Next Integration Steps

1. Create the Firebase project for Altus FOP Lodge 120.
2. Add environment-based Firebase config values to the Vite app.
3. Connect Firebase Auth for login and admin/member role handling.
4. Replace mock Firestore service reads with real collection queries.
5. Replace upload placeholders with Firebase Storage.
6. Add Firebase Cloud Messaging for foreground and background notifications.
7. Add Firestore security rules for members, admins, and access requests.
8. Define an audit approach for voting, messaging, and notification delivery.
