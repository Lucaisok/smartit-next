import { Users, Target, TrendingUp, Leaf } from "lucide-react";
import { Card } from "./Card/Card";
import styles from "./WhyUsSection.module.css";
import { siteContent } from "@/src/content/global";

const whyUs = [
    {
        icon: Target,
        title: "Approccio Orientato al Risultato",
        description: "Ogni progetto è seguito con attenzione per garantire il massimo livello di soddisfazione e risultati concreti."
    },
    {
        icon: Users,
        title: "Team Qualificato",
        description: "Personale esperto, formato e certificato, pronto ad affrontare qualsiasi sfida nel facility management."
    },
    {
        icon: TrendingUp,
        title: "Flessibilità e Dinamicità",
        description: "Ci adattiamo alle vostre esigenze con soluzioni su misura che evolvono insieme al vostro business."
    },
    {
        icon: Leaf,
        title: "Sostenibilità",
        description: "Utilizziamo prodotti eco-friendly e metodi sostenibili per preservare l'ambiente e i vostri spazi."
    }
];

export const WhyUsSection = () => {
    const content = siteContent.aboutPage.whyUsSection;
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {content.titleStart}
                        <span className={styles.titleHighlight}>{content.titleHighlight}</span>
                    </h2>
                    <p className={styles.subtitle}>{content.subtitle}</p>
                </div>
                <div className={styles.grid}>
                    {whyUs.map((item, index) => (
                        <Card title={item.title} description={item.description} icon={item.icon} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};