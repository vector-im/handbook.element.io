// Auto expand section on the FAQ page when linked directly
window.onload = function () {
    if (window.location.pathname.endsWith('/frequently-asked-questions')) {
        const bookmark = window.location.hash.substr(1);
        const details = document.getElementById(bookmark);
        details.open = true;
    }

    /**
     * Bookstack does not let us override the class used when switching between
     * modes. We have to listen to that change and apply the class that compound
     * needs to invert the color scales
     */

    const root = document.body.parentElement;

    if (window.matchMedia('(prefers-color-scheme:dark)').matches || root.classList.contains("dark-mode")) {
        root.classList.add("cpd-theme-dark")
    } else {
        root.classList.add("cpd-theme-light")
    }

    const menu = document.querySelector(".tri-layout-mobile-tabs")
    const observer = new IntersectionObserver(
        ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
        { threshold: [1] }
    );
    observer.observe(menu);
};
