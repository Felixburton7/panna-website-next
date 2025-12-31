"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./FadeInUp.module.css";

interface FadeInUpProps {
    children: ReactNode;
    delay?: number; // Delay in seconds (e.g. 0.1, 0.2)
    threshold?: number; // Intersection threshold (0 to 1)
    className?: string; // Optional extra classes
}

export default function FadeInUp({ children, delay = 0, threshold = 0.1, className = "" }: FadeInUpProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can stop observing to prevent "re-animating" when scrolling up and down
                    // Remove this line if you want it to fade in every time it enters viewport
                    if (domRef.current) observer.unobserve(domRef.current);
                }
            });
        }, { threshold });

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={domRef}
            className={`${styles.fadeInUp} ${isVisible ? styles.visible : ""} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}
