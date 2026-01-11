import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  size?: 'normal' | 'wide' | 'tall';
  className?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RoadmapItem {
  year: string;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
  logo: string;
}