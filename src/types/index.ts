import { LucideIcon } from 'lucide-react';

export interface Service {
    id: string;
    slug: string;
    image: string;
    title: string;
    shortDescription: string;
    description: string;
    icon: LucideIcon;
}

export interface AdditionalService {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    icon: LucideIcon;
    image: string;
}
