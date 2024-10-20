"use strict";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : "Cannot divide by zero";
}

function performArithmetic(operation, a, b) {
  let result;
  switch (operation) {
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      result = divide(a, b);
      break;
    default:
      result = "Invalid operation";
  }
  document.getElementById("result").innerText = `Result: ${result}`;
}

let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slides");
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % document.querySelectorAll(".slides").length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex =
    (slideIndex - 1 + document.querySelectorAll(".slides").length) %
    document.querySelectorAll(".slides").length;
  showSlide(slideIndex);
}

setInterval(nextSlide, 3000);
