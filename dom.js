const DOMSelectors = {
    button: document.getElementById("btn"),
    input: document.querySelector("#input"),
    input2: document.querySelector("#input2"),
    delete: document.querySelector("#delete"),
    delete: document.querySelector("#delete"),
    h2s: document.querySelector("#h2"),
    h2s: document.querySelector("#h3"),

};


const card = DOMSelectors.button.addEventListener("click", function(event){event.preventDefault();
    let input= DOMSelectors.input.value;
    let input2= DOMSelectors.input2.value;});
    DOMSelectors.form.insertAdjacentHTML("beforeend",

        `<div class="gallery">
        <div class="card">
            <h2 class="card-header" id="column">${input}</h2>
            <h3 class="card-info" id="column">${input2}</h3>
        </div>
        <button type="submit" id="delete">Delete</button>);`)
