let form = document.querySelector("form");
let select = document.querySelector("select");
let ul = document.querySelector("ul")
let textarea = document.querySelector("textarea");

const savefeedback = (e) => {
    e.preventDefault();

    let li = document.createElement("li");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let delbtn = document.createElement("button");

    li.className ="list-group-item rounded-1 shadow-sm";
    h1.className = "display-3";
    h2.className = "display-4";
    delbtn.className = "btn btn-danger btn-sm rounded-1 float-end";

    h1.innerText = "rating : " + select.value;
    h2.innerText = "review : " + textarea.value;
    delbtn.innerText = "delete";

    li.appendChild(h1);
    li.appendChild(h2);
    li.appendChild(delbtn);

    ul.appendChild(li);

    form.reset();
    
};

form.addEventListener("submit" , savefeedback);

const delfeedback = (e) => {
    if ( e.target.className.includes('btn-danger')){
    let li = e.target.parentelement;
        if (window.confirm("Are You Sure")){
            ul.removeChild(li)
        }
    }
};

ul.addEventListener("click" , delfeedback);

