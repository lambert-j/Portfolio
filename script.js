// document.querySelector("#reboot").innerHTML = addEventListener(onclick);

function displayNoneRemove() {
  let elements = document.querySelector("#reboot-box");
  elements.classList.remove("display-none");
}

function displayNoneAddRebootBox() {
  let elements = document.querySelector("#reboot-box");
  elements.classList.add("display-none");
}

function DisplayToggleSousMenu1() {
  let elementAll = document.querySelector(
    ".sous-menu-window2",
    ".sous-menu-window3",
    ".sous-menu-window4"
  );
  elementAll.classList.add("display-none");
  let element = document.querySelector(".sous-menu-window1");
  element.classList.remove("display-none");
}

function DisplayToggleSousMenu2() {
  let elementAll = document.querySelector(
    ".sous-menu-window1, .sous-menu-window3, .sous-menu-window4"
  );
  elementAll.classList.add("display-none");
  let element = document.querySelector(".sous-menu-window2");
  element.classList.remove("display-none");
}

function DisplayToggleSousMenu3() {
  let elementAll = document.querySelector(
    ".sous-menu-window1, .sous-menu-window2, .sous-menu-window4"
  );
  elementAll.classList.add("display-none");
  let element = document.querySelector(".sous-menu-window3");
  element.classList.remove("display-none");
}

function DisplayToggleSousMenu4() {
  let elementAll = document.querySelector(
    ".sous-menu-window1, .sous-menu-window2, .sous-menu-window3"
  );
  elementAll.classList.add("display-none");
  let element = document.querySelector(".sous-menu-window4");
  element.classList.remove("display-none");
}
