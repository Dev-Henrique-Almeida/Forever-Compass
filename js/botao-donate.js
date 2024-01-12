var customModal = document.getElementById("customModal");
var customModalContent = document.querySelector(".custom-modal-content");

function openCustomModal() {
  customModal.style.display = "block";
  customModalContent.classList.add("custom-modal-enter");
}

function closeCustomModal() {
  customModalContent.classList.remove("custom-modal-enter");
  customModalContent.classList.add("custom-modal-exit");

  setTimeout(function () {
    customModal.style.display = "none";
    customModalContent.classList.remove("custom-modal-exit");
  }, 300);
}

function closeModal() {
  customModal.classList.remove("custom-modal-enter");
  customModalContent.classList.add("custom-modal-exit");

  setTimeout(function () {
    customModal.style.display = "none";
    customModalContent.classList.remove("custom-modal-exit");
  }, 300);
}

document.querySelector(".button-heart").addEventListener("click", function () {
  openCustomModal();
});

window.addEventListener("click", function (event) {
  if (event.target == customModal) {
    closeCustomModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && customModal.style.display === "block") {
    closeCustomModal();
  }
});
