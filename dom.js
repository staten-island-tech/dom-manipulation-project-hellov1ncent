const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),

};


DOMSelectors.form.addEventListener("submit", function(event) {event.preventDefault();
    document
    .querySelector("gallery");
    DOMSelectors.h2s.forEach((el)=>el.textContext = DOMSelectors.firstName.value);
    console.log(el);

    }
)
