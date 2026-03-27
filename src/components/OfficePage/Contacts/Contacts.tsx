import styles from "./Contacts.module.css";
import { Building2, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { routes } from "../../../lib/routes";
import { contacts, siteContent } from "../../../content/global";


export default function Contacts() {
    const content = siteContent.officeSection.contactsLabels;

    return (
        <section className={styles.contactsSection}>
            <div className={styles.container}>
                <Building2 className={styles.icon} size={64} />
                <h2 className={styles.title}>{content.welcome}</h2>
                <p className={styles.desc}>
                    {content.visitNote}
                </p>
                <div className={styles.actions}>
                    <a
                        href={contacts.hrefPhoneNumber}
                        className={styles.primaryBtn}
                    >
                        <Phone size={22} />
                        {`${siteContent.officeSection.cards.phoneNote}`}
                    </a>
                    <Link href={routes.contacts} className={styles.secondaryBtn}>
                        {content.ctaLabel}
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}