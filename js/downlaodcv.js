"use strict";
function downloadCV() {
    const cvPath = "assets/CV.pdf"; // Ensure this path is correct
    const link = document.createElement("a");
    link.href = cvPath;
    link.setAttribute("download", "Ameer_Hamza_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// Attach event listener to button
document.addEventListener("DOMContentLoaded", function () {
    const cvButton = document.querySelector(".download-cv");
    if (cvButton) {
        cvButton.addEventListener("click", downloadCV);
    }
});
