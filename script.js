const navbar = document.querySelector(".navbar");

document.addEventListener("click", (e) => {
    // console.log("clicked:", e.target);

    if (e.target.closest("#menu-icon")) {
        console.log("Burger clicked");

        e.target.closest("#menu-icon").classList.toggle("fa-xmark");
        navbar.classList.toggle("active");
    }
});