const DOMSelectors = {
    form: document.querySelector("form"),
    firstName: document.querySelector(".firstname"),
    h2s: document.querySelectorAll("h2"),

}
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    console.log
})