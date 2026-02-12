import { useRecruiterMode } from "../store/useRecruiterMode";
import { Zap, ZapOff } from "lucide-react";

const RecruiterToggle = () => {
    const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

    return (
        <button
            onClick={toggleRecruiterMode}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${isRecruiterMode
                    ? "bg-accent-blue/20 border-accent-blue text-accent-blue"
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                }`}
            title={isRecruiterMode ? "Disable Recruiter Mode" : "Enable Recruiter Mode (Reduced Motion)"}
        >
            {isRecruiterMode ? <Zap size={14} /> : <ZapOff size={14} />}
            <span>{isRecruiterMode ? "Recruiter Mode: ON" : "Recruiter Mode"}</span>
        </button>
    );
};

export default RecruiterToggle;
