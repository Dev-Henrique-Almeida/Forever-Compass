var modal = document.getElementById("myModal");
var modalMessage = document.getElementById("modal-message");
var modalContent = document.getElementById("modal-content");
var closeButton = document.getElementsByClassName("close")[0];
var errorButton;
var successButton;

function openModal() {
  modal.style.display = "block";
  modalContent.classList.add("modal-enter");
}

function closeModalEmail() {
  modalContent.classList.remove("modal-enter");
  modalContent.classList.add("modal-exit");

  setTimeout(function () {
    modal.style.display = "none";
    modalContent.classList.remove("modal-exit");
  }, 300);
}

document.getElementById("submit-button").addEventListener("click", function () {
  var userEmail = document.getElementById("user-email").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (errorButton) {
    if (modalContent.contains(errorButton)) {
      modalContent.removeChild(errorButton);
    }
  }

  if (successButton) {
    if (modalContent.contains(successButton)) {
      modalContent.removeChild(successButton);
    }
  }

  if (emailPattern.test(userEmail)) {
    modalMessage.textContent = "Email enviado com sucesso!";
    modalContent.classList.remove("modal-error");
    modalContent.classList.add("modal-success");

    successButton = document.createElement("button");
    successButton.textContent = "SUCESSO";
    successButton.className = "second-cards-buttons-title";
    successButton.style.backgroundColor = "#04c27f";
    successButton.style.border = "#04c27f";
    successButton.style.color = "white";

    successButton.addEventListener("click", function () {
      closeModalEmail();
      document.getElementById("user-email").value = "";
    });

    modalContent.appendChild(successButton);

    document.getElementById("user-email").value = "";

    setTimeout(function () {
      window.location.replace("sucess.html");
    }, 700);
  } else {
    modalMessage.textContent = "Erro, email inválido! Tente novamente.";
    modalContent.classList.remove("modal-success");
    modalContent.classList.add("modal-error");
    errorButton = document.createElement("button");
    errorButton.textContent = "ERRO";
    errorButton.className = "second-cards-buttons-title";
    errorButton.style.backgroundColor = "#cc0000";
    errorButton.style.border = "#cc0000";
    errorButton.style.color = "white";

    errorButton.addEventListener("click", function () {
      closeModalEmail();
      document.getElementById("user-email").value = "";
    });

    modalContent.appendChild(errorButton);
    document.getElementById("user-email").value = "";

    setTimeout(function () {
      closeModalEmail();
    }, 700);
  }

  openModal();
});

closeButton.addEventListener("click", function () {
  closeModalEmail();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" || event.key === "Esc") {
    closeModalEmail();
  }
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModalEmail();
  }
});

document
  .getElementById("user-email")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submit-button").click();
    }
  });
