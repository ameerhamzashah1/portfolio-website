

// Define the skill structure
interface SkillCategory {
    title: string;
    skills: string[];
}

// Skill categories
const skills: SkillCategory[] = [
    {
        title: "Core Skills",
        skills: ["HTML", "CSS", "Tailwind CSS", "TypeScript", "JavaScript", "Next.js", "Node.js"]
    },
    {
        title: "Design & Productivity",
        skills: ["Graphic Designing", "Web Designing", "MS Office", "Canva"]
    },
    {
        title: "Enhancing Skills",
        skills: ["Database", "Python", "AI Assistant Programming", "API Integration", "Management", "Full Stack Development"]
    },
    {
        title: "Teaching Experience",
        skills: ["Teaching HTML, CSS", "Teaching JavaScript", "Mentoring Web Development"]
    }
];

// Function to generate skill cards
function renderSkills(): void {
    const skillsContainer = document.getElementById("skills-container");

    if (!skillsContainer) return;

    // Clear previous content (if any)
    skillsContainer.innerHTML = "";

    skills.forEach(category => {
        const categoryCard = document.createElement("div");
        categoryCard.classList.add("skill-card");

        const title = document.createElement("h2");
        title.textContent = category.title;

        const skillList = document.createElement("ul");
        skillList.classList.add("skill-list");

        category.skills.forEach(skill => {
            const listItem = document.createElement("li");
            listItem.textContent = skill;
            skillList.appendChild(listItem);
        });

        categoryCard.appendChild(title);
        categoryCard.appendChild(skillList);
        skillsContainer.appendChild(categoryCard);
    });
}

// Ensure DOM is fully loaded before executing
document.addEventListener("DOMContentLoaded", renderSkills);
