import { Value } from "../../Values/Card";
import styles from "./Card.module.css";

export const Card = ({ icon, title, description }: Value) => {
    const Icon = icon;
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <Icon className={styles.icon} size={32} />
            </div>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};