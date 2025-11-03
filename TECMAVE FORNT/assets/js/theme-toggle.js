document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    const setTheme = (isDarkMode) => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        if (sunIcon && moonIcon) {
            sunIcon.style.display = isDarkMode ? 'none' : 'inline';
            moonIcon.style.display = isDarkMode ? 'inline' : 'none';
        }
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    };

    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        setTheme(true);
    } else {
        setTheme(false);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDarkMode = document.body.classList.contains('dark-mode');
            setTheme(!isDarkMode);
        });
    }
});
