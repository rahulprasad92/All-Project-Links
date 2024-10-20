"use strict";
const overlay = document.querySelector(".overLay");
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
const alertBox = document.querySelector(".outerAlertBox");
const quizBox = document.getElementById("quizBox");
const btnSubmit = document.getElementById("submit");
const btnCancel = document.getElementById("cancel");
const submitButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");

btnYes.addEventListener("click", function () {
  alertBox.style.display = "none";
  overlay.style.display = "none";
  quizBox.style.display = "flex";
});

btnNo.addEventListener("click", function () {
  alertBox.style.display = "none";
  overlay.style.display = "none";
});

btnSubmit.addEventListener("click", function () {
  alert("Quiz submitted successfully!");
  quizBox.style.display = "none";
});

btnCancel.addEventListener("click", function () {
  const confirmCancel = confirm("Are you sure you want to cancel the quiz?");
  if (confirmCancel) {
    quizBox.style.display = "none";
  }
});

btnYes.addEventListener("click", () => {
  overlay.style.display = "none";
  alertBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
});

btnNo.addEventListener("click", () => {
  const response = confirm("Are you sure you want to exit the quiz?");
  if (response) {
    alert("Thank you for your response!");
    overlay.style.display = "none";
    alertBox.classList.add("hidden");
  }
});

submitButton.addEventListener("click", () => {
  alert("Your answers have been submitted!");
  quizBox.classList.add("hidden");
});

cancelButton.addEventListener("click", () => {
  const name = prompt("Please enter your name:");
  if (name) {
    alert(`Thank you, ${name}. The quiz has been cancelled!`);
  } else {
    alert("Quiz cancelled!");
  }
  quizBox.classList.add("hidden");
});
