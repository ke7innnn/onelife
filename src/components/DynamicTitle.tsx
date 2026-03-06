"use client";

import { useEffect } from "react";

export default function DynamicTitle() {
    useEffect(() => {
        const titles = ["ONELIFE!", "🔥 DONT MISS OUT!"];
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % titles.length;
            document.title = titles[currentIndex];
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return null;
}
