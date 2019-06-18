function getInfo(e){
    e.preventDefault();
    // alert();
    var input = document.forms[0].children[0];
    console.log(input.value);


    ///////////// connect to IP api (AJAX) /////////////
    // 1) tool
    var xhr = new XMLHttpRequest();

    // 2) open connection
        xhr.open( "GET" , `http://ip-api.com/csv/${input.value} ` );

    // 3) send reqest
        xhr.send();

    // 4) get response
    xhr.onload = function(){
        // alert(xhr.responseText);
        var data = xhr.responseText.split(',');
        document.getElementById("rezults").innerHTML = `
        <h2>${data[1]} (${data[4]})</h2> ` ;
    }
    /////////////////////////////////////////////////////

}