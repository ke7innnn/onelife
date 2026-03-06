import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.imageContainer}>
                <Image
                    src="/images/hero_banner_1772798027248.png"
                    alt="Spring Preview"
                    fill
                    priority
                    className={styles.heroImage}
                />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.heading}>Spring Preview</h1>
                <p className={styles.subheading}>
                    Set your sights on this season’s most getaway-ready pieces.
                </p>
                <div className={styles.ctaGroup}>
                    <Link href="/" className={styles.ctaButton}>
                        SHOP SEASONAL COLLECTION
                    </Link>
                </div>
            </div>
        </section>
    );
}
