const skillsSection = document.getElementById('skillSection') as HTMLElement;
const button = document.getElementById('toggleSkills') as HTMLButtonElement;

button.addEventListener("click", () => {
    if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
        skillsSection.style.display = "block";
    } else {
        skillsSection.style.display = "none";
    }
});
