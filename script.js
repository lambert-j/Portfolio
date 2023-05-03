// Reboot box display on click
function DisplayNoneRemove() {
  let elements = document.querySelector("#reboot-box");
  elements.classList.remove("display-none");
}

function displayNoneAddRebootBox() {
  let elements = document.querySelector("#reboot-box");
  elements.classList.add("display-none");
}

// Menu Profil Display
function DisplayProfilMenu() {
  let elementGlobalAll = document.querySelectorAll(".global-display");
  elementGlobalAll.forEach((element) => {
    element.classList.add("display-none");
  });
  let elementAll = document.querySelectorAll(".profil-display");
  elementAll.forEach((element) => {
    element.classList.remove("display-none");
  });
}

// Menu projets display

function DisplayProjetMenu() {
  let elementGlobalAll = document.querySelectorAll(".global-display");
  elementGlobalAll.forEach((element) => {
    element.classList.add("display-none");
  });
  let elementAll = document.querySelectorAll(".projet-menu-display");
  elementAll.forEach((element) => {
    element.classList.remove("display-none");
  });
}

// Sous Menu display
function DisplayToggleSousMenu1() {
  let elementAll = document.querySelectorAll(".sous-menu-windows-all");
  elementAll.forEach((element) => {
    element.classList.add("display-none");
  });
  let element = document.querySelector(".sous-menu-window1");
  element.classList.remove("display-none");
}

function DisplayToggleSousMenu2() {
  let elementAll = document.querySelectorAll(".sous-menu-windows-all");
  elementAll.forEach((element) => {
    element.classList.add("display-none");
  });
  let element = document.querySelector(".sous-menu-window2");
  element.classList.remove("display-none");
}

function DisplayToggleSousMenu3() {
  let elementAll = document.querySelectorAll(".sous-menu-windows-all");
  elementAll.forEach((element) => {
    element.classList.add("display-none");
  });
  let element = document.querySelector(".sous-menu-window3");
  element.classList.remove("display-none");
}

function DisplayToggleSousMenu4() {
  let elementAll = document.querySelectorAll(".sous-menu-windows-all");
  elementAll.forEach((element) => {
    element.classList.add("display-none");
  });
  let element = document.querySelector(".sous-menu-window4");
  element.classList.remove("display-none");
}

// Menu Contacts display

function DisplayContactMenu() {
  let elementGlobalAll = document.querySelectorAll(".global-display");
  elementGlobalAll.forEach((element) => {
    element.classList.add("display-none");
  });
  let elementAll = document.querySelectorAll(".contact-display");
  elementAll.forEach((element) => {
    element.classList.remove("display-none");
  });
}
