const {invoke} = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#connect_button").addEventListener("click", () => {
        localStorage.setItem("pseudo", document.querySelector("#pseudo_input").nodeValue);
        window.location = "/pages/test/test.html";
    });
});
