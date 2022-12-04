const {invoke} = window.__TAURI__.tauri;


window.addEventListener("DOMContentLoaded", () => {
    let pseudo = localStorage.getItem("pseudo").trim();
    let ip = localStorage.getItem("ip");
    document.querySelector("#pseudo").textContent += pseudo;

    document.querySelector("#test_button").addEventListener("click", () => {
        invoke("connect", {ipAdress: ip.trim()})
    });
});