var customModalAdopt = document.getElementById("adoptModal");
var customModalContentAdopt = document.querySelector(
  ".custom-modal-content-adopt"
);

function openAdoptModal() {
  customModalAdopt.style.display = "block";
  customModalContentAdopt.classList.add("custom-modal-enter");
}

function closeAdoptModal() {
  customModalContentAdopt.classList.remove("custom-modal-enter");
  customModalContentAdopt.classList.add("custom-modal-exit");

  setTimeout(function () {
    customModalAdopt.style.display = "none";
    customModalContentAdopt.classList.remove("custom-modal-exit");
  }, 300);
}

function closeAdoptModalB() {
  customModalAdopt.classList.remove("custom-modal-enter");
  customModalContentAdopt.classList.add("custom-modal-exit");

  setTimeout(function () {
    customModalAdopt.style.display = "none";
    customModalContentAdopt.classList.remove("custom-modal-exit");
  }, 300);
}

document.querySelector(".button-heart").addEventListener("click", function () {
  closeAdoptModal();
});

window.addEventListener("click", function (event) {
  if (event.target == customModalAdopt) {
    closeAdoptModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && customModalAdopt.style.display === "block") {
    closeAdoptModal();
  }
});
