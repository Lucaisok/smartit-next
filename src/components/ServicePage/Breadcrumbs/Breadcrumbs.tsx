
import { siteContent } from "@/src/content/global";
import { routes } from "@/src/lib/routes";
import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
    serviceTitle: string;
}

export const Breadcrumbs = ({ serviceTitle }: BreadcrumbsProps) => {
    const t = siteContent.header;
    return (
        <div className={styles.breadcrumbsBg}>
            <div className={styles.breadcrumbsContainer}>
                <div className={styles.breadcrumbs}>
                    <Link href={routes.home} className={styles.link}>{t.homeLabel}</Link>
                    <span className={styles.separator}>/</span>
                    <Link href={routes.services} className={styles.link}>{t.serviziLabel}</Link>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>{serviceTitle}</span>
                </div>
            </div>
        </div>
    );
};  