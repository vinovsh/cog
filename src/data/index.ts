/**
 * Dummy content for Phase 1 (UI only).
 * In Phase 2 these exports can be replaced by API/CMS calls with the same shapes.
 */
import type { IconName } from "@/components/ui/Icon";

/* ----------------------------- Stats ----------------------------- */
export type Stat = { value: string; label: string; icon: IconName };
export const stats: Stat[] = [
  { value: "850+", label: "Members", icon: "users" },
  { value: "35+", label: "Conferences", icon: "calendar" },
  { value: "120+", label: "Scientific Meetings", icon: "presentation" },
  { value: "15+", label: "Years of Excellence", icon: "trophy" },
];

/* ------------------------ Leadership messages -------------------- */
export type Leader = {
  name: string;
  role: string;
  message: string;
  photoSeed: string;
};
export const leadershipMessages: Leader[] = [
  {
    name: "Dr. Rajesh Nair",
    role: "President",
    message:
      "Together, let us strive for excellence in oncology and make a meaningful difference in the lives of cancer patients.",
    photoSeed: "RN",
  },
  {
    name: "Dr. Anu Menon",
    role: "Secretary",
    message:
      "Education and collaboration are the cornerstones of progress in cancer care. Let's learn, share and grow together.",
    photoSeed: "AM",
  },
];

/* ----------------------------- Events ---------------------------- */
export type COGEvent = {
  id: string;
  title: string;
  day: string;
  month: string;
  dateLabel: string;
  time: string;
  venue: string;
  cta: "Register Now" | "View Details";
  accent: "blue" | "green";
};
export const upcomingEvents: COGEvent[] = [
  {
    id: "monthly-may",
    title: "COG Monthly Academic Meeting",
    day: "18",
    month: "MAY",
    dateLabel: "18 May 2025",
    time: "4:00 PM – 6:00 PM",
    venue: "Lisie Hospital, Kochi",
    cta: "Register Now",
    accent: "blue",
  },
  {
    id: "cme-jun",
    title: "Onco Care CME Programme",
    day: "22",
    month: "JUN",
    dateLabel: "22 June 2025",
    time: "9:30 AM – 1:00 PM",
    venue: "Amrita Institute, Kochi",
    cta: "Register Now",
    accent: "green",
  },
  {
    id: "annual-jul",
    title: "COG Annual Conference 2025",
    day: "12",
    month: "JUL",
    dateLabel: "12 – 13 July 2025",
    time: "9:00 AM – 5:00 PM",
    venue: "Grand Hyatt, Kochi",
    cta: "View Details",
    accent: "blue",
  },
];

/* ------------------------------ News ----------------------------- */
export type NewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  featured?: boolean;
  imageSeed: string;
};
export const news: NewsItem[] = [
  {
    id: "annual-2025",
    title: "COG Annual Conference 2025 Registration Now Open!",
    date: "APR 25, 2025",
    excerpt:
      "Join us for two days of insightful sessions, workshops and networking with leading oncology professionals.",
    category: "Conferences",
    featured: true,
    imageSeed: "conf",
  },
  {
    id: "journal-club",
    title: "New Journal Club Series Starting This May",
    date: "MAY 15, 2025",
    excerpt: "Monthly discussions on recent advances in oncology, open to all members.",
    category: "Announcements",
    imageSeed: "journal",
  },
  {
    id: "award-nair",
    title: "Congratulations to Dr. Nair for Best Paper Award",
    date: "MAY 10, 2025",
    excerpt: "Awarded at the National Oncology Summit 2025 for outstanding research contribution.",
    category: "Achievements",
    imageSeed: "award",
  },
  {
    id: "cme-22",
    title: "Onco Care CME Programme on 22nd June",
    date: "MAY 05, 2025",
    excerpt: "Theme: Advances in Targeted Therapy. Register early to reserve your seat.",
    category: "Conferences",
    imageSeed: "cme",
  },
  {
    id: "membership-drive",
    title: "COG Membership Drive 2025 Now Live",
    date: "APR 10, 2025",
    excerpt: "Become a part of Kerala's leading multidisciplinary oncology community.",
    category: "Membership",
    imageSeed: "member",
  },
  {
    id: "palliative",
    title: "CME Programme on Palliative Care Concludes",
    date: "APR 02, 2025",
    excerpt: "Over 120 delegates attended the interactive sessions on palliative oncology.",
    category: "Achievements",
    imageSeed: "palliative",
  },
];
export const newsCategories = [
  "All News",
  "Announcements",
  "Conferences",
  "Achievements",
  "Membership",
];

/* --------------------------- Committee --------------------------- */
export type Member = {
  name: string;
  role: string;
  photoSeed: string;
  specialty?: string;
};
export const officeBearers: Member[] = [
  { name: "Dr. Rajesh Nair", role: "President", photoSeed: "RN", specialty: "Medical Oncology" },
  { name: "Dr. Anu Menon", role: "Secretary", photoSeed: "AM", specialty: "Radiation Oncology" },
  { name: "Dr. Suresh Kumar", role: "Treasurer", photoSeed: "SK", specialty: "Surgical Oncology" },
];
export const executiveMembers: Member[] = [
  { name: "Dr. Vivek Pillai", role: "Executive Member", photoSeed: "VP" },
  { name: "Dr. Neethu Nair", role: "Executive Member", photoSeed: "NN" },
  { name: "Dr. Harisankar", role: "Executive Member", photoSeed: "HS" },
  { name: "Dr. Gayathri Nair", role: "Executive Member", photoSeed: "GN" },
  { name: "Dr. Arun Chandran", role: "Executive Member", photoSeed: "AC" },
];
export const advisoryBoard: Member[] = [
  { name: "Dr. M. K. Nair", role: "Advisor", photoSeed: "MK" },
  { name: "Dr. P. Balachandran", role: "Advisor", photoSeed: "PB" },
  { name: "Dr. K. G. Kumar", role: "Advisor", photoSeed: "KG" },
  { name: "Dr. Susan Korula", role: "Advisor", photoSeed: "SC" },
];

/* -------------------------- Membership --------------------------- */
export type MembershipTier = {
  name: string;
  fee: string;
  note: string;
};
export const membershipTiers: MembershipTier[] = [
  { name: "Founder Member", fee: "₹10,000", note: "One-time · Founding privileges" },
  { name: "Life Member", fee: "₹7,500", note: "One-time · Lifetime access" },
  { name: "Associate Member", fee: "₹3,000", note: "Annual · Allied professionals" },
  { name: "Trainee Member", fee: "₹1,500", note: "Annual · Residents & fellows" },
];
export const membershipBenefits: { icon: IconName; title: string; desc: string }[] = [
  { icon: "network", title: "Professional Networking", desc: "Connect with leading oncology professionals across Kerala." },
  { icon: "presentation", title: "Access to Scientific Events", desc: "Priority access to CMEs, meetings and conferences." },
  { icon: "graduation", title: "CME Credit Opportunities", desc: "Earn continuing medical education credits." },
  { icon: "microscope", title: "Research & Publication Support", desc: "Collaborate and publish with peer support." },
  { icon: "heart", title: "Community Outreach", desc: "Contribute to cancer awareness initiatives." },
  { icon: "award", title: "Recognition & Awards", desc: "Get recognised for academic excellence." },
];
export const membershipFaqs: { q: string; a: string }[] = [
  { q: "Who can become a member?", a: "Oncologists, surgeons, radiation & medical oncologists, pathologists, radiologists, nurses, researchers and allied healthcare professionals are welcome." },
  { q: "How do I apply for membership?", a: "Fill out the online membership form linked on this page. Our secretariat will verify your details and confirm within 5–7 working days." },
  { q: "How will I receive my certificate?", a: "Approved members receive a digital membership certificate by email and can download it from the member portal." },
  { q: "Can I upgrade my membership later?", a: "Yes. Associate and Trainee members may upgrade to Life membership at any time by paying the difference." },
  { q: "Is there a renewal process?", a: "Life and Founder memberships are one-time. Associate and Trainee memberships renew annually." },
];

/* --------------------- Scientific Activities --------------------- */
export const scientificActivities: { icon: IconName; title: string; desc: string }[] = [
  { icon: "presentation", title: "Monthly Academic Meetings", desc: "Regular scientific sessions by experts on current topics in oncology." },
  { icon: "users", title: "Tumour Board Discussions", desc: "Multidisciplinary case discussions for comprehensive patient care." },
  { icon: "book", title: "Journal Clubs", desc: "Critical review of recent publications and clinical research." },
  { icon: "graduation", title: "CME Programmes", desc: "Accredited continuing medical education programmes for professionals." },
  { icon: "microscope", title: "Workshops & Training", desc: "Hands-on training and workshops on advanced techniques." },
  { icon: "handshake", title: "Collaborative Initiatives", desc: "Partnerships with national & international organisations for knowledge exchange." },
];

/* ------------------------ Past conferences ----------------------- */
export const pastConferences: { title: string; place: string; year: string; seed: string }[] = [
  { title: "Annual Conference 2024", place: "Kochi, Kerala", year: "2024", seed: "c24" },
  { title: "Annual Conference 2023", place: "Kochi, Kerala", year: "2023", seed: "c23" },
  { title: "Annual Conference 2022", place: "Kochi, Kerala", year: "2022", seed: "c22" },
];
export const brochures: { title: string; size: string }[] = [
  { title: "COG Annual Conference 2025 — Brochure", size: "PDF · 2.4 MB" },
  { title: "Scientific Programme Schedule", size: "PDF · 1.1 MB" },
  { title: "Abstract Submission Guidelines", size: "PDF · 640 KB" },
  { title: "Delegate Registration Form", size: "PDF · 320 KB" },
];

/* ---------------------- Research & Publications ------------------ */
export const publications: { title: string; authors: string; journal: string }[] = [
  { title: "Outcomes of Immunotherapy in Advanced Lung Cancer", authors: "Dr. Rajesh Nair et al.", journal: "Journal of Clinical Oncology, 2025" },
  { title: "Quality of Life in Cancer Survivors", authors: "Dr. Anu Menon et al.", journal: "Asian Pacific Journal of Cancer, 2024" },
  { title: "Role of AI in Oncology Imaging", authors: "Dr. Harisankar et al.", journal: "Indian Journal of Radiology, 2024" },
  { title: "Advances in Targeted Therapy for Breast Cancer", authors: "Dr. Gayathri Nair et al.", journal: "Journal of Medical Oncology, 2023" },
];
export const researchCollaborations: { name: string; place: string; seed: string }[] = [
  { name: "Tata Memorial Centre", place: "Mumbai", seed: "TMC" },
  { name: "AIIMS", place: "New Delhi", seed: "AI" },
  { name: "Amrita Institute of Medical Sciences", place: "Kochi", seed: "AM" },
  { name: "NCI", place: "USA", seed: "NCI" },
];
export const downloads: { title: string; tag: string }[] = [
  { title: "Clinical Guidelines (PDF)", tag: "Guidelines" },
  { title: "COG Newsletters", tag: "Newsletter" },
  { title: "Research Resources", tag: "Resources" },
  { title: "Presentation Templates", tag: "Templates" },
];
export const researchAreas: { icon: IconName; title: string; desc: string }[] = [
  { icon: "handshake", title: "Research Collaborations", desc: "Joint studies with premier national & global institutes." },
  { icon: "book", title: "Publications by Members", desc: "Peer-reviewed research authored by COG members." },
  { icon: "presentation", title: "Abstract Presentations", desc: "Member abstracts presented at leading conferences." },
  { icon: "document", title: "Guidelines & Resources", desc: "Evidence-based clinical guidelines and toolkits." },
];

/* ------------------------------ Gallery -------------------------- */
export const galleryFilters = ["All", "Conferences", "Meetings", "Workshops", "Events"];
export const galleryYears = ["All", "2025", "2024", "2023", "2022", "2021"];
export const galleryImages: { seed: string; category: string; year: string; title: string }[] =
  Array.from({ length: 12 }).map((_, i) => {
    const cats = ["Conferences", "Meetings", "Workshops", "Events"];
    const yrs = ["2025", "2024", "2023", "2022"];
    return {
      seed: `g${i}`,
      category: cats[i % cats.length],
      year: yrs[i % yrs.length],
      title: `${cats[i % cats.length]} ${yrs[i % yrs.length]}`,
    };
  });
export const videoHighlights: { title: string; seed: string }[] = [
  { title: "COG Annual Conference 2024", seed: "v1" },
  { title: "COG CME Workshop 2024", seed: "v2" },
  { title: "Oncology Meet 2023", seed: "v3" },
];

/* ------------------------------ About ---------------------------- */
export const missionPoints = [
  "Promote oncology education.",
  "Encourage research and innovation.",
  "Facilitate professional networking.",
  "Improve cancer care outcomes.",
];
export const values = ["Collaboration", "Excellence", "Integrity", "Compassion"];
export const objectives = [
  "Promote and support continuing medical education in oncology.",
  "Encourage and facilitate research and publications.",
  "Organise scientific meetings, conferences and workshops.",
  "Facilitate multidisciplinary tumour board discussions.",
  "Collaborate with national and international oncology organisations.",
  "Improve awareness and early detection of cancers in the community.",
  "Support young oncologists and promote professional development.",
];
export const whyJoin = [
  "Access to scientific meetings and CMEs.",
  "Networking with leading oncology professionals.",
  "Opportunities for research and collaboration.",
  "Professional growth and skill development.",
  "Contribute to community awareness and patient care.",
];

/* --------------------------- Admin data -------------------------- */
export const adminStats: { value: string; label: string; icon: IconName; accent: string }[] = [
  { value: "856", label: "Paid Members", icon: "users", accent: "green" },
  { value: "12", label: "Upcoming Events", icon: "calendar", accent: "blue" },
  { value: "35", label: "News & Updates", icon: "megaphone", accent: "purple" },
  { value: "24", label: "New Messages", icon: "mail", accent: "orange" },
];
export const recentMembers: { name: string; role: string; seed: string }[] = [
  { name: "Dr. John Mathew", role: "Associate Member", seed: "JM" },
  { name: "Dr. Priya Raj", role: "Trainee Member", seed: "PR" },
  { name: "Dr. Rahul Krishnan", role: "Life Member", seed: "RK" },
];
export const recentActivities: { text: string; time: string }[] = [
  { text: "New event 'COG CME Programme' published.", time: "2 hours ago" },
  { text: "5 new membership applications received.", time: "5 hours ago" },
  { text: "News article 'Best Paper Award' posted.", time: "1 day ago" },
  { text: "Gallery updated with Annual Conference 2024 photos.", time: "2 days ago" },
];
