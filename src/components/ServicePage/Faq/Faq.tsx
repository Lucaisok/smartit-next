
import { siteContent } from "@/src/content/global";
import { Faq } from "@/src/types";
import { HelpCircle } from "lucide-react";
import styles from "./Faq.module.css";

interface FaqProps {
    serviceTitle: string;
    faqs: Faq[];
}
export const Faqs = ({ serviceTitle, faqs }: FaqProps) => {
    const content = siteContent.servicePage;

    return (
        <section className={styles.faqSection}>
            <div className={styles.faqContainer}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{content.faqTitle}</h2>
                    <p className={styles.subtitle}>{`${content.faqSubtitle} ${serviceTitle}`}</p>
                </div>
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <div className={styles.faqRow}>
                                <HelpCircle className={styles.icon} size={24} />
                                <div>
                                    <h3 className={styles.question}>{faq.question}</h3>
                                    <p className={styles.answer}>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};