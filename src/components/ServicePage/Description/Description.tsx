import styles from "./Description.module.css";

interface DescriptionProps {
    description: string;
}

export const Description = ({ description }: DescriptionProps) => {
    const splitted = description.split(/\r?\n/).filter(Boolean);
    return (
        <section className={styles.descriptionSection}>
            <div className={styles.descriptionContainer}>
                {splitted.map((part, idx) => (
                    <p className={styles.text} style={{ fontWeight: idx === 0 ? 600 : 300, marginBottom: idx === 0 ? "1rem" : 0 }} key={idx}>{part}</p>
                ))}
            </div>
        </section>
    );
};