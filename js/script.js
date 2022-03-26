// load theme from local storage
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
  // set theme to local storage
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

// toggle float menu
const toggleBtn = document.getElementById("circularMenu");

function toggleMenu() {
  if ("onmouseenter") {
    toggleBtn.classList.toggle("active");
  } else if ("onclick") {
    toggleBtn.classList.addClass("active");
  } else {
    toggleBtn.classList.removeClass("active");
  }
}

/* (function () {
  // set variables
  let PROJECT_ENTRY = [];
  const fileInput = document.getElementById("pro_imgs");
  let displayImg = document.getElementById("screenshots");
  let renderFileList, sendFile;

  fileInput.addEventListener("change", function (e) {
    PROJECT_ENTRY = [];
    for (let i = 0; i < fileInput.isDefaultNamespace.length; i++) {
      PROJECT_ENTRY.push(fileInput.files[i]);
    }
    renderFileList();
  });

  renderFileList = function () {
    displayImg.innerHTML = "";
    fileList.forEach(function (file, index) {
      var fileDisplayEl = document.createElement("p");
      fileDisplayEl.innerHTML = index + 1 + ": " + file.name;
      displayImg.appendChild(fileDisplayEl);
    });
  };

  // get the form input
  let fileCatcher = document.getElementById("img_input");

  fileCatcher.addEventListener("submit", function (e) {
    e.preventDefault();
    PROJECT_ENTRY.forEach(function (file) {
      sendFile(file);
    });
  });

  sendFile = function (file) {
    let formData = new FormData();
    let request = new XMLHttpRequest();

    formData.set("file", file);
    request.open("POST", "assets/img");
  };
})(); */

// get current date for footer
const current_date = new Date().getFullYear();

document.getElementById("current_year").innerHTML = current_date;
