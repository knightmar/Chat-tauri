window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#connect_button").addEventListener("click", () => {
        let pseudo = document.querySelector("#pseudo_input").value;
        localStorage.setItem("pseudo", pseudo);
        window.location = "/pages/test/test.html";
    });
});
