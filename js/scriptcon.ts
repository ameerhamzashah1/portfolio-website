document.addEventListener("DOMContentLoaded", () => {
    console.log("Script Loaded!");

    // Add event listener for mobile menu toggle (if needed)
    const navLinks = document.querySelector(".nav-links") as HTMLElement;
    document.querySelector(".logo")?.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
