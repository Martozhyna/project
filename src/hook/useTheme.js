import {useEffect, useState} from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('mode') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('mode', theme);
    }, [theme]);

    return {theme, setTheme};
};

