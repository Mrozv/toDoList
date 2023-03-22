function newElement() {
    var ul = document.getElementById("to_do_list");
    var nowyElement = document.createElement("li");
    var inputValue = document.getElementById("input").value;

    nowyElement.innerHTML = inputValue

    ul.appendChild(nowyElement)

    if(inputValue === ''){
        alert("Input can't be empty!")
        nowyElement.remove();
    }

    document.getElementById("input").value = '';
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('completed');
  }
}, false);

list.addEventListener('contextmenu', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.remove()
        ev.preventDefault()
    }
});

var input = document.getElementById("input");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        newElement();
    }
});