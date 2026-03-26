import { CheckCircle } from "lucide-react";
import styles from "./Badge.module.css";

interface BadgeProps {
    title: string;
}

export const Badge = ({ title }: BadgeProps) => {
    return (
        <div className={styles.badge}>
            <CheckCircle size={18} className={styles.icon} />
            <span className={styles.text}>{title}</span>
        </div>
    );
};