document.addEventListener('DOMContentLoaded', (event) => {
    // Setting dark mode default on page load
    document.body.classList.add('dark-mode');
    document.querySelector('.dark-mode-toggle i').classList.replace('fa-moon', 'fa-sun');
    document.head.style.th.background-color.replace('green','red');

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
    /*const col=document.head.style.th;*/
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon-o', 'fa-sun-o');
       
        /*col = #222222;*/
    } else {
        icon.classList.replace('fa-sun-o', 'fa-moon-o');
        /*col = #dddddd;*/
    }
}