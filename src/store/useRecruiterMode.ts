import { create } from 'zustand';

interface RecruiterModeState {
    isRecruiterMode: boolean;
    toggleRecruiterMode: () => void;
}

export const useRecruiterMode = create<RecruiterModeState>((set) => ({
    isRecruiterMode: false,
    toggleRecruiterMode: () => set((state) => ({ isRecruiterMode: !state.isRecruiterMode })),
}));
