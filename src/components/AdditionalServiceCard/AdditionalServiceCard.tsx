import { ArrowRight } from 'lucide-react';
import { siteContent } from '../../content/global';
import styles from './AdditionalServiceCard.module.css';
import { Service } from '@/src/types';
import Link from 'next/link';
import { routes } from '@/src/lib/routes';

interface AdditionalServiceCardProps {
    additionalService: Service;
}
export const AdditionalServiceCard = ({ additionalService }: AdditionalServiceCardProps) => {
    const Icon = additionalService.icon;
    const text = siteContent.home.additionalServicesSection;

    return <Link href={`${routes.services}/${additionalService.slug}`} className={styles.card}>
        <div className={styles.accentBar}></div>
        <div className={styles.inner}>
            <div className={styles.iconBox}>
                {Icon && <Icon className={styles.icon} size={24} />}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{additionalService.title}</h3>
                <p className={styles.description}>{additionalService.intro}</p>
                <div className={styles.cta}>
                    <span className={styles.ctaLabel}>{text.cardCtaLabel}</span>
                    <ArrowRight size={16} />
                </div>
            </div>
        </div>
    </Link>;
};