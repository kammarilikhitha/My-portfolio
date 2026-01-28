
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section, .skill-card, .project-card")
    .forEach(el => observer.observe(el));

// MOBILE MENU
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}
