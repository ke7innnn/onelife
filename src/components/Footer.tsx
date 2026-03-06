import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>

                    <div className={styles.newsletterSection}>
                        <h3 className={styles.footerTitle}>Join Our Newsletter</h3>
                        <p className={styles.footerSubtitle}>Sign up for exclusive offers, original stories, activism awareness, events and more.</p>
                        <form className={styles.newsletterForm}>
                            <input type="email" placeholder="Email Address" className={styles.emailInput} required />
                            <button type="submit" className={styles.joinBtn}>JOIN</button>
                        </form>
                    </div>

                    <div className={styles.linksSection}>
                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>ABOUT US</h4>
                            <ul className={styles.footerLinks}>
                                <li><Link href="/">Our Brand</Link></li>
                                <li><Link href="/">Sustainability</Link></li>
                                <li><Link href="/">Inclusion</Link></li>
                                <li><Link href="/">Careers</Link></li>
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>HELP</h4>
                            <ul className={styles.footerLinks}>
                                <li><Link href="/">Order Status</Link></li>
                                <li><Link href="/">Shipping</Link></li>
                                <li><Link href="/">Returns</Link></li>
                                <li><Link href="/">Size Guides</Link></li>
                                <li><Link href="/">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.socialIcons}>
                        <button aria-label="TikTok"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg></button>
                        <button aria-label="Instagram"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></button>
                        <button aria-label="Facebook"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></button>
                        <button aria-label="Twitter"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></button>
                    </div>

                    <ul className={styles.legalLinks}>
                        <li><Link href="/">Privacy Policy</Link></li>
                        <li><Link href="/">Terms of Use</Link></li>
                        <li><Link href="/">Sale Terms</Link></li>
                        <li><Link href="/">Site Map</Link></li>
                    </ul>

                    <p className={styles.copyright}>© {new Date().getFullYear()} One Life. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
