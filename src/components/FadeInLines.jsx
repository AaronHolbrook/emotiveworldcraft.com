import React, { useState, useEffect, useRef, Children } from 'react';

export default function FadeInLines({ children, delayPerLine = 200 }) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef();

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.25,
                rootMargin: '0px 0px -10% 0px'
            }
        );

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    const elements = Children.toArray(children);

    return (
        <div ref={containerRef} className="fade-in-lines">
            {elements.map((child, i) => (
                <div
                    key={i}
                    className={`line ${isVisible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: `${i * delayPerLine}ms` }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}