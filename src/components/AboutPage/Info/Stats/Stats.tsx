import styles from "./Stats.module.css";

const stats = [
    { number: "15+", label: "Anni di Esperienza" },
    { number: "500+", label: "Clienti Soddisfatti" },
    { number: "12", label: "Servizi Offerti" },
    { number: "100%", label: "Professionalità" }
];

export const Stats = () => {
    return (
        <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                </div>
            ))}
        </div>
    );
};