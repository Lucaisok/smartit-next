import styles from "./Hero.module.css";
import { siteContent } from "@/src/content/global";

export const Hero = () => {
    const content = siteContent.contactsPage?.hero;
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContainer}>
                <div className={styles.textCenter}>
                    <h1 className={styles.heroTitle}>{content.title}</h1>
                    <p className={styles.heroDescription}>{content.description}</p>
                </div>
            </div>
        </section>
    );
};