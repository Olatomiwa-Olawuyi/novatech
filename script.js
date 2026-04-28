// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Highlight current page in navbar
const currentPage = window.location.pathname;

document.querySelectorAll(".nav-links a").forEach(link => {
    if (currentPage.includes(link.getAttribute("href"))) {
        link.style.color = "#60a5fa";
        link.style.fontWeight = "bold";
    }
});

// Button interaction (for future use)
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.03)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});