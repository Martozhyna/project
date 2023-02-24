import {useLayoutEffect, useState} from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('mode') || 'dark');

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('mode', theme);
    }, [theme])

    return {theme, setTheme};
};

