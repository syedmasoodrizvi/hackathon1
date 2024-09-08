// Get form and resume elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeSection = document.getElementById('resume') as HTMLElement;

const resumeName = document.getElementById('resumeName') as HTMLElement;
const resumeEmail = document.getElementById('resumeEmail') as HTMLElement;
const resumeEducation = document.getElementById('resumeEducation') as HTMLElement;
const resumeExperience = document.getElementById('resumeExperience') as HTMLElement;
const resumeSkills = document.getElementById('resumeSkills') as HTMLElement;

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();  // Prevent form submission

  // Get user input values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const experience = (document.getElementById('experience') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  // Display the values in the resume section
  resumeName.textContent = name;
  resumeEmail.textContent = email;
  resumeEducation.textContent = education;
  resumeExperience.textContent = experience;

  // Populate the skills as list items
  resumeSkills.innerHTML = ''; // Clear previous entries
  skills.split(',').forEach((skill) => {
    const listItem = document.createElement('li');
    listItem.textContent = skill.trim();
    resumeSkills.appendChild(listItem);
  });

  // Show the resume section
  resumeSection.style.display = 'block';
});
