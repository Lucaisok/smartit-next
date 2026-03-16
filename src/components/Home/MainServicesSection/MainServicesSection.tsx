import styles from "./MainServicesSection.module.css";
import { siteContent } from "../../../content/global";

const text = siteContent.home.mainServicesSection;

export const MainServicesSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {text.titleStart} <span className={styles.titleHighlight}>{text.titleHighlight}</span>
                    </h2>
                    <p className={styles.description}>{text.description}</p>
                </div>
                <div className={styles.grid}>

                </div>
            </div>
        </section>
    );
};