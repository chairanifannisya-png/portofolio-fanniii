// Animasi sederhana saat halaman dibuka

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });

});

// Efek navbar saat scrolling

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(141, 76, 255, 0.4)";
    } else {
        header.style.boxShadow = "none";
    }

});