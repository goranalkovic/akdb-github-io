window.addEventListener('scroll', () => {
    let navMenu = document.getElementById('nav-menu');
    let navLogo = document.getElementById('nav-logo');

    let scroll = this.scrollY;

    console.log(scroll);

    if (scroll > 40) {
        navMenu.classList.add('nav-shadow');
        navLogo.classList.add('img-size-scrolled');
    }
    else {
        navMenu.classList.remove('nav-shadow');
        navLogo.classList.remove('img-size-scrolled');
    }
});

window.addEventListener('DOMContentLoaded', (event) => {

    let themeSwitch = document.getElementById('theme-switch');

    // Load last theme

    let cookie = document.cookie;

    if (cookie.indexOf('dark') !== -1){
        switchTheme(true);
        themeSwitch.checked = true;
    } else {
        switchTheme(false);
        themeSwitch.checked = false;
    }

    // Theme switch logic

    themeSwitch.addEventListener('change', () => {
        let switchValue = themeSwitch.checked;

        switchTheme(switchValue);

        document.cookie = `theme=${switchValue ? 'dark' : 'light'}; expires=Thu, 31 Dec 2099 12:00:00 UTC;`;
    });

});



function switchTheme(isDark) {
    let root = document.documentElement;
    let icon = document.getElementById('theme-switch-label');

    icon.innerHTML = `<img src="images/${isDark ? 'day' : 'night'}.svg" alt="${isDark ? 'Light' : 'Dark'} mode">`;

    if (isDark) {
        root.style.setProperty('--primary-color', '#ad1457');
        root.style.setProperty('--primary-foreground', '#fff');
        root.style.setProperty('--body-text', '#eee');
        root.style.setProperty('--body-text-light', 'rgba(238, 238, 238, 0.5)');
        root.style.setProperty('--background', '#141414');
        root.style.setProperty('--code-bg', '#242424');
        root.style.setProperty('--code-fg', '#eee');
        root.style.setProperty('--shadow-color', 'rgba(120, 120, 120, 0.2)');
        root.style.setProperty('--shadow-color-dark', 'rgba(120, 120, 120, 0.4)');
    } else {
        root.style.setProperty('--primary-color', '#ad1457');
        root.style.setProperty('--primary-foreground', '#fff');
        root.style.setProperty('--body-text', '#222');
        root.style.setProperty('--body-text-light', 'rgba(34, 34, 34, 0.5)');
        root.style.setProperty('--background', '#fff');
        root.style.setProperty('--code-bg', '#f1f1f1');
        root.style.setProperty('--code-fg', '#222');
        root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.2)');
        root.style.setProperty('--shadow-color-dark', 'rgba(0, 0, 0, 0.4)');
    }
}