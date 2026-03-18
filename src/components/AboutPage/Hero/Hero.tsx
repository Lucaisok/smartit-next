import { siteContent } from "@/src/content/global";
import styles from "./Hero.module.css";

export const Hero = () => {
    const content = siteContent.aboutPage.hero;
    return (
        <section className={styles.section}>
            <div className={styles.overlay}>
                <img
                    src={content.image}
                    alt={content.imageAlt}
                    className={styles.overlayImage}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <h1 className={styles.title}>
                        {content.titleStart} <span className={styles.titleHighlight}>{content.titleHighlight}</span>
                    </h1>
                    <p className={styles.description}>{content.description}</p>
                </div>
            </div>
        </section>
    );
};