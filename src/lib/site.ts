export const site = {
  name: "Cochin Oncology Group",
  shortName: "COG",
  tagline: "Advancing Cancer Care Through Collaboration, Education, and Research.",
  email: "info@cochinoncologygroup.org",
  phone: "+91 484 297 6666",
  address: {
    line1: "COG Secretariat, Department of Oncology",
    line2: "Amrita Hospital, Kochi",
    line3: "Kochi, Kerala – 682018, India",
  },
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Executive Committee", href: "/committee" },
  { label: "Membership", href: "/membership" },
  { label: "Scientific Activities", href: "/scientific-activities" },
  { label: "Conferences & Events", href: "/events" },
  { label: "Research & Publications", href: "/research" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Announcements", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];
