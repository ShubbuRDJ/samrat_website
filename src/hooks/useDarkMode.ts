import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [dark, setDark] = useState(
        document.documentElement.classList.contains('dark')
    );

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);

    return { dark, toggle: () => setDark(!dark) };
};
