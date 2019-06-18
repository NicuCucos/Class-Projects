function loadPage(n){
    //obiectul prin care comunicam
    
    var xhr = new XMLHttpRequest();

    // setam o adres
    
    if(n==1){xhr.open("Get","pages/1.html");

    // incepem schimbul de date

    xhr.send();

    //Cand apare evenimentul "datele s-au incarcat"

    xhr.onload = function(){
       var div = document.getElementById('content');
       div.innerHTML = xhr.responseText;
    }
}
    if(n==2){xhr.open("Get","pages/2.html");

    // incepem schimbul de date

    xhr.send();

    //Cand apare evenimentul "datele s-au incarcat"

    xhr.onload = function(){
       var div = document.getElementById('content');
       div.innerHTML = xhr.responseText;
    }
}
    if(n==3){xhr.open("Get","pages/3.html");

    // incepem schimbul de date

    xhr.send();

    //Cand apare evenimentul "datele s-au incarcat"

    xhr.onload = function(){
       var div = document.getElementById('content');
       div.innerHTML = xhr.responseText;
    }

    }


}