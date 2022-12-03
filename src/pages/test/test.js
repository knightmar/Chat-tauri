window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#pseudo").textContent += localStorage.getItem("pseudo").trim();
});