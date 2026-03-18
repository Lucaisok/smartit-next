import { Shield, Heart, Lightbulb, Handshake } from "lucide-react";
import { ValueCard } from "./Card";
import styles from "./ValuesSection.module.css";
import { siteContent } from "../../../content/global";

const values = [
    {
        icon: Shield,
        title: "Qualità Certificata",
        description: "Standard elevati e certificazioni che garantiscono professionalità in ogni intervento"
    },
    {
        icon: Heart,
        title: "Cura del Cliente",
        description: "Rapporto diretto e personalizzato, perché ogni cliente ha bisogni specifici"
    },
    {
        icon: Lightbulb,
        title: "Innovazione",
        description: "Tecnologie moderne e metodi all'avanguardia per risultati eccellenti"
    },
    {
        icon: Handshake,
        title: "Affidabilità",
        description: "Esperienza consolidata e un team giovane e preparato sempre al vostro servizio"
    }
];

export const ValuesSection = () => {
    const content = siteContent.aboutPage.info.valuesSection;
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {content.titleStart} <span className={styles.titleHighlight}>{content.titleHighlight}</span>
                    </h2>
                    <p className={styles.subtitle}>{content.subtitle}</p>
                </div>
                <div className={styles.grid}>
                    {values.map((value, index) => (
                        <ValueCard icon={value.icon} title={value.title} description={value.description} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};