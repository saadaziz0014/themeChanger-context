import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => { },
});

export const ThemeProvider = ThemeContext.Provider;

export default function useThemeContext() {
    return useContext(ThemeContext);
}
