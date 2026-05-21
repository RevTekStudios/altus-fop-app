export const mockVotes = [
  {
    id: 'vote-1',
    title: 'Approve May Meeting Minutes?',
    description: 'Please review the posted minutes before casting your vote.',
    options: ['Approve', 'Needs Revision'],
    deadline: 'Closes May 30, 2026 at 11:59 PM',
    status: 'Active',
    eligibility: 'All active members in good standing',
  },
  {
    id: 'vote-2',
    title: 'Contract Review Poll',
    description: 'Member pulse check on priority contract topics for the next board discussion.',
    options: ['Benefits', 'Scheduling', 'Equipment'],
    deadline: 'Closed May 14, 2026',
    status: 'Closed',
    eligibility: 'Member advisory poll',
  },
  {
    id: 'vote-3',
    title: 'Community Donation Vote',
    description: 'Select the outreach cause the lodge should support next quarter.',
    options: ['Youth Sports', 'Officer Family Relief', 'School Supplies'],
    deadline: 'Opens June 4, 2026',
    status: 'Scheduled',
    eligibility: 'All members',
  },
];
