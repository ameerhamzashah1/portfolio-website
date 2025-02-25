"use strict";
// Select all navigation links
const navLinks = document.querySelectorAll(".nav-links a");
// Function to highlight the active link
function highlightActiveLink() {
    const currentPath = window.location.pathname.split("/").pop(); // Get current page file name
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active"); // Add active class
        }
        else {
            link.classList.remove("active"); // Remove active class
        }
    });
}
// Call function on page load
document.addEventListener("DOMContentLoaded", highlightActiveLink);
// Smooth Scrolling for Internal Links
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        var _a;
        const targetElement = event.target;
        if (targetElement && ((_a = targetElement.getAttribute("href")) === null || _a === void 0 ? void 0 : _a.startsWith("#"))) {
            event.preventDefault();
            const targetId = targetElement.getAttribute("href");
            if (targetId) {
                const scrollToElement = document.querySelector(targetId);
                if (scrollToElement) {
                    window.scrollTo({
                        top: scrollToElement.getBoundingClientRect().top + window.scrollY - 50, // Adjust for navbar
                        behavior: "smooth"
                    });
                }
            }
        }
    });
});
// CV Download Functionality
const downloadCvButton = document.querySelector(".download-cv");
if (downloadCvButton) {
    downloadCvButton.addEventListener("click", (event) => {
        event.preventDefault();
        const cvPath = "assests/CV.pdf"; // Ensure correct path
        const link = document.createElement("a");
        link.href = cvPath;
        link.download = "Ameer_Hamza_CV.pdf"; // Set downloaded file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
