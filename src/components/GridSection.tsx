import Image from "next/image";
import Link from "next/link";
import styles from "./GridSection.module.css";
import ProductGrid from "./ProductGrid";

export default function GridSection() {
    return (
        <section className={styles.gridSection}>
            <div className={styles.gridContainer}>
                {/* Women's Denim Card */}
                <div className={styles.card}>
                    <div className={styles.imageRatio}>
                        <Image
                            src="/images/womens_denim_1772798064145.png"
                            alt="Women's Denim"
                            fill
                            className={styles.cardImage}
                        />
                        <div className={styles.cardOverlay}>
                            <h2 className={styles.cardTitle}>SHOP<br />COLLECTIONS</h2>
                            <Link href="/" className={styles.cardButton}>
                                SHOP WOMEN'S
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Men's Video Card */}
                <div className={styles.card}>
                    <div className={styles.imageRatio}>
                        <video
                            src="/vid/vid.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={styles.cardImage}
                        />
                        <div className={styles.cardOverlayCentered}>
                            <Image
                                src="/images/logo.png"
                                alt="One Life"
                                width={600}
                                height={240}
                                className={styles.centeredOverlayLogo}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid inserted here */}
            <ProductGrid />

            {/* App Promo Pre-Footer */}
            <div className={styles.promoBanner}>
                <div className={styles.promoContent}>
                    <h3>The Best Part of Every Outfit</h3>
                    <p>Get the One Life App for exclusive drops and seamless shopping.</p>
                    <div className={styles.promoActions}>
                        <button className={styles.appBtn}>Download the App</button>
                        <button className={styles.storeBtn}>Find Your Store</button>
                    </div>
                    <Link href="/" className={styles.smallLink}>See All Offer Details</Link>
                </div>
            </div>
        </section>
    );
}
