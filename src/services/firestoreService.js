import { mockAnnouncements } from '../data/mockAnnouncements.js';
import { mockEvents } from '../data/mockEvents.js';
import { mockMessages } from '../data/mockMessages.js';
import { mockResources } from '../data/mockResources.js';
import { mockVideos } from '../data/mockVideos.js';
import { mockVotes } from '../data/mockVotes.js';

export async function getAnnouncements() {
  return Promise.resolve(mockAnnouncements);
}

export async function getEvents() {
  return Promise.resolve(mockEvents);
}

export async function getResources() {
  return Promise.resolve(mockResources);
}

export async function getVideos() {
  return Promise.resolve(mockVideos);
}

export async function getMessages() {
  return Promise.resolve(mockMessages);
}

export async function getVotes() {
  return Promise.resolve(mockVotes);
}

// TODO: Replace these mock resolvers with Firestore collection reads.
// TODO: Add write helpers for announcements, events, resources, messages, and votes.
// TODO: Map role-based visibility and timestamps from Firestore documents.
