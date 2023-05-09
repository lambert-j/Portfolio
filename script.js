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
    });
  }, 400);
};

// Fonction Loading Screen Remove
const animLoadingRemove = function animLoadR() {
  setTimeout(() => {
    let elements = document.querySelectorAll(".load-all");
    setTimeout(() => {
      document.querySelector(".loadbox").classList.remove("backimg");
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
  }, 1000);
};
// animLoadingAdd();
// animLoadingRemove();
