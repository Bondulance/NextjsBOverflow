"use client"

import React, { createContext, useContext,
useState, useEffect} from "react"

//defines the theme context type inputs to avoid TypeScript errors
interface ThemeContextType {
    mode: string;
    setMode: (mode: string) => void;
}
//Creates a context named ThemeContext using createContext. It is initialized with the ThemeContextType interface, allowing components to access the mode and setMode properties.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
//wraps all children elements (anything under the wrapper on app.tsx)
export function ThemeProvider({ children }: 
    { children: React.ReactNode }) {
        const [mode, setMode] = useState('');
//makes a function that tracks whether it is light or dark mode
        const handleThemeChange = () => {
            if(localStorage.theme === 'dark' ||
                (!("theme" in localStorage) &&                                  // determines users machine preference
                window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {                           // light mode
                setMode('dark');
                document.documentElement.classList.add
                ('dark');
            } else {
                setMode('light');                            //dark mode
                document.documentElement.classList.remove
                ('dark');
            }
        }

        useEffect(() => {
            handleThemeChange();     // applys change
        }, [mode])

        return (
            <ThemeContext.Provider value={{ mode, setMode }}>
                {children}                                            
            </ThemeContext.Provider>
        )
    }

    export function useTheme() {
        const context = useContext(ThemeContext);

        if(context === undefined) {
            throw new Error('useTheme must be used within a THEME PROVIDER')      //provides errpr
        }
        return context;
    }