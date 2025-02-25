"use strict";
// Define project details
const projects = [
    {
        name: "Resume Builder",
        description: "A simple web-based resume builder to generate professional resumes.",
        image: "images/resume.png",
        link: "#"
    },
    {
        name: "Calculator",
        description: "A fully functional calculator built with JavaScript.",
        image: "images/calculator.png",
        link: "#"
    },
    {
        name: "E-Commerce Website",
        description: "A complete e-commerce website with product listings, cart, and checkout.",
        image: "images/ecommerce.png",
        link: "#"
    },
    {
        name: "Cosmetic Store Website",
        description: "An online store for beauty and skincare products.",
        image: "images/cosmetic.png",
        link: "#"
    },
    {
        name: "Expense Tracker",
        description: "A mini web app to track daily expenses and manage budgets.",
        image: "images/expense-tracker.png",
        link: "#"
    },
    {
        name: "In Progress...",
        description: "Currently working on new web applications. Stay tuned!",
        image: "images/inprogress.png",
        link: "#"
    }
];
// Function to render projects dynamically
function renderProjects() {
    const projectContainer = document.getElementById("projects-grid");
    if (!projectContainer) {
        console.error("Projects container not found!");
        return;
    }
    // Generate HTML for each project
    projectContainer.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.name}">
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" class="btn">View Project</a>
        </div>
    `).join('');
}
// Wait for DOM to load before running the script
document.addEventListener("DOMContentLoaded", renderProjects);
