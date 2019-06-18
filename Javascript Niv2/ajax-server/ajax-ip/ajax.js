function getInformation(e){
    e.preventDefault(); //ca sa nu faca refresh brouserul
    //gasiti inputul -> scoateti textul din input

    var input = e.target.firstElementChild.lastElementChild;
    console.log(input.value);

    var xhr = new XMLHttpRequest();

    xhr.open("GET", `http://ip-api.com/line/${input.value}`);

    xhr.send();

    xhr.onload = function(){
       var result = document.getElementById('result');
       result.innerHTML = xhr.responseText;
       alert(xhr.responseText);
       console.log(xhr.responseText.split("/n"));
       
    }
    
}