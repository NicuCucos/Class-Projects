function play (song) {//argument
    var div_player = document.getElementById('player');
    if (song ==1){
    var url = `https://www.youtube.com/embed/E9eAshaPvYw`;
}
    else if (song ==2){
        var url = `https://www.youtube.com/embed/oKStYmMgNRA`;
    }
    var iframe = `<iframe width="560" height="315" src="${url}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    div_player.innerHTML = iframe;
}
