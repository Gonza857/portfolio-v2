import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 1. Definimos los tipos permitidos (Union type)
export type Language = 'es' | 'en';

// 2. Definimos la interfaz del Store (Estado + Acciones)
interface LanguageState {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

// 3. Creamos el hook tipado
export const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            language: 'es', // Valor inicial

            setLanguage: (lang) => set({ language: lang }),

            toggleLanguage: () => set((state) => ({
                language: state.language === 'es' ? 'en' : 'es'
            })),
        }),
        {
            name: 'language-storage', // Key para localStorage
        }
    )
);