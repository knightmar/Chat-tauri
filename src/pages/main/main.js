window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#connect_button").addEventListener("click", () => {
        localStorage.setItem("pseudo", document.querySelector("#pseudo_input").value);
        localStorage.setItem("ip", document.querySelector("#ip").value);

        window.location = "/pages/test/test.html";
    });
});
