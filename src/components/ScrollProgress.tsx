import { useEffect, useState } from "react";
import { useRecruiterMode } from "../store/useRecruiterMode";

const ScrollProgress = () => {
    const [scrollWidth, setScrollWidth] = useState(0);
    const { isRecruiterMode } = useRecruiterMode();

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollWidth(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Optionally hide in recruiter mode if it's considered "distracting", but it's usually fine.
    // Keeping it for now.

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[60]">
            <div
                className="h-full bg-accent-purple shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-100 ease-out"
                style={{ width: `${scrollWidth}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
