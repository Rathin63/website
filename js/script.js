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

    // Select all video containers
    const videoContainers = document.querySelectorAll(".video-container");

    videoContainers.forEach(container => {
        const videoBox = container.querySelector(".video-box");
        const leftButton = container.querySelector(".left-button");
        const rightButton = container.querySelector(".right-button");
        const ytFrames = container.querySelectorAll(".yt-frame");

        // Calculate the width of each video (including margin if any)
        const videoWidth = ytFrames[0].offsetWidth;

        // Scroll left
        leftButton.addEventListener("click", () => {
            if (videoBox.scrollLeft === 0) {
                // If at the start, scroll to the last video
                videoBox.scrollTo({
                    left: videoBox.scrollWidth - videoBox.clientWidth,
                    behavior: "smooth"
                });
            } else {
                // Otherwise, scroll one video width to the left
                videoBox.scrollBy({
                    left: -videoWidth,
                    behavior: "smooth"
                });
            }
        });

        // Scroll right
        rightButton.addEventListener("click", () => {
            if (videoBox.scrollLeft + videoBox.clientWidth >= videoBox.scrollWidth) {
                // If at the end, scroll to the first video
                videoBox.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                // Otherwise, scroll one video width to the right
                videoBox.scrollBy({
                    left: videoWidth,
                    behavior: "smooth"
                });
            }
        });
    });

    // Select all "Read More" buttons
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const longPara = button.previousElementSibling; // Get the .long-para element
            longPara.classList.toggle("expanded"); // Toggle the "expanded" class

            // Update button text based on the state
            if (longPara.classList.contains("expanded")) {
                button.textContent = "Read Less";
            } else {
                button.textContent = "Read More";
            }
        });
    });
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