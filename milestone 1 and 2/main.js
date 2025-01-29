var skillsSection = document.getElementById('skillSection');
var button = document.getElementById('toggleSkills');
button.addEventListener("click", function () {
    if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
});
