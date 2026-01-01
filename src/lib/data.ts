import { 
  Code2, 
  Smartphone, 
  Palette, 
  Globe, 
  LucideIcon 
} from "lucide-react";

/**
 * Global Constants & Data Sources
 * -------------------------------
 * This file serves as the centralized source of truth for all content.
 * It ensures consistency across pages and allows for easy updates.
 */

// --- Type Definitions ---

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
}

// --- Navigation Data ---

export const NAV_LINKS = [
  { title: "Studio", href: "/" },
  { title: "Work", href: "/work" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

// --- Contact Info ---

export const CONTACT_INFO = {
  email: "hello@pixelkode.com",
  phone: "+91 987 654 3210",
  address: "Andhra Pradesh, India",
  googleMapsUrl: "https://maps.google.com/?q=Andhra+Pradesh,+India",
};

// --- Services Data ---

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "High-performance React/Next.js applications hosted on Render. specialized in scalable architecture.",
    icon: Code2,
    tags: ["React", "TypeScript", "Node.js", "Render"],
  },
  {
    id: "app-dev",
    title: "App Development",
    description: "Native-feel cross-platform mobile experiences that bridge the gap between web and mobile.",
    icon: Smartphone,
    tags: ["React Native", "iOS", "Android", "Expo"],
  },
  {
    id: "design",
    title: "Digital Design",
    description: "UI/UX Architecture and Brand Identity systems that tell a compelling visual story.",
    icon: Palette,
    tags: ["Figma", "Motion", "System Design", "Branding"],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Strategic growth campaigns and content engineering that converts visitors into loyal clients.",
    icon: Globe,
    tags: ["SEO", "Content Strategy", "Analytics", "Ads"],
  },
];

// --- Portfolio Data ---

export const PORTFOLIO: Project[] = [
  {
    id: 1,
    title: "Sresta Mart",
    category: "E-Commerce",
    year: "2024",
    image: "https://images.unsplash.com/photo-1472851294608-4155f2118c03?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Cakeroven Loyalty",
    category: "Web Application",
    year: "2025",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "PixelKode V3",
    category: "Internal System",
    year: "2025",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
];

// --- Team Data ---

export const TEAM: TeamMember[] = [
  {
    name: "Karthik",
    role: "Founder & Tech Lead",
    bio: "Full-stack architect specializing in React, Node, and Scalable Database systems on Railway.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop", // Placeholder or Replace
  },
  {
    name: "Poonam",
    role: "Co-Founder & Creative Director",
    bio: "Visual storyteller ensuring every pixel serves a purpose in the brand narrative.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop", // Placeholder or Replace
  },
];