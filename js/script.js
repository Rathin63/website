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