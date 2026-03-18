import { LucideIcon } from "lucide-react";
import styles from "./Card.module.css";

export interface Value {
    icon: LucideIcon;
    title: string;
    description: string;
}
export const ValueCard = ({ icon, title, description }: Value) => {
    const Icon = icon;
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <Icon className={styles.icon} size={28} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
};