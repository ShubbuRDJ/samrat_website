import { useDarkMode } from '../../hooks/useDarkMode';

const DarkModeToggle = () => {
    const { dark, toggle } = useDarkMode();

    return (
        <button
            onClick={toggle}
            className="border px-3 py-1 rounded text-sm"
        >
            {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
    );
};

export default DarkModeToggle;
