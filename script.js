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
  displayRemoveProfilMenu();
  removeProfilActive();
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
// fonction remove display sous menu PROJET windows

function displayRemoveSousMenu() {
  let elementAll = document.querySelectorAll(".sous-menu-windows-all");
  elementAll.forEach((element) => {
    element.classList.add("display-none");
  });
}
// fonction remove display SOUS MENU PROFIL windows

function displayRemoveProfilMenu() {
  let elementAll = document.querySelectorAll(".profil-menu-windows-all");
  elementAll.forEach((element) => {
    element.classList.add("display-none");
  });
}

// Fonction Remove display sous menu Profil
function displayRemoveProfilMenu() {
  let elementAll = document.querySelectorAll(".profil-menu-windows-all");
  elementAll.forEach((element) => {
    element.classList.add("display-none");
  });
}

//Profil Display Menu
function DisplayToggleProfilMenu1() {
  displayRemoveProfilMenu();
  let element = document.querySelector(".profil-menu-window1");
  element.classList.remove("display-none");
}

function DisplayToggleProfilMenu2() {
  displayRemoveProfilMenu();
  let element = document.querySelector(".profil-menu-window2");
  element.classList.remove("display-none");
}

function DisplayToggleProfilMenu3() {
  displayRemoveProfilMenu();
  let element = document.querySelector(".profil-menu-window3");
  element.classList.remove("display-none");
}

// fonction ACTIVE PROFIL menu
function activeProfil(clicked_id) {
  removeProfilActive();
  let target = document.querySelector("#" + clicked_id);
  target.classList.add("active-profil");
}

// fonction REMOVE ACTIVE PROFIL menu
function removeProfilActive() {
  let elementProjetAll = document.querySelectorAll(".profil-menu-principal");
  elementProjetAll.forEach((element) => {
    element.classList.remove("active-profil");
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

// Fonction Loading Screen Add

const animLoadingAdd = function animLoad() {
  let elements = document.querySelectorAll(".load-all");
  setTimeout(() => {
    document.querySelector(".load-1").classList.remove("display-none");
  }, 50);
  setTimeout(() => {
    document.querySelector(".load-2").classList.remove("display-none");
  }, 100);
  setTimeout(() => {
    document.querySelector(".load-3").classList.remove("display-none");
  }, 150);
  setTimeout(() => {
    document.querySelector(".load-4").classList.remove("display-none");
  }, 200);
  setTimeout(() => {
    document.querySelector(".load-5").classList.remove("display-none");
  }, 250);
  setTimeout(() => {
    document.querySelector(".load-6").classList.remove("display-none");
  }, 300);
  setTimeout(() => {
    document.querySelector(".load-6").classList.remove("display-none");
  }, 350);

  setTimeout(() => {
    document.querySelector(".loadbox").classList.add("backimg");
    elements.forEach((element) => {
      element.classList.add("display-none");
      document.querySelector(".start-playbtn").classList.remove("display-none");
    });
  }, 400);
};

// Fonction Loading Screen Remove
const animLoadingRemove = function animLoadR() {
  setTimeout(() => {
    let elements = document.querySelectorAll(".load-all");
    setTimeout(() => {
      document.querySelector(".loadbox").classList.remove("backimg");
      document.querySelector(".start-playbtn").classList.add("display-none");
      elements.forEach((element) => {
        element.classList.remove("display-none");
      });
    }, 50);
    setTimeout(() => {
      document.querySelector(".load-7").classList.add("display-none");
    }, 100);
    setTimeout(() => {
      document.querySelector(".load-6").classList.add("display-none");
    }, 150);
    setTimeout(() => {
      document.querySelector(".load-5").classList.add("display-none");
    }, 200);
    setTimeout(() => {
      document.querySelector(".load-4").classList.add("display-none");
    }, 250);
    setTimeout(() => {
      document.querySelector(".load-3").classList.add("display-none");
    }, 300);
    setTimeout(() => {
      document.querySelector(".load-2").classList.add("display-none");
    }, 350);
    setTimeout(() => {
      document.querySelector(".load-1").classList.add("display-none");
    }, 400);
  }, 500);
};

// Fonction Start Button
document
  .querySelector(".start-playbtn")
  .addEventListener("mouseover", buttonStartAnim);
document
  .querySelector(".start-playbtn")
  .addEventListener("mouseout", buttonStartAnimOut);

function buttonStartAnim() {
  document.querySelector(".playbtn").classList.add("playbtn-anim");
  document
    .querySelector(".playbtn-box2")
    .classList.remove("playbtn-box2-animout");
  document
    .querySelector(".playbtn-box1")
    .classList.remove("playbtn-box1-animout");
}

function buttonStartAnimOut() {
  document.querySelector(".playbtn").classList.remove("playbtn-anim");
  document.querySelector(".playbtn-box2").classList.add("playbtn-box2-animout");
  document.querySelector(".playbtn-box1").classList.add("playbtn-box1-animout");
}
