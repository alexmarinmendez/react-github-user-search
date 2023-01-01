import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [mode, setMode] = useState('dark');

    const darkTheme = {
        colors: {
            background: "#141D2F",
            themeBtn: "#fff",
            card: "#1E2A47",
            textNorm: "#fff",
            textBolded: "#FFF",
        },
    };
    const lightTheme = {
        colors: {
            background: "#F6F8FF",
            themeBtn: "#4B6A9B",
            card: "#FEFEFE",
            textNorm: "#697C9A",
            textBolded: "#2B3442",
        },
    };

    const changeTheme = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        localStorage.getItem("theme") === "light" && setMode('light');
    }, [])
    
    useEffect(() => {
        localStorage.setItem("theme", mode);
    }, [mode])

    return (
        <ThemeContext.Provider value={{mode, changeTheme}}>
            <ThemeProvider theme={(mode === 'dark') ? darkTheme : lightTheme }>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;