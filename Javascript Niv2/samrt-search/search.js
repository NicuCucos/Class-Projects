let search_history = [
    "how much does a js dev earn?",
    "chisinau pizza",
    "reactjs tutorials",
    "angular vs react",
    "zalenskiii is president",
];

let input = document.querySelector('input');
input.addEventListener('click', show_history);
let form = document.querySelector('form');
form.addEventListener('submit', save_history);

function save_history(e){
    search_history.unshift(input.value);
    //2)de prevenit dublarea valorilor!!
    // *case / lower/ upper
    //3) de prevenit adaugarea valorilor goale
    //* spatiile de prisos
    e.preventDefault(); // ca sa nu se F5 pagina
}
// div.innerHTML = '';

; // while (.children.legth -> removeChild())

function show_history(){

    var search = document.getElementsByClassName('dropdown-menu')[0];
    $(search).empty()
    for(let i=0; i<search_history.length; i++){
        let a = document.createElement('a');
        a.innerHTML = '<span class="badge badge-primary" onclick="remove(event)"> x </span>' + search_history[i];
        a.addEventListener('click', select);
        if(search_history.length - i == 3){

        a.style.opacity = 0.8
        }
        if(search_history.length - i == 2){

        a.style.opacity = 0.6
        }
        if(search_history.length - i == 1){

        a.style.opacity = 0.4
        }
        a.className = "dropdown-item";
        search.appendChild(a);
    }
}

show_history();

function select(e){
    console.log(e.target.innerHTML);
    input.value = e.target.innerHTML;
}
function remove(e){
    e.stopPropagation(); // nu transmite clickul parintelui<a>
    console.log(e.target);
}
