"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./ProductGrid.module.css";

export default function ProductGrid() {
    const [isVisible, setIsVisible] = useState(false);
    const gridRef = useRef<HTMLDivElement>(null);

    const products = [
        { id: 1, name: "One Life Signature Top", price: "$45.00" },
        { id: 2, name: "One Life Classic Fit", price: "$65.00" },
        { id: 3, name: "One Life Essential Wear", price: "$55.00" },
        { id: 4, name: "One Life Urban Style", price: "$85.00" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optional: stop observing once it's visible so it doesn't animate out/in constantly
                    if (gridRef.current) observer.unobserve(gridRef.current);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the grid is visible
            }
        );

        if (gridRef.current) {
            observer.observe(gridRef.current);
        }

        return () => {
            if (gridRef.current) observer.unobserve(gridRef.current);
        };
    }, []);

    return (
        <section className={styles.productSection} ref={gridRef}>
            <h2 className={styles.sectionTitle}>Featured Fits</h2>
            <div className={`${styles.gridContainer} ${isVisible ? styles.animateGrid : ''}`}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <Link href="/" className={styles.imageWrapper}>
                            <Image
                                src="/product/p1.jpeg"
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                className={styles.mainImage}
                            />
                            <Image
                                src="/hover/p1.png"
                                alt={`${product.name} Hover`}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                className={styles.hoverImage}
                            />
                        </Link>
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productPrice}>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
