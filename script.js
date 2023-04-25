// document.querySelector("#reboot").innerHTML = addEventListener(onclick);

function displayNoneRemove() {
  let elements = document.querySelector("#reboot-box");
  elements.classList.remove("display-none");
}

function displayNoneAddRebootBox() {
  let elements = document.querySelector("#reboot-box");
  elements.classList.add("display-none");
}

function sousMenu1() {
  document.querySelector("#sous-menu-window").innerHTML = function () {
    let imageBox = document.createElement("img");
    imageBox.className = "image-box-sous-menu";
    let sousMenuText = document.createElement("div");
    sousMenuText.className = "sous-menu-text-box";
    let sousMenuAnchor = document.createElement("a");
    sousMenuAnchor.className = "sous-menu-link-box";
  };
}
