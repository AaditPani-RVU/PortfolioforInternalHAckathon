var typed= new Typed(".multiple-text", {
    strings: ["CSE Student","Gamer","Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
window.onload = function() {
    function setSkillLevel(skillId, skillLevel) {
        const skill = document.getElementById(skillId);
        skill.style.width = skillLevel + '%';
        const percentageLabel = skill.nextElementSibling; 
    percentageLabel.textContent = `${skillLevel}%`;
    }

    
    setSkillLevel('C', 80); 
    setSkillLevel('JavaScript',50);
    setSkillLevel('Python',100);
    setSkillLevel('Data Structure Algorithms',20);
};




