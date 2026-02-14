'use client';

import { useEffect, useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import AnimatedGreetings from '@/components/Hello';

const lenisOptions = {
    lerp: 0.1,
    duration: 1.2,
    smoothTouch: false,
    smooth: true,
    wheelMultiplier: 0.7,
    touchMultiplier: 1.5,
    infinite: false,
    orientation: 'vertical' as const,
    gestureOrientation: 'vertical' as const,
    normalizeWheel: true,
};

export default function HomeClientWrapper({ children }: { children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        window.scrollTo(0, 0);
    }, []);

    if (!isClient) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-300/20 rounded-full animate-ping"></div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-purple-500 rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    return (
        <ReactLenis root options={lenisOptions}>
            <AnimatedGreetings />
            {children}
        </ReactLenis>
    );
}
