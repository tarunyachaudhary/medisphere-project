export const documents = [
  { id: 1, name: "Passport", date: "10 May 2025", status: "Verified" },
  { id: 2, name: "10th Marksheet", date: "10 May 2025", status: "Verified" },
  { id: 3, name: "12th Marksheet", date: "11 May 2025", status: "Verified" },
  { id: 4, name: "NEET Scorecard", date: "11 May 2025", status: "Pending" },
  { id: 5, name: "Passport Size Photo", date: "12 May 2025", status: "Verified" },
];

export const applications = [
  {
    id: 1,
    university: "Kazan Federal University",
    city: "Kazan, Russia",
    appliedOn: "10 May 2025",
    status: "In Review",
    step: 1, // index of current step (0-based)
  },
  {
    id: 2,
    university: "Bashkir State Medical University",
    city: "Ufa, Russia",
    appliedOn: "15 May 2025",
    status: "Document Pending",
    step: 0,
  },
];

export const applicationSteps = [
  "Application Submitted",
  "Under Review",
  "University Response",
  "Offer Letter",
  "Admission Confirmed",
];

export const reminders = [
  { id: 1, title: "Counselling Session", date: "24 May 2025, 11:00 AM" },
  { id: 2, title: "Document Submission", date: "28 May 2025" },
  { id: 3, title: "University Application", date: "10 June 2025" },
];

export const updates = [
  { id: 1, title: "MBBS in Russia: Everything You Need to Know", date: "20 May 2025" },
  { id: 2, title: "Top 10 NMC Approved Universities in Russia", date: "18 May 2025" },
  { id: 3, title: "Russia MBBS Admission Process 2025", date: "15 May 2025" },
  { id: 4, title: "Student Life in Russia for Indian Students", date: "12 May 2025" },
];

export const profileChecklist = [
  { label: "Personal Information", done: true },
  { label: "Contact Details", done: true },
  { label: "Academic Details", done: true },
  { label: "Upload Documents", done: true },
  { label: "Profile Photo", done: false },
];
