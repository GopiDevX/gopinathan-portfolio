import { type FC, type ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const GlassCard: FC<GlassCardProps> = ({ children, className = "", onClick }) => {
    return (
        <div
            className={`glass-card p-6 ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default GlassCard;
