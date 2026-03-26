
import { contacts, siteContent } from "@/src/content/global";
import { routes } from "@/src/lib/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./Contacts.module.css";

interface ContactsProps {
    serviceTitle: string;
}

export const Contacts = ({ serviceTitle }: ContactsProps) => {
    const content = siteContent.servicePage;

    return (
        <section className={styles.contactsSection}>
            <div className={styles.contactsContainer}>
                <h2 className={styles.title}>
                    {`${content.ctaTitle} ${serviceTitle}?`}
                </h2>
                <p className={styles.subtitle}>{content.ctaSubtitle}</p>
                <div className={styles.actions}>
                    <Link href={routes.contacts} className={styles.button}>
                        {content.ctaButton}
                        <ArrowRight size={20} />
                    </Link>
                    <a href={`tel:${contacts.hrefPhoneNumber}`} className={styles.call}>
                        {content.ctaCall}
                    </a>
                </div>
            </div>
        </section>
    );
};