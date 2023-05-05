// Reboot box display on click
function DisplayNoneRemove() {
  displayNoneGlobal();
  let elements = document.querySelector("#reboot-box");
  elements.classList.remove("display-none");
}

// Fonction du bouton annuler de la reboot box
function displayNoneAddRebootBox() {
  let elements = document.querySelector("#reboot-box");
  elements.classList.add("display-none");
  removeNavActive();
}

// Fonction reboot Oui Loading Screen Anim
function rebootBoxYes() {
  let elements = document.querySelector("#reboot-box");
  elements.classList.add("display-none");
  removeNavActive();
  document.querySelector(".loading-screen").classList.remove("display-none");
  setTimeout(() => {
    document.querySelector(".loading-screen").classList.add("display-none");
  }, 3000);
}

// fonction ADD DISPLAY NONE to Global
function displayNoneGlobal() {
  let elementGlobalAll = document.querySelectorAll(".global-display");
  elementGlobalAll.forEach((element) => {
    element.classList.add("display-none");
  });
}

// Menu Profil Display
function DisplayProfilMenu() {
  displayNoneGlobal();
  let elementAll = document.querySelectorAll(".profil-display");
  elementAll.forEach((element) => {
    element.classList.remove("display-none");
  });
  removeProjetActive();
  displayRemoveSousMenu();
}

// Menu projets display

function DisplayProjetMenu() {
  displayNoneGlobal();
  let elementAll = document.querySelectorAll(".projet-menu-display");
  elementAll.forEach((element) => {
    element.classList.remove("display-none");
  });
}
// fonction remove display sous menu windows

function displayRemoveSousMenu() {
  let elementAll = document.querySelectorAll(".sous-menu-windows-all");
  elementAll.forEach((element) => {
    element.classList.add("display-none");
  });
}

// Sous Menu display
function DisplayToggleSousMenu1() {
  displayRemoveSousMenu();
  let element = document.querySelector(".sous-menu-window1");
  element.classList.remove("display-none");
}

function DisplayToggleSousMenu2() {
  displayRemoveSousMenu();
  let element = document.querySelector(".sous-menu-window2");
  element.classList.remove("display-none");
}

function DisplayToggleSousMenu3() {
  displayRemoveSousMenu();
  let element = document.querySelector(".sous-menu-window3");
  element.classList.remove("display-none");
}

function DisplayToggleSousMenu4() {
  displayRemoveSousMenu();
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
  removeProjetActive();
  displayRemoveSousMenu();
}

// fonction remove active projet menu
function removeProjetActive() {
  let elementProjetAll = document.querySelectorAll(".projet-menu-principal");
  elementProjetAll.forEach((element) => {
    element.classList.remove("active");
  });
}

// fonction ACTIVE projet menu
function activeProjet(clicked_id) {
  removeProjetActive();
  let target = document.querySelector("#" + clicked_id);
  target.classList.add("active");
}

// Remove active-nav class from NAV

function removeNavActive() {
  let elementProjetAll = document.querySelectorAll(".nav-menu-principal");
  elementProjetAll.forEach((element) => {
    element.classList.remove("active-nav");
  });
}

// Fonction ACTIVE-NAV navbar
function activeNav(clicked_id) {
  removeNavActive();
  let target = document.querySelector("#" + clicked_id);
  target.classList.add("active-nav");
}
