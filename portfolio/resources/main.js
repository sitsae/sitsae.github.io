const contactButton = document.getElementById("contact-sphere");

//variablene nedenfor brukes ikke.
const discordButton = document.getElementsByClassName("hidden")[0];
const gitHubButton = document.getElementsByClassName("hidden")[1];
const emailButton = document.getElementsByClassName("hidden")[2];

//viser kontaktspheres
function unCollapse() {
  const elements = document.querySelectorAll(".small-sphere");

  for (const element of elements) {
    element.classList.toggle("small-sphere-transformed");
  }
}

contactButton.addEventListener("click", unCollapse);

const arrowAbout = document.querySelectorAll(".arrow")[0];
const arrowSkills = document.querySelectorAll(".arrow")[1];
const aboutText = document.getElementById("about");
const skillPage = document.getElementById("skills");

//funksjon for pilanimasjoner og bytte til side om skills
function arrowRotateSkillsShow() {
  arrowAbout.classList.toggle("arrow-transform");
  arrowSkills.classList.toggle("arrow-transform");

  skillPage.style.display = "block";
  aboutText.style.display = "none";
}

function arrowRotateAboutShow() {
  arrowAbout.classList.toggle("arrow-transform");
  arrowSkills.classList.toggle("arrow-transform");

  skillPage.style.display = "none";
  aboutText.style.display = "block";
}

arrowAbout.onclick = arrowRotateSkillsShow;
arrowSkills.onclick = arrowRotateAboutShow;

//funksjon for å bytte portrettet til prosjekter
const portrait = document.getElementById("portrait");
const contactSpheres = document.getElementById("four-circles");
const projectX = document.getElementById("project-x");

function changeToProjects() {
  portrait.style.display = "none";
  contactSpheres.style.display = "grid";
}

function changeToPortrait() {
  portrait.style.display = "block";
  contactSpheres.style.display = "none";
}

portrait.onclick = changeToProjects;
projectX.onclick = changeToPortrait;

// vis projectstekst over portrettet:
const projectText = document.getElementById("project-heading");

function showProjectText() {
  projectText.style.display = "block";
}

function hideProjectText() {
  projectText.style.display = "none";
}

portrait.onmouseenter = showProjectText;
portrait.onmouseleave = hideProjectText;
