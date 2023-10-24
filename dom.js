const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),

};


DOMSelectors.form.addEventListener("submit", function(event) {event.preventDefault();
    document
    .querySelector("gallery");
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach((e1)=>el.textContext = DOMSelectors.firstName.value);
    }
)

