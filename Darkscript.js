document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("toggle-checkbox");
    checkbox.addEventListener("change", () => {
      document.body.classList.toggle("dark");
    });
  });