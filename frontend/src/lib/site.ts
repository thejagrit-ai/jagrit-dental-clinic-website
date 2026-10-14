/**
 * EDITABLE CLINIC PROFILE
 * Replace the sample contact and clinician details below before launch.
 * Keeping identity in one file prevents stale names and phone numbers across the site.
 */
export const siteConfig = {
  name: "Ivory & Sage Dental Studio",
  shortName: "Ivory & Sage",
  descriptor: "Advanced dentistry, thoughtfully delivered",
  description:
    "A calm, modern dental studio for preventive, restorative, implant and cosmetic care in Jaipur.",
  phone: "+91 98123 45678",
  phoneHref: "tel:+919812345678",
  email: "care@ivoryandsage.in",
  address: "18 Prithviraj Road, C-Scheme, Jaipur, Rajasthan 302001",
  mapHref: "https://maps.google.com/?q=C-Scheme+Jaipur",
  hours: [
    { days: "Monday–Friday", time: "9:00 AM–7:00 PM" },
    { days: "Saturday", time: "9:00 AM–5:00 PM" },
    { days: "Sunday", time: "By appointment" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
  creator: "Jagrit Sharma",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "Our doctor", href: "/doctors" },
  { label: "About", href: "/about" },
  { label: "Stories", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;

export const treatments = [
  {
    slug: "preventive-care",
    title: "Preventive care",
    summary: "Exams, professional cleaning and practical guidance that keep small concerns small.",
    beforeImage: "/images/before/tartar.jpg",
    afterImage: "/images/after/tartar.jpg",
    duration: "45–60 min",
  },
  {
    slug: "restorative-dentistry",
    title: "Restorative dentistry",
    summary: "Natural-looking fillings, crowns and bridges planned for comfort and long-term function.",
    beforeImage: "/images/before/fillings.jpg",
    afterImage: "/images/after/fillings.jpg",
    duration: "From 60 min",
  },
  {
    slug: "dental-implants",
    title: "Dental implants",
    summary: "Carefully assessed tooth replacement with clear staging, digital planning and aftercare.",
    beforeImage: "/images/before/implants.jpg",
    afterImage: "/images/after/implants.jpg",
    duration: "Plan-led care",
  },
  {
    slug: "smile-design",
    title: "Smile design",
    summary: "Whitening, bonding and veneers approached conservatively to preserve what makes your smile yours.",
    beforeImage: "/images/before/whitening.jpg",
    afterImage: "/images/after/whitening.jpg",
    comparisonImage: "/images/whitening.jpg",
    duration: "Tailored plan",
  },
] as const;

export const doctors = [
  {
    name: "Dr. Aanya Mehta",
    role: "Lead dentist",
    credentials: "BDS, MDS — profile details to verify before launch",
    specialty: "Restorative & aesthetic dentistry",
    experience: "12+ years — sample profile",
    image: "/images/dr-sofia.jpg",
    bio: "A measured, patient-first clinician focused on clear explanations, conservative treatment planning and comfortable care.",
    expertise: ["Smile rehabilitation", "Root canal care", "Aesthetic restorations", "Preventive dentistry"],
    education: ["MDS, Conservative Dentistry & Endodontics", "BDS", "Continuing education in digital smile planning"],
    philosophy: "Every recommendation should be understandable, necessary and shaped around the person—not simply the tooth.",
  },
] as const;

export const trustPoints = [
  { value: "01", label: "Unhurried consultations" },
  { value: "02", label: "Clear treatment choices" },
  { value: "03", label: "Comfort-led appointments" },
  { value: "04", label: "Considered follow-up care" },
] as const;
