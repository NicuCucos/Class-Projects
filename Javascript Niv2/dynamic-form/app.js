function showQuestion( index){

let form = document.createElement('form');

let h2 = document.createElement('h2');
form.appendChild(h2);
h2.innerHTML = questions[index].question;
let hr = document.createElement('hr');
form.appendChild (hr);

for(let a=0; a<questions[index].answers.length; a++){
    let label = document.createElement('label');
    let input = document.createElement('input');
    let text = document.createTextNode(questions[index].answers[a]);
    input.type = "checkbox";
    form.appendChild( label);
    label.appendChild(input);
    label.appendChild( text);

}

let span = document.getElementById('number');
span.innerHTML = (current_question + 1);



let div = document.getElementById('content');
div.innerHTML = '';
div.appendChild(form);



}

var current_question = 0;
function prevQuestion(){
    if(current_question > 0){
    current_question--;
    showQuestion(current_question);


}
}

function nextQuestion(){
    if(current_question < questions.length - 1){
    current_question++;
    showQuestion(current_question);
}
    if(current_question == questions.length -1){
        var b = document.getElementById('next');
        var bp = document.getElementById('prev');
        b.disabled = true;
    }
    else{
        b.disable  = false;

    }

    }



showQuestion( current_question );





// <form class="" action="index.html" method="post">
//
//         <h2>Intrebarea?</h2>
//         <hr>
//         <label>
//             <input type="checkbox" name="name" value=""> Varianta 1
//
//         </label>
//         <br>
//         <label>
//
//         <input type="checkbox" name="name" value=""> Varianta 2
//         </label>
//
// </form>
