import type { ServiceKey } from "@/lib/copy";

export const SECTION_PAD =
  "section-shell px-5 pt-4 pb-16 sm:px-8 sm:pt-5 sm:pb-24";

export const serviceMedia: Record<
  ServiceKey,
  { src: string; alt: string; slug: string }
> = {
  "Preventative Care": {
    src: "/media/svc-preventative.png",
    alt: "Preventative cleaning in a contemporary dental operatory",
    slug: "preventative-care",
  },
  "Cosmetic Dentistry": {
    src: "/media/svc-cosmetic.png",
    alt: "A confident natural smile after cosmetic dentistry",
    slug: "cosmetic-dentistry",
  },
  "Restorative Dentistry": {
    src: "/media/svc-restorative.png",
    alt: "Ceramic crowns prepared for restorative dentistry",
    slug: "restorative-dentistry",
  },
  "Emergency Dentistry": {
    src: "/media/svc-emergency.png",
    alt: "A calm after-hours operatory ready for emergency care",
    slug: "emergency-dentistry",
  },
  "Pediatric Dentistry": {
    src: "/media/svc-pediatric.png",
    alt: "A bright, child-friendly dental suite",
    slug: "pediatric-dentistry",
  },
  "Endodontic Care (Root Canals)": {
    src: "/media/svc-endodontic.png",
    alt: "Precision endodontic microscope in a modern operatory",
    slug: "endodontic-care",
  },
};

export const sectionMedia = {
  about: {
    src: "/media/section-about.png",
    alt: "Sunlit reception lounge in a contemporary dental studio",
  },
  reviews: {
    src: "/media/section-reviews.png",
    alt: "Patients talking in a bright waiting lounge",
  },
  patientInfo: {
    src: "/media/section-patient-info.png",
    alt: "Tablet and new-patient folder on a quiet desk",
  },
  contact: {
    src: "/media/section-contact.png",
    alt: "Twilight view of a contemporary clinic pavilion",
  },
} as const;
