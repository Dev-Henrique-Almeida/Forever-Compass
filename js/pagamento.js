function openModal() {
  const customModal = document.getElementById("customModal");
  customModal.style.display = "block";
}

function closeModal() {
  const customModal = document.getElementById("customModal");
  customModal.style.display = "none";
}

function uncheckAllRadioButtons() {
  const radioButtons = document.querySelectorAll(".circular-radio");

  radioButtons.forEach((radio) => {
    radio.checked = false;
    toggleStyle(radio);
  });
}

document.querySelector(".button-cancel").addEventListener("click", function () {
  uncheckAllRadioButtons();
  closeModal();
});

function toggleStyle(radio) {
  const labels = document.querySelectorAll(".circular-radio");

  labels.forEach((label) => {
    label.parentElement.style.backgroundColor = "";
    label.parentElement.style.color = "";
    label.style.backgroundColor = "";
    label.style.color = "";
  });

  if (radio.checked) {
    const label = radio.parentElement;
    const ball = label.querySelector(".circular-radio");
    label.style.backgroundColor = "#3F96FC";
    label.style.color = "white";
    ball.style.backgroundColor = "#FF3D9A";
    ball.style.color = "white";

    ball.style.transition = "background-color 0.5s, color 0.5s";
    label.style.transition = "background-color 0.5s";
  }
}
