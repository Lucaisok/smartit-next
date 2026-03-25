import { CheckCircle2 } from "lucide-react";
import styles from "./InspectionSection.module.css";
import { siteContent } from "@/src/content/global";

export const InspectionSection = () => {
    return (
        <div className={styles.section}>
            <div className={styles.layout}>
                <div className={styles.texts}>
                    <h4 className={styles.title}>
                        {siteContent.inspectionSection.title}
                    </h4>
                    <p className={styles.description}>
                        {siteContent.inspectionSection.description}
                    </p>
                </div>
                <div className={styles.badge}>
                    <CheckCircle2 size={20} />
                    {siteContent.inspectionSection.badge}
                </div>
            </div>
        </div>
    );
};