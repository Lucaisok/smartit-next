import SkeletonLoader from "../components/Loader/SkeletonLoader";
import styles from "./loading.module.css";

export default function Loading() {
    return (
        <div className={styles.rootLoading}>
            <SkeletonLoader />
        </div>
    );
}
