// set theme to local storage
let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("dark");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "css/theme.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "css/blue.css";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "css/green.css";
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "css/purple.css";
  }
  localStorage.setItem("theme", mode);
}

// FAQ dropdown

// Get all .faq-question
const questions = document.getElementsByClassName("faq-question");

// Assign openQuestion on click
for (let i = 0; i < questions.length; i++) {
  questions[i].onclick = openQuestion;
}

// Apply .hidden to sibling .faq-answer
// Apply .show to .faq-question
function openQuestion(e) {
  const answer = e.target.parentNode.getElementsByClassName("faq-answer")[0];
  const color = e.target.parentNode.getElementsByClassName("faq-question")[0];

  if (-1 !== answer.className.indexOf("hidden")) {
    answer.className = answer.className.replace("hidden", "");
    color.style.color = "green";
  } else {
    answer.className += " hidden";
    color.style.color = "";
  }

  if (-1 !== e.target.className.indexOf("show")) {
    e.target.className = e.target.className.replace("show", "");
  } else {
    e.target.className += " show";
  }
}

// contact me form
function addClass() {
  document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);
