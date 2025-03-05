document.addEventListener('DOMContentLoaded', (event) => {
    // Setting dark mode default on page load
    document.body.classList.add('dark-mode');
    document.querySelector('.dark-mode-toggle i').classList.replace('fa-moon', 'fa-sun');

    // Setting <li> font-sizes as per the next elements.
    /*document.querySelectorAll("li").forEach(li => {
    let firstChild = li.firstElementChild;
    if (firstChild) {
        let fontSize = window.getComputedStyle(firstChild).fontSize;
        li.style.setProperty("--marker-size", fontSize);
    }*/

    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".sidebar a");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                const id = entry.target.getAttribute("id");
                document.querySelector(`.sidebar a[href="#${id}"]`).classList.add("active");
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });

    sections.forEach(section => observer.observe(section));
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.dark-mode-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon-o', 'fa-sun-o');
    } else {
        icon.classList.replace('fa-sun-o', 'fa-moon-o');
    }
}