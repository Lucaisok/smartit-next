import { LucideIcon } from 'lucide-react';

export interface Faq {
    answer: string;
    question: string;
}

export interface Service {
    id: string;
    slug: string;
    image: string;
    title: string;
    intro: string;
    shortDescription: string;
    description: string;
    icon: LucideIcon;
    faqs?: Faq[];
}

