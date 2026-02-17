import { useState, useEffect } from 'react';
import { useRecruiterMode } from '../store/useRecruiterMode';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    onComplete?: () => void;
}

const Typewriter = ({ text, speed = 50, delay = 0, className = "", onComplete }: TypewriterProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);
    const { isRecruiterMode } = useRecruiterMode();

    useEffect(() => {
        if (isRecruiterMode) {
            setDisplayedText(text);
            if (onComplete) onComplete();
            return;
        }

        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay, isRecruiterMode, text, onComplete]);

    useEffect(() => {
        if (!started || isRecruiterMode) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(text.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
                if (onComplete) onComplete();
            }
        }, speed);

        return () => clearInterval(interval);
    }, [started, text, speed, isRecruiterMode, onComplete]);

    return <span className={className}>{displayedText}</span>;
};

export default Typewriter;
