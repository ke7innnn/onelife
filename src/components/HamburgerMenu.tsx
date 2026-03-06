"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./HamburgerMenu.module.css";

const menuItems = [
    {
        label: "New Arrivals",
        count: "12",
        href: "/",
        sub: ["Just Dropped", "Best Sellers", "Limited Edition"],
    },
    {
        label: "Collections",
        count: "06",
        href: "/",
        sub: ["Seasonal Collection", "Summer Edit", "One Life Classics"],
    },
    {
        label: "Tops",
        count: "24",
        href: "/",
        sub: ["T-Shirts", "Long Sleeves", "Hoodies & Sweatshirts"],
    },
    {
        label: "Bottoms",
        count: "18",
        href: "/",
        sub: ["Jeans", "Shorts", "Trousers"],
    },
    {
        label: "Accessories",
        count: "09",
        href: "/",
        sub: ["Caps", "Bags", "Jewellery"],
    },
    {
        label: "About",
        count: "",
        href: "/",
        sub: ["Our Story", "Sustainability", "Contact"],
    },
];

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    const close = () => setOpen(false);

    return (
        <>
            {/* ─── Hamburger trigger ─── */}
            <button
                className={`${styles.hamburgerBtn} ${open ? styles.active : ""}`}
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
            >
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
            </button>

            {/* ─── Backdrop ─── */}
            {open && (
                <div className={styles.backdrop} onClick={close} aria-hidden="true" />
            )}

            {/* ─── Full-screen overlay ─── */}
            <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`} aria-hidden={!open}>

                {/* LEFT panel — brand blue */}
                <div className={styles.leftPanel}>
                    <div className={styles.leftHeader}>
                        <span className={styles.brandTag}>One Life</span>
                        <button className={styles.closeBtn} onClick={close} aria-label="Close menu">✕</button>
                    </div>

                    <div className={styles.leftFooter}>
                        <Link href="/" className={styles.footerLink} onClick={close}>Sign In</Link>
                        <Link href="/" className={styles.footerLink} onClick={close}>Create Account</Link>
                    </div>
                </div>

                {/* RIGHT panel — large editorial links */}
                <div className={styles.rightPanel}>
                    <ul className={styles.menuList}>
                        {menuItems.map((item) => (
                            <li key={item.label} className={styles.menuItem}>
                                <Link href={item.href} className={styles.menuLink} onClick={close}>
                                    <span className={styles.menuLabel}>{item.label}</span>
                                    <span className={styles.menuMeta}>
                                        {item.count && <span className={styles.menuCount}>{item.count}</span>}
                                        <span className={styles.menuArrow}>→</span>
                                    </span>
                                </Link>

                                {/* Sub-links revealed on hover */}
                                <ul className={styles.subMenu}>
                                    <li>
                                        <div className={styles.subList}>
                                            {item.sub.map((sub) => (
                                                <Link key={sub} href="/" className={styles.subLink} onClick={close}>
                                                    {sub}
                                                </Link>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    );
}
