import { useEffect, useState } from "react";

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const [text, setText] = useState("");
    const fullText = "Gopinathan M.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl md:text-6xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
                {text}
                <span className="w-[3px] h-[24px] md:h-[40px] bg-purple-500 inline-block ml-1 animate-blink"></span>
            </div>

            <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-accent-purple animate-[progress_1.5s_ease-in-out_infinite]"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
