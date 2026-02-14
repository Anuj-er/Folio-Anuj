'use client';

import { useState, useEffect } from 'react';

// This should match the event name defined in AnimatedGreetings component
const GREETING_COMPLETE_EVENT = "greetingAnimationComplete";

export default function useGreetingComplete() {
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Check if it's already complete in localStorage
        const storedStatus = localStorage.getItem('greetingAnimationComplete');
        if (storedStatus === 'true') {
            setIsComplete(true);
            return;
        }

        const handleComplete = () => {
            console.log("Hook received greeting animation completion");
            setIsComplete(true);
        };

        window.addEventListener(GREETING_COMPLETE_EVENT, handleComplete);

        // Initial check in case it finished before the hook mounted
        const currentStatus = localStorage.getItem('greetingAnimationComplete');
        if (currentStatus === 'true') {
            setIsComplete(true);
        }

        return () => {
            window.removeEventListener(GREETING_COMPLETE_EVENT, handleComplete);
        };
    }, []);

    return isComplete;
}
