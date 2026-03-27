import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./AdditionalServicesSection.module.css";
import { siteContent } from "../../../content/global";
import { routes } from "../../../lib/routes";
import { additionalServices } from "../../../lib/services";
import { AdditionalServiceCard } from "../../AdditionalServiceCard/AdditionalServiceCard";

const text = siteContent.home.additionalServicesSection;

export const AdditionalServicesSection = () => {
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
                    {additionalServices.map((service) => {
                        return (
                            <AdditionalServiceCard key={service.id} additionalService={service} />
                        );
                    })}
                </div>
                <div className={styles.ctaWrap}>
                    <Link href={routes.services} className={styles.cta}>
                        {text.ctaLabel}
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};