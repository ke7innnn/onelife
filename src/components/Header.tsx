import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.utilityBar}>
                <div className={styles.utilityLeft}>
                    <button className={`${styles.tabBtn} ${styles.tabActive}`}>One Life</button>
                    <button className={styles.tabBtn}>About</button>
                </div>
                <div className={styles.utilityRight}>
                    <Link href="/" className={styles.utilityLink}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Sign In or Create Account
                    </Link>
                </div>
            </div>

            <div className={styles.mainNav}>
                <div className={styles.navLeft}>
                    <HamburgerMenu />
                    <nav>
                        <ul className={styles.navLinks}>
                            <li><Link href="/">New</Link></li>
                            <li><Link href="/">Seasonal Collection</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.logoContainer}>
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            alt="One Life"
                            width={220}
                            height={80}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>
                </div>

                <div className={styles.navRight}>
                    <button className={styles.iconBtn} aria-label="Search">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                    <button className={styles.iconBtn} aria-label="Favorites">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    <button className={styles.iconBtn} aria-label="Shopping Bag">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    </button>
                </div>
            </div>

            <div className={styles.promoBanner}>
                <p>Free Shipping on Orders Over US$150</p>
                <div className={styles.promoLinks}>
                    <Link href="/">SHOP NEW</Link>
                    <Link href="/">SHOP SEASONAL</Link>
                </div>
            </div>

            <div className={styles.marqueeBanner}>
                <div className={styles.marqueeContent}>
                    {/* Repeat the text enough times to ensure it loops smoothly without empty space */}
                    <span>10% Off. Enter Code: WELCOME10</span>
                    <span>10% Off. Enter Code: WELCOME10</span>
                    <span>10% Off. Enter Code: WELCOME10</span>
                    <span>10% Off. Enter Code: WELCOME10</span>
                    <span>10% Off. Enter Code: WELCOME10</span>
                    <span>10% Off. Enter Code: WELCOME10</span>
                    <span>10% Off. Enter Code: WELCOME10</span>
                    <span>10% Off. Enter Code: WELCOME10</span>
                    {/* Duplicate set for the seamless loop illusion */}
                    <span aria-hidden="true">10% Off. Enter Code: WELCOME10</span>
                    <span aria-hidden="true">10% Off. Enter Code: WELCOME10</span>
                    <span aria-hidden="true">10% Off. Enter Code: WELCOME10</span>
                    <span aria-hidden="true">10% Off. Enter Code: WELCOME10</span>
                    <span aria-hidden="true">10% Off. Enter Code: WELCOME10</span>
                    <span aria-hidden="true">10% Off. Enter Code: WELCOME10</span>
                    <span aria-hidden="true">10% Off. Enter Code: WELCOME10</span>
                    <span aria-hidden="true">10% Off. Enter Code: WELCOME10</span>
                </div>
            </div>
        </header>
    );
}
