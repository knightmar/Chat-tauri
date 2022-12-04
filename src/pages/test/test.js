const {invoke} = window.__TAURI__.tauri;


window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#pseudo").textContent += localStorage.getItem("pseudo").trim();

    document.querySelector("#test_button").addEventListener("click", () => {
        invoke("connect", {ipAdress: "192.168.10.100"})
    });
});